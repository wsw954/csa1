//app/admin/layout.js
import { redirect } from "next/navigation";
import { protectPage } from "@/lib/auth/page-protect";

export default async function AdminLayout({ children }) {
  const { session, redirectTo } = await protectPage({ requiredRole: "admin" });

  if (redirectTo) redirect(redirectTo);

  return (
    <div>
      <header>
        <h2>Admin Panel</h2>
        <p>Logged in as: {session.user.email}</p>
      </header>
      <main>{children}</main>
    </div>
  );
}
