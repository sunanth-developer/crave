import { useRef } from 'react'
import { categories } from '../data/site'
import { useGsapReveal } from '../hooks/useGsapReveal'

function UniverseDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
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
      <div className="absolute right-[8%] top-[12%] sticker rotate-12 bg-acid text-dark">
        Pick one
      </div>
      <div className="absolute left-[6%] bottom-[12%] sticker -rotate-6 bg-riot text-cream">
        Desire
      </div>
    </div>
  )
}

export function ProductUniverse() {
  const ref = useRef(null)
  useGsapReveal(ref)

  return (
    <section
      id="universe"
      ref={ref}
      className="relative overflow-x-clip text-cream universe-desire-bg"
      aria-labelledby="universe-heading"
    >
      <UniverseDecor />

      <div className="section-pad relative z-10 py-10 md:py-14">
        <div className="container-crave">
          <div
            data-reveal
            className="relative max-w-xl border-4 border-dark bg-cream p-4 text-dark shadow-[8px_8px_0_#FF174F] sm:p-6"
          >
            <p className="eyebrow w-fit bg-chaos px-2 py-1 text-dark">
              Oh, look what we have here.
            </p>
            <h2
              id="universe-heading"
              className="mt-3 font-display uppercase leading-[0.9] tracking-wide"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}
            >
              <span className="text-dark">Pick your</span>
              <br />
              <span className="bg-riot px-2 text-cream">desire.</span>
            </h2>
            <p className="mt-4 max-w-md bg-acid px-3 py-2 font-impact text-sm uppercase leading-snug tracking-wide text-dark sm:text-base">
              Four ways to get yourself into trouble.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat, index) => (
              <article
                key={cat.id}
                data-reveal
                className="group relative flex flex-col border-4 border-dark"
                style={{
                  background: cat.accent,
                  color: cat.textOn,
                }}
              >
                <div className="relative flex aspect-[5/4] items-center justify-center overflow-hidden border-b-4 border-dark bg-cream p-3 sm:p-4">
                  <img
                    src={cat.image}
                    alt={`${cat.name} packaging concept`}
                    loading="lazy"
                    className="max-h-full max-w-[85%] object-contain transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-2 top-2 sticker bg-dark text-cream !text-[0.65rem] !px-2 !py-1">
                    0{index + 1}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-3 sm:p-4">
                  <p className="eyebrow opacity-70">{cat.kind}</p>
                  <h3 className="font-display text-3xl tracking-wide">
                    {cat.short}
                  </h3>
                  <p className="font-impact text-sm leading-tight tracking-wide sm:text-base">
                    {cat.blurb}
                  </p>
                  <p className="text-xs font-bold opacity-80 sm:text-sm">
                    {cat.tease}
                  </p>
                  <a
                    href="#discover"
                    className="mt-auto inline-flex border-4 border-dark bg-dark px-3 py-2 font-impact text-xs tracking-wide text-cream transition hover:bg-cream hover:text-dark"
                  >
                    {cat.cta} →
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p
            data-reveal
            className="mt-6 max-w-xs text-xs font-bold uppercase tracking-[0.14em] text-cream/45"
          >
            Packaging visuals are concept mockups - not final product shots.
          </p>
        </div>
      </div>
    </section>
  )
}
