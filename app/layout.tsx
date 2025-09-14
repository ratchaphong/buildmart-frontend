import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import StructuredData from "../components/StructuredData";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
});

// metadata สำหรับ SEO
export const metadata: Metadata = {
  // ข้อมูลพื้นฐานของเว็บไซต์
  title: {
    default: "BuildMart - วัสดุก่อสร้างคุณภาพสูง",
    template: "%s | BuildMart", // หน้าอื่นๆ จะมี | BuildMart ต่อท้าย
  },
  description:
    "BuildMart - แพลตฟอร์มขายวัสดุก่อสร้าง เครื่องมือ และอุปกรณ์คุณภาพสูง พร้อมบริการจัดส่งและติดตั้งครบวงจร",
  keywords: [
    "วัสดุก่อสร้าง",
    "เครื่องมือช่าง",
    "อุปกรณ์ไฟฟ้า",
    "ระบบประปา",
    "ปูนซีเมนต์",
    "เหล็ก",
    "กระเบื้อง",
    "ไม้",
    "สี",
    "e-commerce",
    "BuildMart",
  ],

  // Open Graph - สำหรับ Facebook, LinkedIn, LINE และแพลตฟอร์มอื่นๆ
  openGraph: {
    type: "website",
    locale: "th_TH", // ภาษาไทย
    url: "https://buildmart.com",
    siteName: "BuildMart",
    title: "BuildMart - วัสดุก่อสร้างคุณภาพสูง",
    description:
      "BuildMart - แพลตฟอร์มขายวัสดุก่อสร้าง เครื่องมือ และอุปกรณ์คุณภาพสูง พร้อมบริการจัดส่งและติดตั้งครบวงจร",
    images: [
      {
        url: "/og-image.svg", // รูปภาพที่แสดงเมื่อแชร์ลิงค์
        width: 1200,
        height: 630,
        alt: "BuildMart - วัสดุก่อสร้างคุณภาพสูง",
      },
    ],
  },

  // Twitter Card - สำหรับ Twitter
  twitter: {
    card: "summary_large_image", // แสดงรูปภาพใหญ่
    title: "BuildMart - วัสดุก่อสร้างคุณภาพสูง",
    description:
      "BuildMart - แพลตฟอร์มขายวัสดุก่อสร้าง เครื่องมือ และอุปกรณ์คุณภาพสูง พร้อมบริการจัดส่งและติดตั้งครบวงจร",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <head>
        <StructuredData />
      </head>
      <body className={`${kanit.variable} antialiased`}>{children}</body>
    </html>
  );
}
