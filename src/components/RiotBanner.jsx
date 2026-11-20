import { brand } from '../data/site'

const variants = {
  boring: {
    id: 'banner-boring',
    eyebrow: 'Brand attitude',
    title: "WE DON'T DO BORING.",
    sub: 'Good taste. Bad attitude.',
    href: '#intro',
    cta: 'Meet the chaos',
    className: 'banner-boring',
    image: brand.mascotBannerBoring,
    imageAlt: 'CRAVE duo framed for the boring banner',
    object: 'object-[72%_center]',
  },
  trouble: {
    id: 'banner-trouble',
    eyebrow: 'Product discovery',
    title: 'PICK YOUR KIND OF TROUBLE.',
    sub: 'Four ways to misbehave.',
    href: '#universe',
    cta: 'Explore the range',
    className: 'banner-trouble',
    image: brand.mascotGalleryGrunge,
    imageAlt: 'CRAVE duo framed for product discovery',
    object: 'object-center',
  },
  drops: {
    id: 'banner-drops',
    eyebrow: 'Limited drops',
    title: 'LIMITED DROPS. MAXIMUM CRAVE.',
    sub: 'New chaos, always.',
    href: '#campaign',
    cta: "Don't blink",
    className: 'banner-drops',
    image: brand.mascotGalleryPoster,
    imageAlt: 'CRAVE duo framed for limited drops',
    object: 'object-center',
  },
  club: {
    id: 'banner-club',
    eyebrow: 'The Crave Club',
    title: 'TROUBLE LOVES COMPANY.',
    sub: 'For the real ones.',
    href: '#community',
    cta: 'Join the club',
    className: 'banner-club',
    image: brand.mascotBannerClub,
    imageAlt: 'CRAVE duo framed for the club banner',
    object: 'object-[70%_center]',
  },
}

export function RiotBanner({ variant = 'trouble' }) {
  const banner = variants[variant] || variants.trouble

  return (
    <section
      className={`relative overflow-x-clip border-y-4 border-dark ${banner.className}`}
      aria-labelledby={banner.id}
    >
      <div className="pointer-events-none absolute inset-0 opacity-30 slash-bg" aria-hidden="true" />

      <div className="section-pad relative z-10 py-10 md:py-14">
        <div className="container-crave grid items-center gap-6 md:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <p className="eyebrow w-fit border-2 border-dark bg-cream px-2 py-1 text-dark">
              {banner.eyebrow}
            </p>
            <h2
              id={banner.id}
              className="mt-4 font-display uppercase leading-[0.88] tracking-wide"
              style={{ fontSize: 'clamp(2.4rem, 8vw, 5.5rem)' }}
            >
              {banner.title}
            </h2>
            <p
              className="mt-4 max-w-[28ch] font-impact uppercase tracking-wide"
              style={{ fontSize: 'clamp(1.1rem, 2.8vw, 1.7rem)' }}
            >
              {banner.sub}
            </p>
            <a
              href={banner.href}
              className={`mt-7 !min-h-12 ${
                variant === 'trouble' ? 'cta-riot' : 'cta-acid'
              }`}
            >
              {banner.cta}
            </a>
          </div>

          <figure className="relative mx-auto w-full max-w-lg overflow-hidden border-4 border-dark bg-[#E5D9C3] shadow-[8px_8px_0_#08080B]">
            <img
              src={banner.image}
              alt={banner.imageAlt}
              loading="lazy"
              className={`aspect-[4/3] w-full object-cover ${banner.object || 'object-center'}`}
            />
            <figcaption className="absolute bottom-3 left-3 sticker -rotate-3 bg-acid text-dark">
              Zero chill
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
