import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { categories } from '../data/site'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

function ProductCopy({ cat, compact = false }) {
  return (
    <div
      className={`flex h-full flex-col justify-between ${
        compact ? 'gap-3 p-4' : 'gap-4 p-5 sm:p-6 lg:p-8'
      }`}
    >
      <div>
        <p className="eyebrow opacity-70">Hey, hot stuff.</p>
        <h3
          className={`mt-2 font-display tracking-wide ${
            compact
              ? 'text-3xl sm:text-4xl'
              : 'text-4xl sm:text-5xl lg:text-6xl'
          }`}
        >
          {cat.blurb}
        </h3>
        <p
          className={`mt-2 max-w-md font-bold leading-snug opacity-85 ${
            compact ? 'text-sm' : 'text-base'
          }`}
        >
          {cat.tease}
        </p>
      </div>
      <ul className={`space-y-1 ${compact ? 'hidden sm:block' : ''}`}>
        {cat.lines.map((line) => (
          <li
            key={line}
            className="border-l-4 border-dark pl-3 font-impact text-xs tracking-wide sm:text-sm"
          >
            {line}
          </li>
        ))}
      </ul>
      <a href="#waitlist" className="cta-riot w-fit !min-h-11 !px-4 !text-xs sm:!min-h-12">
        {cat.cta}
      </a>
    </div>
  )
}

function DiscoverStatic() {
  return (
    <section
      id="discover"
      className="relative z-20 bg-dark"
      aria-labelledby="discover-heading"
    >
      <div className="border-b-4 border-dark bg-acid px-5 py-8 text-dark clash-bg">
        <p className="eyebrow">The goods</p>
        <h2
          id="discover-heading"
          className="mt-3 font-display text-4xl tracking-wide sm:text-5xl"
        >
          Pick your desire, sugar.
        </h2>
        <p className="mt-2 max-w-sm text-sm font-bold sm:text-base">
          Keep scrolling. Taste buds first. Questions later.
        </p>
      </div>
      {categories.map((cat) => (
        <article
          key={cat.id}
          className="grid min-h-[100svh] border-b-4 border-dark md:grid-cols-2"
          style={{ background: cat.accent, color: cat.textOn }}
        >
          <div className="flex min-h-[42svh] items-center justify-center overflow-hidden border-b-4 border-dark bg-cream p-5 md:min-h-0 md:border-b-0 md:border-r-4">
            <img
              src={cat.image}
              alt={`${cat.name} packaging concept`}
              className="max-h-[48vh] w-auto max-w-[78%] object-contain md:max-h-[72vh] md:max-w-[82%]"
              loading="lazy"
            />
          </div>
          <ProductCopy cat={cat} />
        </article>
      ))}
    </section>
  )
}

export function ProductDiscover() {
  const reduced = usePrefersReducedMotion()
  const sectionRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const active = categories[activeIndex] ?? categories[0]
  const total = categories.length

  useEffect(() => {
    if (reduced) return undefined
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
          total - 1,
          Math.floor(self.progress * total + 0.001),
        )
        setActiveIndex((prev) => (prev === idx ? prev : idx))
      },
    })

    const refresh = () => ScrollTrigger.refresh()
    const t = window.setTimeout(refresh, 100)
    window.addEventListener('orientationchange', refresh)
    return () => {
      window.clearTimeout(t)
      window.removeEventListener('orientationchange', refresh)
      trigger.kill()
    }
  }, [reduced, total])

  if (reduced) return <DiscoverStatic />

  return (
    <section
      id="discover"
      ref={sectionRef}
      className="relative z-20 bg-dark"
      style={{ height: `${total * 100}vh` }}
      aria-labelledby="discover-heading"
    >
      <div className="sticky top-0 flex h-[100svh] w-full items-stretch overflow-hidden border-b-4 border-dark">
        <div
          className="grid h-full w-full grid-rows-[minmax(0,1fr)_minmax(0,1.05fr)] transition-[background,color] duration-300 md:grid-cols-[1fr_1fr] md:grid-rows-none"
          style={{ background: active.accent, color: active.textOn }}
        >
          <div className="relative flex min-h-0 items-center justify-center overflow-hidden border-b-4 border-dark bg-cream p-4 md:border-b-0 md:border-r-4 md:p-6 lg:p-8">
            {categories.map((cat, i) => (
              <img
                key={cat.id}
                src={cat.image}
                alt={i === activeIndex ? `${cat.name} packaging concept` : ''}
                className={`absolute max-h-[38vh] w-auto max-w-[70%] object-contain transition-opacity duration-300 md:max-h-[78vh] md:max-w-[85%] ${
                  i === activeIndex ? 'opacity-100' : 'opacity-0'
                }`}
                aria-hidden={i !== activeIndex}
              />
            ))}
          </div>

          <div className="relative flex min-h-0 flex-col">
            <div className="shrink-0 border-b-4 border-dark px-4 py-3 md:px-8 md:py-4">
              <h2
                id="discover-heading"
                className="font-display text-2xl tracking-wide sm:text-3xl md:text-4xl"
              >
                Pick your desire, sugar.
              </h2>
              <p className="mt-1 text-xs font-bold opacity-80 sm:text-sm">
                Keep scrolling. Taste buds first. Questions later.
              </p>
            </div>
            <div className="relative min-h-0 flex-1">
              {categories.map((cat, i) => (
                <div
                  key={cat.id}
                  className={`absolute inset-0 overflow-y-auto transition-opacity duration-300 ${
                    i === activeIndex
                      ? 'opacity-100'
                      : 'pointer-events-none opacity-0'
                  }`}
                  aria-hidden={i !== activeIndex}
                >
                  <ProductCopy cat={cat} compact />
                </div>
              ))}
            </div>
            <div className="flex shrink-0 gap-2 border-t-4 border-dark px-4 py-2.5 md:px-8 md:py-3">
              {categories.map((cat, i) => (
                <div
                  key={cat.id}
                  className={`h-2.5 border-2 border-dark transition-all ${
                    i === activeIndex ? 'w-10 md:w-12' : 'w-2.5 opacity-40'
                  }`}
                  style={{
                    background: i === activeIndex ? '#120e12' : 'currentColor',
                  }}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
