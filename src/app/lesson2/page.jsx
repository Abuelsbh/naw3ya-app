import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export default function Lesson2Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6">
        <header className="mb-8 rounded-2xl border border-[#1e6b8c]/40 bg-white/5 p-6">
          <p className="text-sm text-[#f5e6a3]">الدرس الثاني</p>
          <h1 className="mt-2 text-3xl font-extrabold text-white">سطح مصر والتضاريس</h1>
          <p className="mt-4 text-white/80">
            مصر تضاريسها متنوعة: دلتا ووادي نيل وصحراء ومرتفعات شرقية وغربية. فهم السطح يساعدنا
            على معرفة أماكن العيش والزراعة والسياحة.
          </p>
        </header>
        <article className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 leading-relaxed text-white/85">
          <h2 className="text-lg font-bold text-[#7dd3fc]">أهم الأفكار</h2>
          <ul className="list-disc space-y-2 pr-5 marker:text-[#7dd3fc]">
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
              className="rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold hover:bg-white/10"
            >
              ← الدرس السابق
            </Link>
            <Link
              href="/lesson3"
              className="rounded-xl bg-[#1e6b8c] px-4 py-2 text-sm font-bold hover:brightness-110"
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
