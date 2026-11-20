import { brand } from '../data/site'

const shots = [
  {
    src: brand.mascotDuo,
    alt: 'CRAVE pop-art duo campaign frame',
    label: 'Born loud',
    tilt: '-rotate-1',
  },
  {
    src: brand.mascotGalleryPoster,
    alt: 'CRAVE duo vintage poster frame',
    label: 'Sweet sin',
    tilt: 'rotate-1',
  },
  {
    src: brand.mascotBannerBoring,
    alt: 'CRAVE duo we do not do boring frame',
    label: 'Zero chill',
    tilt: '-rotate-2',
  },
  {
    src: brand.mascotBannerClub,
    alt: 'CRAVE duo club energy frame',
    label: 'Trouble',
    tilt: 'rotate-2',
  },
  {
    src: brand.mascotGalleryGrunge,
    alt: 'CRAVE duo on grunge canvas',
    label: 'Unfiltered',
    tilt: '-rotate-1',
  },
  {
    src: brand.mascotDuoMobile,
    alt: 'CRAVE duo mobile square frame',
    label: 'Poster kids',
    tilt: 'rotate-1',
  },
]

export function MascotGallery() {
  return (
    <section
      className="relative overflow-x-clip border-y-4 border-dark bg-dark text-cream"
      aria-labelledby="mascot-gallery-heading"
    >
      <div className="section-pad relative z-10 py-8 md:py-10">
        <div className="container-crave flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-acid">Meet the bad influence</p>
            <h2
              id="mascot-gallery-heading"
              className="mt-2 font-display uppercase tracking-wide"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.6rem)' }}
            >
              Faces of the craving.
            </h2>
          </div>
          <p className="max-w-xs font-impact text-sm uppercase tracking-wide text-cream/70">
            Built for the site. Same attitude. Perfect crop.
          </p>
        </div>
      </div>

      <div className="flex gap-3 overflow-x-auto px-3 pb-10 pt-2 sm:px-6 md:gap-4">
        {shots.map((shot) => (
          <figure
            key={shot.label}
            className={`relative w-[78vw] max-w-sm shrink-0 overflow-hidden border-4 border-dark bg-[#E5D9C3] shadow-[6px_6px_0_#FF006E] sm:w-[42vw] md:w-[28vw] ${shot.tilt}`}
          >
            <img
              src={shot.src}
              alt={shot.alt}
              loading="lazy"
              decoding="async"
              className="aspect-[16/10] w-full object-cover object-center"
            />
            <figcaption className="absolute bottom-3 left-3 sticker bg-acid text-dark">
              {shot.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
