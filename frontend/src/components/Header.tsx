import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LOGO_URL, NAV_LINKS } from '../data/site'
import { useScrolled } from '../hooks/useScrolled'

export default function Header() {
  const scrolled = useScrolled()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-outline-variant/20 transition-all duration-300 ${
        scrolled ? 'py-2 shadow-lg' : 'py-4 shadow-sm'
      }`}
    >
      <nav
        className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
        aria-label="Navegación principal"
      >
        <Link to="/" className="flex items-center gap-4 shrink-0" onClick={() => setMenuOpen(false)}>
          <img alt="Inversiones FV" className="h-20 md:h-28 w-auto object-contain" src={LOGO_URL} />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={
                i === 0
                  ? 'text-deep-burgundy border-b-2 border-subtle-gold pb-1 font-bold font-label-bold text-label-bold'
                  : 'text-on-surface-variant hover:text-deep-burgundy transition-colors font-label-bold text-label-bold'
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          className="hidden md:inline-flex bg-primary text-on-primary px-6 py-2.5 rounded-lg font-label-bold text-label-bold scale-95 active:scale-90 transition-transform hover:bg-deep-burgundy"
        >
          Solicitar Presupuesto
        </a>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 text-deep-burgundy"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="material-symbols-outlined text-3xl">{menuOpen ? 'close' : 'menu'}</span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-x-0 top-full bg-surface border-b border-outline-variant/20 shadow-lg overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          menuOpen ? 'max-h-[420px]' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col px-margin-mobile py-6 gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 border-b border-outline-variant/10 text-on-surface-variant hover:text-deep-burgundy font-label-bold text-label-bold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className="mt-4 bg-primary text-on-primary px-6 py-3 rounded-lg font-label-bold text-label-bold text-center hover:bg-deep-burgundy transition-colors"
          >
            Solicitar Presupuesto
          </a>
        </div>
      </div>
    </header>
  )
}
