//app/auth/signup/page.js
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import FormInput from "@/components/ui/FormInput";
import FormSelect from "@/components/ui/FormSelect";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function SignupPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "",
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
      alert(data.message);
      router.push(
        payload.role === "buyer" ? "/buyer/dashboard" : "/dealer/dashboard"
      );
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Card>
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <FormSelect
            label="Role"
            name="role"
            value={form.role}
            onChange={handleChange}
            options={[
              { label: "Select role...", value: "" },
              { label: "Buyer", value: "buyer" },
              { label: "Dealer", value: "dealer" },
            ]}
            required
          />

          {form.role && (
            <>
              <h3 className="text-lg font-semibold text-center">
                Create {form.role === "buyer" ? "Buyer" : "Dealer"} Account
              </h3>

              <FormInput
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <FormInput
                label="Password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                required
              />

              <FormInput
                label="First Name"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
              />
              <FormInput
                label="Last Name"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                required
              />
              <FormInput
                label="Phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
              />

              {form.role === "buyer" && (
                <>
                  <FormInput
                    label="Address"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    required
                  />
                  <FormInput
                    label="Credit Score (optional)"
                    name="creditScore"
                    type="number"
                    value={form.creditScore || ""}
                    onChange={handleChange}
                    min="300"
                    max="850"
                  />
                </>
              )}

              {form.role === "dealer" && (
                <>
                  <FormInput
                    label="Dealership Address"
                    name="dealershipAddress"
                    value={form.dealershipAddress}
                    onChange={handleChange}
                    required
                  />
                  <FormInput
                    label="Brands (comma-separated)"
                    name="brands"
                    value={form.brands}
                    onChange={handleChange}
                    required
                  />
                </>
              )}

              <Button type="submit">Register</Button>
            </>
          )}
        </form>
      </Card>
    </div>
  );
}
