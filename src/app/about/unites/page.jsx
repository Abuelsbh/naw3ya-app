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
        <p className="mt-3 text-white/75">
          صفحة تعرض هيكل الوحدات والروابط السريعة للدروس. المحتوى التفصيلي للدرس الأول مبني على
          وثيقة خطة الدرس المرفقة.
        </p>
        <div className="mt-10 space-y-8">
          {units.map((u) => (
            <section
              key={u.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h2 className="text-lg font-bold text-[#7dd3fc]">{u.title}</h2>
              <ul className="mt-4 space-y-2">
                {u.lessons.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-white/90 underline decoration-[#c5a00a]/50 hover:text-[#f5e6a3]">
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-white/50">
          <Link href="/" className="text-[#7dd3fc] hover:underline">
            العودة للرئيسية
          </Link>
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
