import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { ComplianceStatus } from "@prisma/client";

interface RouteParams {
  params: Promise<{ id: string; itemId: string }>;
}

// POST — create a ServiceNow incident for this assessment item
export async function POST(req: NextRequest, { params }: RouteParams) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id: assessmentId, itemId } = await params;

  // Fetch the item + its requirement + assessment name
  const item = await prisma.assessmentItem.findUnique({
    where: { id: itemId, assessmentId },
    include: {
      requirement: {
        select: { number: true, title: true, requirementText: true },
      },
      assessment: { select: { name: true } },
      serviceNow: true,
    },
  });

  if (!item) {
    return NextResponse.json({ error: "Item not found" }, { status: 404 });
  }

  if (item.serviceNow) {
    return NextResponse.json(
      { error: "Ticket already exists", ticket: item.serviceNow },
      { status: 409 }
    );
  }

  if (item.status !== ComplianceStatus.NON_COMPLIANT) {
    return NextResponse.json(
      { error: "Tickets are only created for NON_COMPLIANT items" },
      { status: 422 }
    );
  }

  // Load ServiceNow config
  const config = await prisma.integrationConfig.findUnique({
    where: { provider: "servicenow" },
  });

  if (!config?.isEnabled) {
    return NextResponse.json(
      { error: "ServiceNow integration is not configured or disabled" },
      { status: 503 }
    );
  }

  const settings = config.settings as {
    table?: string;
    assignmentGroup?: string;
    customFields?: Record<string, string>;
  };

  const credentials = config.credentials as {
    username?: string;
    password?: string;
    clientId?: string;
    clientSecret?: string;
  };

  const table = settings.table ?? "incident";
  const apiUrl = `${config.instanceUrl}/api/now/table/${table}`;

  // Build authorization header
  let authHeader: string;
  if (config.authMethod === "basic" && credentials.username && credentials.password) {
    authHeader =
      "Basic " +
      Buffer.from(`${credentials.username}:${credentials.password}`).toString(
        "base64"
      );
  } else {
    return NextResponse.json(
      { error: "OAuth not yet implemented — use basic auth" },
      { status: 501 }
    );
  }

  // Build the incident payload
  const reqText =
    item.requirement.requirementText || item.requirement.title;

  const body: Record<string, string | number> = {
    short_description: `PCI DSS Non-Compliance: Req ${item.requirement.number} — ${item.requirement.title.slice(0, 100)}`,
    description: [
      `Requirement: ${item.requirement.number}`,
      `Requirement Text: ${reqText}`,
      ``,
      `Assessment: ${item.assessment.name}`,
      item.notes ? `Notes: ${item.notes}` : "",
    ]
      .filter(Boolean)
      .join("\n"),
    category: "security",
    impact: 1,
    urgency: 1,
    ...(settings.assignmentGroup
      ? { assignment_group: settings.assignmentGroup }
      : {}),
    ...(settings.customFields ?? {}),
  };

  try {
    const snRes = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: authHeader,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!snRes.ok) {
      const errText = await snRes.text();
      return NextResponse.json(
        { error: "ServiceNow API error", detail: errText },
        { status: snRes.status }
      );
    }

    const snData = (await snRes.json()) as {
      result: { sys_id: string; number: string };
    };

    const sysId = snData.result.sys_id;
    const ticketNumber = snData.result.number;
    const ticketUrl = `${config.instanceUrl}/nav_to.do?uri=${table}.do?sys_id=${sysId}`;

    // Store the ticket
    const ticket = await prisma.serviceNowTicket.create({
      data: {
        assessmentItemId: itemId,
        ticketNumber,
        ticketSysId: sysId,
        ticketUrl,
        snState: "New",
        lastSyncedAt: new Date(),
      },
    });

    // Audit log
    await prisma.auditLog.create({
      data: {
        assessmentItemId: itemId,
        action: "servicenow_ticket_created",
        newValue: ticketNumber,
        userId: session.user.id,
        sourceSystem: "platform",
      },
    });

    return NextResponse.json({ ticket }, { status: 201 });
  } catch (err) {
    console.error("ServiceNow incident creation failed:", err);
    return NextResponse.json(
      { error: "Failed to create ServiceNow incident" },
      { status: 500 }
    );
  }
}

// GET — sync latest status from ServiceNow
export async function GET(req: NextRequest, { params }: RouteParams) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id: assessmentId, itemId } = await params;

  const item = await prisma.assessmentItem.findUnique({
    where: { id: itemId, assessmentId },
    include: { serviceNow: true },
  });

  if (!item?.serviceNow) {
    return NextResponse.json({ error: "No ticket found" }, { status: 404 });
  }

  const config = await prisma.integrationConfig.findUnique({
    where: { provider: "servicenow" },
  });
  if (!config?.isEnabled) {
    return NextResponse.json({ error: "ServiceNow disabled" }, { status: 503 });
  }

  const credentials = config.credentials as {
    username?: string;
    password?: string;
  };
  const authHeader =
    "Basic " +
    Buffer.from(`${credentials.username}:${credentials.password}`).toString("base64");

  const settings = config.settings as { table?: string };
  const table = settings.table ?? "incident";

  try {
    const snRes = await fetch(
      `${config.instanceUrl}/api/now/table/${table}/${item.serviceNow.ticketSysId}?sysparm_fields=state,work_notes,resolved_at,number`,
      {
        headers: { Authorization: authHeader, Accept: "application/json" },
      }
    );

    if (!snRes.ok) {
      return NextResponse.json({ error: "SN fetch failed" }, { status: snRes.status });
    }

    const snData = (await snRes.json()) as {
      result: { state: string; work_notes: string; resolved_at: string };
    };

    const updated = await prisma.serviceNowTicket.update({
      where: { id: item.serviceNow.id },
      data: {
        snState: snData.result.state,
        snWorkNotes: snData.result.work_notes ?? "",
        snResolvedAt: snData.result.resolved_at
          ? new Date(snData.result.resolved_at)
          : null,
        lastSyncedAt: new Date(),
      },
    });

    return NextResponse.json({ ticket: updated });
  } catch (err) {
    console.error("SN sync failed:", err);
    return NextResponse.json({ error: "Sync failed" }, { status: 500 });
  }
}
