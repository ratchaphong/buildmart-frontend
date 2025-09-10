export function useFooter() {
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
    footerData,
  };
}
