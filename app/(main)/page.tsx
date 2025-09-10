"use client";

import { useHomePage } from "./useHomePage";
import {
  Search,
  User,
  ShoppingCart,
  MapPin,
  Phone,
  Mail,
  HelpCircle,
  Star,
  Shield,
  Truck,
  Award,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";
import "./homepage.css";

export default function HomePage() {
  const { featuredProducts, whyChooseUs, footerData } = useHomePage();

  return (
    <div className="homepage-container">
      {/* Header Section */}
      <header className="header-section">
        <div className="header-content">
          {/* Top Bar */}
          <div className="header-top-bar">
            <div className="header-top-left">
              <div className="contact-item">
                <Phone className="contact-icon" />
                <span>02-123-4567</span>
              </div>
              <div className="contact-item">
                <Mail className="contact-icon" />
                <span>info@buildmart.com</span>
              </div>
            </div>
            <div className="header-top-right">
              <a href="/stores" className="top-link">
                <MapPin className="top-link-icon" />
                ค้นหาสาขา
              </a>
              <a href="/help" className="top-link">
                <HelpCircle className="top-link-icon" />
                ช่วยเหลือ
              </a>
            </div>
          </div>

          {/* Main Header */}
          <div className="header-main">
            {/* Logo */}
            <div className="header-logo">
              <div className="logo-icon">B</div>
              <span className="logo-text">BuildMart</span>
            </div>

            {/* Search Bar */}
            <div className="header-search">
              <div className="search-input-wrapper">
                <Search className="search-icon" />
                <input
                  type="text"
                  placeholder="ค้นหาสินค้า, หมวดหมู่, แบรนด์..."
                  className="search-input"
                />
              </div>
            </div>
            {/* Right Actions */}
            <div className="header-actions">
              <a href="/login" className="action-link">
                <User className="header-action-icon" />
                <span>บัญชี</span>
              </a>
              <a href="/cart" className="action-link cart-link">
                <div className="cart-icon-wrapper">
                  <ShoppingCart className="header-action-icon" />
                  <span className="cart-count">0</span>
                </div>
                <span>ตะกร้า</span>
              </a>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="header-nav">
            <a href="/categories">หมวดหมู่สินค้า</a>
            <a href="/promotions">โปรโมชั่น</a>
            <a href="/services">บริการ</a>
            <a href="/projects">โครงการ</a>
            <a href="/about">เกี่ยวกับเรา</a>
          </nav>
        </div>
      </header>

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

      {/* Featured Products Section */}
      <section className="featured-products-section">
        <div className="featured-products-container">
          <div className="section-header">
            <h2 className="section-title">สินค้าแนะนำ</h2>
            <p className="section-subtitle">
              สินค้าขายดีและได้รับความนิยมสูงสุด
            </p>
          </div>

          <div className="products-grid">
            {featuredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <div className="product-image">
                    <div className="product-placeholder">
                      {product.name.charAt(0)}
                    </div>
                  </div>
                  <div className="product-badges">
                    {product.isNew && (
                      <span className="badge badge-new">ใหม่</span>
                    )}
                    {product.discount && (
                      <span className="badge badge-discount">
                        -{product.discount}%
                      </span>
                    )}
                  </div>
                </div>

                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-category">{product.category}</p>

                  <div className="product-rating">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`star ${
                            i < product.rating ? "star-filled" : "star-empty"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="rating-count">
                      ({product.reviewCount})
                    </span>
                  </div>

                  <div className="product-price">
                    {product.originalPrice && (
                      <span className="original-price">
                        ฿{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                    <span className="current-price">
                      ฿{product.price.toLocaleString()}
                    </span>
                  </div>

                  <button className="add-to-cart-btn btn-primary">
                    <ShoppingCart className="cart-icon" />
                    เพิ่มในตะกร้า
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="section-footer">
            <button className="btn-primary">ดูสินค้าทั้งหมด</button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us-section">
        <div className="why-choose-us-container">
          <div className="section-header">
            <h2 className="section-title">ทำไมต้องเลือก BuildMart</h2>
            <p className="section-subtitle">
              เรามุ่งมั่นให้บริการที่ดีที่สุดสำหรับลูกค้าทุกท่าน
            </p>
          </div>

          <div className="features-grid">
            {whyChooseUs.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  {feature.iconType === "shield" && (
                    <Shield className="feature-icon-svg" />
                  )}
                  {feature.iconType === "truck" && (
                    <Truck className="feature-icon-svg" />
                  )}
                  {feature.iconType === "award" && (
                    <Award className="feature-icon-svg" />
                  )}
                  {feature.iconType === "clock" && (
                    <Clock className="feature-icon-svg" />
                  )}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-container">
          {/* Footer Top */}
          <div className="footer-top">
            <div className="footer-grid">
              {/* Company Info */}
              <div className="footer-column">
                <div className="footer-logo">
                  <div className="logo-icon">B</div>
                  <span className="logo-text">BuildMart</span>
                </div>
                <p className="footer-description">
                  ร้านวัสดุก่อสร้างและเครื่องมือครบครัน ราคาดี คุณภาพเยี่ยม
                  พร้อมบริการจัดส่งทั่วประเทศ
                </p>
                <div className="social-links">
                  <a href="#" className="social-link">
                    <Facebook className="social-icon" />
                  </a>
                  <a href="#" className="social-link">
                    <Instagram className="social-icon" />
                  </a>
                  <a href="#" className="social-link">
                    <Youtube className="social-icon" />
                  </a>
                  <a href="#" className="social-link">
                    <Twitter className="social-icon" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="footer-column">
                <h3 className="footer-title">ลิงก์ด่วน</h3>
                <ul className="footer-links">
                  {footerData.quickLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.url} className="footer-link">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Categories */}
              <div className="footer-column">
                <h3 className="footer-title">หมวดหมู่สินค้า</h3>
                <ul className="footer-links">
                  {footerData.categories.map((category, index) => (
                    <li key={index}>
                      <a href={category.url} className="footer-link">
                        {category.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="footer-column">
                <h3 className="footer-title">ติดต่อเรา</h3>
                <div className="contact-info">
                  <div className="contact-item">
                    <Phone className="contact-icon" />
                    <span>02-123-4567</span>
                  </div>
                  <div className="contact-item">
                    <Mail className="contact-icon" />
                    <span>info@buildmart.com</span>
                  </div>
                  <div className="contact-item">
                    <MapPin className="contact-icon" />
                    <span>123 ถนนสุขุมวิท กรุงเทพฯ 10110</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="copyright">
                © 2024 BuildMart. สงวนลิขสิทธิ์ทุกประการ
              </p>
              <div className="footer-bottom-links">
                <a href="/privacy" className="footer-bottom-link">
                  นโยบายความเป็นส่วนตัว
                </a>
                <a href="/terms" className="footer-bottom-link">
                  เงื่อนไขการใช้งาน
                </a>
                <a href="/sitemap" className="footer-bottom-link">
                  แผนผังเว็บไซต์
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
