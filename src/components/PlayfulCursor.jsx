import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const TEASES = ['bite', 'more', 'oops', 'yes', 'sticky', 'again']

export function PlayfulCursor() {
  const reduced = usePrefersReducedMotion()
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [label, setLabel] = useState(TEASES[0])
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (reduced) return undefined
    if (window.matchMedia('(pointer: coarse)').matches) return undefined

    let frame = 0
    let target = { x: 0, y: 0 }
    let current = { x: 0, y: 0 }
    let tick = 0

    const onMove = (e) => {
      target = { x: e.clientX, y: e.clientY }
      setVisible(true)
    }

    const onLeave = () => setVisible(false)

    const loop = () => {
      current.x += (target.x - current.x) * 0.18
      current.y += (target.y - current.y) * 0.18
      setPos({ x: current.x, y: current.y })
      tick += 1
      if (tick % 90 === 0) {
        setLabel(TEASES[Math.floor(Math.random() * TEASES.length)])
      }
      frame = requestAnimationFrame(loop)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)
    frame = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
    }
  }, [reduced])

  if (reduced || !visible) return null

  return (
    <div
      className="pointer-events-none fixed z-[180] hidden mix-blend-difference md:block"
      style={{
        left: pos.x + 18,
        top: pos.y + 18,
      }}
      aria-hidden="true"
    >
      <span className="inline-flex h-10 min-w-10 items-center justify-center rounded-full border-2 border-cream bg-riot px-2 font-display text-xs tracking-wide text-cream shadow-[3px_3px_0_#D5FF00]">
        {label}
      </span>
    </div>
  )
}
