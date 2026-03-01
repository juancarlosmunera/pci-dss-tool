import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/mock-auth";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ComplianceStatus } from "@prisma/client";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata = { title: "Domain Assessment" };

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

async function getDomainItems(assessmentId: string, domain: string) {
  return prisma.assessmentItem.findMany({
    where: {
      assessmentId,
      requirement: { domain },
    },
    include: {
      requirement: {
        select: {
          number: true,
          title: true,
          level: true,
          parentNumber: true,
          domain: true,
        },
      },
      controlOwner: { select: { name: true, email: true } },
      operator: { select: { name: true, email: true } },
      serviceNow: { select: { ticketNumber: true, ticketUrl: true, snState: true } },
    },
    orderBy: {
      requirementNumber: "asc",
    },
  });
}

async function getAssessmentName(assessmentId: string) {
  const assessment = await prisma.assessment.findUnique({
    where: { id: assessmentId },
    select: { name: true },
  });
  return assessment?.name;
}

type Params = Promise<{ id: string; domain: string }>;

export default async function DomainAssessmentPage({
  params,
}: {
  params: Params;
}) {
  await auth();
  const { id, domain: encodedDomain } = await params;
  const domain = decodeURIComponent(encodedDomain);

  const [items, assessmentName] = await Promise.all([
    getDomainItems(id, domain),
    getAssessmentName(id),
  ]);

  if (!assessmentName) notFound();

  // Group items by level-1 requirement (principal requirement)
  // A level-3 item's parent chain is: level-3 -> level-2 -> level-1
  // We group by the first segment of the requirement number (e.g. "1" from "1.2.3")
  type ItemWithReq = (typeof items)[number];

  function getPrincipalNumber(reqNumber: string): string {
    return reqNumber.split(".")[0];
  }

  function getSectionNumber(reqNumber: string): string {
    const parts = reqNumber.split(".");
    return parts.slice(0, 2).join(".");
  }

  // Build grouping: principal -> section -> items
  const grouped = new Map<string, Map<string, ItemWithReq[]>>();

  for (const item of items) {
    const principal = getPrincipalNumber(item.requirement.number);
    const section = getSectionNumber(item.requirement.number);

    if (!grouped.has(principal)) {
      grouped.set(principal, new Map());
    }
    const principalMap = grouped.get(principal)!;
    if (!principalMap.has(section)) {
      principalMap.set(section, []);
    }
    principalMap.get(section)!.push(item);
  }

  const totalItems = items.length;
  const compliantItems = items.filter(
    (i) =>
      i.status === ComplianceStatus.COMPLIANT ||
      i.status === ComplianceStatus.NOT_APPLICABLE
  ).length;
  const pct =
    totalItems > 0 ? Math.round((compliantItems / totalItems) * 100) : 0;

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <Link
        href={`/assessments/${id}`}
        className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-800 mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> Back to {assessmentName}
      </Link>

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">{domain}</h1>
        <p className="text-slate-500 mt-1 text-sm">
          {totalItems} requirements — {pct}% complete ({compliantItems} of{" "}
          {totalItems})
        </p>
      </div>

      {/* Progress bar */}
      <div className="mb-8">
        <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-slate-400 rounded-full transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-16 text-slate-400">
          <p>No requirements found for this domain in this assessment.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {Array.from(grouped.entries())
            .sort(([a], [b]) => parseInt(a) - parseInt(b))
            .map(([principal, sections]) => (
              <div key={principal}>
                <h2 className="text-lg font-semibold text-slate-900 mb-4">
                  Requirement {principal}
                </h2>
                <div className="space-y-4">
                  {Array.from(sections.entries())
                    .sort(([a], [b]) => {
                      const [, am] = a.split(".");
                      const [, bm] = b.split(".");
                      return parseInt(am ?? "0") - parseInt(bm ?? "0");
                    })
                    .map(([section, sectionItems]) => (
                      <Card key={section}>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-semibold text-slate-600">
                            Section {section}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b bg-slate-50">
                                <th className="text-left px-4 py-2.5 font-medium text-slate-600 w-20">
                                  #
                                </th>
                                <th className="text-left px-4 py-2.5 font-medium text-slate-600">
                                  Requirement
                                </th>
                                <th className="text-left px-4 py-2.5 font-medium text-slate-600 w-36">
                                  Status
                                </th>
                                <th className="text-left px-4 py-2.5 font-medium text-slate-600 w-36">
                                  Control Owner
                                </th>
                                <th className="text-left px-4 py-2.5 font-medium text-slate-600 w-28">
                                  Ticket
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {sectionItems.map((item) => (
                                <tr
                                  key={item.id}
                                  className="border-b last:border-b-0 hover:bg-slate-50 transition-colors"
                                >
                                  <td className="px-4 py-3 font-mono text-xs text-slate-600">
                                    <Link
                                      href={`/assessments/${id}/items/${item.id}`}
                                      className="hover:text-slate-700 hover:underline"
                                    >
                                      {item.requirement.number}
                                    </Link>
                                  </td>
                                  <td className="px-4 py-3">
                                    <Link
                                      href={`/assessments/${id}/items/${item.id}`}
                                      className="text-slate-900 hover:text-slate-900 line-clamp-2"
                                    >
                                      {item.requirement.title}
                                    </Link>
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
                                  <td className="px-4 py-3 text-xs text-slate-600">
                                    {item.controlOwner?.name ??
                                      item.controlOwner?.email ??
                                      "—"}
                                  </td>
                                  <td className="px-4 py-3">
                                    {item.serviceNow ? (
                                      <a
                                        href={
                                          item.serviceNow.ticketUrl ?? "#"
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-xs text-slate-700 hover:underline"
                                      >
                                        {item.serviceNow.ticketNumber}
                                        <ExternalLink className="h-3 w-3" />
                                      </a>
                                    ) : (
                                      <span className="text-xs text-slate-400">
                                        —
                                      </span>
                                    )}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
