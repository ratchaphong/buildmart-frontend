"use client";

import { useHomePage } from "./useHomePage";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Star, Shield, Truck, Award, Clock, ShoppingCart } from "lucide-react";
import "./homepage.css";

export default function HomePage() {
  const { featuredProducts, whyChooseUs } = useHomePage();

  return (
    <div className="homepage-container">
      <Header />

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

      <Footer />
    </div>
  );
}
