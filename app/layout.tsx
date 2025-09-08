import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "BuildMart - วัสดุก่อสร้างคุณภาพสูง",
    template: "%s | BuildMart",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${kanit.variable} antialiased`}>{children}</body>
    </html>
  );
}
