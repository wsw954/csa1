import React from "react";

export default function FormButton({ children, ...props }) {
  return (
    <button
      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-semibold"
      {...props}
    >
      {children}
    </button>
  );
}
