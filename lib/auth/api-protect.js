//app/lib/auth/api-protect.js
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// This helper is used in API routes to enforce authentication.
export async function requireAuth(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return { status: 401, body: { message: "Unauthorized" } };
  }

  return { status: 200, session };
}
