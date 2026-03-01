"use client";

import { useState } from "react";

interface LocalAdminFormProps {
  callbackUrl: string;
  error?: string;
}

export function LocalAdminForm({ callbackUrl, error: initialError }: LocalAdminFormProps) {
  const [loading, setLoading] = useState(false);
  const [error] = useState<string | null>(
    initialError === "CredentialsSignin" ? "Invalid email or password." : null
  );

  return (
    <form
      action={`/api/auth/callback/credentials`}
      method="POST"
      onSubmit={() => setLoading(true)}
      className="space-y-3"
    >
      <input type="hidden" name="redirectTo" value={callbackUrl} />
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

      {error && (
        <p className="text-xs text-red-400">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-slate-700 hover:bg-slate-600 disabled:opacity-50 text-white font-medium py-2.5 px-4 rounded-lg text-sm transition-colors"
      >
        {loading ? "Signing in…" : "Sign in"}
      </button>

      <p className="text-[11px] text-slate-600 text-center">
        Local admin accounts only
      </p>
    </form>
  );
}
