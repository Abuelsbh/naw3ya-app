import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export default function ExamIndexPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6">
        <h1 className="text-3xl font-extrabold text-theme-dark">الاختبارات</h1>
        <p className="mt-3 text-theme-dark/80">
          اختر اختبارًا لقياس الفهم بعد قراءة الدرس. يبدأ باختبار الدرس الأول حول موقع مصر.
        </p>
        <ul className="mt-8 space-y-4">
          <li>
            <Link
              href="/exam/lesson1"
              className="surface-card flex flex-col rounded-2xl border border-theme-primary/28 p-6 transition hover:border-theme-accent/45 hover:shadow-lg hover:shadow-theme-accent/10"
            >
              <span className="text-lg font-bold text-theme-dark">اختبار الدرس الأول</span>
              <span className="mt-1 text-sm text-theme-dark/72">
                اختيار من متعدد، صح وخطأ، وتحديد على الخريطة الذهنية
              </span>
              <span className="mt-3 text-sm font-semibold text-theme-accent">ابدأ ←</span>
            </Link>
          </li>
          <li className="surface-card rounded-2xl border border-theme-primary/15 p-6 opacity-85">
            <span className="text-lg font-bold text-theme-dark">اختبارات الدروس ٢–٤</span>
            <p className="mt-1 text-sm text-theme-dark/55">قريبًا بعد إضافة بنك أسئلة لكل درس.</p>
          </li>
        </ul>
      </main>
      <SiteFooter />
    </div>
  );
}
