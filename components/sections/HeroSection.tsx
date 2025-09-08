import { Home, Wrench, Zap, Calculator } from "lucide-react";

export default function HeroSection() {
  return (
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
  );
}
