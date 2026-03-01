import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/mock-auth";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AssessmentStatus, ComplianceStatus } from "@prisma/client";
import { ArrowLeft, ChevronRight, ClipboardList } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata = { title: "Assessment Detail" };

const PCI_DOMAINS = [
  "Build and Maintain a Secure Network and Systems",
  "Protect Account Data",
  "Maintain a Vulnerability Management Program",
  "Implement Strong Access Control Measures",
  "Regularly Monitor and Test Networks",
  "Maintain an Information Security Policy",
] as const;

const ASSESSMENT_STATUS_COLORS: Record<AssessmentStatus, string> = {
  NOT_STARTED: "bg-slate-100 text-slate-600 border-slate-200",
  IN_PROGRESS: "bg-slate-100 text-slate-600 border-slate-200",
  UNDER_REVIEW: "bg-slate-100 text-slate-600 border-slate-200",
  COMPLETED: "bg-green-100 text-green-700 border-green-200",
  ARCHIVED: "bg-slate-100 text-slate-500 border-slate-200",
};

const ASSESSMENT_STATUS_LABELS: Record<AssessmentStatus, string> = {
  NOT_STARTED: "Not Started",
  IN_PROGRESS: "In Progress",
  UNDER_REVIEW: "Under Review",
  COMPLETED: "Completed",
  ARCHIVED: "Archived",
};

type ItemStatus = {
  status: ComplianceStatus;
  requirement: { domain: string };
};

function getDomainStats(items: ItemStatus[], domain: string) {
  const domainItems = items.filter((i) => i.requirement.domain === domain);
  const total = domainItems.length;
  const compliant = domainItems.filter(
    (i) => i.status === ComplianceStatus.COMPLIANT
  ).length;
  const notApplicable = domainItems.filter(
    (i) => i.status === ComplianceStatus.NOT_APPLICABLE
  ).length;
  const nonCompliant = domainItems.filter(
    (i) => i.status === ComplianceStatus.NON_COMPLIANT
  ).length;
  const inProgress = domainItems.filter(
    (i) =>
      i.status === ComplianceStatus.IN_PROGRESS ||
      i.status === ComplianceStatus.EVIDENCE_COLLECTED ||
      i.status === ComplianceStatus.UNDER_REVIEW ||
      i.status === ComplianceStatus.COMPENSATING_CONTROL
  ).length;
  const notStarted = domainItems.filter(
    (i) => i.status === ComplianceStatus.NOT_STARTED
  ).length;

  const done = compliant + notApplicable;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  return { total, compliant, notApplicable, nonCompliant, inProgress, notStarted, pct };
}

async function getAssessment(id: string) {
  return prisma.assessment.findUnique({
    where: { id },
    include: {
      createdBy: { select: { name: true, email: true } },
      items: {
        select: {
          status: true,
          requirement: { select: { domain: true } },
        },
      },
    },
  });
}

type Params = Promise<{ id: string }>;

export default async function AssessmentDetailPage({
  params,
}: {
  params: Params;
}) {
  await auth();
  const { id } = await params;
  const assessment = await getAssessment(id);

  if (!assessment) notFound();

  const totalItems = assessment.items.length;
  const compliantTotal = assessment.items.filter(
    (i) =>
      i.status === ComplianceStatus.COMPLIANT ||
      i.status === ComplianceStatus.NOT_APPLICABLE
  ).length;
  const overallPct =
    totalItems > 0 ? Math.round((compliantTotal / totalItems) * 100) : 0;

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <Link
        href="/assessments"
        className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-800 mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Assessments
      </Link>

      {/* Assessment header */}
      <div className="mb-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <ClipboardList className="h-6 w-6" />
              {assessment.name}
            </h1>
            {assessment.description && (
              <p className="text-slate-500 mt-1 text-sm">
                {assessment.description}
              </p>
            )}
          </div>
          <Badge
            className={cn(
              "text-sm shrink-0",
              ASSESSMENT_STATUS_COLORS[assessment.status]
            )}
          >
            {ASSESSMENT_STATUS_LABELS[assessment.status]}
          </Badge>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-6 text-sm">
          <div>
            <p className="text-slate-500 font-medium">Target Date</p>
            <p className="text-slate-900 mt-0.5">
              {assessment.targetDate
                ? new Date(assessment.targetDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "—"}
            </p>
          </div>
          <div>
            <p className="text-slate-500 font-medium">Created By</p>
            <p className="text-slate-900 mt-0.5">
              {assessment.createdBy.name ?? assessment.createdBy.email}
            </p>
          </div>
          <div>
            <p className="text-slate-500 font-medium">Scope</p>
            <p className="text-slate-900 mt-0.5 truncate">
              {assessment.scope || "—"}
            </p>
          </div>
        </div>
      </div>

      {/* Overall progress bar */}
      <Card className="mb-8">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-semibold text-slate-700">
              Overall Progress
            </CardTitle>
            <span className="text-2xl font-bold text-slate-900">
              {overallPct}%
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-slate-400 rounded-full transition-all"
              style={{ width: `${overallPct}%` }}
            />
          </div>
          <p className="text-xs text-slate-500 mt-2">
            {compliantTotal} of {totalItems} items compliant or not applicable
          </p>
        </CardContent>
      </Card>

      {/* Domain cards */}
      <h2 className="text-lg font-semibold text-slate-900 mb-4">
        Domain Breakdown
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {PCI_DOMAINS.map((domain) => {
          const stats = getDomainStats(assessment.items, domain);
          const encodedDomain = encodeURIComponent(domain);

          return (
            <Link
              key={domain}
              href={`/assessments/${assessment.id}/domains/${encodedDomain}`}
            >
              <Card className="hover:shadow-md transition-shadow cursor-pointer h-full border-slate-200">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-sm font-semibold text-slate-700 leading-tight">
                      {domain}
                    </CardTitle>
                    <ChevronRight className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Progress bar */}
                  <div className="mb-3">
                    <div className="flex justify-between text-xs text-slate-500 mb-1">
                      <span>{stats.pct}% complete</span>
                      <span>
                        {stats.compliant + stats.notApplicable}/{stats.total}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-slate-400 rounded-full"
                        style={{ width: `${stats.pct}%` }}
                      />
                    </div>
                  </div>

                  {/* Status breakdown */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-slate-400" />
                      <span className="text-slate-600">
                        Compliant:{" "}
                        <strong>{stats.compliant}</strong>
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-red-500" />
                      <span className="text-slate-600">
                        Non-Compliant:{" "}
                        <strong>{stats.nonCompliant}</strong>
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-slate-400" />
                      <span className="text-slate-600">
                        In Progress:{" "}
                        <strong>{stats.inProgress}</strong>
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-slate-300" />
                      <span className="text-slate-600">
                        Not Started:{" "}
                        <strong>{stats.notStarted}</strong>
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
