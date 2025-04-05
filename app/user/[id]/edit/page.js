//app/user/[id]/edit/page.js
import { redirect } from "next/navigation";
import { protectPage } from "@/lib/auth/page-protect";

export default async function EditUserPage({ params }) {
  const { session, redirectTo } = await protectPage({ requiredRole: "admin" });
  if (redirectTo) redirect(redirectTo);

  const userId = params.id;

  return (
    <div>
      <h1>Edit User: {userId}</h1>
      <p>Editing as: {session.user.email}</p>
    </div>
  );
}
