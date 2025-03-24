// components/ui/Card.js
export default function Card({ children }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      {children}
    </div>
  );
}
