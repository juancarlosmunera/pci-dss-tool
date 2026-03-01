import { prisma } from "@/lib/prisma";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Layers, FileSearch, ClipboardCheck } from "lucide-react";
import { RequirementsBrowser } from "./requirements/requirements-browser";

export const metadata = {
  title: "Dashboard",
};


async function getStats() {
  const [principalCount, totalCount, domainGroups, procedureCount] =
    await Promise.all([
      prisma.requirement.count({ where: { level: 1 } }),
      prisma.requirement.count({ where: { level: { gte: 3 } } }),
      prisma.requirement.groupBy({
        by: ["domain"],
        where: { level: 1 },
        _count: true,
      }),
      prisma.testingProcedure.count(),
    ]);

  return { principalCount, totalCount, domainGroups, procedureCount };
}

function compareReqNumbers(a: string, b: string): number {
  const partsA = a.split(".").map(Number);
  const partsB = b.split(".").map(Number);
  for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
    const diff = (partsA[i] ?? 0) - (partsB[i] ?? 0);
    if (diff !== 0) return diff;
  }
  return 0;
}

async function getRequirementsTree() {
  const all = await prisma.requirement.findMany({
    where: { level: { in: [1, 2, 3, 4] } },
    orderBy: { number: "asc" },
    select: {
      number: true,
      title: true,
      level: true,
      domain: true,
      parentNumber: true,
      _count: { select: { children: true } },
    },
  });

  const principals = all.filter((r) => r.level === 1).sort((a, b) => compareReqNumbers(a.number, b.number));
  const sections = all.filter((r) => r.level === 2);
  const subReqs = all.filter((r) => r.level === 3);
  const subSubReqs = all.filter((r) => r.level === 4);

  const l3ToSection: Record<string, string> = {};
  for (const sr of subReqs) {
    if (sr.parentNumber) l3ToSection[sr.number] = sr.parentNumber;
  }

  const sectionTitles: Record<string, string[]> = {};
  for (const sr of subReqs) {
    if (sr.parentNumber) {
      (sectionTitles[sr.parentNumber] ??= []).push(sr.title);
    }
  }
  for (const ssr of subSubReqs) {
    if (ssr.parentNumber) {
      const sectionNum = l3ToSection[ssr.parentNumber];
      if (sectionNum) (sectionTitles[sectionNum] ??= []).push(ssr.title);
    }
  }

  return principals.map((principal) => ({
    number: principal.number,
    title: principal.title,
    domain: principal.domain,
    sections: sections
      .filter((s) => s.parentNumber === principal.number)
      .map((s) => ({
        number: s.number,
        title: s.title,
        childCount: s._count.children,
        childTitles: sectionTitles[s.number] ?? [],
      })),
  }));
}

export default async function DashboardPage() {
  const [stats, treeData] = await Promise.all([
    getStats(),
    getRequirementsTree(),
  ]);

  const statCards = [
    {
      label: "Principal Requirements",
      value: stats.principalCount,
      description: "Top-level PCI DSS requirements",
      icon: Layers,
    },
    {
      label: "Sub-Requirements",
      value: stats.totalCount,
      description: "Testable requirements (level 3+)",
      icon: BookOpen,
    },
    {
      label: "Domains",
      value: stats.domainGroups.length,
      description: "Control objective domains",
      icon: ClipboardCheck,
    },
    {
      label: "Testing Procedures",
      value: stats.procedureCount,
      description: "Assessor testing procedures",
      icon: FileSearch,
    },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">
          PCI DSS v4.0.1 Compliance Platform
        </h1>
        <p className="text-slate-500 mt-1">
          Defined Approach — Internal compliance tracking and evidence management
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {statCards.map(({ label, value, description, icon: Icon }) => (
          <Card key={label} className="border-0 shadow-sm">
            <CardContent className="pt-5 pb-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                    {label}
                  </p>
                  <p className="text-3xl font-bold mt-1 text-slate-800">{value}</p>
                  <p className="text-xs text-slate-400 mt-1">{description}</p>
                </div>
                <Icon className="h-5 w-5 text-slate-400 mt-0.5" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Browse by Domain */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">
          Browse by Domain
        </h2>
        <RequirementsBrowser data={treeData} />
      </div>
    </div>
  );
}
