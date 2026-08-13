import { useEffect } from 'react'
import './product.css'

export default function Modal({ isOpen, onClose, children }) {
  // Bloquea el scroll del fondo mientras el modal está abierto (evita la barra
  // de scroll y que la página de detrás se mueva).
  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="modal" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Cerrar">
          ×
        </button>
        {children}
      </div>
    </div>
  )
}
