/** مسارات محلية تحت public/lessons — العلم مُنزَّل من ويكيميديا كومنز؛ باقي الرسوم رسوم SVG تعليمية. */
export const MEDIA_NOTE =
  "الصور: علم مصر من ويكيميديا كومنز، والخرائط والأشكال التوضيحية مُعدّة للدرس على المنصة.";

const flag = {
  src: "/lessons/flag-egypt.png",
  alt: "علم جمهورية مصر العربية",
  caption: "علم مصر — رمز وطني (مصدر الصورة: ويكيميديا كومنز)",
};

export const lessonCardImages = {
  1: {
    src: "/lessons/hero-lesson1.svg",
    alt: "تعريف بدرس موقع مصر وعلم ورسم خريطة",
  },
  2: {
    src: "/lessons/relief-schematic.svg",
    alt: "رسم توضيحي لسطح مصر",
  },
  3: {
    src: "/lessons/climate-schematic.svg",
    alt: "رموز مناخية صحراوية",
  },
  4: {
    src: "/lessons/economy-schematic.svg",
    alt: "رموز لنشاط اقتصادي وزراعة",
  },
};

export const lesson1Figures = {
  start: [
    flag,
    {
      src: "/lessons/hero-lesson1.svg",
      alt: "لمحة عن خريطة مصر وتمثيل لألوان العلم في إطار الدرس",
      caption: "خريطة تعبيرية وعناصر وطنية — كما في واجهة البداية بالملف",
    },
  ],
  part1: {
    src: "/lessons/map-africa-egypt.svg",
    alt: "رسم يوضح موقع مصر في شمال شرق أفريقيا",
    caption: "موقع مصر بالنسبة لأفريقيا والبحر المتوسط",
  },
  part2: {
    src: "/lessons/map-egypt-borders.svg",
    alt: "رسم تعليمي لحدود مصر مع البحار والدول",
    caption: "تمييز الحدود الطبيعية والبشرية — توضيح بصري",
  },
  part3: {
    src: "/lessons/nile-schematic.svg",
    alt: "رسم مبسّط لمجري النيل والدلتا",
    caption: "دور النيل في الربط بين الشمال والجنوب",
  },
  part4: {
    src: "/lessons/suez-schematic.svg",
    alt: "رسم يوضح ربط البحرين عبر قناة",
    caption: "قناة السويس تربط المتوسط بالبحر الأحمر",
  },
};

export const lesson2Figure = {
  src: "/lessons/relief-schematic.svg",
  alt: "سطح مصر — وادٍ ودلتا وهضبة وصحراء (مبسط)",
  caption: "ملخص تضاريسي للمناقشة مع الصورة التوضيحية",
};

export const lesson3Figure = {
  src: "/lessons/climate-schematic.svg",
  alt: "رموز للمناخ الصحراوي والساحلي",
  caption: "ربط الحرارة والجفاف وتأثير البحر",
};

export const lesson4Figure = {
  src: "/lessons/economy-schematic.svg",
  alt: "نشاط اقتصادي وزراعة على مياه النيل",
  caption: "صلة الموارد البشرية بالأنشطة الأساسية",
};
