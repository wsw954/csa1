// /app/auth/signup/page.js
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, getSession } from "next-auth/react";

import AuthFormLayout from "@/components/ui/AuthFormLayout";
import FormInput from "@/components/ui/FormInput";
import PasswordInput from "@/components/ui/PasswordInput";
import FormButton from "@/components/ui/FormButton";
import FormError from "@/components/ui/FormError";
import RoleSelect from "@/components/ui/RoleSelect";

export default function SignupPage() {
  const router = useRouter();
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
    creditScore: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

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
      // Auto sign in user after registration
      const loginResult = await signIn("credentials", {
        redirect: false,
        email: form.email,
        password: form.password,
      });

      if (loginResult?.ok) {
        const session = await getSession();
        const role = session?.user?.role;

        if (role === "buyer") {
          router.push("/buyer/dashboard");
        } else if (role === "dealer") {
          router.push("/dealer/dashboard");
        } else if (role === "admin") {
          router.push("/admin/dashboard");
        } else {
          router.push("/");
        }
      } else {
        alert("Registered, but login failed. Please log in manually.");
        router.push("/auth/login");
      }
    } else {
      setError(data.message || "Registration failed");
    }
  };

  return (
    <AuthFormLayout title="Sign Up">
      <FormError message={error} />
      <form onSubmit={handleSubmit} className="space-y-4">
        <RoleSelect value={form.role} onChange={handleChange} />

        {form.role && (
          <>
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
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
            <PasswordInput
              value={form.password}
              onChange={handleChange}
              name="password"
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
                  value={form.creditScore}
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

            <FormButton type="submit">Register</FormButton>
          </>
        )}
      </form>
    </AuthFormLayout>
  );
}
