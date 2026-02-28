import { PlatformRole } from "@prisma/client";
import { prisma } from "./prisma";

/**
 * Map Azure AD App Role values (from the JWT `roles` claim) to PlatformRoles.
 *
 * App Roles are defined in the App Registration manifest:
 *   "PCI.Admin"        → ADMIN
 *   "PCI.ControlOwner" → CONTROL_OWNER
 *   "PCI.Operator"     → OPERATOR
 *   "PCI.Viewer"       → VIEWER
 *
 * Any unrecognised role value is silently ignored.
 */
export function mapTokenRoles(tokenRoles: string[]): PlatformRole[] {
  const mapping: Record<string, PlatformRole> = {
    "PCI.Admin": PlatformRole.ADMIN,
    "PCI.ControlOwner": PlatformRole.CONTROL_OWNER,
    "PCI.Operator": PlatformRole.OPERATOR,
    "PCI.Viewer": PlatformRole.VIEWER,
  };
  const roles = Array.from(
    new Set(
      tokenRoles
        .map((r) => mapping[r])
        .filter((r): r is PlatformRole => r !== undefined)
    )
  );
  return roles;
}

/**
 * Load a user's domain assignments from the database.
 */
export async function loadDomainAssignments(userId: string) {
  const rows = await prisma.domainAssignment.findMany({
    where: { userId },
    select: { domain: true, role: true },
  });
  return rows;
}

/**
 * Check if the user has a specific platform role anywhere.
 */
export function hasRole(roles: PlatformRole[], role: PlatformRole): boolean {
  return roles.includes(role);
}
