//components/ui/RoleSelect.js
export default function RoleSelect({ value, onChange, required = true }) {
  return (
    <div>
      <label className="block font-medium mb-1" htmlFor="role">
        Role
      </label>
      <select
        name="role"
        id="role"
        value={value}
        onChange={onChange}
        required={required}
        className="w-full border px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring"
      >
        <option value="">Select role...</option>
        <option value="buyer">Buyer</option>
        <option value="dealer">Dealer</option>
      </select>
    </div>
  );
}
