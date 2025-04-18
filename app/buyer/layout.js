// app/buyer/layout.js
import { redirect } from "next/navigation";
import { protectPage } from "@/lib/auth/page-protect";

export default async function BuyerLayout({ children }) {
  const { session, redirectTo } = await protectPage({ requiredRole: "buyer" });

  if (redirectTo) redirect(redirectTo);

  return (
    <div>
      <header>
        <h2>Buyer Portal</h2>
        <p>Logged in as: {session.user.email}</p>
        <p>Role: {session.user.role}</p>
      </header>
      <main>{children}</main>
    </div>
  );
}
