import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

const values = [
  {
    icon: "⭐",
    title: "رؤيتنا",
    body: "تمكين الطلاب من استكشاف جغرافيا مصر بأسلوب شيق وتفاعلي.",
  },
  {
    icon: "🚀",
    title: "رسالتنا",
    body: "تقديم محتوى علمي دقيق ومبسّط ينمّي حبّ الاستطلاع والفهم المكاني.",
  },
  {
    icon: "💎",
    title: "قيمنا",
    body: "الإبداع، الدقة العلمية، وسهولة الوصول للمعلومة.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-6 sm:py-10">
        <h1 className="text-3xl font-extrabold text-theme-dark">عن المنصة</h1>
        <p className="mt-3 max-w-2xl text-theme-dark/80">
          رؤيتنا ورسالتنا وفريق العمل: منصة نوعية لتعلم جغرافيا مصر للصف الرابع الابتدائي.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((item) => (
            <section
              key={item.title}
              className="surface-card flex flex-col items-center rounded-2xl border border-theme-primary/18 px-6 py-8 text-center"
            >
              <span
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-theme-primary/12 text-2xl ring-1 ring-theme-primary/20"
                aria-hidden
              >
                {item.icon}
              </span>
              <h2 className="mt-5 text-lg font-bold text-theme-accent">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-theme-dark/85">
                {item.body}
              </p>
            </section>
          ))}
        </div>

        <section className="surface-card mt-10 rounded-2xl border border-theme-primary/18 p-6 sm:p-8">
          <h2 className="flex items-center gap-3 text-lg font-bold text-theme-accent sm:text-xl">
            <span
              className="h-7 w-1 rounded-full bg-theme-secondary"
              aria-hidden
            />
            القائمون على المشروع
          </h2>

          <div className="mt-8 grid gap-10 sm:grid-cols-2 sm:gap-12">
            <div>
              <h3 className="text-base font-bold text-theme-dark">إعداد وتطوير:</h3>
              <p className="mt-3 text-lg font-bold text-theme-dark">
                سلمى أشرف محمد
              </p>
              <p className="mt-2 text-sm text-theme-dark/75">
                طالبة بكلية تربية نوعية — قسم تكنولوجيا التعليم
              </p>
            </div>
            <div>
              <h3 className="text-base font-bold text-theme-dark">تحت إشراف:</h3>
              <ul className="mt-3 space-y-2 text-base font-medium text-theme-dark/92">
                <li>أ.د / أمل حسان</li>
                <li>أ.د / محمد عادل</li>
              </ul>
            </div>
          </div>
        </section>

        <p className="mt-10 text-center text-sm text-theme-dark/50">
          <Link href="/" className="text-theme-accent hover:underline">
            العودة للرئيسية
          </Link>
          <span className="mx-2 opacity-50">·</span>
          <Link href="/about/unites" className="text-theme-accent hover:underline">
            وحدات المنهج
          </Link>
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
