import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/mock-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ComplianceStatus } from "@prisma/client";
import { ShieldCheck, AlertTriangle, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { FormattedText } from "@/components/formatted-text";

export const metadata = { title: "My Controls" };

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
  NOT_APPLICABLE: "N/A",
  COMPENSATING_CONTROL: "Compensating Control",
};

const STATUS_DOT_COLORS: Record<ComplianceStatus, string> = {
  NOT_STARTED: "bg-slate-300",
  IN_PROGRESS: "bg-slate-400",
  EVIDENCE_COLLECTED: "bg-cyan-400",
  UNDER_REVIEW: "bg-slate-400",
  COMPLIANT: "bg-slate-400",
  NON_COMPLIANT: "bg-red-500",
  NOT_APPLICABLE: "bg-slate-300",
  COMPENSATING_CONTROL: "bg-slate-400",
};

const NEEDS_ATTENTION: ComplianceStatus[] = [
  ComplianceStatus.NOT_STARTED,
  ComplianceStatus.NON_COMPLIANT,
];

async function getMyItems(userId: string) {
  // Get the most recent non-archived assessment
  const latestAssessment = await prisma.assessment.findFirst({
    where: { status: { not: "ARCHIVED" } },
    orderBy: { createdAt: "desc" },
    select: { id: true, name: true },
  });

  if (!latestAssessment) return { assessment: null, items: [], domains: [] };

  // Fetch all items where user is control owner or operator
  const items = await prisma.assessmentItem.findMany({
    where: {
      assessmentId: latestAssessment.id,
      OR: [{ controlOwnerId: userId }, { operatorId: userId }],
    },
    include: {
      requirement: {
        select: {
          number: true,
          title: true,
          domain: true,
        },
      },
    },
    orderBy: { requirementNumber: "asc" },
  });

  // Also get user's domain assignments to show domains
  const domainAssignments = await prisma.domainAssignment.findMany({
    where: { userId },
    select: { domain: true, role: true },
  });

  const uniqueDomains = Array.from(new Set(domainAssignments.map((a) => a.domain)));

  return {
    assessment: latestAssessment,
    items,
    domains: uniqueDomains,
  };
}

function getDomainItemStats(
  items: { status: ComplianceStatus; requirement: { domain: string } }[],
  domain: string
) {
  const domainItems = items.filter((i) => i.requirement.domain === domain);
  const statusCounts = {} as Record<ComplianceStatus, number>;
  for (const status of Object.values(ComplianceStatus)) {
    statusCounts[status] = 0;
  }
  for (const item of domainItems) {
    statusCounts[item.status]++;
  }
  return { total: domainItems.length, statusCounts };
}

