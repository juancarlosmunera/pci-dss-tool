import { NextRequest } from "next/server";
import { validateScimAuth, scimError } from "@/lib/scim";

/**
 * SCIM 2.0 — GET /api/scim/v2/ServiceProviderConfig
 *
 * Azure AD queries this endpoint when you click "Test Connection" in the
 * Enterprise Application Provisioning configuration.
 */
export async function GET(req: NextRequest) {
  if (!validateScimAuth(req.headers.get("authorization"))) {
    return scimError("Unauthorized", 401);
  }

  return Response.json({
    schemas: [
      "urn:ietf:params:scim:schemas:core:2.0:ServiceProviderConfig",
    ],
    documentationUri: "",
    patch: { supported: true },
    bulk: { supported: false, maxOperations: 0, maxPayloadSize: 0 },
    filter: { supported: true, maxResults: 200 },
    changePassword: { supported: false },
    sort: { supported: false },
    etag: { supported: false },
    authenticationSchemes: [
      {
        type: "oauthbearertoken",
        name: "OAuth Bearer Token",
        description: "Authentication scheme using the OAuth Bearer Token standard",
      },
    ],
    meta: {
      resourceType: "ServiceProviderConfig",
      location: "/api/scim/v2/ServiceProviderConfig",
    },
  });
}
