import Link from "next/link";
import { prisma } from "@/lib/prisma";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Layers, FileSearch, ClipboardCheck } from "lucide-react";

export const metadata = {
  title: "Dashboard",
};

const DOMAIN_COLORS: Record<string, string> = {
  "Build and Maintain a Secure Network and Systems":
    "bg-blue-50 border-blue-200 hover:bg-blue-100",
  "Protect Account Data": "bg-purple-50 border-purple-200 hover:bg-purple-100",
  "Maintain a Vulnerability Management Program":
    "bg-orange-50 border-orange-200 hover:bg-orange-100",
  "Implement Strong Access Control Measures":
    "bg-green-50 border-green-200 hover:bg-green-100",
  "Regularly Monitor and Test Networks":
    "bg-yellow-50 border-yellow-200 hover:bg-yellow-100",
  "Maintain an Information Security Policy":
    "bg-red-50 border-red-200 hover:bg-red-100",
};

const DOMAIN_BADGE_COLORS: Record<string, string> = {
  "Build and Maintain a Secure Network and Systems":
    "bg-blue-100 text-blue-800",
  "Protect Account Data": "bg-purple-100 text-purple-800",
  "Maintain a Vulnerability Management Program":
    "bg-orange-100 text-orange-800",
  "Implement Strong Access Control Measures": "bg-green-100 text-green-800",
  "Regularly Monitor and Test Networks": "bg-yellow-100 text-yellow-800",
  "Maintain an Information Security Policy": "bg-red-100 text-red-800",
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

async function getDomainSummary() {
  const principals = await prisma.requirement.findMany({
    where: { level: 1 },
    orderBy: { number: "asc" },
    select: {
      number: true,
      title: true,
      domain: true,
      _count: { select: { children: true } },
    },
  });
  return principals;
}

export default async function DashboardPage() {
  const [stats, principals] = await Promise.all([
    getStats(),
    getDomainSummary(),
  ]);

  const statCards = [
    {
      label: "Principal Requirements",
      value: stats.principalCount,
      description: "Top-level PCI DSS requirements",
      icon: Layers,
      color: "text-blue-600",
    },
    {
      label: "Sub-Requirements",
      value: stats.totalCount,
      description: "Testable requirements (level 3+)",
      icon: BookOpen,
      color: "text-purple-600",
    },
    {
      label: "Domains",
      value: stats.domainGroups.length,
      description: "Control objective domains",
      icon: ClipboardCheck,
      color: "text-green-600",
    },
    {
      label: "Testing Procedures",
      value: stats.procedureCount,
      description: "Assessor testing procedures",
      icon: FileSearch,
      color: "text-orange-600",
    },
  ];

  // Group principals by domain
  const byDomain = principals.reduce(
    (acc, req) => {
      if (!acc[req.domain]) acc[req.domain] = [];
      acc[req.domain].push(req);
      return acc;
    },
    {} as Record<string, typeof principals>
  );

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
        {statCards.map(({ label, value, description, icon: Icon, color }) => (
          <Card key={label} className="border-0 shadow-sm">
            <CardContent className="pt-5 pb-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                    {label}
                  </p>
                  <p className={`text-3xl font-bold mt-1 ${color}`}>{value}</p>
                  <p className="text-xs text-slate-400 mt-1">{description}</p>
                </div>
                <Icon className={`h-5 w-5 ${color} opacity-70 mt-0.5`} />
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
        <div className="space-y-4">
          {Object.entries(byDomain).map(([domain, reqs]) => (
            <div key={domain}>
              <div className="flex items-center gap-2 mb-2.5">
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    DOMAIN_BADGE_COLORS[domain] ?? "bg-gray-100 text-gray-700"
                  }`}
                >
                  {domain}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {reqs.map((req) => (
                  <Link
                    key={req.number}
                    href={`/requirements/${req.number}`}
                    className={`block p-4 rounded-lg border transition-colors ${
                      DOMAIN_COLORS[domain] ??
                      "bg-gray-50 border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-bold text-slate-500 bg-white border border-slate-200 rounded px-1.5 py-0.5 flex-shrink-0 mt-0.5">
                        Req {req.number}
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-slate-800 leading-snug line-clamp-2">
                          {req.title}
                        </p>
                        <p className="text-xs text-slate-500 mt-1">
                          {req._count.children} sections
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
