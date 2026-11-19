import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ArrowRight } from 'lucide-react'
import { brand } from '../data/site'
import { FitWidthText } from './FitWidthText'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { HeroFloatLayer } from './HeroFloatLayer'

function HeroChaosDecor() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="absolute inset-x-0 top-0 h-[18%] opacity-70"
        style={{
          background:
            'repeating-linear-gradient(105deg, #FF174F 0 28px, #120e12 28px 56px, #D5FF00 56px 84px)',
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-[14%] opacity-60"
        style={{
          background:
            'repeating-linear-gradient(-75deg, #782BFF 0 32px, #FF7200 32px 64px, #120e12 64px 96px)',
        }}
      />
    </div>
  )
}

export function Hero() {
  const rootRef = useRef(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const root = rootRef.current
    if (!root || reduced) return undefined

    const ctx = gsap.context(() => {
      gsap.from('[data-hero-copy]', {
        opacity: 0,
        y: 56,
        duration: 0.95,
        stagger: 0.1,
        ease: 'power3.out',
      })
    }, root)

    return () => ctx.revert()
  }, [reduced])

  return (
    <div id="top" ref={rootRef}>
      <section
        className="relative flex h-[100svh] max-h-[100svh] items-center justify-center overflow-hidden text-cream universe-desire-bg"
        aria-labelledby="hero-heading"
      >
        <HeroChaosDecor />
        <HeroFloatLayer />

        <div className="relative z-10 flex h-full w-full max-w-[100vw] flex-col items-center justify-center px-3 text-center sm:px-4">
          <p
            data-hero-copy
            className="mb-5 border-4 border-dark bg-acid px-3 py-2 font-impact text-[0.95rem] uppercase tracking-[0.12em] text-dark sm:mb-6 sm:text-sm"
          >
            {brand.tagline}
          </p>

          <h1
            id="hero-heading"
            data-hero-copy
            className="hero-headline flex w-full max-w-full flex-col overflow-x-clip font-display uppercase"
          >
            <FitWidthText
              as="span"
              minPx={36}
              maxPx={220}
              pad={20}
              shadowBleed={0.14}
              style={{
                color: '#FFE8D2',
                textShadow: '0.07em 0.07em 0 #FF174F, -0.04em 0.04em 0 #D5FF00',
                marginBlock: '0.05em',
                letterSpacing: '-0.02em',
              }}
            >
              F*CK ORDINARY
            </FitWidthText>
            <span className="mt-2 block w-full border-4 border-dark bg-acid py-2 shadow-[6px_6px_0_#FF174F]">
              <FitWidthText
                as="span"
                minPx={32}
                maxPx={200}
                pad={20}
                shadowBleed={0.06}
                style={{
                  color: '#120e12',
                  letterSpacing: '-0.02em',
                }}
              >
                FEED YOUR CRAVINGS.
              </FitWidthText>
            </span>
          </h1>
        </div>
      </section>

      <section
        className="relative flex h-[100svh] max-h-[100svh] items-center justify-center overflow-hidden text-cream hero-follow-bg"
        aria-label="Hero follow-up"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -left-10 top-10 h-48 w-48 rounded-[40%_60%_55%_45%] bg-dark/40" />
          <div className="absolute -right-8 bottom-16 h-56 w-56 rounded-[55%_45%_40%_60%] bg-acid/50" />
          <div className="absolute left-[20%] top-[15%] h-24 w-24 rotate-12 bg-cream [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)]" />
          <div className="absolute right-[18%] top-[40%] hidden sticker rotate-8 bg-dark text-base text-acid md:block">
            Actually don&apos;t
          </div>
        </div>

        <div className="section-pad relative z-10 flex w-full max-w-[100vw] flex-col items-center px-4 text-center">
          <p
            data-hero-copy
            className="hero-follow-title max-w-[12ch] font-display uppercase tracking-wide"
          >
            Oh, get your mind out of the gutter.
          </p>

          <p
            data-hero-copy
            className="mt-7 max-w-[12ch] rotate-1 bg-acid px-4 py-3 font-impact uppercase leading-none tracking-wide text-dark sm:mt-6"
            style={{ fontSize: 'clamp(2.35rem, 8vw, 4rem)' }}
          >
            Actually, don&apos;t.
          </p>

          <p
            data-hero-copy
            className="mt-8 max-w-[16ch] font-impact uppercase leading-[1.05] tracking-wide text-cream sm:mt-10"
            style={{
              fontSize: 'clamp(1.85rem, 5.8vw, 3rem)',
              textShadow: '0.08em 0.08em 0 #120e12',
            }}
          >
            Candy&apos;s got a dirty little sense of humour.
          </p>

          <div
            data-hero-copy
            className="mt-10 flex w-full max-w-sm flex-col items-stretch gap-3 sm:mt-12 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4"
          >
            <a href="#waitlist" className="cta-acid !min-h-14 !px-6 !text-base sm:!min-h-16 sm:!px-8">
              Get your crave on
              <ArrowRight size={20} aria-hidden="true" />
            </a>
            <a
              href="#universe"
              className="cta-riot !min-h-14 !border-cream !px-6 !text-base !shadow-[6px_6px_0_#D5FF00] sm:!min-h-16 sm:!px-8"
            >
              Show me the goods
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
