import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/mock-auth";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ComplianceStatus } from "@prisma/client";
import {
  ArrowLeft,
  ExternalLink,
  FileText,
  History,
  User,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { updateItemStatus, updateItemAssignees } from "./actions";
import { FormattedText } from "@/components/formatted-text";

export const metadata = { title: "Assessment Item" };

const STATUS_COLORS: Record<ComplianceStatus, string> = {
  NOT_STARTED: "bg-slate-100 text-slate-600 border-slate-200",
  IN_PROGRESS: "bg-slate-100 text-slate-600 border-slate-200",
  EVIDENCE_COLLECTED: "bg-slate-100 text-slate-600 border-slate-200",
  UNDER_REVIEW: "bg-slate-100 text-slate-600 border-slate-200",
  COMPLIANT: "bg-green-100 text-green-700 border-green-200",
  NON_COMPLIANT: "bg-red-100 text-red-700 border-red-200",
  NOT_APPLICABLE: "bg-slate-100 text-slate-500 border-slate-200",
  COMPENSATING_CONTROL: "bg-slate-100 text-slate-600 border-slate-200",
};

const STATUS_LABELS: Record<ComplianceStatus, string> = {
  NOT_STARTED: "Not Started",
  IN_PROGRESS: "In Progress",
  EVIDENCE_COLLECTED: "Evidence Collected",
  UNDER_REVIEW: "Under Review",
  COMPLIANT: "Compliant",
  NON_COMPLIANT: "Non-Compliant",
  NOT_APPLICABLE: "Not Applicable",
  COMPENSATING_CONTROL: "Compensating Control",
};

const ALL_STATUSES = Object.values(ComplianceStatus);

async function getItem(itemId: string) {
  return prisma.assessmentItem.findUnique({
    where: { id: itemId },
    include: {
      assessment: { select: { id: true, name: true } },
      requirement: {
        select: {
          number: true,
          title: true,
          requirementText: true,
          domain: true,
          testingProcedures: {
            select: { procedureId: true, text: true },
            orderBy: { procedureId: "asc" },
          },
        },
      },
      controlOwner: { select: { id: true, name: true, email: true } },
      operator: { select: { id: true, name: true, email: true } },
      serviceNow: true,
      evidence: {
        include: { uploadedBy: { select: { name: true, email: true } } },
        orderBy: { createdAt: "desc" },
      },
      history: {
        include: { user: { select: { name: true, email: true } } },
        orderBy: { createdAt: "desc" },
        take: 50,
      },
    },
  });
}

async function getUsers() {
  return prisma.user.findMany({
    where: { isActive: true },
    select: { id: true, name: true, email: true },
    orderBy: { name: "asc" },
  });
}

type Params = Promise<{ id: string; itemId: string }>;

export default async function AssessmentItemPage({
  params,
}: {
  params: Params;
}) {
  const session = await auth();
  const { id: assessmentId, itemId } = await params;

  const [item, users] = await Promise.all([getItem(itemId), getUsers()]);

  if (!item || item.assessment.id !== assessmentId) notFound();

  const userId = session?.user?.id ?? "";
  const encodedDomain = encodeURIComponent(item.requirement.domain);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Link
        href={`/assessments/${assessmentId}/domains/${encodedDomain}`}
        className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-800 mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> Back to {item.requirement.domain}
      </Link>

      {/* Requirement header */}
      <div className="mb-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-mono text-slate-500 mb-1">
              Requirement {item.requirement.number}
            </p>
            <FormattedText
              text={item.requirement.title}
              className="text-xl font-bold text-slate-900"
            />
            <p className="text-sm text-slate-500 mt-1">
              {item.requirement.domain}
            </p>
          </div>
          <Badge
            className={cn("text-sm shrink-0", STATUS_COLORS[item.status])}
          >
            {STATUS_LABELS[item.status]}
          </Badge>
        </div>
      </div>

      {/* Requirement text */}
      {item.requirement.requirementText && (
        <Card className="mb-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold text-slate-700">
              Requirement Text
            </CardTitle>
          </CardHeader>
          <CardContent>
            <FormattedText
              text={item.requirement.requirementText}
              className="text-sm text-slate-700 leading-relaxed"
            />

            {item.requirement.testingProcedures.length > 0 && (
              <>
                <Separator className="my-4" />
                <p className="text-xs font-semibold text-slate-600 mb-2">
                  Testing Procedures
                </p>
                <ul className="space-y-2">
                  {item.requirement.testingProcedures.map((tp) => (
                    <li
                      key={tp.procedureId}
                      className="text-xs text-slate-600 flex gap-2"
                    >
                      <span className="font-mono text-slate-400 shrink-0">
                        {tp.procedureId}
                      </span>
                      <FormattedText text={tp.text} className="text-xs text-slate-600" />
                    </li>
                  ))}
                </ul>
              </>
            )}
          </CardContent>
        </Card>
      )}

      {/* Status editor */}
      <Card className="mb-6">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-semibold text-slate-700">
            Status &amp; Notes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form
            action={async (formData: FormData) => {
              "use server";
              const newStatus = formData.get("status") as ComplianceStatus;
              const notes = (formData.get("notes") as string) ?? "";
              await updateItemStatus(itemId, newStatus, notes, userId);
            }}
            className="space-y-4"
          >
            <div>
              <label className="text-xs font-medium text-slate-600 mb-1 block">
                Compliance Status
              </label>
              <select
                name="status"
                defaultValue={item.status}
                className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {ALL_STATUSES.map((s) => (
                  <option key={s} value={s}>
                    {STATUS_LABELS[s]}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-medium text-slate-600 mb-1 block">
                Notes
              </label>
              <textarea
                name="notes"
                rows={4}
                defaultValue={item.notes}
                placeholder="Add notes about this requirement's compliance status…"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
              />
            </div>

            <Button type="submit" size="sm">
              Save Status
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Assignees */}
      <Card className="mb-6">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-semibold text-slate-700 flex items-center gap-2">
            <User className="h-4 w-4" /> Assignments
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
            <div>
              <p className="text-xs text-slate-500 font-medium mb-1">
                Control Owner
              </p>
              <p className="text-slate-900">
                {item.controlOwner
                  ? item.controlOwner.name ?? item.controlOwner.email
                  : "Unassigned"}
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium mb-1">
                Operator
              </p>
              <p className="text-slate-900">
                {item.operator
                  ? item.operator.name ?? item.operator.email
                  : "Unassigned"}
              </p>
            </div>
          </div>

          <form
            action={async (formData: FormData) => {
              "use server";
              const controlOwnerId =
                (formData.get("controlOwnerId") as string) || null;
              const operatorId =
                (formData.get("operatorId") as string) || null;
              await updateItemAssignees(
                itemId,
                controlOwnerId,
                operatorId,
                userId
              );
            }}
            className="grid grid-cols-2 gap-4"
          >
            <div>
              <label className="text-xs font-medium text-slate-600 mb-1 block">
                Change Control Owner
              </label>
              <select
                name="controlOwnerId"
                defaultValue={item.controlOwnerId ?? ""}
                className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">None</option>
                {users.map((u) => (
                  <option key={u.id} value={u.id}>
                    {u.name ?? u.email}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-slate-600 mb-1 block">
                Change Operator
              </label>
              <select
                name="operatorId"
                defaultValue={item.operatorId ?? ""}
                className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">None</option>
                {users.map((u) => (
                  <option key={u.id} value={u.id}>
                    {u.name ?? u.email}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-span-2">
              <Button type="submit" size="sm" variant="outline">
                Update Assignments
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* ServiceNow Panel */}
      <Card className="mb-6">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-semibold text-slate-700 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" /> ServiceNow Incident
          </CardTitle>
        </CardHeader>
        <CardContent>
          {item.serviceNow ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500 font-medium mb-1">
                    Ticket Number
                  </p>
                  <a
                    href={item.serviceNow.ticketUrl ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-slate-700 hover:underline font-medium"
                  >
                    {item.serviceNow.ticketNumber}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium mb-1">
                    State
                  </p>
                  <Badge className="bg-slate-100 text-slate-700 border-slate-200 text-xs">
                    {item.serviceNow.snState}
                  </Badge>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium mb-1">
                    Last Synced
                  </p>
                  <p className="text-xs text-slate-600">
                    {new Date(item.serviceNow.lastSyncedAt).toLocaleString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      }
                    )}
                  </p>
                </div>
              </div>
            </div>
          ) : item.status === ComplianceStatus.NON_COMPLIANT ? (
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <p className="text-sm text-slate-600">
                  This item is marked{" "}
                  <strong>Non-Compliant</strong>. Create a ServiceNow incident
                  to track remediation.
                </p>
              </div>
              <form
                action={`/api/assessments/${assessmentId}/items/${itemId}/servicenow`}
                method="POST"
              >
                <Button
                  type="submit"
                  size="sm"
                  className="bg-slate-700 hover:bg-slate-800 text-white shrink-0"
                >
                  Create Incident
                </Button>
              </form>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-slate-400">
              <CheckCircle className="h-4 w-4" />
              <p className="text-sm">
                No incident needed. Set status to Non-Compliant to create one.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Evidence */}
      <Card className="mb-6">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-semibold text-slate-700 flex items-center gap-2">
            <FileText className="h-4 w-4" /> Evidence ({item.evidence.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {item.evidence.length === 0 ? (
            <p className="text-sm text-slate-400">No evidence uploaded yet.</p>
          ) : (
            <div className="space-y-2">
              {item.evidence.map((ev) => (
                <div
                  key={ev.id}
                  className="flex items-center justify-between py-2 border-b last:border-b-0"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="h-4 w-4 text-slate-400 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-slate-800">
                        {ev.fileName}
                      </p>
                      <p className="text-xs text-slate-500">
                        Uploaded by{" "}
                        {ev.uploadedBy.name ?? ev.uploadedBy.email} on{" "}
                        {new Date(ev.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                  <a
                    href={ev.filePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-700 hover:underline flex items-center gap-1"
                  >
                    View <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Audit History */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-semibold text-slate-700 flex items-center gap-2">
            <History className="h-4 w-4" /> Audit History
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {item.history.length === 0 ? (
            <p className="px-6 py-6 text-sm text-slate-400">
              No audit history yet.
            </p>
          ) : (
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b bg-slate-50">
                  <th className="text-left px-4 py-2.5 font-medium text-slate-600">
                    Action
                  </th>
                  <th className="text-left px-4 py-2.5 font-medium text-slate-600">
                    Change
                  </th>
                  <th className="text-left px-4 py-2.5 font-medium text-slate-600">
                    By
                  </th>
                  <th className="text-left px-4 py-2.5 font-medium text-slate-600">
                    Source
                  </th>
                  <th className="text-left px-4 py-2.5 font-medium text-slate-600">
                    When
                  </th>
                </tr>
              </thead>
              <tbody>
                {item.history.map((log) => (
                  <tr
                    key={log.id}
                    className="border-b last:border-b-0 hover:bg-slate-50"
                  >
                    <td className="px-4 py-2.5 font-medium text-slate-700">
                      {log.action.replace(/_/g, " ")}
                    </td>
                    <td className="px-4 py-2.5 text-slate-600">
                      {log.oldValue && log.newValue ? (
                        <>
                          <span className="line-through text-slate-400">
                            {log.oldValue}
                          </span>{" "}
                          → {log.newValue}
                        </>
                      ) : log.newValue ? (
                        log.newValue
                      ) : (
                        "—"
                      )}
                    </td>
                    <td className="px-4 py-2.5 text-slate-600">
                      {log.user.name ?? log.user.email}
                    </td>
                    <td className="px-4 py-2.5">
                      <Badge
                        className={cn(
                          "text-xs",
                          log.sourceSystem === "servicenow"
                            ? "bg-slate-100 text-slate-600 border-slate-200"
                            : "bg-slate-100 text-slate-500 border-slate-200"
                        )}
                      >
                        {log.sourceSystem}
                      </Badge>
                    </td>
                    <td className="px-4 py-2.5 text-slate-500">
                      {new Date(log.createdAt).toLocaleString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
