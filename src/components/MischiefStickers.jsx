import { mischiefStickers } from '../data/site'

const positions = [
  { top: '12%', left: '4%' },
  { top: '28%', right: '3%' },
  { bottom: '22%', left: '6%' },
  { top: '58%', right: '5%' },
  { bottom: '8%', right: '18%' },
  { top: '72%', left: '14%' },
]

export function MischiefStickers() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[5] hidden overflow-hidden lg:block"
      aria-hidden="true"
    >
      {mischiefStickers.map((sticker, i) => {
        const pos = positions[i % positions.length]
        return (
          <span
            key={sticker.label}
            className="sticker absolute text-[0.72rem] shadow-[3px_3px_0_rgba(0,0,0,0.85)] opacity-90 animate-wiggle"
            style={{
              ...pos,
              background: sticker.bg,
              color: sticker.color,
              transform: `rotate(${sticker.rotate}deg)`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${3.6 + (i % 3) * 0.5}s`,
            }}
          >
            {sticker.label}
          </span>
        )
      })}
    </div>
  )
}
