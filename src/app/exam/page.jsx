import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export default function ExamIndexPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6">
        <h1 className="text-3xl font-extrabold text-white">الاختبارات</h1>
        <p className="mt-3 text-pink-100/80">
          اختر اختبارًا لقياس الفهم بعد قراءة الدرس. يبدأ باختبار الدرس الأول حول موقع مصر.
        </p>
        <ul className="mt-8 space-y-4">
          <li>
            <Link
              href="/exam/lesson1"
              className="flex flex-col rounded-2xl border border-pink-400/45 bg-pink-950/25 p-6 transition hover:border-pink-300/60 hover:bg-pink-500/10"
            >
              <span className="text-lg font-bold text-white">اختبار الدرس الأول</span>
              <span className="mt-1 text-sm text-pink-100/75">
                اختيار من متعدد، صح وخطأ، وتحديد على الخريطة الذهنية
              </span>
              <span className="mt-3 text-sm font-semibold text-pink-200">ابدأ ←</span>
            </Link>
          </li>
          <li className="rounded-2xl border border-pink-400/20 bg-pink-950/15 p-6 opacity-80">
            <span className="text-lg font-bold text-pink-50">اختبارات الدروس ٢–٤</span>
            <p className="mt-1 text-sm text-pink-200/65">قريبًا بعد إضافة بنك أسئلة لكل درس.</p>
          </li>
        </ul>
      </main>
      <SiteFooter />
    </div>
  );
}
