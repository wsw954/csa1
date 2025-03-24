// components/layouts/DashboardLayout.js
import { useSession } from "next-auth/react";

export default function DashboardLayout({ children }) {
  const { data: session, status } = useSession();
  const userName = session?.user?.name || session?.user?.email || "User";

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Top Nav */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">CSA1</h1>
        <div className="space-x-4"></div>
        <div className="text-sm text-gray-700">
          {status === "loading" ? "Loading..." : `Welcome, ${userName}`}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6">{children}</main>
    </div>
  );
}
