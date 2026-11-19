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

      <div
        className="absolute inset-x-0 top-[18%] h-16"
        style={{
          background:
            'repeating-linear-gradient(90deg, #120e12 0 24px, #D5FF00 24px 48px, #FF174F 48px 72px)',
          transform: 'rotate(-3deg) scaleX(1.1)',
        }}
      />
      <div
        className="absolute inset-x-0 bottom-[22%] h-12"
        style={{
          background:
            'repeating-linear-gradient(90deg, #FF4FD8 0 28px, #120e12 28px 56px, #D5FF00 56px 84px)',
          transform: 'rotate(2deg) scaleX(1.1)',
        }}
      />

      <div className="absolute left-[8%] top-[12%] h-28 w-28 rotate-12 border-8 border-dark bg-cream" />
      <div className="absolute right-[8%] bottom-[14%] h-24 w-40 -rotate-6 border-8 border-dark bg-mess" />
      <div className="absolute right-[36%] top-[8%] h-16 w-16 rotate-45 bg-dark" />

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
          <div
            data-reveal
            className="container-crave grid gap-3 sm:grid-cols-2"
          >
            <figure className="overflow-hidden border-4 border-dark bg-cream shadow-[8px_8px_0_#FF174F]">
              <img
                src={brand.mascotMale}
                alt="CRAVE male mascot - cool sunglasses troublemaker"
                width={864}
                height={1152}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover object-top"
              />
              <figcaption className="border-t-4 border-dark bg-dark px-4 py-3 font-impact text-sm tracking-wide text-acid">
                Him. Bad influence.
              </figcaption>
            </figure>
            <figure className="overflow-hidden border-4 border-dark bg-cream shadow-[8px_8px_0_#D5FF00]">
              <img
                src={brand.mascotFemale}
                alt="CRAVE female mascot - glamorous candy troublemaker"
                width={864}
                height={1152}
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
          <figure className="mx-auto w-full max-w-[1400px] overflow-hidden border-4 border-dark">
            <img
              src={brand.mascotExpressions}
              alt="CRAVE mascot moods - The Tease, The Rebel, The Chill, The Wink"
              width={1280}
              height={720}
              loading="lazy"
              className="mx-auto w-full object-cover"
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
                textShadow: '0.07em 0.07em 0 #FF174F, -0.04em 0.04em 0 #D5FF00',
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
                      item.accent === '#D5FF00' || item.accent === '#FF7200'
                        ? '#171116'
                        : '#FFF1E6',
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
                      color: '#FFE8D2',
                      textShadow:
                        '0.07em 0.07em 0 #120e12, -0.045em 0.04em 0 #D5FF00',
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
                Absolutely no interest in behaving. They&apos;re not here to fit
                in. They&apos;re here to steal the spotlight.
              </p>
              <p
                className="mt-10 text-center font-impact uppercase tracking-wide text-acid"
                style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.6rem)' }}
              >
                Don&apos;t stare. They know.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
