import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Menu, X } from 'lucide-react'
import { Logo } from './Logo'
import { brand, navLinks } from '../data/site'

const linkTilt = ['-rotate-1', 'rotate-1', '-rotate-2', 'rotate-2', '-rotate-1']

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const canPortal = typeof document !== 'undefined'

  useEffect(() => {
    let lastY = window.scrollY

    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 20)

      if (y < 24) {
        setHidden(false)
      } else if (y > lastY + 4) {
        setHidden(true)
      } else if (y < lastY - 4) {
        setHidden(false)
      }

      lastY = y
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const close = () => setOpen(false)

  const mobileMenu =
    canPortal && open
      ? createPortal(
          <div
            id="mobile-nav"
            className="fixed inset-0 z-[200] flex flex-col bg-dark lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage: `url("${brand.pattern}")`,
                backgroundSize: '420px',
              }}
              aria-hidden="true"
            />

            <div className="section-pad relative z-10">
              <div className="container-crave flex h-16 items-center justify-between">
                <a
                  href="#top"
                  className="inline-flex border-4 border-dark bg-dark shadow-[4px_4px_0_#D6FF00]"
                  onClick={(e) => {
                    e.preventDefault()
                    close()
                    document.getElementById('top')?.scrollIntoView()
                  }}
                >
                  <Logo className="h-9 w-auto max-w-[160px]" />
                </a>
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center border-4 border-dark bg-acid text-dark"
                  aria-label="Close menu"
                  onClick={close}
                >
                  <X size={22} />
                </button>
              </div>
            </div>

            <nav
              className="relative z-10 flex flex-1 flex-col justify-center gap-4 px-6 pb-16"
              aria-label="Mobile"
            >
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className={`w-fit border-4 border-dark bg-cream px-4 py-3 font-display text-4xl tracking-wide text-dark shadow-[6px_6px_0_#FF006E] transition hover:bg-acid ${linkTilt[i % linkTilt.length]}`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#waitlist"
                onClick={close}
                className="cta-acid mt-6 w-fit"
              >
                Join the waitlist
              </a>
            </nav>
          </div>,
          document.body,
        )
      : null

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-[transform,opacity] duration-300 ${
          open
            ? 'pointer-events-none bg-transparent'
            : hidden
              ? 'pointer-events-none -translate-y-full opacity-0'
              : 'bg-transparent'
        }`}
      >
        <div className="section-pad overflow-x-clip">
          <div className="container-crave flex h-16 items-center justify-between gap-3 md:h-20">
            <a
              href="#top"
              className={`inline-flex border-4 border-dark bg-dark shadow-[4px_4px_0_#D6FF00] transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#FF006E] ${
                open ? 'invisible' : ''
              }`}
              onClick={close}
            >
              <Logo className="h-8 w-auto max-w-[140px] md:h-10 md:max-w-[180px]" />
            </a>

            <nav
              className="hidden items-center gap-2 lg:flex xl:gap-3"
              aria-label="Primary"
            >
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`border-4 border-dark bg-cream px-2.5 py-1.5 font-impact text-[0.7rem] uppercase tracking-wide text-dark shadow-[3px_3px_0_#0A0A0F] transition hover:-translate-y-0.5 hover:bg-acid hover:shadow-[5px_5px_0_#FF006E] xl:px-3 xl:text-xs ${linkTilt[i % linkTilt.length]} ${
                    scrolled ? 'opacity-100' : 'opacity-95'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="#waitlist"
                className="hidden min-h-10 items-center border-4 border-dark bg-riot px-3 font-impact text-[0.65rem] uppercase tracking-wide text-cream shadow-[3px_3px_0_#D6FF00] transition hover:-translate-y-0.5 hover:bg-acid hover:text-dark sm:inline-flex md:min-h-11 md:px-4 md:text-xs md:shadow-[4px_4px_0_#D6FF00]"
              >
                Explore / Join
              </a>

              <button
                type="button"
                className={`pointer-events-auto inline-flex h-11 w-11 items-center justify-center border-4 border-dark bg-acid text-dark shadow-[3px_3px_0_#FF006E] lg:hidden ${
                  open ? 'invisible' : ''
                }`}
                aria-expanded={open}
                aria-controls="mobile-nav"
                aria-label="Open menu"
                onClick={() => setOpen(true)}
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileMenu}
    </>
  )
}
