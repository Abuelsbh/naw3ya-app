import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0f2840]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#c8102e] text-sm shadow-lg shadow-[#c8102e]/30">
            مصر
          </span>
          <span>نوعية — تعلم جغرافيا مصر</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-2 text-sm font-medium">
          <Link
            href="/lesson1"
            className="rounded-lg px-3 py-1.5 text-white/90 transition hover:bg-white/10 hover:text-white"
          >
            الدرس ١
          </Link>
          <Link
            href="/lesson2"
            className="rounded-lg px-3 py-1.5 text-white/90 transition hover:bg-white/10 hover:text-white"
          >
            الدرس ٢
          </Link>
          <Link
            href="/lesson3"
            className="rounded-lg px-3 py-1.5 text-white/90 transition hover:bg-white/10 hover:text-white"
          >
            الدرس ٣
          </Link>
          <Link
            href="/lesson4"
            className="rounded-lg px-3 py-1.5 text-white/90 transition hover:bg-white/10 hover:text-white"
          >
            الدرس ٤
          </Link>
          <Link
            href="/exam"
            className="rounded-lg bg-[#c5a00a]/20 px-3 py-1.5 text-[#f5e6a3] ring-1 ring-[#c5a00a]/40 transition hover:bg-[#c5a00a]/30"
          >
            الاختبارات
          </Link>
          <Link
            href="/about/unites"
            className="rounded-lg px-3 py-1.5 text-white/90 transition hover:bg-white/10 hover:text-white"
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
    <footer className="mt-auto border-t border-white/10 bg-black/20 px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-5xl text-center text-sm text-white/60">
        <p>منصة تعليمية — موقع مصر الجغرافي والتقسيم التعليمي</p>
        <p className="mt-1">الصف الرابع الابتدائي</p>
      </div>
    </footer>
  );
}
