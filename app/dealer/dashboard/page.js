//app/dealer/dashboard/page.js
"use client";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function DealerDashboard() {
  const router = useRouter();

  const handleSignOut = () => {
    signOut({ callbackUrl: "/auth/login" }); // ✅ Redirect after sign out
  };

  return (
    <DashboardLayout>
      <Card>
        <h1 className="text-2xl font-bold text-center mb-6">
          Dealer Dashboard
        </h1>

        <div className="space-y-4">
          <Button onClick={() => router.push("/dealer/requests")}>
            View Buyer Requests
          </Button>

          <Button onClick={() => router.push("/dealer/offers")}>
            View Your Offers
          </Button>

          <Button onClick={() => router.push("/dealer/vehicles")}>
            Manage Vehicles
          </Button>

          <Button onClick={() => router.push("/dealer/settings")}>
            Settings
          </Button>

          <Button
            onClick={handleSignOut}
            className="bg-red-600 hover:bg-red-700"
          >
            Sign Out
          </Button>
        </div>
      </Card>
    </DashboardLayout>
  );
}
