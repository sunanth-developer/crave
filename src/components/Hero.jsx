import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ArrowRight } from 'lucide-react'
import { brand } from '../data/site'
import { FitWidthText } from './FitWidthText'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { HeroFloatLayer } from './HeroFloatLayer'

function HeroBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <img
        src={brand.heroBackground}
        alt=""
        className="h-full w-full scale-105 object-cover object-center"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/35 to-dark/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(8,8,11,0.55)_100%)]" />
      <div
        className="absolute inset-0 opacity-30 mix-blend-soft-light"
        style={{
          backgroundImage: `url("${brand.packPattern}")`,
          backgroundSize: '240px',
        }}
      />
      <img
        src={brand.stickerSplatter}
        alt=""
        className="absolute -left-8 top-[12%] w-32 opacity-90 sm:w-44"
      />
      <img
        src={brand.stickerSplatter}
        alt=""
        className="absolute -right-10 bottom-[20%] w-36 rotate-180 opacity-70 sm:w-48"
      />
      <img
        src={brand.stickerCrown}
        alt=""
        className="absolute right-[7%] top-[22%] hidden w-16 opacity-95 sm:block md:w-20"
      />
      <span className="absolute left-[6%] bottom-[28%] hidden rotate-[-18deg] font-impact text-[clamp(1.2rem,3vw,2rem)] uppercase tracking-wide text-cyan/80 sm:block">
        Unhinged
      </span>
      <span className="absolute right-[8%] top-[38%] hidden rotate-[12deg] font-impact text-[clamp(1rem,2.5vw,1.6rem)] uppercase tracking-wide text-acid/80 md:block">
        No rules
      </span>
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
        y: 48,
        duration: 0.9,
        stagger: 0.08,
        ease: 'power3.out',
      })
    }, root)

    return () => ctx.revert()
  }, [reduced])

  return (
    <div id="top" ref={rootRef}>
      <section
        className="relative flex h-[100svh] max-h-[100svh] items-center justify-center overflow-hidden text-cream"
        aria-labelledby="hero-heading"
      >
        <HeroBackdrop />
        <HeroFloatLayer />

        <div className="relative z-10 flex h-full w-full max-w-[100vw] flex-col items-center justify-center px-3 pb-8 pt-20 text-center sm:px-4">
          <p
            data-hero-copy
            className="mb-3 border-2 border-dark bg-dark/70 px-3 py-1.5 font-impact text-[0.7rem] uppercase tracking-[0.22em] text-acid backdrop-blur-sm sm:mb-4 sm:text-xs"
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
                color: '#F8FAFC',
                textShadow:
                  '0.06em 0.06em 0 #FF006E, -0.035em 0.035em 0 #00DDEB, 0.1em 0.1em 0 #08080B',
                marginBlock: '0.04em',
                letterSpacing: '-0.02em',
              }}
            >
              LICK IT
            </FitWidthText>
            <FitWidthText
              as="span"
              minPx={32}
              maxPx={200}
              pad={20}
              shadowBleed={0.12}
              style={{
                color: '#D6FF00',
                textShadow:
                  '0.05em 0.05em 0 #9700FF, -0.03em 0.03em 0 #FF006E, 0.09em 0.09em 0 #08080B',
                marginBlock: '0.04em',
                letterSpacing: '-0.02em',
              }}
            >
              BEFORE YOU
            </FitWidthText>
            <span className="mt-2 block w-full border-4 border-dark bg-acid py-2 shadow-[6px_6px_0_#FF006E]">
              <FitWidthText
                as="span"
                minPx={32}
                maxPx={200}
                pad={20}
                shadowBleed={0.06}
                style={{
                  color: '#08080B',
                  letterSpacing: '-0.02em',
                }}
              >
                SUCK IT.
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
          <div className="absolute -left-10 top-10 h-48 w-48 rounded-[40%_60%_55%_45%] bg-dark/40 hero-blob" />
          <div className="absolute -right-8 bottom-16 h-56 w-56 rounded-[55%_45%_40%_60%] bg-acid/50 hero-blob" style={{ animationDelay: '1.2s' }} />
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
            className="mt-7 max-w-[12ch] rotate-1 border-4 border-dark bg-acid px-4 py-3 font-impact uppercase leading-none tracking-wide text-dark shadow-[8px_8px_0_#08080B] sm:mt-6"
            style={{ fontSize: 'clamp(2.35rem, 8vw, 4rem)' }}
          >
            Actually, don&apos;t.
          </p>

          <p
            data-hero-copy
            className="mt-8 max-w-[16ch] font-impact uppercase leading-[1.05] tracking-wide text-cream sm:mt-10"
            style={{
              fontSize: 'clamp(1.85rem, 5.8vw, 3rem)',
              textShadow: '0.08em 0.08em 0 #08080B',
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
              className="cta-riot !min-h-14 !border-cream !px-6 !text-base !shadow-[6px_6px_0_#D6FF00] sm:!min-h-16 sm:!px-8"
            >
              Show me the goods
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
