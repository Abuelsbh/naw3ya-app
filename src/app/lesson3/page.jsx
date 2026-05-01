import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export default function Lesson3Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6">
        <header className="mb-8 rounded-2xl border border-sky-500/30 bg-white/5 p-6">
          <p className="text-sm text-[#f5e6a3]">الدرس الثالث</p>
          <h1 className="mt-2 text-3xl font-extrabold text-white">مناخ مصر</h1>
          <p className="mt-4 text-white/80">
            يهيمن على مصر مناخ صحراوي حار جاف صيفًا، مع تأثير البحر المتوسط شمالًا. النيل
            والري يخفّفان حدة الجفاف في الزراعة.
          </p>
        </header>
        <article className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 leading-relaxed text-white/85">
          <h2 className="text-lg font-bold text-[#7dd3fc]">مظاهر المناخ</h2>
          <ul className="list-disc space-y-2 pr-5 marker:text-[#7dd3fc]">
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
              className="rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold hover:bg-white/10"
            >
              ← الدرس السابق
            </Link>
            <Link
              href="/lesson4"
              className="rounded-xl bg-sky-600 px-4 py-2 text-sm font-bold hover:brightness-110"
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
