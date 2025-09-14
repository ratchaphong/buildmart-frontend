"use client";

// Component สำหรับสร้าง JSON-LD structured data สำหรับหน้าแรก
// ใช้บอก Google ว่าเว็บไซต์นี้คืออะไร
export default function StructuredData() {
  // ข้อมูล structured data สำหรับหน้าแรก
  const websiteData = {
    "@context": "https://schema.org", // ใช้ schema.org standard
    "@type": "WebSite", // ประเภท = เว็บไซต์
    name: "BuildMart", // ชื่อเว็บไซต์
    description:
      "แพลตฟอร์มขายวัสดุก่อสร้าง เครื่องมือ และอุปกรณ์คุณภาพสูง พร้อมบริการจัดส่งและติดตั้งครบวงจร",
    url: "https://buildmart.com", // URL เว็บไซต์
    // บอก Google ว่ามีฟีเจอร์ค้นหา
    potentialAction: {
      "@type": "SearchAction",
      target: "https://buildmart.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    // ข้อมูลผู้จัดทำเว็บไซต์
    publisher: {
      "@type": "Organization",
      name: "BuildMart",
      telephone: "02-123-4567",
      email: "info@buildmart.com",
    },
  };

  // สร้าง script tag ที่มี JSON-LD data
  return (
    <script
      type="application/ld+json" // บอก browser ว่าเป็น JSON-LD
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(websiteData, null, 2), // แปลงเป็น JSON string
      }}
    />
  );
}
