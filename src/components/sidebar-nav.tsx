"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import type { Session } from "next-auth";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  BookOpen,
  ClipboardList,
  ShieldCheck,
  Users,
  LogOut,
  Star,
  Plug,
} from "lucide-react";

interface NavLink {
  href: string;
  label: string;
  icon: React.ElementType;
  exact?: boolean;
}

const MAIN_LINKS: NavLink[] = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/requirements", label: "Requirements", icon: BookOpen },
  { href: "/assessments", label: "Assessments", icon: ClipboardList },
  { href: "/my-controls", label: "My Controls", icon: Star },
];

const ADMIN_LINKS: NavLink[] = [
  { href: "/admin/users", label: "Users & Roles", icon: Users },
  { href: "/admin/settings/servicenow", label: "ServiceNow", icon: Plug },
];

function NavItem({ link }: { link: NavLink }) {
  const pathname = usePathname();
  const isActive = link.exact
    ? pathname === link.href
    : pathname.startsWith(link.href);
  const Icon = link.icon;

  return (
    <Link
      href={link.href}
      className={cn(
        "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
        isActive
          ? "bg-slate-700 text-white"
          : "text-slate-400 hover:text-white hover:bg-slate-800"
      )}
    >
      <Icon className="h-4 w-4 flex-shrink-0" />
      {link.label}
    </Link>
  );
}

interface SidebarNavProps {
  session: Session | null;
}

export function SidebarNav({ session }: SidebarNavProps) {
  const user = session?.user;
  const isAdmin = user?.isAdmin ?? false;

  const initials = user?.name
    ? user.name
        .split(" ")
        .map((w) => w[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "??";

  return (
    <aside className="w-60 flex-shrink-0 bg-slate-900 text-white flex flex-col h-screen sticky top-0">
      {/* Brand */}
      <div className="p-5 border-b border-slate-700/60">
        <div className="flex items-center gap-2.5 mb-1">
          <ShieldCheck className="h-5 w-5 text-blue-400 flex-shrink-0" />
          <span className="font-bold text-white tracking-tight">
            PCI DSS v4.0.1
          </span>
        </div>
        <p className="text-xs text-slate-400 pl-7">Compliance Platform</p>
      </div>

      {/* Main navigation */}
      <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
        {MAIN_LINKS.map((link) => (
          <NavItem key={link.href} link={link} />
        ))}

        {/* Admin section — only visible to ADMIN role */}
        {isAdmin && (
          <div className="mt-4 pt-4 border-t border-slate-700/60">
            <p className="px-3 mb-1.5 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
              Admin
            </p>
            {ADMIN_LINKS.map((link) => (
              <NavItem key={link.href} link={link} />
            ))}
          </div>
        )}
      </nav>

      {/* User footer */}
      {user?.id ? (
        <div className="p-3 border-t border-slate-700/60">
          <div className="flex items-center gap-2.5 px-2 py-2 rounded-md hover:bg-slate-800 transition-colors group">
            {user.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={user.image}
                alt={user.name ?? ""}
                className="w-7 h-7 rounded-full flex-shrink-0 object-cover"
              />
            ) : (
              <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold flex-shrink-0">
                {initials}
              </div>
            )}
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-white truncate">
                {user.name ?? user.email}
              </p>
              <p className="text-[10px] text-slate-500 truncate">{user.email}</p>
            </div>
            <button
              onClick={() => signOut({ callbackUrl: "/auth/signin" })}
              title="Sign out"
              className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:text-red-400"
            >
              <LogOut className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      ) : (
        <div className="p-4 border-t border-slate-700/60">
          <div className="text-xs text-slate-500">Defined Approach Only</div>
          <div className="text-xs text-slate-600 mt-0.5">Internal Use</div>
        </div>
      )}
    </aside>
  );
}
