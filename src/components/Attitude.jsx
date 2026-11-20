import { useRef } from 'react'
import { attitudes, brand } from '../data/site'
import { FitWidthText } from './FitWidthText'
import { useGsapReveal } from '../hooks/useGsapReveal'

function AttitudeDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-y-0 left-0 w-[34%] bg-riot" />
      <div className="absolute inset-y-0 right-0 w-[30%] bg-acid" />
      <div className="absolute left-[28%] top-0 h-[42%] w-[48%] -skew-x-6 bg-rebel" />
      <div className="absolute bottom-0 left-[22%] h-[36%] w-[56%] skew-x-3 bg-chaos" />
      <div className="absolute right-[6%] top-[14%] sticker rotate-[10deg] bg-acid text-dark">
        Trouble
      </div>
      <div className="absolute left-[5%] bottom-[40%] sticker -rotate-8 bg-riot text-cream">
        Pick a mood
      </div>
    </div>
  )
}

export function Attitude() {
  const ref = useRef(null)
  useGsapReveal(ref)

  return (
    <section
      id="attitude"
      ref={ref}
      className="relative overflow-x-clip text-cream hero-chaos-bg"
      aria-labelledby="attitude-heading"
    >
      <AttitudeDecor />

      <div className="relative z-10">
        <div className="section-pad pt-10">
          <div data-reveal className="container-crave grid gap-3 sm:grid-cols-2">
            <figure className="overflow-hidden border-4 border-dark bg-[#E5D9C3] shadow-[8px_8px_0_#FF006E]">
              <img
                src={brand.mascotMale}
                alt="CRAVE male mascot - cool sunglasses troublemaker"
                width={768}
                height={1024}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover object-top"
              />
              <figcaption className="border-t-4 border-dark bg-dark px-4 py-3 font-impact text-sm tracking-wide text-acid">
                Him. Bad influence.
              </figcaption>
            </figure>
            <figure className="overflow-hidden border-4 border-dark bg-[#E5D9C3] shadow-[8px_8px_0_#D6FF00]">
              <img
                src={brand.mascotFemale}
                alt="CRAVE female mascot - lollipop troublemaker"
                width={768}
                height={1024}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover object-top"
              />
              <figcaption className="border-t-4 border-dark bg-riot px-4 py-3 font-impact text-sm tracking-wide text-cream">
                Her. Worse influence.
              </figcaption>
            </figure>
          </div>
        </div>

        <div data-reveal className="mt-8 w-full px-2 sm:px-4">
          <figure className="mx-auto w-full max-w-[1400px] overflow-hidden border-4 border-dark shadow-[8px_8px_0_#9700FF]">
            <img
              src={brand.mascotDuoFaces}
              alt="CRAVE pop-art duo - campaign frame"
              width={1600}
              height={900}
              loading="lazy"
              className="mx-auto aspect-[16/9] w-full object-cover object-center"
            />
          </figure>
        </div>

        <div className="section-pad section-y">
          <div className="container-crave">
            <p data-reveal className="eyebrow w-fit bg-acid px-2 py-1 text-dark">
              Let&apos;s see what you&apos;re made of.
            </p>
            <h2
              id="attitude-heading"
              data-reveal
              className="mt-4 display-xl max-w-[12ch] text-balance"
              style={{
                textShadow: '0.07em 0.07em 0 #FF006E, -0.04em 0.04em 0 #D6FF00',
              }}
            >
              What&apos;s your kind of{' '}
              <span className="bg-riot px-2 text-cream">trouble?</span>
            </h2>

            <div className="mt-12 grid gap-3 sm:grid-cols-2">
              {attitudes.map((item, i) => (
                <article
                  key={item.name}
                  data-reveal
                  className="border-4 border-cream p-6 sm:p-8"
                  style={{
                    background: item.accent,
                    color:
                      item.accent === '#D6FF00' || item.accent === '#FF7B00'
                        ? '#0A0A0F'
                        : '#F8FAFC',
                    transform: i % 2 === 0 ? 'rotate(-1deg)' : 'rotate(1deg)',
                  }}
                >
                  <h3 className="font-display text-4xl tracking-wide sm:text-5xl">
                    {item.name}
                  </h3>
                  <p className="mt-3 font-impact text-lg tracking-wide">
                    {item.line}
                  </p>
                </article>
              ))}
            </div>

            <div
              data-reveal
              className="mt-12 overflow-hidden border-4 border-dark"
            >
              <img
                src={brand.mascotMoods}
                alt="CRAVE duo moods on grunge canvas"
                width={1600}
                height={900}
                loading="lazy"
                className="aspect-[16/9] w-full object-cover object-center"
              />
            </div>

            <p
              data-reveal
              className="mt-12 font-impact text-2xl tracking-wide text-acid sm:text-3xl"
            >
              So, which one are you, baby?
            </p>

            <div
              data-reveal
              className="mt-16 overflow-x-clip border-4 border-acid bg-riot px-3 py-14 text-cream sm:px-10 sm:py-20"
            >
              <p className="text-center font-impact text-sm uppercase tracking-[0.14em] text-acid sm:text-base">
                Oh, them?
              </p>
              <h3 className="mt-5 flex w-full max-w-full flex-col font-display uppercase tracking-[-0.02em]">
                {['Bad news.', 'The good kind.'].map((line) => (
                  <FitWidthText
                    key={line}
                    as="span"
                    minPx={40}
                    maxPx={260}
                    pad={24}
                    style={{
                      color: '#F8FAFC',
                      textShadow:
                        '0.07em 0.07em 0 #0A0A0F, -0.045em 0.04em 0 #D6FF00',
                      marginBlock: '0.05em',
                    }}
                  >
                    {line}
                  </FitWidthText>
                ))}
              </h3>
              <p
                className="mx-auto mt-8 max-w-[34ch] px-1 text-center font-impact uppercase leading-[1.1] tracking-wide text-cream"
                style={{ fontSize: 'clamp(1.35rem, 4vw, 2.4rem)' }}
              >
                Meet the faces of CRAVE. A little attitude. A little mischief.
                Absolutely no interest in behaving.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
