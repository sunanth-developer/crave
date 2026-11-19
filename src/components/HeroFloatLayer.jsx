import { useEffect, useMemo, useRef } from 'react'
import gsap from 'gsap'
import { heroFloatWords } from '../data/heroFloatWords'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const SHOW_ORDER = { sm: 0, md: 1, lg: 2 }

function visibleForBreakpoint(show, level) {
  return SHOW_ORDER[show] <= level
}

function wordStyle(item) {
  const style = {
    fontSize: item.size,
    color: item.color,
    opacity: item.opacity ?? 1,
  }

  if (item.treatment === 'underline') {
    style.textDecoration = 'underline'
    style.textUnderlineOffset = '4px'
    style.textDecorationThickness = '2px'
  }

  if (item.treatment === 'cutout') {
    style.textShadow = `3px 3px 0 ${item.shadow || '#171116'}`
    style.WebkitTextStroke = '1px #171116'
    style.paintOrder = 'stroke fill'
  }

  if (item.treatment === 'medium' && item.shadow) {
    style.textShadow = `4px 4px 0 ${item.shadow}`
  }

  if (item.treatment === 'outline') {
    style.color = 'transparent'
    style.WebkitTextStroke = `2px ${item.color}`
    style.opacity = item.opacity ?? 0.2
  }

  return style
}

function WordEl({ item }) {
  const z =
    item.layer === 'outline' ? 1 : item.layer === 'fg' ? 15 : 2

  const wrapStyle = {
    left: item.x,
    top: item.y,
    zIndex: z,
    transform: `rotate(${item.rotate || 0}deg)`,
  }

  const innerClass =
    item.treatment === 'sticker'
      ? 'sticker border-dark inline-block'
      : item.treatment === 'outline' || item.treatment === 'medium'
        ? 'font-display inline-block'
        : 'inline-block'

  const stickerStyle =
    item.treatment === 'sticker'
      ? {
          background: item.bg,
          color: item.color,
          fontSize: item.size,
          border: '3px solid #171116',
          boxShadow: '4px 4px 0 #171116',
          padding: '0.35em 0.55em',
          lineHeight: 1,
        }
      : wordStyle(item)

  return (
    <span
      data-parallax-wrap
      data-parallax={item.parallax}
      className="pointer-events-none absolute select-none whitespace-nowrap will-change-transform"
      style={wrapStyle}
    >
      <span
        data-float-word
        data-float={item.float}
        data-enter={item.enter ? 'true' : undefined}
        className={`${innerClass} font-impact uppercase tracking-wide will-change-transform`}
        style={stickerStyle}
      >
        {item.text}
      </span>
    </span>
  )
}

export function HeroFloatLayer() {
  const rootRef = useRef(null)
  const reduced = usePrefersReducedMotion()
  const isLg = useMediaQuery('(min-width: 1024px)')
  const isMd = useMediaQuery('(min-width: 768px)')

  const level = isLg ? 2 : isMd ? 1 : 0
  const words = useMemo(() => {
    const visible = heroFloatWords.filter((w) =>
      visibleForBreakpoint(w.show, level),
    )
    // Mobile: keep chaos density with stickers, skip oversized outlines
    if (!isMd) {
      return visible
        .filter((w) => w.treatment === 'sticker')
        .slice(0, 14)
    }
    return visible
  }, [level, isMd])

  useEffect(() => {
    const root = rootRef.current
    if (!root || reduced) return undefined

    const ctx = gsap.context(() => {
      const nodes = gsap.utils.toArray('[data-float-word]', root)

      nodes.forEach((node, i) => {
        const speed = node.getAttribute('data-float')
        const ampY = speed === 'fast' ? 9 : speed === 'slow' ? 5 : 7
        const ampR = speed === 'fast' ? 2.2 : speed === 'slow' ? 1 : 1.6
        const dur = speed === 'fast' ? 3.1 : speed === 'slow' ? 5.6 : 4.3

        gsap.to(node, {
          y: ampY,
          rotate: ampR,
          duration: dur,
          delay: (i % 7) * 0.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      })

      const enters = gsap.utils.toArray('[data-enter="true"]', root)
      if (enters.length) {
        gsap.from(enters, {
          scale: 0.72,
          rotate: -10,
          opacity: 0,
          duration: 0.65,
          stagger: 0.07,
          ease: 'back.out(1.5)',
          delay: 0.3,
        })
      }
    }, root)

    return () => ctx.revert()
  }, [reduced, words])

  useEffect(() => {
    const root = rootRef.current
    if (!root || reduced || !isLg) return undefined

    const wraps = gsap.utils.toArray('[data-parallax-wrap]', root)
    const section = root.parentElement
    if (!section) return undefined

    const onMove = (e) => {
      const rect = section.getBoundingClientRect()
      const cx = (e.clientX - rect.left) / rect.width - 0.5
      const cy = (e.clientY - rect.top) / rect.height - 0.5

      wraps.forEach((node) => {
        const strength = Number(node.getAttribute('data-parallax') || 0.2)
        gsap.to(node, {
          x: cx * 32 * strength,
          y: cy * 24 * strength,
          duration: 0.75,
          ease: 'power2.out',
          overwrite: 'auto',
        })
      })
    }

    const onLeave = () => {
      wraps.forEach((node) => {
        gsap.to(node, {
          x: 0,
          y: 0,
          duration: 0.95,
          ease: 'power2.out',
          overwrite: 'auto',
        })
      })
    }

    section.addEventListener('pointermove', onMove, { passive: true })
    section.addEventListener('pointerleave', onLeave)
    return () => {
      section.removeEventListener('pointermove', onMove)
      section.removeEventListener('pointerleave', onLeave)
    }
  }, [reduced, isLg, words])

  return (
    <div
      ref={rootRef}
      className="pointer-events-none absolute inset-0 z-[2] overflow-hidden"
      aria-hidden="true"
    >
      {words.map((item) => (
        <WordEl key={item.id} item={item} />
      ))}
    </div>
  )
}
