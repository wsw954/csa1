//app/dealer/dashboard/page.js
"use client";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

import DashboardLayout from "@/components/layouts/DashboardLayout";
import DashboardButton from "@/components/ui/DashboardButton";

export default function DealerDashboard() {
  const router = useRouter();

  const handleSignOut = () => {
    signOut({ callbackUrl: "/auth/login" });
  };

  return (
    <DashboardLayout title="Dealer Dashboard">
      <DashboardButton onClick={() => router.push("/vehicle/new")}>
        Add Vehicle to Inventory
      </DashboardButton>

      <DashboardButton onClick={() => router.push("/request/page")}>
        View Buyer Requests
      </DashboardButton>

      <DashboardButton onClick={() => router.push("/offer/page")}>
        Manage Offers
      </DashboardButton>

      <DashboardButton onClick={() => router.push("/dealer/profile")}>
        Profile & Settings
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
