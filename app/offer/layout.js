//app/offer/layout.js
import { redirect } from "next/navigation";
import { protectPage } from "@/lib/auth/page-protect";

export default async function OfferLayout({ children }) {
  const { session, redirectTo } = await protectPage(); // 👈 open to all roles for now

  if (redirectTo) redirect(redirectTo);

  return (
    <div>
      <header>
        <h2>Offer Center</h2>
        <p>Logged in as: {session.user.email}</p>
      </header>
      <main>{children}</main>
    </div>
  );
}
