"use client";

import { useForgotPassword } from "./useForgotPassword";

export default function ForgotPasswordPage() {
  const { handleSubmit, isLoading } = useForgotPassword();

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="text-center">
        <h1 style={{ color: "var(--text-primary)" }}>Forgot Password Page</h1>
        <p style={{ color: "var(--text-secondary)" }}>Coming soon...</p>
      </div>
    </div>
  );
}
