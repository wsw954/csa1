// components/ui/FormInput.js
export default function FormInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  required,
}) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="p-2 border rounded"
      />
    </div>
  );
}