export default async function MyControlsPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/auth/signin");

  const userId = session.user.id;
  const { assessment, items, domains } = await getMyItems(userId);

  const needsAttentionItems = items.filter((i) =>
    NEEDS_ATTENTION.includes(i.status)
  );

  // Group all items by domain for the summary cards
  const allDomains = Array.from(new Set(items.map((i) => i.requirement.domain)));

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <ShieldCheck className="h-6 w-6" /> My Controls
        </h1>
        <p className="text-slate-500 mt-1">
          Requirements assigned to you as Control Owner or Operator.
          {assessment && (
            <>
              {" "}
              Showing items from{" "}
              <Link
                href={`/assessments/${assessment.id}`}
                className="text-slate-700 hover:underline"
              >
                {assessment.name}
              </Link>
              .
            </>
          )}
        </p>
      </div>

      {!assessment ? (
        <div className="border-2 border-dashed border-slate-200 rounded-xl py-20 text-center">
          <ShieldCheck className="h-10 w-10 text-slate-300 mx-auto mb-4" />
          <h2 className="text-lg font-semibold text-slate-400">
            No active assessments
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            No active assessments found. Ask an admin to create one.
          </p>
        </div>
      ) : items.length === 0 ? (
        <div className="border-2 border-dashed border-slate-200 rounded-xl py-20 text-center">
          <ShieldCheck className="h-10 w-10 text-slate-300 mx-auto mb-4" />
          <h2 className="text-lg font-semibold text-slate-400">
            No items assigned to you
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            You have no requirements assigned as control owner or operator in
            the current assessment.
          </p>
          {domains.length > 0 && (
            <p className="text-sm text-slate-400 mt-1">
              Your domain assignments: {domains.join(", ")}
            </p>
          )}
        </div>
      ) : (
        <>
          {/* Domain summary cards */}
          {allDomains.length > 0 && (
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">
                By Domain
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {allDomains.map((domain) => {
                  const { total, statusCounts } = getDomainItemStats(
                    items,
                    domain
                  );
                  const encodedDomain = encodeURIComponent(domain);

                  return (
                    <Link
                      key={domain}
                      href={`/assessments/${assessment.id}/domains/${encodedDomain}`}
                    >
                      <Card className="hover:shadow-md transition-shadow cursor-pointer border-slate-200 h-full">
                        <CardHeader className="pb-2">
                          <div className="flex items-start justify-between gap-2">
                            <CardTitle className="text-sm font-semibold text-slate-700 leading-tight">
                              {domain}
                            </CardTitle>
                            <ChevronRight className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                          </div>
                          <p className="text-xs text-slate-500">
                            {total} item{total !== 1 ? "s" : ""} assigned to you
                          </p>
                        </CardHeader>
                        <CardContent>
                          {/* Status pills */}
                          <div className="flex flex-wrap gap-1.5">
                            {Object.entries(statusCounts)
                              .filter(([, count]) => count > 0)
                              .map(([status, count]) => (
                                <span
                                  key={status}
                                  className="inline-flex items-center gap-1 text-xs"
                                >
                                  <span
                                    className={cn(
                                      "h-2 w-2 rounded-full",
                                      STATUS_DOT_COLORS[
                                        status as ComplianceStatus
                                      ]
                                    )}
                                  />
                                  <span className="text-slate-600">
                                    {count}{" "}
                                    {
                                      STATUS_LABELS[status as ComplianceStatus]
                                    }
                                  </span>
                                </span>
                              ))}
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Needs attention section */}
          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              Needs Attention ({needsAttentionItems.length})
            </h2>

            {needsAttentionItems.length === 0 ? (
              <Card>
                <CardContent className="py-8 text-center">
                  <p className="text-sm text-green-600 font-medium">
                    All items are progressing — no immediate action required.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-0">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b bg-slate-50">
                        <th className="text-left px-4 py-3 font-medium text-slate-600 w-20">
                          #
                        </th>
                        <th className="text-left px-4 py-3 font-medium text-slate-600">
                          Requirement
                        </th>
                        <th className="text-left px-4 py-3 font-medium text-slate-600">
                          Domain
                        </th>
                        <th className="text-left px-4 py-3 font-medium text-slate-600 w-32">
                          Status
                        </th>
                        <th className="px-4 py-3" />
                      </tr>
                    </thead>
                    <tbody>
                      {needsAttentionItems.map((item) => (
                        <tr
                          key={item.id}
                          className="border-b last:border-b-0 hover:bg-slate-50 transition-colors"
                        >
                          <td className="px-4 py-3 font-mono text-xs text-slate-600">
                            {item.requirement.number}
                          </td>
                          <td className="px-4 py-3">
                            <FormattedText text={item.requirement.title} className="text-sm text-slate-900" />
                          </td>
                          <td className="px-4 py-3 text-xs text-slate-500">
                            <span className="line-clamp-1">
                              {item.requirement.domain}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <Badge
                              className={cn(
                                "text-xs",
                                STATUS_COLORS[item.status]
                              )}
                            >
                              {STATUS_LABELS[item.status]}
                            </Badge>
                          </td>
                          <td className="px-4 py-3">
                            <Link
                              href={`/assessments/${assessment.id}/items/${item.id}`}
                            >
                              <Badge
                                className="text-xs cursor-pointer bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
                              >
                                Review <ChevronRight className="h-3 w-3 inline" />
                              </Badge>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            )}
          </div>
        </>
      )}
    </div>
  );
}
