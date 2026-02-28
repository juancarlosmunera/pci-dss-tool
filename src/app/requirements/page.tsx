import { prisma } from "@/lib/prisma";
import { RequirementsBrowser } from "./requirements-browser";

export const metadata = {
  title: "Requirements Browser",
};

async function getRequirementsTree() {
  // Fetch all level-1 and level-2 requirements in one query
  const all = await prisma.requirement.findMany({
    where: { level: { in: [1, 2] } },
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

  // Build hierarchy
  const principals = all.filter((r) => r.level === 1);
  const sections = all.filter((r) => r.level === 2);

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
      })),
  }));
}

export default async function RequirementsPage() {
  const data = await getRequirementsTree();

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">
          PCI DSS v4.0.1 Requirements
        </h1>
        <p className="text-slate-500 mt-1">
          Browse all {data.length} principal requirements and their sections.
          Click a section to view full sub-requirements and testing procedures.
        </p>
      </div>

      <RequirementsBrowser data={data} />
    </div>
  );
}
