import { signIn } from "@/auth";
import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Sign In | PCI DSS Compliance",
};

export default function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string; error?: string }>;
}) {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/30 mb-4">
            <ShieldCheck className="h-7 w-7 text-blue-400" />
          </div>
          <h1 className="text-xl font-bold text-white">PCI DSS Compliance</h1>
          <p className="text-slate-400 text-sm mt-1">v4.0.1 Internal Platform</p>
        </div>

        {/* Card */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-8">
          <h2 className="text-base font-semibold text-white mb-1">
            Sign in to continue
          </h2>
          <p className="text-sm text-slate-400 mb-6">
            Use your organization Microsoft account.
          </p>

          <form
            action={async () => {
              "use server";
              const params = await searchParams;
              await signIn("microsoft-entra-id", {
                redirectTo: params.callbackUrl ?? "/",
              });
            }}
          >
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-white text-slate-900 font-semibold py-2.5 px-4 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {/* Microsoft logo SVG */}
              <svg width="20" height="20" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="9" height="9" fill="#f25022" />
                <rect x="11" y="1" width="9" height="9" fill="#7fba00" />
                <rect x="1" y="11" width="9" height="9" fill="#00a4ef" />
                <rect x="11" y="11" width="9" height="9" fill="#ffb900" />
              </svg>
              Sign in with Microsoft
            </button>
          </form>

          <p className="text-xs text-slate-500 text-center mt-5">
            Access is restricted to authorized personnel only.
          </p>
        </div>

        <p className="text-center text-xs text-slate-600 mt-6">
          Internal Use Only — Defined Approach
        </p>
      </div>
    </div>
  );
}
