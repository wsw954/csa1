//components/vehicle/form
import React from "react";

export default function FormField({
  label,
  htmlFor,
  children,
  helperText,
  required = false,
}) {
  return (
    <div className="flex flex-col space-y-1">
      {label && (
        <label htmlFor={htmlFor} className="text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {children}

      {helperText && <p className="text-xs text-gray-500 mt-1">{helperText}</p>}
    </div>
  );
}
