import { useEffect, useState } from 'react'
import { navLinks, restaurant } from '../data/site'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled || open ? 'navbar--solid' : ''}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__logo">
          {restaurant.name}
        </a>

        <nav className={`navbar__links ${open ? 'is-open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#reserve" className="btn btn--lemon" onClick={() => setOpen(false)}>
            Book a table
          </a>
        </nav>

        <button className="navbar__toggle" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>
      </div>
    </header>
  )
}
