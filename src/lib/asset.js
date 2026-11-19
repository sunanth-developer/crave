/** Prefix public asset paths with Vite BASE_URL (needed for GitHub Pages /crave/). */
export function asset(path = '') {
  const base = import.meta.env.BASE_URL || '/'
  const clean = String(path).replace(/^\/+/, '')
  return `${base}${clean}`
}
