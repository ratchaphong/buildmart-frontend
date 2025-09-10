"use client";

import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";
import "./Footer.css";
import { useFooter } from "./useFooter";

export default function Footer() {
  const { footerData } = useFooter();
  return (
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
  );
}
