// Resolves a path relative to Vite's configured base (import.meta.env.BASE_URL),
// so images in /public keep working under the GitHub Pages subpath (/graduation/).
export function asset(path) {
  const base = import.meta.env.BASE_URL || "/";
  const cleanBase = base.endsWith("/") ? base : `${base}/`;
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
}
