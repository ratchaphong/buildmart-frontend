"use client";

import { useLogin } from "./useLogin";

export default function LoginPage() {
  const { handleSubmit, isLoading } = useLogin();

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="text-center">
        <h1 style={{ color: "var(--text-primary)" }}>Login Page</h1>
        <p style={{ color: "var(--text-secondary)" }}>Coming soon...</p>
      </div>
    </div>
  );
}
