import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export default function Lesson4Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6">
        <header className="mb-8 rounded-2xl border border-amber-500/30 bg-white/5 p-6">
          <p className="text-sm text-[#f5e6a3]">الدرس الرابع</p>
          <h1 className="mt-2 text-3xl font-extrabold text-white">الموارد البشرية والنشاط الاقتصادي</h1>
          <p className="mt-4 text-white/80">
            السكان والزراعة والصناعة والسياحة أعمدة مهمة في اقتصاد مصر. التعليم والصحة
            يرفعان جودة الحياة والإنتاج.
          </p>
        </header>
        <article className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 leading-relaxed text-white/85">
          <h2 className="text-lg font-bold text-[#7dd3fc]">نقاط للمناقشة في الصف</h2>
          <ul className="list-disc space-y-2 pr-5 marker:text-[#7dd3fc]">
            <li>توزيع السكان بين الريف والحضر وضغط السكن على الوادي والدلتا.</li>
            <li>محاصيل رئيسية: قطن، قمح، أرز، خضر وفاكهة.</li>
            <li>سياحة الآثار والشواطئ والمناخ تدعم الدخل القومي.</li>
          </ul>
          <div className="flex flex-wrap gap-3 pt-4">
            <Link
              href="/lesson3"
              className="rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold hover:bg-white/10"
            >
              ← الدرس السابق
            </Link>
            <Link
              href="/exam"
              className="rounded-xl bg-amber-600 px-4 py-2 text-sm font-bold hover:brightness-110"
            >
              الاختبارات
            </Link>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
