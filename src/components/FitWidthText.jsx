import { useLayoutEffect, useRef, useState } from 'react'

/**
 * Single-line type that scales until it fills the parent width.
 * Binary-searches a size that never overflows, including dual-shadow bleed.
 */
export function FitWidthText({
  as: Tag = 'p',
  children,
  className = '',
  style,
  minPx = 40,
  maxPx = 420,
  pad = 8,
  shadowBleed = 0.12,
}) {
  const ref = useRef(null)
  const [fontSize, setFontSize] = useState(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const parent = el.parentElement
    if (!parent) return undefined

    const fit = () => {
      const available = Math.max(0, parent.clientWidth - pad)
      if (available < 16) return

      el.style.whiteSpace = 'nowrap'
      el.style.display = 'inline-block'
      el.style.width = 'max-content'
      el.style.maxWidth = 'none'
      el.style.overflow = 'visible'

      let lo = 10
      let hi = maxPx
      let best = 10

      for (let i = 0; i < 14; i++) {
        const mid = (lo + hi) / 2
        el.style.fontSize = `${mid}px`
        const bleed = mid * shadowBleed
        const need = el.scrollWidth + bleed
        if (need <= available) {
          best = mid
          lo = mid
        } else {
          hi = mid
        }
      }

      // Soft preference for minPx only when it still fits
      const next = best >= minPx ? Math.min(maxPx, best) : best
      setFontSize(next)
      el.style.width = '100%'
      el.style.fontSize = `${next}px`
    }

    fit()
    const ro = new ResizeObserver(() => requestAnimationFrame(fit))
    ro.observe(parent)
    const onResize = () => requestAnimationFrame(fit)
    window.addEventListener('resize', onResize)

    let alive = true
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => {
        if (alive) fit()
      })
    }
    const t1 = window.setTimeout(fit, 50)
    const t2 = window.setTimeout(fit, 200)

    return () => {
      alive = false
      ro.disconnect()
      window.removeEventListener('resize', onResize)
      window.clearTimeout(t1)
      window.clearTimeout(t2)
    }
  }, [children, maxPx, minPx, pad, shadowBleed])

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...style,
        fontSize: fontSize ?? 16,
        opacity: fontSize == null ? 0 : 1,
        whiteSpace: 'nowrap',
        display: 'block',
        width: '100%',
        maxWidth: '100%',
        textAlign: 'center',
        lineHeight: 0.9,
        boxSizing: 'border-box',
      }}
    >
      {children}
    </Tag>
  )
}

/** Full-width wrapping display type - stays huge, uses the whole row. */
export function FluidBlock({
  as: Tag = 'p',
  children,
  className = '',
  style,
  minRem = 2.8,
  preferVw = 12,
  maxRem = 9,
}) {
  return (
    <Tag
      className={`w-full max-w-full break-words ${className}`}
      style={{
        fontSize: `clamp(${minRem}rem, ${preferVw}vw, ${maxRem}rem)`,
        lineHeight: 0.9,
        overflowWrap: 'anywhere',
        ...style,
      }}
    >
      {children}
    </Tag>
  )
}
