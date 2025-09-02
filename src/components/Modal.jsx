import './product.css'

export default function Modal({ isOpen, onClose, children }) {
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
