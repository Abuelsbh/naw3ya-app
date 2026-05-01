import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

const units = [
  {
    title: "الوحدة الأولى — موقع مصر",
    lessons: [
      { href: "/lesson1", name: "الدرس ١: موقع مصر الجغرافي" },
      { href: "/exam/lesson1", name: "اختبار الدرس ١" },
    ],
  },
  {
    title: "الوحدة الثانية — السطح والمناخ",
    lessons: [
      { href: "/lesson2", name: "الدرس ٢: التضاريس" },
      { href: "/lesson3", name: "الدرس ٣: المناخ" },
    ],
  },
  {
    title: "الوحدة الثالثة — النشاط البشري",
    lessons: [{ href: "/lesson4", name: "الدرس ٤: الموارد والاقتصاد" }],
  },
];

export default function AboutUnitsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6">
        <h1 className="text-3xl font-extrabold text-white">وحدات المنهج (تقسيم تعليمي)</h1>
        <p className="mt-3 text-pink-100/80">
          صفحة تعرض هيكل الوحدات والروابط السريعة للدروس. المحتوى التفصيلي للدرس الأول مبني على
          وثيقة خطة الدرس المرفقة.
        </p>
        <div className="mt-10 space-y-8">
          {units.map((u) => (
            <section
              key={u.title}
              className="rounded-2xl border border-pink-400/25 bg-pink-950/20 p-6"
            >
              <h2 className="text-lg font-bold text-pink-200">{u.title}</h2>
              <ul className="mt-4 space-y-2">
                {u.lessons.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-pink-50/95 underline decoration-pink-400/45 hover:text-pink-200"
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-pink-200/55">
          <Link href="/" className="text-pink-300 hover:underline">
            العودة للرئيسية
          </Link>
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
