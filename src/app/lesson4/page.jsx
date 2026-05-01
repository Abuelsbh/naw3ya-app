import Link from "next/link";
import { LessonFigure } from "@/components/LessonFigure";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { lesson4Figure, MEDIA_NOTE } from "@/lib/lessonMedia";

export default function Lesson4Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6">
        <p className="mb-4 text-center text-xs text-pink-200/55">{MEDIA_NOTE}</p>
        <header className="mb-8 rounded-2xl border border-pink-400/35 bg-pink-950/20 p-6">
          <p className="text-sm text-pink-200">الدرس الرابع</p>
          <h1 className="mt-2 text-3xl font-extrabold text-white">الموارد البشرية والنشاط الاقتصادي</h1>
          <p className="mt-4 text-pink-100/85">
            السكان والزراعة والصناعة والسياحة أعمدة مهمة في اقتصاد مصر. التعليم والصحة
            يرفعان جودة الحياة والإنتاج.
          </p>
        </header>
        <LessonFigure {...lesson4Figure} priority />
        <article className="mt-6 space-y-4 rounded-2xl border border-pink-400/20 bg-pink-950/20 p-6 leading-relaxed text-pink-50/88">
          <h2 className="text-lg font-bold text-pink-200">نقاط للمناقشة في الصف</h2>
          <ul className="list-disc space-y-2 pr-5 marker:text-pink-300">
            <li>توزيع السكان بين الريف والحضر وضغط السكن على الوادي والدلتا.</li>
            <li>محاصيل رئيسية: قطن، قمح، أرز، خضر وفاكهة.</li>
            <li>سياحة الآثار والشواطئ والمناخ تدعم الدخل القومي.</li>
          </ul>
          <div className="flex flex-wrap gap-3 pt-4">
            <Link
              href="/lesson3"
              className="rounded-xl border border-pink-300/35 px-4 py-2 text-sm font-semibold text-pink-50 hover:bg-pink-500/15"
            >
              ← الدرس السابق
            </Link>
            <Link
              href="/exam"
              className="rounded-xl bg-gradient-to-l from-pink-500 to-rose-500 px-4 py-2 text-sm font-bold text-white shadow-md shadow-pink-600/30 hover:brightness-110"
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
