import { manifestoLines } from '../data/site'
import { usePinnedSlides } from '../hooks/usePinnedSlides'
import { FluidBlock } from './FitWidthText'

const slides = [
  {
    text: "WE'RE NOT THE SWEET, INNOCENT TYPE.",
    bg: '#FF174F',
    color: '#FFF1E6',
    accent: '#D5FF00',
  },
  ...manifestoLines.map((line, i) => {
    const palette = [
      { bg: '#120e12', color: '#D5FF00', accent: '#FF174F' },
      { bg: '#D5FF00', color: '#120e12', accent: '#FF174F' },
      { bg: '#FF7200', color: '#120e12', accent: '#782BFF' },
      { bg: '#782BFF', color: '#FFF1E6', accent: '#D5FF00' },
      { bg: '#FFE8D2', color: '#FF174F', accent: '#120e12' },
      { bg: '#FF174F', color: '#FFF1E6', accent: '#120e12' },
      { bg: '#120e12', color: '#FF7200', accent: '#D5FF00' },
      { bg: '#D5FF00', color: '#782BFF', accent: '#120e12' },
    ]
    return {
      text: line.toUpperCase(),
      ...palette[i % palette.length],
    }
  }),
  {
    text: "WE'RE CRAVE. WHAT DID YOU EXPECT?",
    bg: '#120e12',
    color: '#D5FF00',
    accent: '#FF174F',
  },
]

function SlideDecor({ accent }) {
  return (
    <>
      <div
        className="pointer-events-none absolute -left-8 top-16 h-32 w-[40%] -rotate-6 opacity-80"
        style={{ background: accent }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-20 right-0 h-24 w-[35%] rotate-3 opacity-70"
        style={{ background: accent }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-25 slash-bg"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-6 top-1/3 h-20 w-20 rotate-12 border-4 opacity-50"
        style={{ borderColor: accent }}
        aria-hidden="true"
      />
    </>
  )
}

function ManifestoLine({ text, accent, color }) {
  return (
    <FluidBlock
      as="p"
      className="px-2 text-center font-display uppercase tracking-wide"
      minRem={3.2}
      preferVw={12}
      maxRem={9}
      style={{
        color,
        textShadow: `0.07em 0.07em 0 ${accent}`,
      }}
    >
      {text}
    </FluidBlock>
  )
}

export function Temptation() {
  const { sectionRef, activeIndex, reduced, runwayStyle } = usePinnedSlides(
    slides.length,
    { perSlide: 1 },
  )
  const active = slides[activeIndex] ?? slides[0]

  if (reduced) {
    return (
      <section
        id="temptation"
        className="relative overflow-hidden"
        aria-labelledby="temptation-heading"
      >
        <h2 id="temptation-heading" className="sr-only">
          We&apos;re not the sweet, innocent type.
        </h2>
        {slides.map((slide) => (
          <div
            key={slide.text}
            className="relative flex min-h-[100svh] items-center justify-center border-b-4 border-dark px-3"
            style={{ background: slide.bg, color: slide.color }}
          >
            <SlideDecor accent={slide.accent} />
            <div className="relative z-10 w-full max-w-[100vw]">
              <ManifestoLine
                text={slide.text}
                accent={slide.accent}
                color={slide.color}
              />
            </div>
          </div>
        ))}
      </section>
    )
  }

  return (
    <section
      id="temptation"
      ref={sectionRef}
      className="relative z-20"
      style={runwayStyle}
      aria-labelledby="temptation-heading"
    >
      <div
        className="sticky top-0 flex h-[100svh] w-full items-center justify-center overflow-hidden border-b-4 border-dark transition-[background] duration-200"
        style={{ background: active.bg, color: active.color }}
      >
        <SlideDecor accent={active.accent} />
        <h2 id="temptation-heading" className="sr-only">
          We&apos;re not the sweet, innocent type.
        </h2>

        <p className="absolute left-3 top-5 z-20 sm:left-8">
          <span className="border-2 border-dark bg-dark px-3 py-1.5 font-impact text-sm uppercase tracking-wide text-acid sm:text-base">
            Manifesto
          </span>
        </p>

        {slides.map((slide, i) => (
          <div
            key={slide.text}
            className="absolute inset-x-0 z-10 w-full px-3 transition-opacity duration-200 sm:px-6"
            style={{
              opacity: i === activeIndex ? 1 : 0,
              pointerEvents: i === activeIndex ? 'auto' : 'none',
            }}
            aria-hidden={i !== activeIndex}
          >
            <ManifestoLine
              text={slide.text}
              accent={slide.accent}
              color={slide.color}
            />
          </div>
        ))}

        <div className="absolute inset-x-0 bottom-5 z-20 flex max-w-full flex-wrap justify-center gap-1 px-3 sm:bottom-6 sm:gap-1.5">
          {slides.map((slide, i) => (
            <span
              key={`dot-${slide.text}`}
              className={`h-2 border-2 border-dark transition-all sm:h-2.5 ${
                i === activeIndex ? 'w-7 sm:w-9' : 'w-2 opacity-50 sm:w-2.5'
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
