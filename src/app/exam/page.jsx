import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export default function ExamIndexPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6">
        <h1 className="text-3xl font-extrabold text-white">الاختبارات</h1>
        <p className="mt-3 text-white/75">
          اختر اختبارًا لقياس الفهم بعد قراءة الدرس. يبدأ باختبار الدرس الأول حول موقع مصر.
        </p>
        <ul className="mt-8 space-y-4">
          <li>
            <Link
              href="/exam/lesson1"
              className="flex flex-col rounded-2xl border border-[#c5a00a]/40 bg-[#c5a00a]/10 p-6 transition hover:border-[#c5a00a]/60 hover:bg-[#c5a00a]/15"
            >
              <span className="text-lg font-bold text-white">اختبار الدرس الأول</span>
              <span className="mt-1 text-sm text-white/75">
                اختيار من متعدد، صح وخطأ، وتحديد على الخريطة الذهنية
              </span>
              <span className="mt-3 text-sm font-semibold text-[#f5e6a3]">ابدأ ←</span>
            </Link>
          </li>
          <li className="rounded-2xl border border-white/10 bg-white/5 p-6 opacity-70">
            <span className="text-lg font-bold text-white/90">اختبارات الدروس ٢–٤</span>
            <p className="mt-1 text-sm text-white/60">قريبًا بعد إضافة بنك أسئلة لكل درس.</p>
          </li>
        </ul>
      </main>
      <SiteFooter />
    </div>
  );
}
