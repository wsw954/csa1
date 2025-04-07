//app/auth/login/page.js
"use client";
import { signIn, getSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import AuthFormLayout from "@/components/ui/AuthFormLayout";
import FormInput from "@/components/ui/FormInput";
import FormError from "@/components/ui/FormError";
import PasswordInput from "@/components/ui/PasswordInput";
import FormButton from "@/components/ui/FormButton";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.ok) {
      const session = await getSession();
      const role = session?.user?.role;

      if (role === "dealer") {
        router.push("/dealer/dashboard");
      } else if (role === "buyer") {
        router.push("/buyer/dashboard");
      } else if (role === "admin") {
        router.push("/admin/dashboard");
      } else {
        router.push("/");
      }
    }
  };

  return (
    <AuthFormLayout title="Login">
      <FormError message={error} />
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="username"
        />
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormButton type="submit">Login</FormButton>
      </form>
    </AuthFormLayout>
  );
}
