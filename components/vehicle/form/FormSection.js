//components/vehicle/form
import React from "react";

export default function FormSection({ title, description, children }) {
  return (
    <section className="mb-8 border-b border-gray-300 pb-6">
      {title && (
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      )}
      {description && (
        <p className="text-sm text-gray-600 mb-4">{description}</p>
      )}
      <div className="space-y-4">{children}</div>
    </section>
  );
}
