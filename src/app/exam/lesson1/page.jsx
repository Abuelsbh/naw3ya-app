import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { Lesson1Quiz } from "@/components/Lesson1Quiz";

export const metadata = {
  title: "اختبار الدرس الأول — نوعية",
  description: "أسئلة تفاعلية عن موقع مصر الجغرافي",
};

export default function ExamLesson1Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6">
        <header className="mb-8">
          <p className="text-sm font-medium text-theme-accent">Lesson1_Quiz — حسب خطة الدرس</p>
          <h1 className="mt-2 text-3xl font-extrabold text-theme-dark">اختبار: موقع مصر الجغرافي</h1>
          <p className="mt-3 text-theme-dark/80">
            أجب عن جميع الأسئلة ثم اضغط «إنهاء وتقييم» لعرض النتيجة النهائية والملخص التشجيعي.
          </p>
        </header>
        <Lesson1Quiz />
      </main>
      <SiteFooter />
    </div>
  );
}
