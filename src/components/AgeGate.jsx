import { useEffect, useId, useState } from 'react'
import { brand } from '../data/site'

const STORAGE_KEY = 'crave-age-verified'
const DECLINED_KEY = 'crave-age-declined'

function readStored() {
  try {
    if (sessionStorage.getItem(STORAGE_KEY) === 'yes') return 'allowed'
    if (sessionStorage.getItem(DECLINED_KEY) === 'yes') return 'declined'
  } catch {
    /* private mode */
  }
  return 'pending'
}

export function AgeGate({ children }) {
  const titleId = useId()
  const descId = useId()
  const [status, setStatus] = useState(() =>
    typeof window === 'undefined' ? 'pending' : readStored(),
  )

  useEffect(() => {
    const locked = status !== 'allowed'
    document.body.style.overflow = locked ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [status])

  function allow() {
    try {
      sessionStorage.setItem(STORAGE_KEY, 'yes')
      sessionStorage.removeItem(DECLINED_KEY)
    } catch {
      /* ignore */
    }
    setStatus('allowed')
  }

  function decline() {
    try {
      sessionStorage.setItem(DECLINED_KEY, 'yes')
      sessionStorage.removeItem(STORAGE_KEY)
    } catch {
      /* ignore */
    }
    setStatus('declined')
  }

  function reset() {
    try {
      sessionStorage.removeItem(STORAGE_KEY)
      sessionStorage.removeItem(DECLINED_KEY)
    } catch {
      /* ignore */
    }
    setStatus('pending')
  }

  return (
    <>
      <div
        aria-hidden={status !== 'allowed'}
        className={status === 'allowed' ? '' : 'pointer-events-none select-none'}
        style={status === 'allowed' ? undefined : { filter: 'blur(12px)' }}
      >
        {children}
      </div>

      {status !== 'allowed' ? (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-riot p-4 clash-bg"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={descId}
        >
          <div className="relative w-full max-w-xl border-4 border-dark bg-cream p-6 text-dark shadow-[12px_12px_0_#171116] sm:p-10">
            <div className="flex items-center gap-3">
              <img
                src={brand.logoLight || brand.logoLockup}
                alt="CRAVE"
                width={240}
                height={72}
                className="h-12 w-auto border-4 border-dark bg-dark object-contain shadow-[6px_6px_0_#FF006E] sm:h-14"
              />
              <img
                src={brand.mascotDuoBanner}
                alt=""
                width={160}
                height={90}
                className="hidden h-14 w-auto border-4 border-dark object-cover shadow-[6px_6px_0_#D6FF00] sm:block"
                aria-hidden="true"
              />
            </div>

            {status === 'pending' ? (
              <>
                <h2
                  id={titleId}
                  className="mt-8 font-display text-6xl leading-none tracking-wide sm:text-7xl"
                >
                  Hey,
                  <br />
                  <span className="text-riot">trouble.</span>
                </h2>
                <p
                  id={descId}
                  className="mt-5 max-w-sm text-lg font-bold leading-snug"
                >
                  You&apos;ve got good taste. We can tell.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={allow}
                    className="cta-riot min-h-12"
                    autoFocus
                  >
                    Enter if you dare
                  </button>
                  <button
                    type="button"
                    onClick={decline}
                    className="inline-flex min-h-12 items-center justify-center border-4 border-dark bg-cream px-5 font-impact text-sm tracking-wide text-dark transition hover:bg-dark hover:text-cream"
                  >
                    Still too soft
                  </button>
                </div>
                <p className="mt-6 text-[11px] leading-relaxed text-dark/50">
                  18+ site access check. Not a product sales claim.
                </p>
              </>
            ) : (
              <>
                <h2
                  id={titleId}
                  className="mt-8 font-display text-5xl leading-none sm:text-6xl"
                >
                  Not tonight,
                  <br />
                  sugar.
                </h2>
                <p id={descId} className="mt-5 text-base font-bold">
                  18+ only. Come back when you&apos;re ready to misbehave.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="cta-acid mt-8 min-h-12"
                >
                  Wait - I meant yes
                </button>
              </>
            )}
          </div>
        </div>
      ) : null}
    </>
  )
}
