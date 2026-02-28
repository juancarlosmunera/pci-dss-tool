import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { GuidancePanel } from "./guidance-panel";
import { ChevronRight, FlaskConical, BookMarked } from "lucide-react";

interface PageProps {
  params: Promise<{ number: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { number } = await params;
  const req = await prisma.requirement.findUnique({
    where: { number: decodeURIComponent(number) },
    select: { number: true, title: true },
  });
  if (!req) return { title: "Not Found" };
  return { title: `Req ${req.number} — ${req.title.slice(0, 60)}` };
}

async function getRequirementWithChildren(number: string) {
  const req = await prisma.requirement.findUnique({
    where: { number },
    include: {
      parent: {
        select: {
          number: true,
          title: true,
          domain: true,
          parent: { select: { number: true, title: true } },
        },
      },
      testingProcedures: { orderBy: { procedureId: "asc" } },
      children: {
        orderBy: { number: "asc" },
        include: {
          testingProcedures: { orderBy: { procedureId: "asc" } },
          children: {
            orderBy: { number: "asc" },
            include: {
              testingProcedures: { orderBy: { procedureId: "asc" } },
            },
          },
        },
      },
    },
  });

  return req;
}

function hasGuidance(req: {
  guidancePurpose: string;
  guidanceGoodPractice: string;
  guidanceDefinitions: string;
  guidanceExamples: string;
  guidanceFurtherInformation: string;
}) {
  return (
    req.guidancePurpose ||
    req.guidanceGoodPractice ||
    req.guidanceDefinitions ||
    req.guidanceExamples ||
    req.guidanceFurtherInformation
  );
}

type SubReq = {
  id: string;
  number: string;
  title: string;
  requirementText: string;
  applicabilityNotes: string;
  guidancePurpose: string;
  guidanceGoodPractice: string;
  guidanceDefinitions: string;
  guidanceExamples: string;
  guidanceFurtherInformation: string;
  testingProcedures: { id: string; procedureId: string; text: string }[];
  children?: SubReq[];
};

function SubRequirementBlock({ req, depth = 0 }: { req: SubReq; depth?: number }) {
  const text = req.requirementText || req.title;
  const showGuidance = hasGuidance(req);

  return (
    <div className={depth > 0 ? "ml-4 pl-4 border-l border-slate-200" : ""}>
      {/* Requirement header */}
      <div className="mb-3">
        <div className="flex items-baseline gap-2.5 flex-wrap">
          <span className="text-sm font-bold text-slate-500 flex-shrink-0 font-mono">
            {req.number}
          </span>
          <p
            className={`text-sm leading-relaxed text-slate-800 ${
              depth === 0 ? "font-semibold" : "font-normal"
            }`}
          >
            {text}
          </p>
        </div>

        {req.applicabilityNotes && (
          <div className="mt-2 ml-[3.5rem] bg-amber-50 border border-amber-200 rounded-md px-3 py-2">
            <p className="text-xs font-semibold text-amber-700 mb-0.5">
              Applicability Notes
            </p>
            <p className="text-xs text-amber-800 leading-relaxed whitespace-pre-wrap">
              {req.applicabilityNotes}
            </p>
          </div>
        )}
      </div>

      {/* Testing Procedures */}
      {req.testingProcedures.length > 0 && (
        <div className="ml-[3.5rem] mb-4">
          <div className="flex items-center gap-1.5 mb-2">
            <FlaskConical className="h-3.5 w-3.5 text-blue-500" />
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
              Testing Procedures
            </span>
          </div>
          <div className="space-y-2">
            {req.testingProcedures.map((tp) => (
              <div
                key={tp.id}
                className="flex gap-2.5 bg-blue-50 border border-blue-100 rounded-md px-3 py-2.5"
              >
                <span className="text-xs font-bold text-blue-600 flex-shrink-0 font-mono mt-0.5">
                  {tp.procedureId}
                </span>
                <p className="text-xs text-slate-700 leading-relaxed whitespace-pre-wrap">
                  {tp.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Guidance panels */}
      {showGuidance && (
        <div className="ml-[3.5rem] mb-4">
          <div className="flex items-center gap-1.5 mb-2">
            <BookMarked className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
              Guidance
            </span>
          </div>
          <div className="space-y-1.5">
            <GuidancePanel
              label="Purpose"
              content={req.guidancePurpose}
              defaultOpen={false}
            />
            <GuidancePanel
              label="Good Practice"
              content={req.guidanceGoodPractice}
            />
            <GuidancePanel
              label="Definitions"
              content={req.guidanceDefinitions}
            />
            <GuidancePanel label="Examples" content={req.guidanceExamples} />
            <GuidancePanel
              label="Further Information"
              content={req.guidanceFurtherInformation}
            />
          </div>
        </div>
      )}

      {/* Nested children */}
      {req.children && req.children.length > 0 && (
        <div className="space-y-4 mt-2">
          {req.children.map((child) => (
            <SubRequirementBlock key={child.id} req={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default async function RequirementDetailPage({ params }: PageProps) {
  const { number } = await params;
  const decoded = decodeURIComponent(number);
  const req = await getRequirementWithChildren(decoded);

  if (!req) notFound();

  // Build breadcrumb
  const breadcrumbs: { label: string; href?: string }[] = [];
  if (req.parent?.parent) {
    breadcrumbs.push({
      label: req.parent.parent.title.length > 40
        ? `Req ${req.parent.parent.number}`
        : req.parent.parent.title,
      href: `/requirements/${req.parent.parent.number}`,
    });
  }
  if (req.parent) {
    breadcrumbs.push({
      label: `Req ${req.parent.number}`,
      href: `/requirements/${req.parent.number}`,
    });
  }
  breadcrumbs.push({ label: `${req.number}` });

  // Domain label
  const domain = req.parent?.domain ?? req.domain ?? "";

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1 text-sm text-slate-400 mb-5 flex-wrap">
        <Link href="/requirements" className="hover:text-slate-600 transition-colors">
          Requirements
        </Link>
        {breadcrumbs.map((crumb, i) => (
          <span key={i} className="flex items-center gap-1">
            <ChevronRight className="h-3.5 w-3.5 flex-shrink-0" />
            {crumb.href ? (
              <Link
                href={crumb.href}
                className="hover:text-slate-600 transition-colors"
              >
                {crumb.label}
              </Link>
            ) : (
              <span className="text-slate-700 font-medium">{crumb.label}</span>
            )}
          </span>
        ))}
      </nav>

      {/* Section header */}
      <div className="mb-6">
        {domain && (
          <Badge variant="secondary" className="mb-2 text-xs font-medium">
            {domain}
          </Badge>
        )}
        <div className="flex items-baseline gap-3">
          <span className="text-xs font-bold text-slate-400 font-mono">
            {req.number}
          </span>
          <h1 className="text-xl font-bold text-slate-900 leading-snug">
            {req.title}
          </h1>
        </div>

        {/* Section-level guidance if any */}
        {hasGuidance(req) && (
          <div className="mt-4 space-y-1.5">
            <div className="flex items-center gap-1.5 mb-2">
              <BookMarked className="h-3.5 w-3.5 text-slate-400" />
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Section Guidance
              </span>
            </div>
            <GuidancePanel
              label="Purpose"
              content={req.guidancePurpose}
              defaultOpen={false}
            />
            <GuidancePanel
              label="Good Practice"
              content={req.guidanceGoodPractice}
            />
            <GuidancePanel
              label="Definitions"
              content={req.guidanceDefinitions}
            />
            <GuidancePanel label="Examples" content={req.guidanceExamples} />
            <GuidancePanel
              label="Further Information"
              content={req.guidanceFurtherInformation}
            />
          </div>
        )}
      </div>

      <Separator className="mb-6" />

      {/* Sub-requirements */}
      {req.children.length === 0 && req.testingProcedures.length === 0 && (
        <p className="text-slate-400 text-sm italic">
          No sub-requirements found for {req.number}.
        </p>
      )}

      {/* Render this requirement itself if it has testing procedures but no children */}
      {req.children.length === 0 && req.testingProcedures.length > 0 && (
        <SubRequirementBlock
          req={{
            ...req,
            children: [],
          }}
        />
      )}

      {/* Render children */}
      {req.children.length > 0 && (
        <div className="space-y-6">
          {req.children.map((child, i) => (
            <div key={child.id}>
              {i > 0 && <Separator className="mb-6" />}
              <SubRequirementBlock req={child} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
