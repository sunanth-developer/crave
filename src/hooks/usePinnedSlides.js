import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

/**
 * Tall scroll runway + sticky viewport. Progress maps cleanly to slide index.
 * Avoids ScrollTrigger pin stacking bugs between multiple sections.
 */
export function usePinnedSlides(slideCount, { perSlide = 1 } = {}) {
  const sectionRef = useRef(null)
  const reduced = usePrefersReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (reduced || slideCount < 1) return undefined
    const section = sectionRef.current
    if (!section) return undefined

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.35,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const idx = Math.min(
          slideCount - 1,
          Math.floor(self.progress * slideCount + 0.001),
        )
        setActiveIndex((prev) => (prev === idx ? prev : idx))
      },
    })

    const refresh = () => ScrollTrigger.refresh()
    const t = window.setTimeout(refresh, 80)
    window.addEventListener('load', refresh)

    return () => {
      window.clearTimeout(t)
      window.removeEventListener('load', refresh)
      trigger.kill()
    }
  }, [reduced, slideCount, perSlide])

  const runwayStyle = reduced
    ? undefined
    : { height: `${Math.max(slideCount, 1) * perSlide * 100}vh` }

  return { sectionRef, activeIndex, reduced, runwayStyle }
}
