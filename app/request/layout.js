//app/request/layout.js
import { redirect } from "next/navigation";
import { protectPage } from "@/lib/auth/page-protect";

export default async function RequestLayout({ children }) {
  const { session, redirectTo } = await protectPage(); // 👈 no role required yet

  if (redirectTo) redirect(redirectTo);

  return (
    <div>
      <header>
        <h2>Request Center</h2>
        <p>Logged in as: {session.user.email}</p>
      </header>
      <main>{children}</main>
    </div>
  );
}
