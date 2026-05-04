"use client";

import { LessonQuiz } from "@/components/LessonQuiz";
import { lesson1Questions } from "@/lib/quizLesson1";

export function Lesson1Quiz() {
  return (
    <LessonQuiz
      questions={lesson1Questions}
      reviewLessonHref="/lesson1"
      messages={{
        excellent: "أحسنت! فهمٌ قوي لموضوع موقع مصر.",
        good: "جيد — راجع جدول الحدود ودور النيل وقناة السويس.",
        retry: "لا بأس — اقرأ الدرس مرة أخرى ثم أعد المحاولة.",
      }}
      resultNotes={
        <ul className="mt-3 list-disc space-y-1 pr-5 text-right text-sm text-theme-dark/82">
          <li>
            <strong>نقاط قوة محتملة:</strong> الأسئلة التي أجبت عنها بشكل صحيح تعكس استيعابك
            لتلك الأفكار.
          </li>
          <li>
            <strong>ما يحتاج تعزيز:</strong> ركّز على الفوارق بين الحدود الطبيعية والبشرية،
            وعلى وصف موقع مصر في أفريقيا وملتقى القارات.
          </li>
        </ul>
      }
    />
  );
}
