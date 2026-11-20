import { useRef } from 'react'
import { brand } from '../data/site'
import { FitWidthText } from './FitWidthText'
import { useGsapReveal } from '../hooks/useGsapReveal'

export function Campaign() {
  const ref = useRef(null)
  useGsapReveal(ref)

  return (
    <section
      id="campaign"
      ref={ref}
      className="relative overflow-x-clip bg-dark text-cream campaign-drops-bg"
      aria-labelledby="campaign-heading"
    >
      <div data-reveal className="relative h-[100svh] w-full">
        <div
          className="absolute left-3 top-5 z-10 -rotate-6 border-4 border-dark bg-acid px-3 py-2 font-impact text-base uppercase tracking-wide text-dark shadow-[4px_4px_0_#FF006E] sm:left-8 sm:top-8 sm:text-lg"
          aria-hidden="true"
        >
          Limited access
        </div>
        <figure className="relative h-full w-full overflow-hidden border-b-4 border-dark">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={brand.mascotDuoMobile}
              type="image/webp"
            />
            <img
              src={brand.mascotDuoSun}
              alt="CRAVE pop-art duo limited drop concept"
              width={1600}
              height={900}
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />
          </picture>
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-dark/20"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-5 right-4 z-10 w-[30%] max-w-[14rem] rotate-2 border-4 border-dark bg-[#E5D9C3] shadow-[6px_6px_0_#FF006E] sm:bottom-8 sm:right-8"
            aria-hidden="true"
          >
            <img
              src={brand.mascotDuoPoster}
              alt=""
              className="aspect-[16/9] w-full object-cover"
              loading="lazy"
            />
          </div>
        </figure>
      </div>

      <div className="overflow-x-clip px-3 py-12 sm:px-6 md:py-16">
        <div className="w-full max-w-[100vw]">
          <p
            data-reveal
            className="text-center font-impact uppercase tracking-wide sm:text-left"
            style={{ fontSize: 'clamp(1.15rem, 3.2vw, 1.6rem)' }}
          >
            Limited drops. Maximum crave.
          </p>
          <h2
            id="campaign-heading"
            data-reveal
            className="mt-4 flex w-full max-w-full flex-col font-display uppercase tracking-[-0.02em]"
          >
            {['Limited drops.', 'Maximum crave.'].map((line) => (
              <FitWidthText
                key={line}
                as="span"
                minPx={40}
                maxPx={280}
                pad={24}
                style={{
                  color: '#F8FAFC',
                  textShadow:
                    '0.07em 0.07em 0 #08080B, -0.045em 0.04em 0 #FF006E',
                  marginBlock: '0.05em',
                }}
              >
                {line}
              </FitWidthText>
            ))}
          </h2>
          <p
            data-reveal
            className="mt-8 w-full font-impact uppercase leading-[1.1] tracking-wide"
            style={{ fontSize: 'clamp(1.45rem, 4.2vw, 2.8rem)' }}
          >
            Unexpected drops. New flavour obsessions. Limited surprises. Blink
            and you might miss the fun.
          </p>
          <ul
            data-reveal
            className="mt-10 grid gap-3 sm:grid-cols-2"
          >
            {[
              'GET IT WHILE YOU CAN.',
              "DON'T SAY WE DIDN'T WARN YOU.",
              'THE NEXT CRAVING IS COMING.',
              'KEEP YOUR EYES OPEN, BABY.',
            ].map((line) => (
              <li
                key={line}
                className="border-4 border-dark bg-dark px-4 py-5 font-impact uppercase tracking-wide text-cream"
                style={{ fontSize: 'clamp(1rem, 2.4vw, 1.75rem)' }}
              >
                {line}
              </li>
            ))}
          </ul>
          <a
            data-reveal
            href="#waitlist"
            className="cta-riot mt-10 !min-h-16 !px-10 !text-lg"
          >
            Keep me in the loop
          </a>
          <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-cream/50">
            Concept visual - not a live limited edition
          </p>
        </div>
      </div>
    </section>
  )
}
