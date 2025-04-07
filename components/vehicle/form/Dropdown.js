import React from "react";

export default function Dropdown({
  id,
  value,
  options = [],
  onChange,
  disabled = false,
  className = "",
  placeholder = "Select an option",
}) {
  return (
    <select
      id={id}
      name={id}
      value={value}
      onChange={(e) => {
        const selectedOption = options.find((opt) => opt.id === e.target.value);
        onChange(e, {
          id: e.target.value,
          name: selectedOption?.name || "",
          isChecked: true,
        });
      }}
      disabled={disabled}
      className={`w-full px-3 py-2 border rounded-md shadow-sm bg-white text-sm text-gray-800
        border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
        disabled:bg-gray-100 disabled:text-gray-400 ${className}`}
    >
      <option value="">{placeholder}</option>
      {options.map((opt) => (
        <option key={opt.id} value={opt.id}>
          {opt.name}
        </option>
      ))}
    </select>
  );
}
