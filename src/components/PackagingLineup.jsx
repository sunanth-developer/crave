import { categories } from '../data/site'

export function PackagingLineup() {
  return (
    <section
      id="packaging"
      className="relative overflow-x-clip border-y-4 border-dark bg-cream text-dark"
      aria-labelledby="packaging-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 20%, rgba(255,0,110,0.2), transparent 40%), radial-gradient(circle at 85% 70%, rgba(151,0,255,0.18), transparent 42%)',
        }}
        aria-hidden="true"
      />

      <div className="section-pad relative z-10 py-10 md:py-14">
        <div className="container-crave">
          <p className="eyebrow w-fit bg-dark px-2 py-1 text-acid">The goods</p>
          <h2
            id="packaging-heading"
            className="mt-3 max-w-[16ch] font-display uppercase leading-[0.9] tracking-wide"
            style={{ fontSize: 'clamp(2.4rem, 7vw, 5rem)' }}
          >
            Packaging with a bad attitude.
          </h2>
          <p className="mt-4 max-w-lg font-impact text-base uppercase tracking-wide text-dark/80 sm:text-lg">
            Concept pouch fronts for every kind of trouble. Flavour names are
            placeholders - not final SKUs.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat, i) => (
              <article
                key={cat.id}
                className="group flex flex-col border-4 border-dark bg-dark text-cream shadow-[8px_8px_0_#0A0A0F] transition hover:-translate-y-1 hover:shadow-[10px_10px_0_#FF006E]"
                style={{
                  transform: i % 2 === 0 ? 'rotate(-1deg)' : 'rotate(1deg)',
                }}
              >
                <div className="relative aspect-[3/4] overflow-hidden border-b-4 border-dark bg-dark">
                  <img
                    src={cat.pack}
                    alt={`${cat.name} packaging concept front panel`}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-2 top-2 sticker !px-2 !py-1 !text-[0.65rem] bg-cream text-dark">
                    {cat.kind}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-4">
                  <h3 className="font-display text-2xl tracking-wide sm:text-3xl">
                    {cat.name}
                  </h3>
                  <p className="font-impact text-sm tracking-wide text-cream/80">
                    {cat.blurb}
                  </p>
                  <a
                    href="#discover"
                    className="mt-auto inline-flex w-fit border-2 border-cream bg-transparent px-3 py-2 font-impact text-xs uppercase tracking-wide text-cream transition hover:bg-acid hover:text-dark"
                  >
                    Peek inside ?
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
