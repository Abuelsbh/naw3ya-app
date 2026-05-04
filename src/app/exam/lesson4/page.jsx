import { LessonQuiz } from "@/components/LessonQuiz";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { lesson4Questions } from "@/lib/quizLesson4";

export const metadata = {
  title: "اختبار الدرس الرابع — نوعية",
  description: "أسئلة تفاعلية عن الموارد البشرية والاقتصاد",
};

export default function ExamLesson4Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6">
        <header className="mb-8">
          <p className="text-sm font-medium text-theme-accent">الدرس الرابع — اختبار قصير</p>
          <h1 className="mt-2 text-3xl font-extrabold text-theme-dark">
            اختبار: الموارد البشرية والنشاط الاقتصادي
          </h1>
          <p className="mt-3 text-theme-dark/80">
            أجب عن جميع الأسئلة ثم اضغط «إنهاء وتقييم» لعرض النتيجة.
          </p>
        </header>
        <LessonQuiz
          questions={lesson4Questions}
          reviewLessonHref="/lesson4"
          messages={{
            excellent: "أحسنت! ربطت بين السكان والزراعة والصناعة والسياحة.",
            good: "جيد — راجع توزيع السكان والمحاصيل ودور التعليم والصحة.",
            retry: "راجع نقاط المناقشة في الدرس ثم أعد المحاولة.",
          }}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
