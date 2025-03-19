// app/buyer/dashboard/page.js
"use client";
import { useRouter } from "next/navigation";

export default function BuyerDashboard() {
  const router = useRouter();

  const handleSignOut = () => {
    // Placeholder function to handle sign-out logic
    // You should integrate this with NextAuth's sign-out function
    alert("Signing out...");
    router.push("/auth/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Buyer Dashboard</h1>

        <div className="space-y-4">
          <button
            onClick={() => router.push("/buyer/vehicles")}
            className="w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            View Vehicles
          </button>

          <button
            onClick={() => router.push("/buyer/requests")}
            className="w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            View Requests
          </button>

          <button
            onClick={() => router.push("/buyer/offers")}
            className="w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            View Offers
          </button>

          <button
            onClick={() => router.push("/buyer/settings")}
            className="w-full py-3 text-white bg-gray-600 rounded-lg hover:bg-gray-700 transition"
          >
            Settings
          </button>

          <button
            onClick={handleSignOut}
            className="w-full py-3 text-white bg-red-600 rounded-lg hover:bg-red-700 transition"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
