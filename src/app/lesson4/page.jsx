import Link from "next/link";
import { LessonFigure } from "@/components/LessonFigure";
import { LessonVideo } from "@/components/LessonVideo";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { lesson4Figure } from "@/lib/lessonMedia";
import { lessonVideos } from "@/lib/lessonVideos";

export default function Lesson4Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6">
        <header className="surface-card mb-8 rounded-2xl border border-theme-primary/22 p-6">
          <p className="text-sm text-theme-accent">الدرس الرابع</p>
          <h1 className="mt-2 text-3xl font-extrabold text-theme-dark">
            الموارد البشرية والنشاط الاقتصادي
          </h1>
          <p className="mt-4 text-theme-dark/85">
            السكان والزراعة والصناعة والسياحة أعمدة مهمة في اقتصاد مصر. التعليم والصحة
            يرفعان جودة الحياة والإنتاج.
          </p>
        </header>
        <section
          aria-labelledby="lesson4-video-heading"
          className="surface-card mb-8 rounded-2xl border border-theme-primary/18 p-6"
        >
          <h2 id="lesson4-video-heading" className="text-lg font-bold text-theme-accent">
            شرح مرئي للدرس
          </h2>
          <LessonVideo {...lessonVideos[4]} className="mt-4 !my-0" />
        </section>
        <LessonFigure {...lesson4Figure} priority />
        <article className="surface-card mt-6 space-y-4 rounded-2xl border border-theme-primary/15 p-6 leading-relaxed text-theme-dark/88">
          <h2 className="text-lg font-bold text-theme-accent">نقاط للمناقشة في الصف</h2>
          <ul className="list-disc space-y-2 pr-5 marker:text-theme-accent">
            <li>توزيع السكان بين الريف والحضر وضغط السكن على الوادي والدلتا.</li>
            <li>محاصيل رئيسية: قطن، قمح، أرز، خضر وفاكهة.</li>
            <li>سياحة الآثار والشواطئ والمناخ تدعم الدخل القومي.</li>
          </ul>
          <div className="flex flex-wrap gap-3 pt-4">
            <Link
              href="/lesson3"
              className="rounded-xl border border-theme-accent/35 px-4 py-2 text-sm font-semibold text-theme-dark hover:bg-theme-secondary/15"
            >
              ← الدرس السابق
            </Link>
            <Link
              href="/exam"
              className="rounded-xl bg-gradient-to-l from-theme-primary to-theme-accent px-4 py-2 text-sm font-bold text-white shadow-md shadow-theme-primary/28 ring-1 ring-theme-dark/10 hover:brightness-110"
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
