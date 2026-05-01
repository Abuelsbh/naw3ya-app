import Image from "next/image";
import { isRasterPublicImage } from "@/lib/imageKind";

/** صورة درس بإطار يتماشى مع الثيم الوردي */
export function LessonFigure({ src, alt, caption, priority = false, aspect = "video" }) {
  const aspectClass = aspect === "square" ? "aspect-square max-h-72" : "aspect-video";
  const useNextImage = isRasterPublicImage(src);

  return (
    <figure className="my-5 overflow-hidden rounded-2xl border border-pink-300/35 bg-pink-950/25 shadow-lg shadow-pink-950/30">
      <div className={`relative w-full ${aspectClass} bg-black/30`}>
        {useNextImage ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 42rem"
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element -- SVG من public يُعرض مباشرة لتوافق الإنتاج
          <img
            src={src}
            alt={alt}
            className="absolute inset-0 h-full w-full object-contain"
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            {...(priority ? { fetchPriority: "high" } : {})}
          />
        )}
      </div>
      {caption ? (
        <figcaption className="border-t border-pink-300/20 px-3 py-2.5 text-center text-xs leading-relaxed text-pink-100/80">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

/** صف من صورتين (واجهة البداية: علم + خريطة) */
export function LessonFigurePair({ items, priority = false }) {
  return (
    <div className="my-5 grid gap-3 sm:grid-cols-2">
      {items.map((item, i) => (
        <LessonFigure
          key={item.src}
          src={item.src}
          alt={item.alt}
          caption={item.caption}
          priority={priority && i === 0}
          aspect="square"
        />
      ))}
    </div>
  );
}
