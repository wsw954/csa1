"use client";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function BuyerDashboard() {
  const router = useRouter();

  const handleSignOut = () => {
    alert("Signing out...");
    router.push("/auth/login");
  };

  return (
    <Card>
      <h1 className="text-2xl font-bold text-center mb-6">Buyer Dashboard</h1>

      <div className="space-y-4">
        <Button onClick={() => router.push("/buyer/vehicles")}>
          View Vehicles
        </Button>

        <Button onClick={() => router.push("/buyer/requests")}>
          View Requests
        </Button>

        <Button onClick={() => router.push("/buyer/offers")}>
          View Offers
        </Button>

        <Button
          onClick={() => router.push("/buyer/settings")}
          // Custom classes if needed for different colors
          // But let's keep it simple for now
        >
          Settings
        </Button>

        <Button
          onClick={handleSignOut}
          type="button"
          className="bg-red-600 hover:bg-red-700"
        >
          Sign Out
        </Button>
      </div>
    </Card>
  );
}
