import Link from "next/link";
import { LessonFigure } from "@/components/LessonFigure";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { lesson3Figure, MEDIA_NOTE } from "@/lib/lessonMedia";

export default function Lesson3Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6">
        <p className="mb-4 text-center text-xs text-pink-200/55">{MEDIA_NOTE}</p>
        <header className="mb-8 rounded-2xl border border-rose-400/35 bg-pink-950/20 p-6">
          <p className="text-sm text-pink-200">الدرس الثالث</p>
          <h1 className="mt-2 text-3xl font-extrabold text-white">مناخ مصر</h1>
          <p className="mt-4 text-pink-100/85">
            يهيمن على مصر مناخ صحراوي حار جاف صيفًا، مع تأثير البحر المتوسط شمالًا. النيل
            والري يخفّفان حدة الجفاف في الزراعة.
          </p>
        </header>
        <LessonFigure {...lesson3Figure} priority />
        <article className="mt-6 space-y-4 rounded-2xl border border-pink-400/20 bg-pink-950/20 p-6 leading-relaxed text-pink-50/88">
          <h2 className="text-lg font-bold text-pink-200">مظاهر المناخ</h2>
          <ul className="list-disc space-y-2 pr-5 marker:text-pink-300">
            <li>
              صيف حار نهارًا؛ شتاء معتدل شمالًا وأحيانًا بارد ليلًا في الصحراء.
            </li>
            <li>
              الأمطار قليلة بشكل عام؛ أغلب المياه للزراعة من النيل والسدود والآبار.
            </li>
            <li>
              الرياح الخميسين والخريف قد ترفع الأتربة؛ البحران يعدّلان الرطوبة على السواحل.
            </li>
          </ul>
          <div className="flex flex-wrap gap-3 pt-4">
            <Link
              href="/lesson2"
              className="rounded-xl border border-pink-300/35 px-4 py-2 text-sm font-semibold text-pink-50 hover:bg-pink-500/15"
            >
              ← الدرس السابق
            </Link>
            <Link
              href="/lesson4"
              className="rounded-xl bg-gradient-to-l from-rose-500 to-pink-500 px-4 py-2 text-sm font-bold text-white shadow-md shadow-pink-600/30 hover:brightness-110"
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
