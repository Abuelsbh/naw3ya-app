import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

const lessons = [
  {
    href: "/lesson1",
    title: "الدرس الأول",
    subtitle: "موقع مصر الجغرافي",
    badge: "حسب خطة الدرس",
    accent: "from-[#c8102e]/30 to-[#1e6b8c]/30",
    border: "border-[#c8102e]/40",
  },
  {
    href: "/lesson2",
    title: "الدرس الثاني",
    subtitle: "سطح مصر والتضاريس",
    badge: "متابعة",
    accent: "from-[#1e6b8c]/25 to-[#c5a00a]/20",
    border: "border-[#1e6b8c]/40",
  },
  {
    href: "/lesson3",
    title: "الدرس الثالث",
    subtitle: "مناخ مصر والظواهر الموسمية",
    badge: "متابعة",
    accent: "from-sky-500/20 to-emerald-500/15",
    border: "border-sky-400/30",
  },
  {
    href: "/lesson4",
    title: "الدرس الرابع",
    subtitle: "موارد مصر البشرية والاقتصادية",
    badge: "متابعة",
    accent: "from-amber-500/20 to-rose-500/15",
    border: "border-amber-400/30",
  },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6">
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/40 sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#c8102e]/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-[#1e6b8c]/25 blur-3xl"
          />
          <p className="relative text-sm font-medium text-[#f5e6a3]">الصف الرابع الابتدائي — جغرافيا</p>
          <h1 className="relative mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            مرحبًا بك في منصة{" "}
            <span className="text-[#7dd3fc]">«نوعية»</span>
          </h1>
          <p className="relative mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
            تعلّم تفاعلي باللغة العربية: دروس منظّمة، تمثيل بصري لحدود مصر وموقعها، ثم اختبار
            يقيّم فهمك ويعرض ملخصًا تشجيعيًا.
          </p>
          <div className="relative mt-8 flex flex-wrap gap-3">
            <Link
              href="/lesson1"
              className="inline-flex items-center justify-center rounded-xl bg-[#c8102e] px-6 py-3 text-base font-bold text-white shadow-lg shadow-[#c8102e]/35 transition hover:brightness-110"
            >
              ابدأ الدرس الأول
            </Link>
            <Link
              href="/exam/lesson1"
              className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/5 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
            >
              اختبار سريع — الدرس ١
            </Link>
          </div>
        </section>

        <h2 className="mt-14 text-xl font-bold text-white">الدروس</h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          {lessons.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`group flex h-full flex-col rounded-2xl border bg-gradient-to-br p-6 transition hover:border-white/30 hover:bg-white/10 ${l.border} ${l.accent}`}
              >
                <span className="w-fit rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-white/90">
                  {l.badge}
                </span>
                <h3 className="mt-4 text-lg font-bold text-white group-hover:text-[#7dd3fc]">{l.title}</h3>
                <p className="mt-1 flex-1 text-white/75">{l.subtitle}</p>
                <span className="mt-4 text-sm font-semibold text-[#f5e6a3]">انتقل إلى الدرس ←</span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter />
    </div>
  );
}
