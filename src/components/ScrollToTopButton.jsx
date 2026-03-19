import { useEffect, useState } from 'react'
import './ScrollToTopButton.css'

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 250)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      className={`scrollToTopButton ${isVisible ? 'show' : ''}`}
      onClick={handleScrollToTop}
      aria-label="Subir arriba"
      type="button"
    >
      ↑
    </button>
  )
}