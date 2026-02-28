import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export const metadata = { title: "Auth Error | PCI DSS Compliance" };

const ERROR_MESSAGES: Record<string, string> = {
  Configuration: "Server configuration error. Contact your administrator.",
  AccessDenied: "Access denied. Your account may not be authorized for this platform.",
  Verification: "The sign-in link is invalid or has expired.",
  Default: "An authentication error occurred. Please try again.",
};

export default async function AuthErrorPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  const message = ERROR_MESSAGES[error ?? "Default"] ?? ERROR_MESSAGES.Default;

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-sm text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-red-600/20 border border-red-500/30 mb-4">
          <AlertTriangle className="h-7 w-7 text-red-400" />
        </div>
        <h1 className="text-lg font-bold text-white mb-2">Sign-in Failed</h1>
        <p className="text-slate-400 text-sm mb-6">{message}</p>
        <Link
          href="/auth/signin"
          className="inline-flex items-center justify-center bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium py-2.5 px-6 rounded-lg transition-colors"
        >
          Try again
        </Link>
      </div>
    </div>
  );
}
