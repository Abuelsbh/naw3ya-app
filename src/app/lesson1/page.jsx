import Link from "next/link";
import { LessonFigure, LessonFigurePair } from "@/components/LessonFigure";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { lesson1Figures, MEDIA_NOTE } from "@/lib/lessonMedia";

const sections = [
  {
    id: "start",
    title: "واجهة البداية",
    goal:
      "تحديد العناصر الأساسية التي سيتناولها الدرس والإدراك بأهمية دراسة جغرافيا بلدنا.",
    body: (
      <>
        <p>
          مصر أرض الحضارة والتاريخ، تجمع بين النيل الأزرق والصحراء الذهبية والبحرين المتوسط
          والأحمر. في هذا الدرس نتعرف على <strong>موقع مصر</strong> على الخريطة، وحدودها،
          ودور هذا الموقع في الحياة والتجارة.
        </p>
        <p className="mt-3">
          تخيّل خريطة مصر مع علمها ورموزها الوطنية: هذه اللحظة تمهّدنا ذهنيًا لاكتشاف بلدنا
          كما يراه الجغرافيون.
        </p>
      </>
    ),
  },
  {
    id: "part1",
    title: "موقع مصر الجغرافي",
    goal: "تحديد موقع مصر بالنسبة لقارات العالم القديم وتسمية القارة التي تقع فيها.",
    body: (
      <>
        <ul className="list-disc space-y-2 pr-5 marker:text-pink-300">
          <li>
            تقع مصر في <strong>الركن الشمالي الشرقي</strong> من قارة <strong>أفريقيا</strong>.
          </li>
          <li>
            تعتبر مصر <strong>ملتقى قارات العالم القديم</strong>: تربط بين أفريقيا وآسيا
            (عبر شبه جزيرة سيناء)، وقريبة من أوروبا عبر البحر المتوسط.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "part2",
    title: "حدود مصر",
    goal: "التمييز بين الحدود الطبيعية (البحار) والحدود البشرية (الدول).",
    body: (
      <>
        <div className="mt-2 overflow-hidden rounded-xl border border-pink-400/25 bg-pink-950/25">
          <table className="w-full text-right text-sm">
            <thead className="bg-pink-500/15 text-white">
              <tr>
                <th className="px-4 py-3 font-bold">الاتجاه</th>
                <th className="px-4 py-3 font-bold">الحد</th>
                <th className="px-4 py-3 font-bold">النوع</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-pink-400/15 text-pink-50/90">
              <tr>
                <td className="px-4 py-3">شمالًا</td>
                <td className="px-4 py-3">البحر المتوسط</td>
                <td className="px-4 py-3">طبيعي (بحر)</td>
              </tr>
              <tr>
                <td className="px-4 py-3">جنوبًا</td>
                <td className="px-4 py-3">جمهورية السودان</td>
                <td className="px-4 py-3">بشري (دولة)</td>
              </tr>
              <tr>
                <td className="px-4 py-3">شرقًا</td>
                <td className="px-4 py-3">البحر الأحمر</td>
                <td className="px-4 py-3">طبيعي (بحر)</td>
              </tr>
              <tr>
                <td className="px-4 py-3">غربًا</td>
                <td className="px-4 py-3">ليبيا</td>
                <td className="px-4 py-3">بشري (دولة)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: "part3",
    title: "أهمية موقع مصر",
    goal: "شرح دور نهر النيل في قيام الحضارة وأثر الموقع على التجارة العالمية.",
    body: (
      <>
        <ul className="list-disc space-y-2 pr-5 marker:text-pink-300">
          <li>
            مصر <strong>قلب العالم العربي والإسلامي</strong> جغرافيًا وحضاريًا في كثير من
            السياقات التعليمية والثقافية.
          </li>
          <li>
            نهر النيل <strong>شريان الحياة</strong>: يربط شمال مصر بجنوبها، ويربط مصر بدول
            حوض النيل في أفريقيا.
          </li>
          <li>
            موقع مصر على المتوسط وقربها من قنوات وطرق بحرية ساعد على انفتاحها التجاري عبر
            التاريخ والعصر الحديث.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "part4",
    title: "قناة السويس",
    goal: "توضيح أهمية قناة السويس كممر ملاحي يربط البحرين الأحمر والمتوسط.",
    body: (
      <>
        <ul className="list-disc space-y-2 pr-5 marker:text-pink-300">
          <li>
            تربط قناة السويس بين <strong>البحر الأحمر</strong> و<strong>البحر المتوسط</strong>،
            فتختصر على السفن رحلة طويلة حول أفريقيا.
          </li>
          <li>
            توفّر الوقت والجهد والمال للتجارة العالمية؛ لذلك تعتبر من أهم الممرات المائية في
            العالم.
          </li>
          <li>
            افتتاح <strong>قناة السويس الجديدة</strong> عام 2015 ساعد في زيادة عدد السفن
            وتقليل زمن الرحلة ضمن تصميم المشروع.
          </li>
        </ul>
      </>
    ),
  },
];

const mediaBySectionId = {
  start: lesson1Figures.start,
  part1: lesson1Figures.part1,
  part2: lesson1Figures.part2,
  part3: lesson1Figures.part3,
  part4: lesson1Figures.part4,
};

export default function Lesson1Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6">
        <p className="mb-4 text-center text-xs text-pink-200/55">{MEDIA_NOTE}</p>
        <nav aria-label="أجزاء الدرس" className="mb-8 flex flex-wrap gap-2 text-sm">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full bg-pink-500/15 px-3 py-1.5 font-medium text-pink-50 ring-1 ring-pink-400/25 transition hover:bg-pink-500/25"
            >
              {s.title}
            </a>
          ))}
        </nav>

        <header className="mb-10 rounded-2xl border border-pink-400/35 bg-gradient-to-l from-pink-600/20 to-transparent p-6 sm:p-8">
          <p className="text-sm font-medium text-pink-200">الدرس الأول — الصف الرابع</p>
          <h1 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">موقع مصر الجغرافي</h1>
          <p className="mt-4 text-pink-100/85">
            خطة الدرس مقسمة إلى: بداية، موقع مصر، الحدود، الأهمية، قناة السويس، ثم اختبار
            تفاعلي ونتيجة نهائية.
          </p>
          <Link
            href="/exam/lesson1"
            className="mt-6 inline-flex rounded-xl bg-gradient-to-l from-pink-500 to-rose-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-pink-600/30 transition hover:brightness-110"
          >
            انتقل إلى الأسئلة والاختبار
          </Link>
        </header>

        <div className="space-y-10">
          {sections.map((s) => {
            const media = mediaBySectionId[s.id];
            return (
              <article
                key={s.id}
                id={s.id}
                className="scroll-mt-24 rounded-2xl border border-pink-400/20 bg-pink-950/20 p-6 sm:p-8"
              >
                <h2 className="text-xl font-bold text-pink-200">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-pink-100/90">
                  <span className="font-semibold text-pink-200">الهدف: </span>
                  {s.goal}
                </p>
                {media ? (
                  Array.isArray(media) ? (
                    <LessonFigurePair items={media} priority={s.id === "start"} />
                  ) : (
                    <LessonFigure {...media} priority={false} />
                  )
                ) : null}
                <div className="mt-4 space-y-3 leading-relaxed text-pink-50/88">{s.body}</div>
              </article>
            );
          })}
        </div>

        <section className="mt-12 rounded-2xl border border-dashed border-pink-400/30 bg-pink-950/25 p-6 text-center">
          <h2 className="text-lg font-bold text-white">النتيجة النهائية</h2>
          <p className="mt-2 text-pink-100/75">
            بعد إكمال الاختبار ستشاهد تقييمًا سريعًا ورسالة تشجيعية وملخصًا لأهم نقاط الدرس.
          </p>
          <Link
            href="/exam/lesson1"
            className="mt-4 inline-flex rounded-xl bg-gradient-to-l from-rose-500 to-pink-500 px-6 py-3 font-bold text-white shadow-lg shadow-pink-600/25 transition hover:brightness-110"
          >
            ابدأ الاختبار الآن
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
