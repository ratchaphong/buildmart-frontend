export function useHomePage() {
  const featuredProducts = [
    {
      id: 1,
      name: "ปูนซีเมนต์ปอร์ตแลนด์",
      category: "วัสดุก่อสร้าง",
      price: 180,
      originalPrice: 200,
      discount: 10,
      rating: 4.5,
      reviewCount: 128,
      isNew: false,
    },
    {
      id: 2,
      name: "อิฐมอญแดง",
      category: "วัสดุก่อสร้าง",
      price: 8,
      originalPrice: null,
      discount: null,
      rating: 4.2,
      reviewCount: 89,
      isNew: true,
    },
    {
      id: 3,
      name: "ค้อนยาง 16 ออนซ์",
      category: "เครื่องมือ",
      price: 450,
      originalPrice: 500,
      discount: 10,
      rating: 4.8,
      reviewCount: 67,
      isNew: false,
    },
    {
      id: 4,
      name: "สายไฟ THW 2.5 ตร.มม.",
      category: "อุปกรณ์ไฟฟ้า",
      price: 35,
      originalPrice: null,
      discount: null,
      rating: 4.3,
      reviewCount: 156,
      isNew: false,
    },
    {
      id: 5,
      name: "กระเบื้องเซรามิก 30x30",
      category: "วัสดุตกแต่ง",
      price: 120,
      originalPrice: 150,
      discount: 20,
      rating: 4.6,
      reviewCount: 203,
      isNew: true,
    },
    {
      id: 6,
      name: "สว่านไฟฟ้าไร้สาย",
      category: "เครื่องมือ",
      price: 2500,
      originalPrice: 3000,
      discount: 17,
      rating: 4.7,
      reviewCount: 94,
      isNew: false,
    },
  ];

  const whyChooseUs = [
    {
      iconType: "shield",
      title: "คุณภาพดีเยี่ยม",
      description:
        "สินค้าคุณภาพสูง ผ่านการตรวจสอบมาตรฐาน รับประกันความแข็งแรงและทนทาน",
    },
    {
      iconType: "truck",
      title: "จัดส่งรวดเร็ว",
      description:
        "บริการจัดส่งทั่วประเทศ รับสินค้าได้ภายใน 1-3 วันทำการ พร้อมติดตามสถานะ",
    },
    {
      iconType: "award",
      title: "ราคาแข่งขัน",
      description:
        "ราคาดีที่สุดในตลาด พร้อมโปรโมชั่นและส่วนลดพิเศษสำหรับลูกค้าทุกท่าน",
    },
    {
      iconType: "clock",
      title: "บริการ 24/7",
      description:
        "ทีมงานพร้อมให้คำปรึกษาและบริการลูกค้าตลอด 24 ชั่วโมง ทุกวัน",
    },
  ];

  const footerData = {
    quickLinks: [
      { name: "หน้าแรก", url: "/" },
      { name: "เกี่ยวกับเรา", url: "/about" },
      { name: "โปรโมชั่น", url: "/promotions" },
      { name: "บริการ", url: "/services" },
      { name: "ติดต่อเรา", url: "/contact" },
    ],
    categories: [
      { name: "วัสดุก่อสร้าง", url: "/categories/construction" },
      { name: "เครื่องมือ", url: "/categories/tools" },
      { name: "อุปกรณ์ไฟฟ้า", url: "/categories/electrical" },
      { name: "วัสดุตกแต่ง", url: "/categories/decorative" },
      { name: "อุปกรณ์สุขภัณฑ์", url: "/categories/plumbing" },
    ],
  };

  return {
    featuredProducts,
    whyChooseUs,
    footerData,
  };
}
