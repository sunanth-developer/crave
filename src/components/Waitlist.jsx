import { useId, useRef, useState } from 'react'
import { ArrowRight, CircleAlert, LoaderCircle } from 'lucide-react'
import { brand } from '../data/site'
import { useGsapReveal } from '../hooks/useGsapReveal'
import {
  getWaitlistEndpoint,
  isValidEmail,
  submitWaitlist,
} from '../lib/waitlist'

export function Waitlist() {
  const sectionRef = useRef(null)
  const emailId = useId()
  const consentId = useId()
  useGsapReveal(sectionRef)

  const endpointConfigured = Boolean(getWaitlistEndpoint())
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')
  const [fieldError, setFieldError] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    setFieldError('')
    setMessage('')

    if (!isValidEmail(email)) {
      setFieldError('Oops. That didn\'t go as planned. Try again, baby.')
      setStatus('error')
      return
    }

    if (!consent) {
      setFieldError('Say yes first. We don\'t play without consent.')
      setStatus('error')
      return
    }

    if (!endpointConfigured) {
      setStatus('unavailable')
      setMessage(
        'Waitlist signup is not available yet. Connect VITE_WAITLIST_ENDPOINT when you\'re ready.',
      )
      return
    }

    setStatus('loading')
    try {
      const result = await submitWaitlist({ email })
      if (result.ok) {
        setStatus('success')
        setMessage(result.message || "Well, hello, trouble. You're on the list.")
        setEmail('')
        setConsent(false)
      } else if (result.code === 'NOT_CONFIGURED') {
        setStatus('unavailable')
        setMessage(result.message)
      } else {
        setStatus('error')
        setMessage(result.message || 'Something went wrong, baby.')
      }
    } catch {
      setStatus('error')
      setMessage('Well, that was awkward. Try again, baby.')
    }
  }

  return (
    <section
      id="waitlist"
      ref={sectionRef}
      className="relative z-30 overflow-hidden bg-cream text-dark section-y check-bg"
      aria-labelledby="waitlist-heading"
    >
      <div className="section-pad">
        <div className="container-crave">
          <div
            data-reveal
            className="relative overflow-hidden border-4 border-dark bg-dark text-cream shadow-[8px_8px_0_#FF174F] sm:shadow-[14px_14px_0_#FF174F]"
          >
            <div className="relative grid items-stretch md:grid-cols-[1.05fr_0.95fr]">
              <div className="relative z-10 order-2 px-5 py-10 sm:px-10 md:order-1 md:px-14 md:py-16">
                <p className="eyebrow text-acid">
                  Well, look who&apos;s interested.
                </p>
                <h2
                  id="waitlist-heading"
                  className="mt-4 display-lg max-w-[12ch] text-balance"
                >
                  Don&apos;t be the last
                  <br />
                  to get a taste.
                </h2>
                <p className="mt-5 max-w-md text-lg font-bold leading-snug text-cream/85">
                  Get on the list. Be first to hear about our launch, new drops
                  and everything sweet that&apos;s coming.
                </p>

                <form
                  className="mt-9 max-w-xl space-y-4"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <label className="sr-only" htmlFor={emailId}>
                      Email address
                    </label>
                    <input
                      id={emailId}
                      name="email"
                      type="email"
                      autoComplete="email"
                      inputMode="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="YOUR EMAIL, BABY."
                      aria-invalid={Boolean(fieldError)}
                      aria-describedby={fieldError ? 'waitlist-error' : undefined}
                      className="min-h-14 flex-1 border-4 border-dark bg-cream px-5 font-impact text-sm tracking-wide text-dark placeholder:text-dark/45"
                    />
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="cta-riot min-h-14 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {status === 'loading' ? (
                        <>
                          <LoaderCircle className="animate-spin" size={18} />
                          Hold on, hot stuff
                        </>
                      ) : (
                        <>
                          Save me a spot
                          <ArrowRight size={18} aria-hidden="true" />
                        </>
                      )}
                    </button>
                  </div>

                  <label
                    htmlFor={consentId}
                    className="flex cursor-pointer items-start gap-3 text-sm font-bold text-cream/75"
                  >
                    <input
                      id={consentId}
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1 h-4 w-4 border-cream/30 accent-acid"
                    />
                    <span>
                      Yes - tease me with CRAVE updates. We promise not to be
                      clingy. Just interesting.
                    </span>
                  </label>

                  {fieldError ? (
                    <p
                      id="waitlist-error"
                      role="alert"
                      className="flex items-start gap-2 text-sm font-bold text-riot"
                    >
                      <CircleAlert size={16} className="mt-0.5 shrink-0" />
                      {fieldError}
                    </p>
                  ) : null}

                  {message ? (
                    <p
                      role="status"
                      className={`border-4 border-dark px-4 py-3 text-sm font-bold ${
                        status === 'success'
                          ? 'bg-acid text-dark'
                          : status === 'unavailable'
                            ? 'bg-cream/10 text-cream'
                            : 'bg-riot text-cream'
                      }`}
                    >
                      {message}
                    </p>
                  ) : null}

                  {!endpointConfigured && status === 'idle' ? (
                    <p className="text-xs font-bold text-cream/40">
                      Backend not connected yet. Submissions stay disabled until
                      an API endpoint is configured.
                    </p>
                  ) : null}
                </form>
              </div>

              <div className="relative order-1 min-h-[280px] overflow-hidden border-b-4 border-dark bg-cream sm:min-h-[360px] md:order-2 md:min-h-full md:border-b-0 md:border-l-4">
                <div
                  className="absolute right-3 top-3 z-20 rotate-[8deg] sticker bg-acid text-dark"
                  aria-hidden="true"
                >
                  Save me a taste
                </div>
                <img
                  src={brand.mascotWaitlist}
                  alt="CRAVE pop-art mascot inviting you onto the waitlist"
                  width={768}
                  height={1024}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
