"use client";
import React, { useState } from "react";
import FormInput from "./FormInput";

export default function PasswordInput({ value, onChange, name = "password", label = "Password" }) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <FormInput
        label={label}
        name={name}
        type={show ? "text" : "password"}
        value={value}
        onChange={onChange}
        autoComplete="new-password"
      />
      <button
        type="button"
        onClick={() => setShow((prev) => !prev)}
        className="absolute right-3 top-[35px] text-lg"
        aria-label="Toggle password visibility"
      >
        {show ? "??" : "???"}
      </button>
    </div>
  );
}
