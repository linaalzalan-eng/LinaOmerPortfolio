import { useEffect, useState } from 'react'

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Animates from 0 to `target` (ease-out cubic) once `start` becomes true.
export function useCountUp(target, start, duration = 1400) {
  const [value, setValue] = useState(0)
  const [reduced] = useState(prefersReducedMotion)

  useEffect(() => {
    if (!start || target == null || reduced) return
    let frame
    const t0 = performance.now()
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1)
      setValue(Math.round((1 - Math.pow(1 - p, 3)) * target))
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, start, duration, reduced])

  return reduced && start ? target : value
}
