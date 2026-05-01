import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

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
        <ul className="list-disc space-y-2 pr-5 marker:text-[#7dd3fc]">
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
        <div className="mt-2 overflow-hidden rounded-xl border border-white/15 bg-black/25">
          <table className="w-full text-right text-sm">
            <thead className="bg-white/10 text-white">
              <tr>
                <th className="px-4 py-3 font-bold">الاتجاه</th>
                <th className="px-4 py-3 font-bold">الحد</th>
                <th className="px-4 py-3 font-bold">النوع</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-white/85">
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
        <ul className="list-disc space-y-2 pr-5 marker:text-[#7dd3fc]">
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
        <ul className="list-disc space-y-2 pr-5 marker:text-[#7dd3fc]">
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

export default function Lesson1Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6">
        <nav aria-label="أجزاء الدرس" className="mb-8 flex flex-wrap gap-2 text-sm">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full bg-white/10 px-3 py-1.5 font-medium text-white/90 ring-1 ring-white/15 transition hover:bg-white/15"
            >
              {s.title}
            </a>
          ))}
        </nav>

        <header className="mb-10 rounded-2xl border border-[#c8102e]/35 bg-gradient-to-l from-[#c8102e]/15 to-transparent p-6 sm:p-8">
          <p className="text-sm font-medium text-[#f5e6a3]">الدرس الأول — الصف الرابع</p>
          <h1 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">موقع مصر الجغرافي</h1>
          <p className="mt-4 text-white/80">
            خطة الدرس مقسمة إلى: بداية، موقع مصر، الحدود، الأهمية، قناة السويس، ثم اختبار
            تفاعلي ونتيجة نهائية.
          </p>
          <Link
            href="/exam/lesson1"
            className="mt-6 inline-flex rounded-xl bg-[#c5a00a] px-5 py-2.5 text-sm font-bold text-[#1a1404] transition hover:brightness-110"
          >
            انتقل إلى الأسئلة والاختبار
          </Link>
        </header>

        <div className="space-y-10">
          {sections.map((s) => (
            <article
              key={s.id}
              id={s.id}
              className="scroll-mt-24 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8"
            >
              <h2 className="text-xl font-bold text-[#7dd3fc]">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#f5e6a3]/90">
                <span className="font-semibold text-[#f5e6a3]">الهدف: </span>
                {s.goal}
              </p>
              <div className="mt-4 space-y-3 leading-relaxed text-white/85">{s.body}</div>
            </article>
          ))}
        </div>

        <section className="mt-12 rounded-2xl border border-dashed border-white/25 bg-black/20 p-6 text-center">
          <h2 className="text-lg font-bold text-white">النتيجة النهائية</h2>
          <p className="mt-2 text-white/75">
            بعد إكمال الاختبار ستشاهد تقييمًا سريعًا ورسالة تشجيعية وملخصًا لأهم نقاط الدرس.
          </p>
          <Link
            href="/exam/lesson1"
            className="mt-4 inline-flex rounded-xl bg-[#1e6b8c] px-6 py-3 font-bold text-white transition hover:brightness-110"
          >
            ابدأ الاختبار الآن
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
