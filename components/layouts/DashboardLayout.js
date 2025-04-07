// components/layouts/DashboardLayout.js
export default function DashboardLayout({ title, children }) {
  return (
    <div className="p-4">
      <div className="max-w-xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-center mb-6">{title}</h1>
          <div className="space-y-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
