import Image from "next/image";
import { isRasterPublicImage } from "@/lib/imageKind";

/** صورة درس بإطار يتماشى مع ثيم الطبيعة والمياه */
export function LessonFigure({ src, alt, caption, priority = false, aspect = "video" }) {
  const aspectClass = aspect === "square" ? "aspect-square max-h-72" : "aspect-video";
  const useNextImage = isRasterPublicImage(src);

  return (
    <figure className="surface-card my-5 overflow-hidden rounded-2xl border border-theme-primary/22 shadow-lg shadow-theme-dark/10">
      <div
        className={`relative flex w-full items-center justify-center bg-theme-dark/[0.06] ${aspectClass}`}
      >
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
          // eslint-disable-next-line @next/next/no-img-element -- SVG من public يُعرض مباشرة
          <img
            src={src}
            alt={alt}
            className="max-h-full w-full object-contain p-1"
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            {...(priority ? { fetchPriority: "high" } : {})}
          />
        )}
      </div>
      {caption ? (
        <figcaption className="border-t border-theme-primary/15 px-3 py-2.5 text-center text-xs leading-relaxed text-theme-dark/75">
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
