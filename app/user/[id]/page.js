//app/user/[id]/page.js
import { redirect } from "next/navigation";
import { protectPage } from "@/lib/auth/page-protect";

export default async function ShowUserPage({ params }) {
  const { session, redirectTo } = await protectPage({ requiredRole: "admin" });
  if (redirectTo) redirect(redirectTo);

  const userId = params.id;

  return (
    <div>
      <h1>Show a User - Admin only</h1>
      <h1>Admin View - User: {userId}</h1>
      <p>Admin: {session.user.email}</p>
    </div>
  );
}
