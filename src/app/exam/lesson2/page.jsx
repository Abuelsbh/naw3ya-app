import { LessonQuiz } from "@/components/LessonQuiz";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { lesson2Questions } from "@/lib/quizLesson2";

export const metadata = {
  title: "اختبار الدرس الثاني — نوعية",
  description: "أسئلة تفاعلية عن سطح مصر والتضاريس",
};

export default function ExamLesson2Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6">
        <header className="mb-8">
          <p className="text-sm font-medium text-theme-accent">الدرس الثاني — اختبار قصير</p>
          <h1 className="mt-2 text-3xl font-extrabold text-theme-dark">اختبار: سطح مصر والتضاريس</h1>
          <p className="mt-3 text-theme-dark/80">
            أجب عن جميع الأسئلة ثم اضغط «إنهاء وتقييم» لعرض النتيجة.
          </p>
        </header>
        <LessonQuiz
          questions={lesson2Questions}
          reviewLessonHref="/lesson2"
          messages={{
            excellent: "أحسنت! تمكّنت من ربط الهضاب والوادي والدلتا والواحات.",
            good: "جيد — راجع الفرق بين الصحراء الغربية والهضبة الشرقية ودور وادي النيل.",
            retry: "راجع «أهم الأفكار» في الدرس ثم أعد المحاولة.",
          }}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
