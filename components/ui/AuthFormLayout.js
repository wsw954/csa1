import React from "react";
import Card from "./Card"; // Assuming you already have this

export default function AuthFormLayout({ title, children }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Card>
        <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
        {children}
      </Card>
    </div>
  );
}
