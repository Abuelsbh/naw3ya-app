"use client";

import { useMemo, useState } from "react";

const QUESTIONS = [
  {
    id: "q1",
    type: "mcq",
    prompt: "في أي قارة تقع مصر؟",
    options: [
      { key: "a", label: "أفريقيا" },
      { key: "b", label: "أوروبا" },
      { key: "c", label: "أمريكا الجنوبية" },
      { key: "d", label: "أستراليا" },
    ],
    correct: "a",
  },
  {
    id: "q2",
    type: "mcq",
    prompt: "ما الحد الطبيعي شمال مصر؟",
    options: [
      { key: "a", label: "البحر المتوسط" },
      { key: "b", label: "جمهورية السودان" },
      { key: "c", label: "دولة ليبيا" },
      { key: "d", label: "البحر الأحمر" },
    ],
    correct: "a",
  },
  {
    id: "q3",
    type: "tf",
    prompt: "قناة السويس تربط البحر الأحمر بالبحر المتوسط.",
    correct: true,
  },
  {
    id: "q4",
    type: "mcq",
    prompt: "أي اتجاه يحدّ مصر دولة ليبيا؟",
    options: [
      { key: "a", label: "شمالًا" },
      { key: "b", label: "جنوبًا" },
      { key: "c", label: "شرقًا" },
      { key: "d", label: "غربًا" },
    ],
    correct: "d",
  },
  {
    id: "q5",
    type: "map",
    prompt: "أين يقع وادي النيل بالنسبة لصحراء مصر الغربية؟ (سؤال تمهيدي على الخريطة الذهنية)",
    options: [
      { key: "a", label: "شرق الصحراء الغربية نحو الوادي والدلتا" },
      { key: "b", label: "في أعماق الصحراء الغربية بعيدًا عن الوادي" },
    ],
    correct: "a",
  },
];

function scoreAnswers(answers) {
  let correct = 0;
  for (const q of QUESTIONS) {
    const v = answers[q.id];
    if (q.type === "tf") {
      if (v === q.correct) correct += 1;
    } else if (v === q.correct) correct += 1;
  }
  return correct;
}

export function Lesson1Quiz() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => (submitted ? scoreAnswers(answers) : null), [answers, submitted]);
  const total = QUESTIONS.length;
  const percent = score != null ? Math.round((score / total) * 100) : null;

  const message =
    percent == null
      ? null
      : percent >= 80
        ? "أحسنت! فهمٌ قوي لموضوع موقع مصر."
        : percent >= 50
          ? "جيد — راجع جدول الحدود ودور النيل وقناة السويس."
          : "لا بأس — اقرأ الدرس مرة أخرى ثم أعد المحاولة.";

  const strengthsWeakness =
    percent == null ? null : (
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
    );

  function setMcq(id, key) {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [id]: key }));
  }

  function setTf(id, value) {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function reset() {
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <div className="space-y-8">
      {QUESTIONS.map((q, idx) => (
        <div
          key={q.id}
          className="surface-card rounded-2xl border border-theme-primary/18 p-5 sm:p-6"
        >
          <p className="text-sm font-medium text-theme-accent">
            سؤال {idx + 1} من {total}
          </p>
          <p className="mt-2 text-lg font-semibold text-theme-dark">{q.prompt}</p>

          {q.type === "tf" && (
            <div className="mt-4 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setTf(q.id, true)}
                className={`rounded-xl border px-4 py-2 text-sm font-bold transition ${
                  answers[q.id] === true
                    ? "border-emerald-500/50 bg-emerald-500/12 text-emerald-900"
                    : "border-theme-primary/18 bg-white/70 text-theme-dark hover:bg-theme-secondary/12"
                }`}
              >
                صح
              </button>
              <button
                type="button"
                onClick={() => setTf(q.id, false)}
                className={`rounded-xl border px-4 py-2 text-sm font-bold transition ${
                  answers[q.id] === false
                    ? "border-slate-400/50 bg-slate-200/80 text-theme-dark"
                    : "border-theme-primary/18 bg-white/70 text-theme-dark hover:bg-theme-secondary/12"
                }`}
              >
                خطأ
              </button>
            </div>
          )}

          {(q.type === "mcq" || q.type === "map") && (
            <ul className="mt-4 space-y-2">
              {q.options.map((opt) => {
                const selected = answers[q.id] === opt.key;
                const correct = submitted && opt.key === q.correct;
                const wrong = submitted && selected && opt.key !== q.correct;
                return (
                  <li key={opt.key}>
                    <button
                      type="button"
                      onClick={() => setMcq(q.id, opt.key)}
                      disabled={submitted}
                      className={`flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-right text-sm font-medium transition ${
                        correct
                          ? "border-emerald-500/55 bg-emerald-50 text-emerald-900"
                          : wrong
                            ? "border-red-400/60 bg-red-50 text-red-900"
                            : selected
                              ? "border-theme-accent/45 bg-theme-secondary/18 text-theme-dark"
                              : "border-theme-primary/15 bg-white/75 text-theme-dark hover:bg-theme-secondary/10"
                      }`}
                    >
                      <span>{opt.label}</span>
                      {submitted && opt.key === q.correct && (
                        <span className="shrink-0 text-xs font-semibold text-emerald-700">صحيحة</span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}

          {submitted && q.type === "tf" && (
            <p className="mt-3 text-sm text-theme-dark/75">
              الإجابة الصحيحة: <strong>{q.correct ? "صح" : "خطأ"}</strong>
            </p>
          )}
        </div>
      ))}

      <div className="surface-card rounded-2xl border border-theme-accent/25 p-6">
        {!submitted ? (
          <button
            type="button"
            onClick={() => setSubmitted(true)}
            className="w-full rounded-xl bg-gradient-to-l from-theme-primary to-theme-accent py-3 text-base font-bold text-white shadow-lg shadow-theme-primary/28 ring-1 ring-theme-dark/10 transition hover:brightness-110 sm:w-auto sm:px-10"
          >
            إنهاء وتقييم
          </button>
        ) : (
          <div className="space-y-4 text-right">
            <h2 className="text-xl font-bold text-theme-dark">نتيجتك</h2>
            <p className="text-3xl font-extrabold text-theme-accent">
              {score} / {total}{" "}
              <span className="text-lg text-theme-dark/60">({percent}%)</span>
            </p>
            <p className="text-theme-dark/90">{message}</p>
            {strengthsWeakness}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="button"
                onClick={reset}
                className="rounded-xl border border-theme-accent/35 bg-white/85 px-5 py-2.5 text-sm font-bold text-theme-dark hover:bg-theme-secondary/15"
              >
                إعادة المحاولة
              </button>
              <a
                href="/lesson1"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-l from-theme-primary to-theme-accent px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-theme-primary/28 ring-1 ring-theme-dark/10 hover:brightness-110"
              >
                مراجعة الدرس
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
