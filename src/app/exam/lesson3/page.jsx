import { LessonQuiz } from "@/components/LessonQuiz";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { lesson3Questions } from "@/lib/quizLesson3";

export const metadata = {
  title: "اختبار الدرس الثالث — نوعية",
  description: "أسئلة تفاعلية عن مناخ مصر والظواهر الموسمية",
};

export default function ExamLesson3Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6">
        <header className="mb-8">
          <p className="text-sm font-medium text-theme-accent">الدرس الثالث — اختبار قصير</p>
          <h1 className="mt-2 text-3xl font-extrabold text-theme-dark">اختبار: مناخ مصر والظواهر الموسمية</h1>
          <p className="mt-3 text-theme-dark/80">
            أجب عن جميع الأسئلة ثم اضغط «إنهاء وتقييم» لعرض النتيجة.
          </p>
        </header>
        <LessonQuiz
          questions={lesson3Questions}
          reviewLessonHref="/lesson3"
          messages={{
            excellent: "أحسنت! لاحظت اختلاف الصيف عن الشتاء ودور المياه في الزراعة.",
            good: "جيد — ثبّت فكرة قلة الأمطار وتأثير البحرين على السواحل.",
            retry: "راجع ملخص الدرس ثم أعد المحاولة.",
          }}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
