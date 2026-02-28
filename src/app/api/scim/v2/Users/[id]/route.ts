import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { validateScimAuth, scimError, toScimUser } from "@/lib/scim";
import { mapTokenRoles } from "@/lib/auth-helpers";
import { PlatformRole } from "@prisma/client";

interface RouteParams {
  params: Promise<{ id: string }>;
}

/**
 * SCIM 2.0 — GET /api/scim/v2/Users/{id}
 *
 * Azure AD calls this to fetch the current state of a provisioned user.
 */
export async function GET(req: NextRequest, { params }: RouteParams) {
  if (!validateScimAuth(req.headers.get("authorization"))) {
    return scimError("Unauthorized", 401);
  }

  const { id } = await params;
  const user = await prisma.user.findUnique({
    where: { id },
    select: { id: true, email: true, name: true, isActive: true, entraObjectId: true },
  });

  if (!user) return scimError("User not found", 404);
  return Response.json(toScimUser(user));
}

/**
 * SCIM 2.0 — PATCH /api/scim/v2/Users/{id}
 *
 * Azure AD uses PATCH for incremental updates, most importantly:
 *   - Deactivate: { op: "Replace", path: "active", value: false }
 *   - Re-activate: { op: "Replace", path: "active", value: true }
 *   - Update roles when group assignments change
 */
export async function PATCH(req: NextRequest, { params }: RouteParams) {
  if (!validateScimAuth(req.headers.get("authorization"))) {
    return scimError("Unauthorized", 401);
  }

  const { id } = await params;

  let body: {
    Operations?: {
      op: string;
      path?: string;
      value?: unknown;
    }[];
  };
  try {
    body = await req.json();
  } catch {
    return scimError("Invalid JSON", 400, "invalidValue");
  }

  const data: {
    isActive?: boolean;
    name?: string;
    platformRoles?: PlatformRole[];
  } = {};

  for (const op of body.Operations ?? []) {
    const opLower = op.op.toLowerCase();
    const path = op.path?.toLowerCase() ?? "";

    if (path === "active" && (opLower === "replace" || opLower === "add")) {
      data.isActive = op.value === true || op.value === "true";
    } else if (path === "name.formatted" && opLower === "replace") {
      data.name = String(op.value);
    } else if (path === "roles" && opLower === "replace") {
      // value is an array of { value: "PCI.Admin" }
      const roleObjs = Array.isArray(op.value)
        ? (op.value as { value: string }[])
        : [];
      data.platformRoles = mapTokenRoles(roleObjs.map((r) => r.value));
    } else if (!op.path && opLower === "replace" && typeof op.value === "object" && op.value !== null) {
      // Full object replace: { op: "Replace", value: { active: false, ... } }
      const v = op.value as Record<string, unknown>;
      if ("active" in v) data.isActive = Boolean(v.active);
      if ("name" in v && typeof v.name === "object" && v.name !== null) {
        const n = v.name as { formatted?: string };
        if (n.formatted) data.name = n.formatted;
      }
    }
  }

  if (Object.keys(data).length === 0) {
    // Nothing changed — return current state
    const user = await prisma.user.findUnique({
      where: { id },
      select: { id: true, email: true, name: true, isActive: true, entraObjectId: true },
    });
    if (!user) return scimError("User not found", 404);
    return Response.json(toScimUser(user));
  }

  try {
    const user = await prisma.user.update({
      where: { id },
      data: {
        ...(data.isActive !== undefined ? { isActive: data.isActive } : {}),
        ...(data.name !== undefined ? { name: data.name } : {}),
        ...(data.platformRoles !== undefined ? { platformRoles: data.platformRoles } : {}),
      },
      select: { id: true, email: true, name: true, isActive: true, entraObjectId: true },
    });
    return Response.json(toScimUser(user));
  } catch {
    return scimError("User not found", 404);
  }
}

/**
 * SCIM 2.0 — PUT /api/scim/v2/Users/{id}
 *
 * Full replacement of the user resource (less common, but Azure AD may use it).
 */
export async function PUT(req: NextRequest, { params }: RouteParams) {
  if (!validateScimAuth(req.headers.get("authorization"))) {
    return scimError("Unauthorized", 401);
  }

  const { id } = await params;

  let body: {
    userName?: string;
    externalId?: string;
    name?: { formatted?: string; givenName?: string; familyName?: string };
    active?: boolean;
    roles?: { value: string }[];
  };
  try {
    body = await req.json();
  } catch {
    return scimError("Invalid JSON", 400, "invalidValue");
  }

  const name =
    (body.name?.formatted ??
      [body.name?.givenName, body.name?.familyName].filter(Boolean).join(" ")) ||
    null;

  const tokenRoles = (body.roles ?? []).map((r) => r.value);
  const platformRoles = mapTokenRoles(tokenRoles);

  try {
    const user = await prisma.user.update({
      where: { id },
      data: {
        name: name ?? undefined,
        entraObjectId: body.externalId ?? undefined,
        isActive: body.active ?? true,
        platformRoles,
      },
      select: { id: true, email: true, name: true, isActive: true, entraObjectId: true },
    });
    return Response.json(toScimUser(user));
  } catch {
    return scimError("User not found", 404);
  }
}
