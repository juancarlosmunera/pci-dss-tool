"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ChevronDown, ChevronRight, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface Section {
  number: string;
  title: string;
  childCount: number;
  childTitles?: string[];
}

interface PrincipalReq {
  number: string;
  title: string;
  domain: string;
  sections: Section[];
}

interface RequirementsBrowserProps {
  data: PrincipalReq[];
}

const NEUTRAL = {
  header: "bg-slate-50 border-slate-200",
  badge: "bg-slate-100 text-slate-700 border-slate-200",
  link: "hover:bg-slate-50 border-slate-200",
};

function RequirementCard({
  req,
  defaultOpen,
}: {
  req: PrincipalReq;
  defaultOpen: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm">
      {/* Principal requirement header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full flex items-start gap-3 p-4 text-left transition-colors",
          isOpen ? NEUTRAL.header : "hover:bg-slate-50"
        )}
      >
        <span className="mt-0.5 text-slate-400 flex-shrink-0">
          {isOpen ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-bold text-slate-500">
              Requirement {req.number}
            </span>
            <span
              className={cn(
                "text-xs px-2 py-0.5 rounded-full border font-medium",
                NEUTRAL.badge
              )}
            >
              {req.sections.length} sections
            </span>
          </div>
          <p className="text-sm font-semibold text-slate-800 mt-1 leading-snug">
            {req.title}
          </p>
        </div>
      </button>

      {/* Sections */}
      {isOpen && (
        <div className="divide-y divide-slate-100 border-t border-slate-200">
          {req.sections.map((section) => (
            <Link
              key={section.number}
              href={`/requirements/${section.number}`}
              className={cn(
                "flex items-start gap-3 px-4 py-3 border-l-4 border-transparent transition-colors group",
                NEUTRAL.link
              )}
            >
              <span className="text-xs font-bold text-slate-400 mt-0.5 w-10 flex-shrink-0">
                {section.number}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-700 group-hover:text-slate-900 leading-snug line-clamp-2">
                  {section.title}
                </p>
                {section.childCount > 0 && (
                  <p className="text-xs text-slate-400 mt-0.5">
                    {section.childCount} sub-requirements
                  </p>
                )}
              </div>
              <ExternalLink className="h-3.5 w-3.5 text-slate-300 group-hover:text-slate-500 flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function RequirementsBrowser({ data }: RequirementsBrowserProps) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return data;

    return data
      .map((req) => {
        // Check if principal matches
        const principalMatch =
          req.number.toLowerCase().includes(q) ||
          req.title.toLowerCase().includes(q) ||
          req.domain.toLowerCase().includes(q);

        // Filter sections
        const matchedSections = req.sections.filter(
          (s) =>
            s.number.toLowerCase().includes(q) ||
            s.title.toLowerCase().includes(q) ||
            s.childTitles?.some((t) => t.toLowerCase().includes(q))
        );

        if (principalMatch) return req;
        if (matchedSections.length > 0)
          return { ...req, sections: matchedSections };
        return null;
      })
      .filter(Boolean) as PrincipalReq[];
  }, [data, query]);

  // Group by domain
  const byDomain = useMemo(() => {
    const groups: Record<string, PrincipalReq[]> = {};
    for (const req of filtered) {
      if (!groups[req.domain]) groups[req.domain] = [];
      groups[req.domain].push(req);
    }
    return groups;
  }, [filtered]);

  const hasResults = filtered.length > 0;
  const isFiltering = query.trim().length > 0;

  return (
    <div>
      {/* Search bar */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <Input
          type="search"
          placeholder="Search by requirement number or keyword…"
          className="pl-9 bg-white shadow-sm"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {isFiltering && hasResults && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400">
            {filtered.reduce((n, r) => n + r.sections.length, 0)} sections in{" "}
            {filtered.length} requirements
          </span>
        )}
      </div>

      {/* No results */}
      {!hasResults && (
        <div className="text-center py-16 text-slate-400">
          <Search className="h-8 w-8 mx-auto mb-3 opacity-30" />
          <p className="font-medium">No requirements match &quot;{query}&quot;</p>
          <p className="text-sm mt-1">Try a different keyword or requirement number</p>
        </div>
      )}

      {/* Requirements grouped by domain */}
      <div className="space-y-8">
        {Object.entries(byDomain).map(([domain, reqs]) => {
          return (
            <div key={domain}>
              <div className="flex items-center gap-2 mb-3">
                <span
                  className={cn(
                    "text-xs font-semibold px-3 py-1 rounded-full border",
                    NEUTRAL.badge
                  )}
                >
                  {domain}
                </span>
              </div>
              <div className="space-y-3">
                {reqs.map((req) => (
                  <RequirementCard
                    key={req.number}
                    req={req}
                    defaultOpen={isFiltering}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
