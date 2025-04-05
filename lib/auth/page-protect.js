// lib/auth/page-protect.js
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// This helper is used in layouts or page.js files (App Router only).
export async function protectPage({ requiredRole = null } = {}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return { redirectTo: "/auth/login" };
  }

  if (requiredRole && session.user.role !== requiredRole) {
    return { redirectTo: "/auth/login" };
  }

  return { session };
}
