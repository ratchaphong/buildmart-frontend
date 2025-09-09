"use client";

import { useHomePage } from "./useHomePage";
import "./homepage.css";

export default function HomePage() {
  const { categories, featuredProducts, services, handleCalculateMaterials } =
    useHomePage();

  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">อุปกรณ์ก่อสร้างครบครัน</h1>
          <p className="hero-subtitle">
            วัสดุก่อสร้าง เครื่องมือ และบริการคุณภาพสูง
          </p>
          <button className="btn-secondary">ช้อปเลย</button>
        </div>
      </section>

      {/* Rest of your content */}
    </div>
  );
}
