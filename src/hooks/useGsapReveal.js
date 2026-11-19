import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export function useGsapReveal(containerRef, selector = '[data-reveal]', deps = []) {
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const root = containerRef?.current
    if (!root) return undefined

    const targets = root.querySelectorAll(selector)
    if (!targets.length) return undefined

    if (reducedMotion) {
      gsap.set(targets, { clearProps: 'all', opacity: 1, y: 0 })
      return undefined
    }

    const ctx = gsap.context(() => {
      targets.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            immediateRender: false,
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              once: true,
              onRefresh(self) {
                if (self.progress > 0) gsap.set(el, { opacity: 1, y: 0 })
              },
            },
          },
        )
      })
    }, root)

    requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, selector, reducedMotion, ...deps])
}
