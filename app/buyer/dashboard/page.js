// /app/buyer/dashboard/page.js
"use client";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

import DashboardLayout from "@/components/layouts/DashboardLayout";
import DashboardButton from "@/components/ui/DashboardButton";

export default function BuyerDashboard() {
  const router = useRouter();

  const handleSignOut = () => {
    signOut({ callbackUrl: "/auth/login" });
  };

  return (
    <DashboardLayout title="Buyer Dashboard">
      <DashboardButton onClick={() => router.push("/vehicle/new")}>
        Build a Vehicle
      </DashboardButton>

      <DashboardButton onClick={() => router.push("/request/page")}>
        View Requests
      </DashboardButton>

      <DashboardButton onClick={() => router.push("/offer/page")}>
        View Offers
      </DashboardButton>

      <DashboardButton onClick={() => router.push("/buyer/profile")}>
        Settings
      </DashboardButton>

      <DashboardButton
        onClick={handleSignOut}
        className="bg-red-600 hover:bg-red-700"
      >
        Sign Out
      </DashboardButton>
    </DashboardLayout>
  );
}
