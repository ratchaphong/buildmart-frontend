"use client";

import { useRegister } from "./useRegister";

export default function RegisterPage() {
  const { handleSubmit, isLoading } = useRegister();

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="text-center">
        <h1 style={{ color: "var(--text-primary)" }}>Register Page</h1>
        <p style={{ color: "var(--text-secondary)" }}>Coming soon...</p>
      </div>
    </div>
  );
}
