import Image from "next/image";
import Link from "next/link";
import { LessonVideo } from "@/components/LessonVideo";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { isRasterPublicImage } from "@/lib/imageKind";
import { lessonCardImages, MEDIA_NOTE } from "@/lib/lessonMedia";
import { homeIntroVideo, VIDEO_NOTE } from "@/lib/lessonVideos";

const lessons = [
  {
    id: 1,
    href: "/lesson1",
    title: "الدرس الأول",
    subtitle: "موقع مصر الجغرافي",
    badge: "حسب خطة الدرس",
    accent: "from-theme-primary/18 to-theme-accent/12",
    border: "border-theme-primary/35",
  },
  {
    id: 2,
    href: "/lesson2",
    title: "الدرس الثاني",
    subtitle: "سطح مصر والتضاريس",
    badge: "متابعة",
    accent: "from-theme-accent/14 to-theme-secondary/22",
    border: "border-theme-accent/32",
  },
  {
    id: 3,
    href: "/lesson3",
    title: "الدرس الثالث",
    subtitle: "مناخ مصر والظواهر الموسمية",
    badge: "متابعة",
    accent: "from-theme-secondary/22 to-theme-primary/12",
    border: "border-theme-secondary/38",
  },
  {
    id: 4,
    href: "/lesson4",
    title: "الدرس الرابع",
    subtitle: "موارد مصر البشرية والاقتصادية",
    badge: "متابعة",
    accent: "from-theme-primary/14 to-theme-secondary/18",
    border: "border-theme-primary/28",
  },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6">
        <section className="surface-card relative overflow-hidden rounded-3xl border border-theme-primary/18 p-8 sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 -top-28 h-72 w-72 rounded-full bg-theme-primary/18 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-theme-secondary/25 blur-3xl"
          />
          <p className="relative text-sm font-medium text-theme-primary">
            الصف الرابع الابتدائي — جغرافيا
          </p>
          <h1 className="relative mt-3 text-3xl font-extrabold leading-tight text-theme-dark sm:text-4xl md:text-5xl">
            مرحبًا بك في منصة{" "}
            <span className="bg-gradient-to-l from-theme-primary via-theme-accent to-theme-secondary bg-clip-text text-transparent">
              «نوعية»
            </span>
          </h1>
          <p className="relative mt-5 max-w-2xl text-lg leading-relaxed text-theme-dark/85">
            تعلّم تفاعلي باللغة العربية: دروس مع صور توضيحية (خريطة، علم، نيل، قناة السويس…)،
            ثم اختبار يقيّم فهمك.
          </p>
          <p className="relative mt-2 text-xs text-theme-dark/50">{MEDIA_NOTE}</p>
          <div className="relative mt-8 flex flex-wrap gap-3">
            <Link
              href="/lesson1"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-l from-theme-primary to-theme-accent px-6 py-3 text-base font-bold text-white shadow-lg shadow-theme-primary/30 ring-1 ring-theme-dark/10 transition hover:brightness-110"
            >
              ابدأ الدرس الأول
            </Link>
            <Link
              href="/exam/lesson1"
              className="inline-flex items-center justify-center rounded-xl border border-theme-accent/35 bg-white/75 px-6 py-3 text-base font-semibold text-theme-dark backdrop-blur-sm transition hover:bg-theme-secondary/15"
            >
              اختبار سريع — الدرس ١
            </Link>
          </div>
        </section>

        <section className="surface-card mt-12 rounded-2xl border border-theme-primary/15 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-theme-dark">فيديو تعريفي</h2>
          <p className="mt-2 text-xs text-theme-dark/55">{VIDEO_NOTE}</p>
          <LessonVideo {...homeIntroVideo} className="mt-5 !my-0" />
        </section>

        <h2 className="mt-14 text-xl font-bold text-theme-dark">الدروس</h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          {lessons.map((l) => {
            const thumb = lessonCardImages[l.id];
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`group surface-card flex h-full flex-col overflow-hidden rounded-2xl border bg-gradient-to-br transition hover:border-theme-accent/45 hover:shadow-lg hover:shadow-theme-accent/10 ${l.border} ${l.accent}`}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-theme-primary/12 bg-theme-dark/[0.04]">
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
                  <div className="flex flex-1 flex-col bg-white/40 p-5 backdrop-blur-[2px]">
                    <span className="w-fit rounded-full bg-theme-primary/12 px-3 py-1 text-xs font-medium text-theme-dark ring-1 ring-theme-primary/20">
                      {l.badge}
                    </span>
                    <h3 className="mt-3 text-lg font-bold text-theme-dark group-hover:text-theme-accent">
                      {l.title}
                    </h3>
                    <p className="mt-1 flex-1 text-theme-dark/75">{l.subtitle}</p>
                    <span className="mt-4 text-sm font-semibold text-theme-accent/95">
                      انتقل إلى الدرس ←
                    </span>
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
