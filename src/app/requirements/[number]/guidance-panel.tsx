"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface GuidancePanelProps {
  label: string;
  content: string;
  defaultOpen?: boolean;
}

export function GuidancePanel({
  label,
  content,
  defaultOpen = false,
}: GuidancePanelProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  if (!content.trim()) return null;

  return (
    <div className="border border-slate-200 rounded-md overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full flex items-center gap-2 px-4 py-3 text-left text-sm font-medium transition-colors",
          isOpen
            ? "bg-slate-50 text-slate-900"
            : "text-slate-600 hover:bg-slate-50 hover:text-slate-800"
        )}
      >
        {isOpen ? (
          <ChevronDown className="h-3.5 w-3.5 flex-shrink-0 text-slate-400" />
        ) : (
          <ChevronRight className="h-3.5 w-3.5 flex-shrink-0 text-slate-400" />
        )}
        {label}
      </button>
      {isOpen && (
        <div className="px-4 py-3 border-t border-slate-200 bg-white">
          <p className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">
            {content}
          </p>
        </div>
      )}
    </div>
  );
}
