import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { ComplianceStatus } from "@prisma/client";

/**
 * Inbound webhook from ServiceNow.
 * Configure a Business Rule in SN: after state change → HTTP POST to this URL.
 * Expected payload:
 *   { sys_id, number, state, state_label, work_notes, resolved_at?, assignment_group? }
 *
 * Auth: X-SN-Webhook-Secret header must match stored webhookSecret.
 */

interface SNWebhookPayload {
  sys_id: string;
  number: string;
  state: string;
  state_label?: string;
  work_notes?: string;
  resolved_at?: string;
}

// Map ServiceNow incident states → ComplianceStatus
// SN default states: 1=New, 2=In Progress, 3=On Hold, 6=Resolved, 7=Closed, 8=Canceled
function mapSnStateToPlatform(
  state: string
): ComplianceStatus | null {
  const stateNum = parseInt(state, 10);
  switch (stateNum) {
    case 6: // Resolved
    case 7: // Closed
      return ComplianceStatus.COMPLIANT;
    case 8: // Canceled
      return null; // Don't change platform status on cancel
    case 1: // New
    case 2: // In Progress
    case 3: // On Hold
    default:
      return ComplianceStatus.IN_PROGRESS;
  }
}

// This endpoint is intentionally excluded from NextAuth middleware
// (public path) but protected by shared-secret validation below.
export async function POST(req: NextRequest) {
  // Validate shared secret
  const config = await prisma.integrationConfig.findUnique({
    where: { provider: "servicenow" },
    select: { isEnabled: true, webhookSecret: true },
  });

  if (!config?.isEnabled) {
    return NextResponse.json({ error: "Integration disabled" }, { status: 503 });
  }

  const incomingSecret = req.headers.get("x-sn-webhook-secret") ?? "";
  if (
    config.webhookSecret &&
    incomingSecret !== config.webhookSecret
  ) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  let payload: SNWebhookPayload;
  try {
    payload = (await req.json()) as SNWebhookPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!payload.sys_id) {
    return NextResponse.json({ error: "Missing sys_id" }, { status: 400 });
  }

  // Find the linked ticket
  const ticket = await prisma.serviceNowTicket.findUnique({
    where: { ticketSysId: payload.sys_id },
    include: {
      assessmentItem: {
        select: { id: true, status: true, assessmentId: true },
      },
    },
  });

  if (!ticket) {
    // Unknown ticket — return 200 to stop SN from retrying
    return NextResponse.json({ message: "Ticket not tracked" });
  }

  const newPlatformStatus = mapSnStateToPlatform(payload.state);

  // Update ticket record
  await prisma.serviceNowTicket.update({
    where: { id: ticket.id },
    data: {
      snState: payload.state_label ?? payload.state,
      snWorkNotes: payload.work_notes ?? ticket.snWorkNotes,
      snResolvedAt: payload.resolved_at ? new Date(payload.resolved_at) : ticket.snResolvedAt,
      lastSyncedAt: new Date(),
    },
  });

  // Update assessment item status if we have a mapping and it changed
  if (
    newPlatformStatus &&
    newPlatformStatus !== ticket.assessmentItem.status
  ) {
    const oldStatus = ticket.assessmentItem.status;

    await prisma.assessmentItem.update({
      where: { id: ticket.assessmentItem.id },
      data: {
        status: newPlatformStatus,
        lastReviewed: new Date(),
      },
    });

    // Find a system user ID to attribute the change to (use createdBy of the assessment)
    const assessment = await prisma.assessment.findUnique({
      where: { id: ticket.assessmentItem.assessmentId },
      select: { createdById: true },
    });

    if (assessment) {
      await prisma.auditLog.create({
        data: {
          assessmentItemId: ticket.assessmentItem.id,
          action: "status_changed",
          oldValue: oldStatus,
          newValue: newPlatformStatus,
          userId: assessment.createdById,
          reason: `ServiceNow ticket ${ticket.ticketNumber} state changed to "${payload.state_label ?? payload.state}"`,
          sourceSystem: "servicenow",
        },
      });
    }
  }

  return NextResponse.json({ processed: true });
}
