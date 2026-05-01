import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-pink-400/25 bg-[#2d1320]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 text-xs font-extrabold text-white shadow-lg shadow-pink-600/40">
            مصر
          </span>
          <span className="text-pink-50">نوعية — تعلم جغرافيا مصر</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-2 text-sm font-medium">
          <Link
            href="/lesson1"
            className="rounded-lg px-3 py-1.5 text-pink-100/95 transition hover:bg-pink-500/15 hover:text-white"
          >
            الدرس ١
          </Link>
          <Link
            href="/lesson2"
            className="rounded-lg px-3 py-1.5 text-pink-100/95 transition hover:bg-pink-500/15 hover:text-white"
          >
            الدرس ٢
          </Link>
          <Link
            href="/lesson3"
            className="rounded-lg px-3 py-1.5 text-pink-100/95 transition hover:bg-pink-500/15 hover:text-white"
          >
            الدرس ٣
          </Link>
          <Link
            href="/lesson4"
            className="rounded-lg px-3 py-1.5 text-pink-100/95 transition hover:bg-pink-500/15 hover:text-white"
          >
            الدرس ٤
          </Link>
          <Link
            href="/exam"
            className="rounded-lg bg-pink-500/25 px-3 py-1.5 text-pink-100 ring-1 ring-pink-400/45 transition hover:bg-pink-500/35"
          >
            الاختبارات
          </Link>
          <Link
            href="/about/unites"
            className="rounded-lg px-3 py-1.5 text-pink-100/95 transition hover:bg-pink-500/15 hover:text-white"
          >
            الوحدات
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-pink-400/20 bg-black/25 px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-5xl text-center text-sm text-pink-200/55">
        <p>منصة تعليمية — موقع مصر الجغرافي والتقسيم التعليمي</p>
        <p className="mt-1">الصف الرابع الابتدائي</p>
      </div>
    </footer>
  );
}
