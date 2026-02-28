/**
 * SCIM 2.0 shared utilities.
 *
 * Azure AD sends `Authorization: Bearer <SCIM_PROVISIONING_SECRET>` on every
 * provisioning request. This helper validates that header.
 */

export function validateScimAuth(authHeader: string | null): boolean {
  const secret = process.env.SCIM_PROVISIONING_SECRET;
  if (!secret) return false;
  return authHeader === `Bearer ${secret}`;
}

/** Standard SCIM error response shape. */
export function scimError(detail: string, status: number, scimType?: string) {
  return Response.json(
    {
      schemas: ["urn:ietf:params:scim:api:messages:2.0:Error"],
      detail,
      status,
      ...(scimType ? { scimType } : {}),
    },
    { status }
  );
}

/** Build a SCIM User resource from a Prisma User row. */
export function toScimUser(user: {
  id: string;
  email: string;
  name: string | null;
  isActive: boolean;
  entraObjectId: string | null;
}) {
  return {
    schemas: ["urn:ietf:params:scim:schemas:core:2.0:User"],
    id: user.id,
    externalId: user.entraObjectId ?? undefined,
    userName: user.email,
    name: {
      formatted: user.name ?? "",
    },
    emails: [{ value: user.email, primary: true }],
    active: user.isActive,
    meta: {
      resourceType: "User",
      location: `/api/scim/v2/Users/${user.id}`,
    },
  };
}
