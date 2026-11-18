import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { images } from '../data/images'
import { restaurant } from '../data/restaurant'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? 'border-b border-olive/10 bg-cream/95 shadow-[0_8px_30px_-24px_rgba(48,41,31,0.45)] backdrop-blur-xl'
            : 'border-b border-transparent bg-cream/80 backdrop-blur-md'
        }`}
      >
        <div className="shell flex h-[76px] items-center justify-between gap-6 lg:h-[86px]">
          <a href="#home" className="group flex shrink-0 items-center" onClick={() => setMenuOpen(false)}>
            <img
              src={images.logo.src}
              alt={images.logo.alt}
              width={images.logo.width}
              height={images.logo.height}
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-[1.04] sm:h-[58px]"
            />
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-9 lg:flex">
            {restaurant.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-olive/80 transition-colors hover:text-olive after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-terracotta after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={restaurant.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-base button-primary hidden !min-h-[3rem] !px-6 lg:inline-flex"
            >
              Order Online
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="flex h-11 w-11 items-center justify-center border border-olive/20 text-olive transition-colors hover:border-olive hover:bg-olive/5 lg:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-40 flex flex-col bg-cream px-6 pb-12 pt-28 transition-opacity duration-300 lg:hidden ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation" className="flex flex-col">
          {restaurant.navigation.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-baseline justify-between border-b border-olive/15 py-5 font-display text-4xl text-olive transition-colors hover:text-terracotta"
              tabIndex={menuOpen ? 0 : -1}
            >
              {item.label}
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-terracotta">
                0{index + 1}
              </span>
            </a>
          ))}
        </nav>
        <div className="mt-auto pt-10">
          <a
            href={restaurant.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button-base button-primary w-full"
            tabIndex={menuOpen ? 0 : -1}
          >
            Order Online
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <p className="mt-5 text-center text-xs uppercase tracking-[0.18em] text-olive/50">
            Smyrna, Tennessee
          </p>
        </div>
      </div>
    </>
  )
}
