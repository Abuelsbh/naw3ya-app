/**
 * تضمين فيديو يوتيوب (youtube-nocookie) بنفس إطار الدروس.
 * المعرف يُستخرج من الرابط: youtube.com/watch?v=المعرف
 */
export function LessonVideo({ youtubeId, title, caption, className = "" }) {
  if (!youtubeId?.trim()) return null;

  const src = `https://www.youtube-nocookie.com/embed/${youtubeId.trim()}?rel=0&modestbranding=1`;

  return (
    <figure
      className={`surface-card my-5 overflow-hidden rounded-2xl border border-theme-primary/22 shadow-lg shadow-theme-dark/10 ${className}`}
    >
      <div className="relative aspect-video w-full bg-theme-dark/80">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
      {caption ? (
        <figcaption className="border-t border-theme-primary/15 px-3 py-2.5 text-center text-xs leading-relaxed text-theme-dark/75">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
