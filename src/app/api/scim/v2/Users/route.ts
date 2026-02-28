import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { validateScimAuth, scimError, toScimUser } from "@/lib/scim";
import { mapTokenRoles } from "@/lib/auth-helpers";

/**
 * SCIM 2.0 — GET /api/scim/v2/Users
 *
 * Azure AD calls this to:
 *   1. Check if a user already exists before provisioning (filter=userName eq "...")
 *   2. List all provisioned users during full sync
 */
export async function GET(req: NextRequest) {
  if (!validateScimAuth(req.headers.get("authorization"))) {
    return scimError("Unauthorized", 401);
  }

  const { searchParams } = req.nextUrl;
  const filter = searchParams.get("filter") ?? "";
  const startIndex = parseInt(searchParams.get("startIndex") ?? "1", 10);
  const count = parseInt(searchParams.get("count") ?? "100", 10);

  // Parse simple SCIM filter: `userName eq "foo@example.com"` or `externalId eq "..."`
  let where: { email?: string; entraObjectId?: string } = {};
  const userNameMatch = filter.match(/userName\s+eq\s+"([^"]+)"/i);
  const externalIdMatch = filter.match(/externalId\s+eq\s+"([^"]+)"/i);
  if (userNameMatch) {
    where = { email: userNameMatch[1] };
  } else if (externalIdMatch) {
    where = { entraObjectId: externalIdMatch[1] };
  }

  const [users, total] = await Promise.all([
    prisma.user.findMany({
      where,
      skip: startIndex - 1,
      take: count,
      select: { id: true, email: true, name: true, isActive: true, entraObjectId: true },
    }),
    prisma.user.count({ where }),
  ]);

  return Response.json({
    schemas: ["urn:ietf:params:scim:api:messages:2.0:ListResponse"],
    totalResults: total,
    startIndex,
    itemsPerPage: users.length,
    Resources: users.map(toScimUser),
  });
}

/**
 * SCIM 2.0 — POST /api/scim/v2/Users
 *
 * Azure AD calls this to provision (create) a new user in the app.
 * The user may not have logged in yet.
 */
export async function POST(req: NextRequest) {
  if (!validateScimAuth(req.headers.get("authorization"))) {
    return scimError("Unauthorized", 401);
  }

  let body: {
    userName?: string;
    externalId?: string;
    name?: { formatted?: string; givenName?: string; familyName?: string };
    emails?: { value: string; primary?: boolean }[];
    active?: boolean;
    roles?: { value: string }[];
  };
  try {
    body = await req.json();
  } catch {
    return scimError("Invalid JSON", 400, "invalidValue");
  }

  const email = body.userName ?? body.emails?.find((e) => e.primary)?.value;
  if (!email) {
    return scimError("userName is required", 400, "invalidValue");
  }

  const name =
    (body.name?.formatted ??
      [body.name?.givenName, body.name?.familyName].filter(Boolean).join(" ")) ||
    null;

  // Azure AD sends roles as `{ value: "PCI.Admin" }` objects
  const tokenRoles = (body.roles ?? []).map((r) => r.value);
  const platformRoles = mapTokenRoles(tokenRoles);

  // Upsert — the user might already exist if they logged in before provisioning
  const user = await prisma.user.upsert({
    where: { email },
    create: {
      email,
      name,
      entraObjectId: body.externalId ?? null,
      isActive: body.active ?? true,
      platformRoles,
    },
    update: {
      name: name ?? undefined,
      entraObjectId: body.externalId ?? undefined,
      isActive: body.active ?? true,
      platformRoles,
    },
    select: { id: true, email: true, name: true, isActive: true, entraObjectId: true },
  });

  return Response.json(toScimUser(user), { status: 201 });
}
