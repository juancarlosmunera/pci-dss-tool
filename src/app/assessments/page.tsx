import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/mock-auth";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AssessmentStatus, ComplianceStatus } from "@prisma/client";
import { ClipboardList, Plus, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata = { title: "Assessments" };

const STATUS_COLORS: Record<AssessmentStatus, string> = {
  NOT_STARTED: "bg-slate-100 text-slate-600 border-slate-200",
  IN_PROGRESS: "bg-slate-100 text-slate-600 border-slate-200",
  UNDER_REVIEW: "bg-slate-100 text-slate-600 border-slate-200",
  COMPLETED: "bg-green-100 text-green-700 border-green-200",
  ARCHIVED: "bg-slate-100 text-slate-500 border-slate-200",
};

const STATUS_LABELS: Record<AssessmentStatus, string> = {
  NOT_STARTED: "Not Started",
  IN_PROGRESS: "In Progress",
  UNDER_REVIEW: "Under Review",
  COMPLETED: "Completed",
  ARCHIVED: "Archived",
};

async function getAssessments(statusFilter?: AssessmentStatus) {
  return prisma.assessment.findMany({
    where: statusFilter ? { status: statusFilter } : undefined,
    include: {
      createdBy: { select: { name: true, email: true } },
      _count: { select: { items: true } },
      items: {
        select: { status: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });
}

type SearchParams = Promise<{ status?: string }>;

export default async function AssessmentsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  await auth();
  const { status } = await searchParams;

  const statusFilter =
    status && Object.values(AssessmentStatus).includes(status as AssessmentStatus)
      ? (status as AssessmentStatus)
      : undefined;

  const assessments = await getAssessments(statusFilter);

  const allStatuses = Object.values(AssessmentStatus);

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <ClipboardList className="h-6 w-6" /> Assessments
          </h1>
          <p className="text-slate-500 mt-1">
            Create and manage PCI DSS compliance assessments.
          </p>
        </div>
        <Link href="/assessments/new">
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" /> New Assessment
          </Button>
        </Link>
      </div>

      {/* Status filter tabs */}
      <div className="flex gap-2 mb-6 flex-wrap">
        <Link href="/assessments">
          <Badge
            className={cn(
              "cursor-pointer text-xs px-3 py-1",
              !statusFilter
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200"
            )}
          >
            All
          </Badge>
        </Link>
        {allStatuses.map((s) => (
          <Link key={s} href={`/assessments?status=${s}`}>
            <Badge
              className={cn(
                "cursor-pointer text-xs px-3 py-1",
                statusFilter === s
                  ? "bg-slate-900 text-white border-slate-900"
                  : cn(
                      STATUS_COLORS[s],
                      "hover:opacity-80"
                    )
              )}
            >
              {STATUS_LABELS[s]}
            </Badge>
          </Link>
        ))}
      </div>

      {assessments.length === 0 ? (
        <div className="border-2 border-dashed border-slate-200 rounded-xl py-20 text-center">
          <ClipboardList className="h-10 w-10 text-slate-300 mx-auto mb-4" />
          <h2 className="text-lg font-semibold text-slate-400">
            No assessments found
          </h2>
          <p className="text-sm text-slate-400 mt-2 mb-6 max-w-sm mx-auto">
            {statusFilter
              ? `No assessments with status "${STATUS_LABELS[statusFilter]}".`
              : "Create your first PCI DSS assessment to get started."}
          </p>
          <Link href="/assessments/new">
            <Button>
              <Plus className="h-4 w-4 mr-2" /> New Assessment
            </Button>
          </Link>
        </div>
      ) : (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold text-slate-700">
              {assessments.length} Assessment
              {assessments.length !== 1 ? "s" : ""}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-slate-50">
                  <th className="text-left px-4 py-3 font-medium text-slate-600">
                    Name
                  </th>
                  <th className="text-left px-4 py-3 font-medium text-slate-600">
                    Status
                  </th>
                  <th className="text-left px-4 py-3 font-medium text-slate-600">
                    Progress
                  </th>
                  <th className="text-left px-4 py-3 font-medium text-slate-600">
                    Target Date
                  </th>
                  <th className="text-left px-4 py-3 font-medium text-slate-600">
                    Created By
                  </th>
                  <th className="px-4 py-3" />
                </tr>
              </thead>
              <tbody>
                {assessments.map((assessment) => {
                  const totalItems = assessment.items.length;
                  const compliantItems = assessment.items.filter(
                    (i) =>
                      i.status === ComplianceStatus.COMPLIANT ||
                      i.status === ComplianceStatus.NOT_APPLICABLE
                  ).length;
                  const progressPct =
                    totalItems > 0
                      ? Math.round((compliantItems / totalItems) * 100)
                      : 0;

                  return (
                    <tr
                      key={assessment.id}
                      className="border-b hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-4 py-3">
                        <p className="font-medium text-slate-900">
                          {assessment.name}
                        </p>
                        {assessment.description && (
                          <p className="text-xs text-slate-400 mt-0.5 truncate max-w-[240px]">
                            {assessment.description}
                          </p>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <Badge
                          className={cn(
                            "text-xs",
                            STATUS_COLORS[assessment.status]
                          )}
                        >
                          {STATUS_LABELS[assessment.status]}
                        </Badge>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-green-500 rounded-full"
                              style={{ width: `${progressPct}%` }}
                            />
                          </div>
                          <span className="text-xs text-slate-600">
                            {compliantItems}/{totalItems}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-slate-600 text-xs">
                        {assessment.targetDate
                          ? new Date(assessment.targetDate).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              }
                            )
                          : "—"}
                      </td>
                      <td className="px-4 py-3 text-slate-600 text-xs">
                        {assessment.createdBy.name ?? assessment.createdBy.email}
                      </td>
                      <td className="px-4 py-3">
                        <Link href={`/assessments/${assessment.id}`}>
                          <Button variant="ghost" size="sm" className="h-7 px-2">
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
