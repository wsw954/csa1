//components/ui/FormError.js
export default function FormError({ message }) {
  if (!message) return null;

  return <p className="text-red-600 mb-4 text-sm text-center">{message}</p>;
}
