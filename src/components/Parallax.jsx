import { useEffect, useRef } from 'react'
import './parallax.css'

export default function Parallax({ children, speed = 0.15, reveal = true, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Reduce/disable en móvil y si el usuario prefiere menos movimiento
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const effectiveSpeed = (isMobile || reduce) ? 0 : speed

    let raf = 0
    const onScroll = () => {
      if (!el) return
      if (effectiveSpeed === 0) { el.style.transform = 'none'; return }
      const rect = el.getBoundingClientRect()
      const mid = rect.top + rect.height / 2
      const vpMid = window.innerHeight / 2
      const delta = (mid - vpMid) * effectiveSpeed
      el.style.transform = `translateY(${Math.round(delta)}px)`
    }

    const loop = () => { onScroll(); raf = requestAnimationFrame(loop) }
    raf = requestAnimationFrame(loop)

    let obs
    if (reveal && 'IntersectionObserver' in window) {
      obs = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) el.classList.add('is-visible') })
      }, { threshold: 0.12 })
      obs.observe(el)
    }
    return () => { cancelAnimationFrame(raf); obs && obs.disconnect() }
  }, [speed, reveal])

  return (
    <div ref={ref} className={`px ${reveal ? 'reveal' : ''} ${className}`.trim()}>
      {children}
    </div>
  )
}
