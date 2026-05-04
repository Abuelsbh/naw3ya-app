"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function navItemActive(pathname, href) {
  if (href === "/about/unites") {
    return pathname === "/about/unites" || pathname.startsWith("/about/unites/");
  }
  if (href === "/about") {
    return (
      pathname === "/about" ||
      (pathname.startsWith("/about/") && !pathname.startsWith("/about/unites"))
    );
  }
  if (href === "/exam") {
    return pathname === "/exam" || pathname.startsWith("/exam/");
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

const navBase =
  "rounded-lg px-3 py-1.5 text-sm font-medium transition";
const navInactive = `${navBase} text-theme-earth/90 hover:bg-white/10 hover:text-white`;
const navActive = `${navBase} bg-white/15 text-white ring-1 ring-white/30`;
const navActiveExam = `${navBase} bg-theme-secondary/35 text-white ring-1 ring-theme-secondary/55`;

export function SiteHeader() {
  const pathname = usePathname() || "";

  return (
    <header className="sticky top-0 z-50 border-b border-theme-primary/25 bg-theme-dark/92 shadow-md shadow-black/10 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className={`flex items-center gap-2 text-lg font-bold transition ${
            pathname === "/"
              ? "text-white"
              : "text-theme-earth hover:text-white/95"
          }`}
          aria-current={pathname === "/" ? "page" : undefined}
        >
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-theme-primary to-theme-accent text-xs font-extrabold text-white shadow-lg shadow-black/25 ring-1 ${
              pathname === "/" ? "ring-white/40" : "ring-white/15"
            }`}
            aria-hidden
          >
            مصر
          </span>
          <span className="max-w-[min(100%,14rem)] leading-snug sm:max-w-none">
            نوعية — تعلم جغرافيا مصر
          </span>
        </Link>
        <nav className="flex flex-wrap items-center gap-2 text-sm font-medium">
          <Link
            href="/"
            className={pathname === "/" ? navActive : navInactive}
            aria-current={pathname === "/" ? "page" : undefined}
          >
            الرئيسية
          </Link>
          <Link
            href="/lesson1"
            className={navItemActive(pathname, "/lesson1") ? navActive : navInactive}
            aria-current={navItemActive(pathname, "/lesson1") ? "page" : undefined}
          >
            الدرس ١
          </Link>
          <Link
            href="/lesson2"
            className={navItemActive(pathname, "/lesson2") ? navActive : navInactive}
            aria-current={navItemActive(pathname, "/lesson2") ? "page" : undefined}
          >
            الدرس ٢
          </Link>
          <Link
            href="/lesson3"
            className={navItemActive(pathname, "/lesson3") ? navActive : navInactive}
            aria-current={navItemActive(pathname, "/lesson3") ? "page" : undefined}
          >
            الدرس ٣
          </Link>
          <Link
            href="/lesson4"
            className={navItemActive(pathname, "/lesson4") ? navActive : navInactive}
            aria-current={navItemActive(pathname, "/lesson4") ? "page" : undefined}
          >
            الدرس ٤
          </Link>
          <Link
            href="/exam"
            className={
              navItemActive(pathname, "/exam") ? navActiveExam : navInactive
            }
            aria-current={navItemActive(pathname, "/exam") ? "page" : undefined}
          >
            الاختبارات
          </Link>
          <Link
            href="/about"
            className={navItemActive(pathname, "/about") ? navActive : navInactive}
            aria-current={navItemActive(pathname, "/about") ? "page" : undefined}
          >
            عن المنصة
          </Link>
          <Link
            href="/about/unites"
            className={
              navItemActive(pathname, "/about/unites") ? navActive : navInactive
            }
            aria-current={
              navItemActive(pathname, "/about/unites") ? "page" : undefined
            }
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
    <footer className="mt-auto border-t border-theme-primary/25 bg-theme-dark px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-5xl text-center text-sm text-theme-earth/55">
        <p>منصة تعليمية — موقع مصر الجغرافي والتقسيم التعليمي</p>
        <p className="mt-1">الصف الرابع الابتدائي</p>
      </div>
    </footer>
  );
}
