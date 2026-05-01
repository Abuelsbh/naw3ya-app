import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { isRasterPublicImage } from "@/lib/imageKind";
import { lessonCardImages, MEDIA_NOTE } from "@/lib/lessonMedia";

const lessons = [
  {
    id: 1,
    href: "/lesson1",
    title: "الدرس الأول",
    subtitle: "موقع مصر الجغرافي",
    badge: "حسب خطة الدرس",
    accent: "from-pink-500/25 to-rose-600/20",
    border: "border-pink-400/40",
  },
  {
    id: 2,
    href: "/lesson2",
    title: "الدرس الثاني",
    subtitle: "سطح مصر والتضاريس",
    badge: "متابعة",
    accent: "from-fuchsia-500/20 to-pink-600/15",
    border: "border-fuchsia-400/35",
  },
  {
    id: 3,
    href: "/lesson3",
    title: "الدرس الثالث",
    subtitle: "مناخ مصر والظواهر الموسمية",
    badge: "متابعة",
    accent: "from-rose-500/22 to-pink-500/15",
    border: "border-rose-400/35",
  },
  {
    id: 4,
    href: "/lesson4",
    title: "الدرس الرابع",
    subtitle: "موارد مصر البشرية والاقتصادية",
    badge: "متابعة",
    accent: "from-pink-400/20 to-rose-500/15",
    border: "border-pink-300/35",
  },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6">
        <section className="relative overflow-hidden rounded-3xl border border-pink-400/25 bg-pink-950/20 p-8 shadow-2xl shadow-black/40 sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-pink-500/25 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-rose-500/20 blur-3xl"
          />
          <p className="relative text-sm font-medium text-pink-200">الصف الرابع الابتدائي — جغرافيا</p>
          <h1 className="relative mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            مرحبًا بك في منصة{" "}
            <span className="bg-gradient-to-l from-pink-300 to-rose-300 bg-clip-text text-transparent">
              «نوعية»
            </span>
          </h1>
          <p className="relative mt-5 max-w-2xl text-lg leading-relaxed text-pink-100/85">
            تعلّم تفاعلي باللغة العربية: دروس مع صور توضيحية (خريطة، علم، نيل، قناة السويس…)،
            ثم اختبار يقيّم فهمك.
          </p>
          <p className="relative mt-2 text-xs text-pink-200/60">{MEDIA_NOTE}</p>
          <div className="relative mt-8 flex flex-wrap gap-3">
            <Link
              href="/lesson1"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-l from-pink-500 to-rose-500 px-6 py-3 text-base font-bold text-white shadow-lg shadow-pink-600/35 transition hover:brightness-110"
            >
              ابدأ الدرس الأول
            </Link>
            <Link
              href="/exam/lesson1"
              className="inline-flex items-center justify-center rounded-xl border border-pink-300/40 bg-pink-950/30 px-6 py-3 text-base font-semibold text-pink-50 transition hover:bg-pink-500/15"
            >
              اختبار سريع — الدرس ١
            </Link>
          </div>
        </section>

        <h2 className="mt-14 text-xl font-bold text-white">الدروس</h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          {lessons.map((l) => {
            const thumb = lessonCardImages[l.id];
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`group flex h-full flex-col overflow-hidden rounded-2xl border bg-gradient-to-br transition hover:border-pink-300/50 hover:bg-pink-950/25 ${l.border} ${l.accent}`}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-pink-400/20 bg-black/20">
                    {isRasterPublicImage(thumb.src) ? (
                      <Image
                        src={thumb.src}
                        alt={thumb.alt}
                        fill
                        className="object-contain transition duration-300 group-hover:scale-[1.02]"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={thumb.src}
                        alt={thumb.alt}
                        className="absolute inset-0 h-full w-full object-contain transition duration-300 group-hover:scale-[1.02]"
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="w-fit rounded-full bg-black/35 px-3 py-1 text-xs font-medium text-pink-100">
                      {l.badge}
                    </span>
                    <h3 className="mt-3 text-lg font-bold text-white group-hover:text-pink-200">{l.title}</h3>
                    <p className="mt-1 flex-1 text-pink-100/75">{l.subtitle}</p>
                    <span className="mt-4 text-sm font-semibold text-pink-200/95">انتقل إلى الدرس ←</span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
      <SiteFooter />
    </div>
  );
}
