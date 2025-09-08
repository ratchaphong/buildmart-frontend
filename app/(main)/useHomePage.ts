import { Truck, Shield, Headphones } from "lucide-react";

export interface Category {
  name: string;
  icon: string;
  color: string;
}

export interface Product {
  name: string;
  price: string;
  rating: number;
  image: string;
}

export interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export function useHomePage() {
  const categories: Category[] = [
    { name: "ปูน & ทราย", icon: "🏗️", color: "bg-gray-100" },
    { name: "เหล็ก & โลหะ", icon: "⚙️", color: "bg-blue-100" },
    { name: "กระเบื้อง", icon: "🧱", color: "bg-red-100" },
    { name: "ไม้ & วัสดุไม้", icon: "🪵", color: "bg-yellow-100" },
    { name: "อุปกรณ์ไฟฟ้า", icon: "⚡", color: "bg-yellow-100" },
    { name: "ระบบประปา", icon: "🚰", color: "bg-blue-100" },
    { name: "เครื่องมือช่าง", icon: "🛠️", color: "bg-gray-100" },
    { name: "วัสดุตกแต่ง", icon: "🎨", color: "bg-purple-100" },
    { name: "ความปลอดภัย", icon: "🦺", color: "bg-orange-100" },
    { name: "สวน & ภายนอก", icon: "🌳", color: "bg-green-100" },
    { name: "สี & เคมีภัณฑ์", icon: "🎨", color: "bg-pink-100" },
    { name: "ดูทั้งหมด", icon: "🔍", color: "bg-gray-100" },
  ];

  const featuredProducts: Product[] = [
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
  ];

  const services: Service[] = [
    {
      icon: Truck,
      title: "จัดส่งฟรี",
      description: "จัดส่งฟรีเมื่อสั่งซื้อครบ 1,000 บาท",
    },
    {
      icon: Shield,
      title: "รับประกันคุณภาพ",
      description: "สินค้าทุกชิ้นรับประกันคุณภาพ 100%",
    },
    {
      icon: Headphones,
      title: "บริการลูกค้า 24/7",
      description: "ทีมงานพร้อมให้คำปรึกษาตลอด 24 ชั่วโมง",
    },
  ];

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    // TODO: Implement search logic
  };

  const handleAddToCart = (productId: string) => {
    console.log("Adding to cart:", productId);
    // TODO: Implement add to cart logic
  };

  const handleCalculateMaterials = () => {
    console.log("Opening material calculator");
    // TODO: Navigate to calculator page
  };

  return {
    categories,
    featuredProducts,
    services,
    handleSearch,
    handleAddToCart,
    handleCalculateMaterials,
  };
}
