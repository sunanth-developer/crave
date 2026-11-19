import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

/**
 * Tall scroll runway + sticky viewport. Progress maps cleanly to slide index.
 * No scrub lag - scrub near slide edges caused index flicker / shake.
 */
export function usePinnedSlides(slideCount, { perSlide = 1 } = {}) {
  const sectionRef = useRef(null)
  const reduced = usePrefersReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)
  const lastIndex = useRef(0)

  useEffect(() => {
    if (reduced || slideCount < 1) return undefined
    const section = sectionRef.current
    if (!section) return undefined

    lastIndex.current = 0
    setActiveIndex(0)

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: 'bottom bottom',
      // Instant progress - scrub made sticky slides jitter at boundaries
      scrub: false,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const raw = self.progress * slideCount
        let idx = Math.min(slideCount - 1, Math.max(0, Math.floor(raw)))
        // Hysteresis so tiny scroll bounce does not flip slides
        const prev = lastIndex.current
        if (idx !== prev) {
          const edge = (prev + (idx > prev ? 0.65 : 0.35)) / slideCount
          if (idx > prev && self.progress < edge) idx = prev
          if (idx < prev && self.progress > edge) idx = prev
        }
        if (idx !== lastIndex.current) {
          lastIndex.current = idx
          setActiveIndex(idx)
        }
      },
    })

    const refresh = () => ScrollTrigger.refresh()
    const t = window.setTimeout(refresh, 120)
    window.addEventListener('load', refresh)
    window.addEventListener('orientationchange', refresh)

    return () => {
      window.clearTimeout(t)
      window.removeEventListener('load', refresh)
      window.removeEventListener('orientationchange', refresh)
      trigger.kill()
    }
  }, [reduced, slideCount, perSlide])

  const runwayStyle = reduced
    ? undefined
    : {
        // svh avoids mobile browser chrome resize shake from classic vh
        height: `${Math.max(slideCount, 1) * perSlide * 100}svh`,
      }

  return { sectionRef, activeIndex, reduced, runwayStyle }
}
