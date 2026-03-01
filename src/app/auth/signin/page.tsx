import { signIn } from "@/auth";
import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Sign In | PCI DSS Compliance",
};

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string; error?: string }>;
}) {
  const params = await searchParams;
  const callbackUrl = params.callbackUrl ?? "/";
  const error = params.error;

  const errorMessage =
    error === "CredentialsSignin" ? "Invalid email or password." : null;

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
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 space-y-5">
          {/* Microsoft SSO — only shown when Azure AD is configured */}
          {process.env.AZURE_AD_CLIENT_ID && (
            <>
              <div>
                <h2 className="text-base font-semibold text-white mb-1">
                  Sign in with Microsoft
                </h2>
                <p className="text-sm text-slate-400 mb-4">
                  Use your organization Microsoft account.
                </p>
                <form
                  action={async () => {
                    "use server";
                    await signIn("microsoft-entra-id", { redirectTo: callbackUrl });
                  }}
                >
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 bg-white text-slate-900 font-semibold py-2.5 px-4 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    <svg width="20" height="20" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1" y="1" width="9" height="9" fill="#f25022" />
                      <rect x="11" y="1" width="9" height="9" fill="#7fba00" />
                      <rect x="1" y="11" width="9" height="9" fill="#00a4ef" />
                      <rect x="11" y="11" width="9" height="9" fill="#ffb900" />
                    </svg>
                    Sign in with Microsoft
                  </button>
                </form>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-slate-700" />
                <span className="text-xs text-slate-500 uppercase tracking-widest">or</span>
                <div className="flex-1 h-px bg-slate-700" />
              </div>
            </>
          )}

          {/* Local admin — server action, no client JS needed */}
          <div>
            <h2 className="text-base font-semibold text-white mb-4">
              Admin Login
            </h2>
            <form
              action={async (formData: FormData) => {
                "use server";
                await signIn("credentials", {
                  email: formData.get("email") as string,
                  password: formData.get("password") as string,
                  redirectTo: callbackUrl,
                });
              }}
              className="space-y-3"
            >
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-md border border-slate-600 bg-slate-900 text-white px-3 py-2 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="admin@example.com"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  autoComplete="current-password"
                  className="w-full rounded-md border border-slate-600 bg-slate-900 text-white px-3 py-2 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {errorMessage && (
                <p className="text-xs text-red-400">{errorMessage}</p>
              )}

              <button
                type="submit"
                className="w-full bg-slate-700 hover:bg-slate-600 text-white font-medium py-2.5 px-4 rounded-lg text-sm transition-colors"
              >
                Sign in
              </button>
              <p className="text-[11px] text-slate-600 text-center">
                Local admin accounts only
              </p>
            </form>
          </div>
        </div>

        <p className="text-center text-xs text-slate-600 mt-6">
          Internal Use Only — Defined Approach
        </p>
      </div>
    </div>
  );
}
