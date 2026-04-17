export function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  // 如果是 Cloudinary URL，走 CDN 变换；否则原样返回
  if (src.includes("cloudinary.com")) {
    const base = src.replace(/\/upload\/.*?\//, "/upload/");
    return `${base}w_${width},q_${quality ?? 80},f_auto/`;
  }
  return src;
}
