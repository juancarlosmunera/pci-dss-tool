"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function saveServiceNowConfig(formData: FormData) {
  const instanceUrl = (formData.get("instanceUrl") as string)?.trim();
  const authMethod = (formData.get("authMethod") as string) ?? "basic";
  const isEnabled = formData.get("isEnabled") === "on";
  const webhookSecret = (formData.get("webhookSecret") as string)?.trim() ?? "";

  // Build credentials object — only update password/secret if a new value is provided
  // (empty string means "keep existing")
  const existing = await prisma.integrationConfig.findUnique({
    where: { provider: "servicenow" },
    select: { credentials: true },
  });

  let credentials: Record<string, string> = {};
  if (authMethod === "basic") {
    const username = (formData.get("username") as string)?.trim() ?? "";
    const password = (formData.get("password") as string) ?? "";
    const existingCreds = (existing?.credentials as Record<string, string>) ?? {};
    credentials = {
      username,
      password: password !== "" ? password : (existingCreds.password ?? ""),
    };
  } else {
    const clientId = (formData.get("clientId") as string)?.trim() ?? "";
    const clientSecret = (formData.get("clientSecret") as string) ?? "";
    const existingCreds = (existing?.credentials as Record<string, string>) ?? {};
    credentials = {
      clientId,
      clientSecret:
        clientSecret !== ""
          ? clientSecret
          : (existingCreds.clientSecret ?? ""),
    };
  }

  await prisma.integrationConfig.upsert({
    where: { provider: "servicenow" },
    update: {
      instanceUrl,
      authMethod,
      credentials,
      isEnabled,
      webhookSecret,
    },
    create: {
      provider: "servicenow",
      instanceUrl,
      authMethod,
      credentials,
      settings: {},
      isEnabled,
      webhookSecret,
    },
  });

  revalidatePath("/admin/settings/servicenow");
}
