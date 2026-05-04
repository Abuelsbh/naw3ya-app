import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

const exams = [
  {
    href: "/exam/lesson1",
    title: "اختبار الدرس الأول",
    subtitle: "موقع مصر الجغرافي — اختيار من متعدد، صح وخطأ، وتحديد على الخريطة الذهنية",
  },
  {
    href: "/exam/lesson2",
    title: "اختبار الدرس الثاني",
    subtitle: "سطح مصر والتضاريس — وادي النيل، الهضاب، الواحات، الدلتا",
  },
  {
    href: "/exam/lesson3",
    title: "اختبار الدرس الثالث",
    subtitle: "مناخ مصر — الصيف والشتاء، الأمطار، مياه الزراعة، السواحل",
  },
  {
    href: "/exam/lesson4",
    title: "اختبار الدرس الرابع",
    subtitle: "الموارد البشرية والاقتصاد — السكان، الزراعة، الصناعة، السياحة",
  },
];

export default function ExamIndexPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6">
        <h1 className="text-3xl font-extrabold text-theme-dark">الاختبارات</h1>
        <p className="mt-3 text-theme-dark/80">
          اختر اختبارًا لقياس الفهم بعد قراءة الدرس.
        </p>
        <ul className="mt-8 space-y-4">
          {exams.map((exam) => (
            <li key={exam.href}>
              <Link
                href={exam.href}
                className="surface-card flex flex-col rounded-2xl border border-theme-primary/28 p-6 transition hover:border-theme-accent/45 hover:shadow-lg hover:shadow-theme-accent/10"
              >
                <span className="text-lg font-bold text-theme-dark">{exam.title}</span>
                <span className="mt-1 text-sm text-theme-dark/72">{exam.subtitle}</span>
                <span className="mt-3 text-sm font-semibold text-theme-accent">ابدأ ←</span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter />
    </div>
  );
}
