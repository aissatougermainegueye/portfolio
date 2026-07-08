// Static assets in `public/` are NOT prefixed by Next.js `basePath` when using
// `next/image` with `unoptimized: true` (required for static export). We prepend it manually.
export const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

export function withBase(path: string): string {
  if (!path) return path;
  if (/^(https?:)?\/\//.test(path)) return path;
  return `${basePath}${path.startsWith("/") ? "" : "/"}${path}`;
}
