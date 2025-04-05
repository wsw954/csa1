//app/vehicle/layout.js
import { redirect } from "next/navigation";
import { protectPage } from "@/lib/auth/page-protect";

export default async function VehicleLayout({ children }) {
  const { session, redirectTo } = await protectPage(); // 👈 no role required yet

  if (redirectTo) redirect(redirectTo);

  return (
    <div>
      <header>
        <h2>Vehicle Center</h2>
        <p>Logged in as: {session.user.email}</p>
      </header>
      <main>{children}</main>
    </div>
  );
}
