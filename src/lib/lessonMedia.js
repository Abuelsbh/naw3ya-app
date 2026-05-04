/** صور حقيقية من ويكيميديا كومنز (محتوى مرخّص بحرية) — عناوينها البعيدة مُفعّلة في next.config */
export const MEDIA_NOTE =
  "الصور من ويكيميديا كومنز (محتوى حر). يمكن استبدال الروابط أو تسميات الملفات من lessonMedia.js.";

/** روابط ثابتة مُختبرة — لا تغيّر أبعاد المسار (مثل 1280px) إلا بعد التحقق من وجود الملف */
const WM = {
  flagEgyptPng:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/1280px-Flag_of_Egypt.svg.png",
  issNileWide:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/ISS035-E-007148_Nile_-_Sinai_-_Dead_Sea_-_Wide_Angle_View.jpg/1280px-ISS035-E-007148_Nile_-_Sinai_-_Dead_Sea_-_Wide_Angle_View.jpg",
  egyptInRegion:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Egypt_in_its_region_%28de-facto%29.svg/1280px-Egypt_in_its_region_%28de-facto%29.svg.png",
  egyptCiaMap: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Egypt-CIA_WFB_Map.png",
  nileDeltaSatellite:
    "https://upload.wikimedia.org/wikipedia/commons/f/f5/Satellite_picture_of_the_Nile_Delta%2C_Egypt.jpg",
  suezCanalEo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/SuezCanal-EO.JPG",
  egyptTopographyAr: "https://upload.wikimedia.org/wikipedia/commons/d/de/Egypt_Topography-ar.png",
  whiteDesert:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/White_Desert%2C_Egypt.jpg/1280px-White_Desert%2C_Egypt.jpg",
  nileGreenModis:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Gorgeous_Green_along_the_Nile_River_%28MODIS%29.jpg/1280px-Gorgeous_Green_along_the_Nile_River_%28MODIS%29.jpg",
};

const flag = {
  src: WM.flagEgyptPng,
  alt: "علم جمهورية مصر العربية",
  caption: "علم مصر — رمز وطني (ويكيميديا كومنز)",
};

export const lessonCardImages = {
  1: {
    src: WM.egyptInRegion,
    alt: "خريطة توضح موقع مصر بين الدول المجاورة",
  },
  2: {
    src: WM.egyptTopographyAr,
    alt: "خريطة طبوغرافية لمصر بالعربية",
  },
  3: {
    src: WM.whiteDesert,
    alt: "مشهد صحراوي في البحر الأبيض — مناخ جاف",
  },
  4: {
    src: WM.nileGreenModis,
    alt: "المساحات الخضراء على ضفاف النيل من الأقمار الصناعية",
  },
};

export const lesson1Figures = {
  start: [
    flag,
    {
      src: WM.issNileWide,
      alt: "صورة للأرض من الفضاء: وادي النيل وسيناء والبحر المتوسط",
      caption: "مصر ووادي النيل من الفضاء — صورة أرشيف وكالة ناسا / ويكيميديا كومنز",
    },
  ],
  part1: {
    src: WM.egyptInRegion,
    alt: "خريطة توضح موقع مصر في شمال شرق أفريقيا والشرق الأوسط",
    caption: "موقع مصر بالنسبة للقارة والبحر المتوسط (خريطة سياسية)",
  },
  part2: {
    src: WM.egyptCiaMap,
    alt: "خريطة سياسية لمصر تُظهر المحافظات والحدود",
    caption: "خريطة تفصيلية للإقليم — حدود ومدن رئيسية (خريطة CIA، ويكيميديا)",
  },
  part3: {
    src: WM.nileDeltaSatellite,
    alt: "صورة قمر صناعي للدلتا والنيل",
    caption: "دلتا النيل ومجري النيل من الفضاء — يربط الجنوب بالشمال",
  },
  part4: {
    src: WM.suezCanalEo,
    alt: "صورة جوية لقناة السويس والأراضي المجاورة",
    caption: "قناة السويس تربط البحر المتوسط بالبحر الأحمر (صورة أرث فضائية)",
  },
};

export const lesson2Figure = {
  src: WM.egyptTopographyAr,
  alt: "خريطة طبوغرافية لمصر — هضاب، وادي النيل، الدلتا، والصحاري",
  caption: "تضاريس مصر (أسماء عربية) — ويكيميديا كومنز",
};

export const lesson3Figure = {
  src: WM.whiteDesert,
  alt: "تكوينات صخرية وبيئة صحراوية في مصر",
  caption: "بيئة صحراوية جافة — صلة بالحرارة والجفاف في المناخ (البحر الأبيض)",
};

export const lesson4Figure = {
  src: WM.nileGreenModis,
  alt: "شرائط خضراء على ضفاف النيل وسط الصحراء",
  caption: "الزراعة والأنشطة على مياه النيل — صورة MODIS / ناسا",
};
