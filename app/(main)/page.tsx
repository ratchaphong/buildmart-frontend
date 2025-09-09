"use client";

import { useHomePage } from "./useHomePage";

export default function HomePage() {
  const { categories, featuredProducts, services, handleCalculateMaterials } =
    useHomePage();

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="text-center">
        <h1 style={{ color: "var(--text-primary)" }}>Home Page</h1>
        <p style={{ color: "var(--text-secondary)" }}>Coming soon...</p>
      </div>
    </div>
  );
}
