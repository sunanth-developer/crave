import { Logo } from './Logo'
import { navLinks } from '../data/site'

const COPYRIGHT_YEAR = 2026

export function Footer() {
  return (
    <footer
      className="relative z-40 overflow-x-clip bg-bruise text-cream clash-bg"
      aria-labelledby="footer-heading"
    >
      <div className="border-y-4 border-dark py-5 hazard-bg">
        <p className="mx-auto w-fit -rotate-1 border-4 border-dark bg-cream px-4 py-2 text-center font-impact text-xl uppercase tracking-wide text-dark shadow-[6px_6px_0_#FF006E] sm:px-6 sm:py-3 sm:text-4xl">
          Stay naughty. Stay sweet.
        </p>
      </div>
      <div className="section-pad">
        <div className="container-crave flex flex-col gap-10 py-14 md:flex-row md:items-start md:justify-between md:py-16">
          <div>
            <h2 id="footer-heading" className="sr-only">
              CRAVE footer
            </h2>
            <a href="#top" className="inline-flex border-4 border-dark shadow-[4px_4px_0_#D5FF00]">
              <Logo className="h-14 w-auto sm:h-16" />
            </a>
            <p className="mt-6 max-w-xs text-sm font-bold text-cream/55">
              Got something to say? Don&apos;t be shy. Talk to us.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-impact text-sm tracking-wide text-cream/80 transition hover:text-acid"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#waitlist"
              className="font-impact text-sm tracking-wide text-cream/80 transition hover:text-acid"
            >
              Waitlist
            </a>
          </nav>

          <div className="text-sm font-bold text-cream/55">
            <p>Social channels to be confirmed.</p>
            <p className="mt-2">Follow the bad influence.</p>
            <p className="mt-2 text-cream/40">
              Privacy policy and terms are not published yet.
            </p>
          </div>
        </div>

        <div className="container-crave border-t border-cream/10 py-6 text-xs font-bold uppercase tracking-[0.14em] text-cream/40">
          <p>
            &copy; {COPYRIGHT_YEAR} CRAVE. All rights reserved. Logos, mascot
            and packaging visuals are concept assets. 18+ brand experience.
          </p>
        </div>
      </div>
    </footer>
  )
}
