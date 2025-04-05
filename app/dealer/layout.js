// app/dealer/layout.js
import { redirect } from "next/navigation";
import { protectPage } from "@/lib/auth/page-protect";

export default async function DealerLayout({ children }) {
  const { session, redirectTo } = await protectPage({ requiredRole: "dealer" });

  if (redirectTo) redirect(redirectTo);

  return (
    <div>
      <header>
        <h2>Dealer Portal</h2>
        <p>Logged in as: {session.user.email}</p>
        <p>Role: {session.user.role}</p>
      </header>
      <main>{children}</main>
    </div>
  );
}
