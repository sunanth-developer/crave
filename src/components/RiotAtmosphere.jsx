const stickers = [
  {
    text: 'BAD IDEA',
    className: 'left-[3%] top-[14%] rotate-[-12deg] bg-acid text-dark',
  },
  {
    text: 'NO RULES',
    className: 'right-[3%] top-[26%] rotate-[9deg] bg-riot text-cream',
  },
  {
    text: 'LICK FIRST',
    className: 'left-[5%] top-[48%] rotate-[7deg] bg-mess text-dark',
  },
  {
    text: 'TOO MUCH?',
    className: 'right-[4%] top-[58%] rotate-[-8deg] bg-chaos text-dark',
  },
  {
    text: 'NEVER SORRY',
    className: 'left-[38%] top-[78%] rotate-[4deg] bg-rebel text-cream',
  },
  {
    text: 'BITE ME',
    className: 'right-[12%] top-[12%] rotate-[-4deg] bg-cream text-riot',
  },
]

export function RiotAtmosphere() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] max-w-[100vw] overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute -left-24 top-10 h-72 w-72 rotate-12 bg-riot/50 blur-2xl" />
      <div className="absolute -right-16 top-1/4 h-96 w-96 -rotate-6 bg-rebel/45 blur-3xl" />
      <div className="absolute bottom-10 left-1/4 h-64 w-80 rotate-3 bg-acid/25 blur-2xl" />
      <div className="absolute right-1/4 top-[65%] h-56 w-56 bg-chaos/35 blur-2xl" />
      <div className="absolute left-1/2 top-[40%] h-40 w-40 -translate-x-1/2 bg-mess/25 blur-2xl" />

      <div
        className="absolute inset-y-0 left-0 w-[9vw] max-w-28 hazard-bg opacity-55"
        style={{ clipPath: 'polygon(0 0, 100% 3%, 65% 100%, 0 100%)' }}
      />
      <div
        className="absolute inset-y-0 right-0 w-[8vw] max-w-24 opacity-50"
        style={{
          background:
            'repeating-linear-gradient(45deg, #ff174f 0 14px, #d5ff00 14px 28px)',
          clipPath: 'polygon(35% 0, 100% 0, 100% 100%, 0 100%)',
        }}
      />

      <div className="absolute left-[10%] top-[10%] h-28 w-28 rounded-full border-4 border-acid/70" />
      <div className="absolute right-[16%] top-[42%] h-20 w-48 -rotate-12 border-4 border-riot/80" />
      <div className="absolute bottom-[18%] left-[22%] h-24 w-24 rotate-45 border-4 border-mess/70" />
      <div className="absolute left-[55%] top-[20%] h-3 w-40 rotate-[-18deg] bg-acid/80" />
      <div className="absolute right-[28%] bottom-[30%] h-3 w-32 rotate-[22deg] bg-riot/80" />
      <div className="absolute left-[18%] bottom-[40%] h-16 w-16 rotate-12 bg-chaos/60" />
      <div className="absolute right-[40%] top-[70%] h-12 w-12 -rotate-6 bg-rebel/70" />

      <svg
        className="absolute left-[30%] top-[55%] h-24 w-24 rotate-12 text-acid opacity-50"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <polygon points="50,5 61,38 96,38 68,59 79,92 50,72 21,92 32,59 4,38 39,38" />
      </svg>
      <svg
        className="absolute right-[22%] top-[18%] h-16 w-16 -rotate-6 text-riot opacity-60"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="10" />
        <path d="M20 50h60M50 20v60" stroke="currentColor" strokeWidth="10" />
      </svg>

      {stickers.map((item) => (
        <span
          key={item.text}
          className={`sticker absolute hidden opacity-80 wobble-cocky md:inline-flex ${item.className}`}
        >
          {item.text}
        </span>
      ))}

      <div className="absolute inset-0 opacity-[0.12] star-wash" />
    </div>
  )
}
