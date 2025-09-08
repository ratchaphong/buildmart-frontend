import Link from "next/link";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  Star,
  Truck,
  Shield,
  Headphones,
  ArrowRight,
  Calculator,
  Wrench,
  Home,
  Zap,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">
                  BuildMart
                </span>
              </Link>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="ค้นหาวัสดุก่อสร้าง, เครื่องมือ, อุปกรณ์..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Right Menu */}
            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                className="hidden sm:block text-gray-600 hover:text-blue-600 font-medium"
              >
                เข้าสู่ระบบ
              </Link>
              <Link
                href="/register"
                className="hidden sm:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium"
              >
                สมัครสมาชิก
              </Link>
              <button className="p-2 text-gray-600 hover:text-blue-600 relative">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="p-2 text-gray-600 hover:text-blue-600 lg:hidden">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                วัสดุก่อสร้าง
                <span className="block text-blue-200">คุณภาพสูง</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                ค้นหาวัสดุก่อสร้าง เครื่องมือ และอุปกรณ์ที่คุณต้องการ
                พร้อมบริการจัดส่งและติดตั้งครบวงจร
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  เริ่มช้อปปิ้ง
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  คำนวณวัสดุ
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <Home className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">วัสดุก่อสร้าง</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <Wrench className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">เครื่องมือช่าง</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <Zap className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">อุปกรณ์ไฟฟ้า</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <Calculator className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">คำนวณวัสดุ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              หมวดหมู่สินค้า
            </h2>
            <p className="text-gray-600">เลือกหมวดหมู่ที่คุณสนใจ</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "ปูน & ทราย", icon: "🏗️", color: "bg-gray-100" },
              { name: "เหล็ก & โลหะ", icon: "⚙️", color: "bg-blue-100" },
              { name: "กระเบื้อง", icon: "🧱", color: "bg-red-100" },
              { name: "ไม้ & วัสดุไม้", icon: "🪵", color: "bg-yellow-100" },
              { name: "อุปกรณ์ไฟฟ้า", icon: "⚡", color: "bg-yellow-100" },
              { name: "ระบบประปา", icon: "🚰", color: "bg-blue-100" },
              { name: "เครื่องมือช่าง", icon: "🛠️", color: "bg-gray-100" },
              { name: "วัสดุตกแต่ง", icon: "🎨", color: "bg-purple-100" },
              { name: "ความปลอดภัย", icon: "🦺", color: "bg-blue-100" },
              { name: "สวน & ภายนอก", icon: "🌳", color: "bg-green-100" },
              { name: "สี & เคมีภัณฑ์", icon: "🎨", color: "bg-pink-100" },
              { name: "ดูทั้งหมด", icon: "🔍", color: "bg-gray-100" },
            ].map((category, index) => (
              <Link
                key={index}
                href={`/products/${category.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="group"
              >
                <div
                  className={`${category.color} rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
                >
                  <div className="text-3xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              สินค้าแนะนำ
            </h2>
            <p className="text-gray-600">สินค้าคุณภาพสูงที่ลูกค้าชื่นชอบ</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "ปูนซีเมนต์ตราเสือ",
                price: "฿180",
                rating: 4.8,
                image: "🏗️",
              },
              {
                name: "เหล็กเส้น 12 มม.",
                price: "฿45",
                rating: 4.9,
                image: "🔩",
              },
              {
                name: "กระเบื้องเซรามิก",
                price: "฿120",
                rating: 4.7,
                image: "🧱",
              },
              {
                name: "ไม้ยางพารา 2x4",
                price: "฿85",
                rating: 4.6,
                image: "🪵",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-6"
              >
                <div className="text-4xl mb-4 text-center">{product.image}</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? "fill-current" : ""
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    ({product.rating})
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">
                    {product.price}
                  </span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    เพิ่มในตะกร้า
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              บริการของเรา
            </h2>
            <p className="text-gray-600">บริการครบวงจรเพื่อความสะดวกของคุณ</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">จัดส่งฟรี</h3>
              <p className="text-gray-600">
                จัดส่งฟรีเมื่อสั่งซื้อครบ 1,000 บาท
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">รับประกันคุณภาพ</h3>
              <p className="text-gray-600">สินค้าทุกชิ้นรับประกันคุณภาพ 100%</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">บริการลูกค้า 24/7</h3>
              <p className="text-gray-600">
                ทีมงานพร้อมให้คำปรึกษาตลอด 24 ชั่วโมง
              </p>
            </div>
          </div>
        </div>
      </section>

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
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">BuildMart</span>
              </div>
              <p className="text-gray-400">
                วัสดุก่อสร้างคุณภาพสูง พร้อมบริการครบวงจร
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">หมวดหมู่สินค้า</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="/products/วัสดุก่อสร้าง"
                    className="hover:text-white"
                  >
                    วัสดุก่อสร้าง
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/เครื่องมือช่าง"
                    className="hover:text-white"
                  >
                    เครื่องมือช่าง
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/อุปกรณ์ไฟฟ้า"
                    className="hover:text-white"
                  >
                    อุปกรณ์ไฟฟ้า
                  </Link>
                </li>
                <li>
                  <Link href="/products/ระบบประปา" className="hover:text-white">
                    ระบบประปา
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">บริการ</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    จัดส่งสินค้า
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    ติดตั้ง
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    คำนวณวัสดุ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    คำปรึกษา
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">ติดต่อเรา</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📞 02-123-4567</li>
                <li>📧 info@buildmart.com</li>
                <li>📍 กรุงเทพมหานคร</li>
                <li>🕒 จันทร์-เสาร์ 8:00-18:00</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BuildMart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
