import React from "react";

export default function FormInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  autoComplete = "off",
}) {
  return (
    <div className="mb-4">
      {label && <label className="block font-medium mb-1" htmlFor={name}>{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        className="w-full border px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring"
      />
    </div>
  );
}
