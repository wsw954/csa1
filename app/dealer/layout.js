// app/dealer/layout.js
"use client";
import { useSession } from "next-auth/react";

import DashboardLayout from "@/components/layouts/DashboardLayout";

export default function Layout({ children }) {
  const { data: session, status } = useSession();
  if (status === "loading") return <div>Loading...</div>;
  if (!session) return <p>Access Denied</p>;

  return <DashboardLayout>{children}</DashboardLayout>;
}
