"use client";

import {
  Search,
  User,
  ShoppingCart,
  MapPin,
  Phone,
  Mail,
  HelpCircle,
} from "lucide-react";
import "./Header.css";

export default function Header() {
  return (
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
  );
}
