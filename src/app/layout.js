import "./globals.css";
import { Tajawal } from "next/font/google";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-tajawal",
});

export const metadata = {
  title: "نوعية — منصة التعلم: جغرافيا مصر",
  description: "منصة تعليمية تفاعلية لدراسة جغرافيا مصر — الصف الرابع الابتدائي",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable}>
      <body
        className={`${tajawal.className} min-h-screen bg-gradient-to-b from-[#0f2840] via-[#153a52] to-[#0a1a28] text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
