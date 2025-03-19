//app/auth/signup/page.js
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "buyer",
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    dealershipAddress: "",
    brands: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...form };

    // Convert brands to an array if dealer
    if (payload.role === "dealer") {
      payload.brands = payload.brands.split(",").map((brand) => brand.trim());
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();

    if (res.ok) {
      alert(data.message); // Success message

      // Redirect only if the registered user is a buyer
      if (payload.role === "buyer") {
        router.push("/buyer/dashboard");
      } else {
        // Redirect dealer to a different page if needed
        router.push("/dealer/dashboard");
      }
    } else {
      alert(data.message); // Show error if registration fails
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
              className="p-2 border rounded"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
              className="p-2 border rounded"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium">Role</label>
            <select
              name="role"
              onChange={handleChange}
              className="p-2 border rounded"
            >
              <option value="buyer">Buyer</option>
              <option value="dealer">Dealer</option>
            </select>
          </div>

          {form.role === "buyer" && (
            <>
              <div className="flex flex-col">
                <label className="text-sm font-medium">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  onChange={handleChange}
                  required
                  className="p-2 border rounded"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={handleChange}
                  required
                  className="p-2 border rounded"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium">Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  onChange={handleChange}
                  required
                  className="p-2 border rounded"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium">Phone</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  onChange={handleChange}
                  required
                  className="p-2 border rounded"
                />
              </div>
            </>
          )}

          {form.role === "dealer" && (
            <>
              <div className="flex flex-col">
                <label className="text-sm font-medium">
                  Dealership Address
                </label>
                <input
                  type="text"
                  name="dealershipAddress"
                  placeholder="Dealership Address"
                  onChange={handleChange}
                  required
                  className="p-2 border rounded"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium">
                  Brands (comma-separated)
                </label>
                <input
                  type="text"
                  name="brands"
                  placeholder="Brands (comma-separated)"
                  onChange={handleChange}
                  required
                  className="p-2 border rounded"
                />
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
