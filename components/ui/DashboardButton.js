// components/ui/DashboardButton.js
export default function DashboardButton({
  children,
  onClick,
  type = "button",
  className = "",
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-semibold ${className}`}
    >
      {children}
    </button>
  );
}
