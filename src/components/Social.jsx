import { usePinnedSlides } from '../hooks/usePinnedSlides'
import { FitWidthText, FluidBlock } from './FitWidthText'

const lines = [
  {
    text: 'TAG YOUR PARTNER IN CRIME.',
    bg: '#9700FF',
    color: '#F8FAFC',
    accent: '#D6FF00',
  },
  {
    text: 'SLIDE INTO OUR DMS.',
    bg: '#FF006E',
    color: '#F8FAFC',
    accent: '#0A0A0F',
  },
  {
    text: 'JOIN THE CRAVE CLUB.',
    bg: '#D6FF00',
    color: '#0A0A0F',
    accent: '#FF006E',
  },
  {
    text: 'WE LOVE A LITTLE ATTENTION.',
    bg: '#FF7B00',
    color: '#0A0A0F',
    accent: '#9700FF',
  },
  {
    text: 'FOLLOW THE BAD INFLUENCE.',
    bg: '#0A0A0F',
    color: '#D6FF00',
    accent: '#FF006E',
  },
]

const slides = [
  {
    kind: 'title',
    eyebrow: 'The Crave Club',
    textLines: ['TROUBLE LOVES', 'COMPANY.'],
    bg: '#9700FF',
    color: '#F8FAFC',
    accent: '#D6FF00',
  },
  ...lines.map((line) => ({ kind: 'line', ...line })),
]

function SlideCopy({ slide }) {
  const dual = {
    color: slide.color,
    textShadow: `0.07em 0.07em 0 ${slide.accent}`,
  }

  if (slide.kind === 'title') {
    return (
      <div className="flex w-full max-w-full flex-col items-center overflow-x-clip px-2">
        <FluidBlock
          as="p"
          className="text-center font-impact uppercase tracking-[0.1em]"
          minRem={1.1}
          preferVw={4.2}
          maxRem={2}
          style={{ color: '#D6FF00', textShadow: '0.06em 0.06em 0 #0A0A0F' }}
        >
          {slide.eyebrow}
        </FluidBlock>
        <div className="mt-5 flex w-full flex-col">
          {slide.textLines.map((line) => (
            <FitWidthText
              key={line}
              as="span"
              className="font-display uppercase"
              minPx={40}
              maxPx={280}
              pad={20}
              style={{ ...dual, marginBlock: '0.04em' }}
            >
              {line}
            </FitWidthText>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-full overflow-x-clip px-2">
      <FitWidthText
        as="p"
        className="font-display uppercase"
        minPx={40}
        maxPx={300}
        pad={20}
        style={dual}
      >
        {slide.text}
      </FitWidthText>
    </div>
  )
}

export function Social() {
  const { sectionRef, activeIndex, reduced, runwayStyle } = usePinnedSlides(
    slides.length,
    { perSlide: 1 },
  )
  const active = slides[activeIndex] ?? slides[0]

  if (reduced) {
    return (
      <section
        id="community"
        className="relative overflow-x-clip"
        aria-labelledby="social-heading"
      >
        <h2 id="social-heading" className="sr-only">
          The Crave Club — trouble loves company.
        </h2>
        {slides.map((slide) => (
          <div
            key={slide.text || slide.textLines?.join(' ')}
            className="relative flex min-h-[100svh] items-center justify-center px-3 clash-bg"
            style={{ background: slide.bg, color: slide.color }}
          >
            <SlideCopy slide={slide} />
          </div>
        ))}
      </section>
    )
  }

  return (
    <section
      id="community"
      ref={sectionRef}
      className="relative z-20"
      style={runwayStyle}
      aria-labelledby="social-heading"
    >
      <div
        className="sticky top-0 flex h-[100svh] w-full items-center justify-center overflow-x-clip border-b-4 border-dark transition-[background] duration-200"
        style={{ background: active.bg, color: active.color }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-30 slash-bg"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute left-8 top-10 h-24 w-24 -rotate-12 border-4"
          style={{ borderColor: active.accent }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-16 right-10 h-14 w-36 rotate-6"
          style={{ background: active.accent }}
          aria-hidden="true"
        />

        <h2 id="social-heading" className="sr-only">
          The Crave Club — trouble loves company.
        </h2>

        {slides.map((slide, i) => (
          <div
            key={slide.text || slide.textLines?.join(' ')}
            className="absolute inset-x-0 z-10 flex w-full items-center justify-center px-3 transition-opacity duration-200"
            style={{
              opacity: i === activeIndex ? 1 : 0,
              pointerEvents: i === activeIndex ? 'auto' : 'none',
            }}
            aria-hidden={i !== activeIndex}
          >
            <SlideCopy slide={slide} />
          </div>
        ))}

        <div className="absolute inset-x-0 bottom-5 z-20 flex justify-center gap-1.5">
          {slides.map((slide, i) => (
            <span
              key={`s-${slide.text || slide.textLines?.join('-')}`}
              className={`h-2.5 border-2 border-dark transition-all ${
                i === activeIndex ? 'w-9' : 'w-2.5 opacity-50'
              }`}
              style={{
                background: i === activeIndex ? active.accent : 'transparent',
              }}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
