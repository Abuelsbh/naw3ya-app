/**
 * SVG من /public لا يُحمَّل بشكل موثوق عبر محسّن next/image على Vercel.
 * الصور النقطية (png/jpg/webp) تبقى مع next/image.
 */
export function isRasterPublicImage(src) {
  return !/\.svg$/i.test(String(src).split("?")[0] ?? "");
}
