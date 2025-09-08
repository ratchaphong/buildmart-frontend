"use client";

import { ArrowRight, Calculator } from "lucide-react";
import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import FeaturedProductsSection from "@/components/sections/FeaturedProductsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import Footer from "@/components/sections/Footer";
import { useHomePage } from "./useHomePage";

export default function HomePage() {
  const { categories, featuredProducts, services, handleCalculateMaterials } =
    useHomePage();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <CategoriesSection categories={categories} />
      <FeaturedProductsSection products={featuredProducts} />
      <ServicesSection services={services} />

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            พร้อมเริ่มโปรเจคของคุณแล้วหรือยัง?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            ใช้เครื่องมือคำนวณวัสดุของเราเพื่อประเมินความต้องการ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleCalculateMaterials}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center"
            >
              <Calculator className="w-5 h-5 mr-2" />
              คำนวณวัสดุ
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">
              ดูโปรเจคตัวอย่าง
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
