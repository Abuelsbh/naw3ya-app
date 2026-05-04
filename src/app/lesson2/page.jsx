import Link from "next/link";
import { LessonFigure } from "@/components/LessonFigure";
import { LessonVideo } from "@/components/LessonVideo";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { lesson2Figure, MEDIA_NOTE } from "@/lib/lessonMedia";
import { lessonVideos, VIDEO_NOTE } from "@/lib/lessonVideos";

export default function Lesson2Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6">
        <p className="mb-2 text-center text-xs text-theme-dark/50">{MEDIA_NOTE}</p>
        <p className="mb-4 text-center text-xs text-theme-dark/50">{VIDEO_NOTE}</p>
        <header className="surface-card mb-8 rounded-2xl border border-theme-primary/22 p-6">
          <p className="text-sm text-theme-accent">الدرس الثاني</p>
          <h1 className="mt-2 text-3xl font-extrabold text-theme-dark">سطح مصر والتضاريس</h1>
          <p className="mt-4 text-theme-dark/85">
            مصر تضاريسها متنوعة: دلتا ووادي نيل وصحراء ومرتفعات شرقية وغربية. فهم السطح يساعدنا
            على معرفة أماكن العيش والزراعة والسياحة.
          </p>
        </header>
        <section
          aria-labelledby="lesson2-video-heading"
          className="surface-card mb-8 rounded-2xl border border-theme-primary/18 p-6"
        >
          <h2 id="lesson2-video-heading" className="text-lg font-bold text-theme-accent">
            شرح مرئي للدرس
          </h2>
          <LessonVideo {...lessonVideos[2]} className="mt-4 !my-0" />
        </section>
        <LessonFigure {...lesson2Figure} priority />
        <article className="surface-card mt-6 space-y-4 rounded-2xl border border-theme-primary/15 p-6 leading-relaxed text-theme-dark/88">
          <h2 className="text-lg font-bold text-theme-accent">أهم الأفكار</h2>
          <ul className="list-disc space-y-2 pr-5 marker:text-theme-accent">
            <li>
              <strong>هضبة</strong> شرقية (مثل جبال البحر الأحمر) و<strong>هضبة</strong> غربية
              نحو واحات الصحراء الغربية.
            </li>
            <li>
              <strong>وادي النيل</strong> و<strong>دلتا النيل</strong> أخصب الأراضي وأكثرها
              سكانًا.
            </li>
            <li>
              الواحات في الصحراء الغربية تُعدُّ بؤر خضرة وتاريخ في قلب الرمال.
            </li>
          </ul>
          <div className="flex flex-wrap gap-3 pt-4">
            <Link
              href="/lesson1"
              className="rounded-xl border border-theme-accent/35 px-4 py-2 text-sm font-semibold text-theme-dark hover:bg-theme-secondary/15"
            >
              ← الدرس السابق
            </Link>
            <Link
              href="/lesson3"
              className="rounded-xl bg-gradient-to-l from-theme-primary to-theme-accent px-4 py-2 text-sm font-bold text-white shadow-md shadow-theme-primary/28 ring-1 ring-theme-dark/10 hover:brightness-110"
            >
              الدرس التالي
            </Link>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
