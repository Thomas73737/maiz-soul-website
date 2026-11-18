import { ArrowUpRight, Instagram, MapPin, Phone } from 'lucide-react'
import { images } from '../data/images'
import { copyrightYear, restaurant } from '../data/restaurant'

export function Footer() {
  return (
    <footer className="bg-olive text-cream">
      <div className="shell py-20 lg:py-24">
        <div className="grid gap-14 border-b border-cream/15 pb-16 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1fr] lg:gap-16">
          <div>
            <img
              src={images.logo.src}
              alt={images.logo.alt}
              width={images.logo.width}
              height={images.logo.height}
              loading="lazy"
              className="h-20 w-auto"
            />
            <p className="mt-7 max-w-sm text-sm leading-8 text-cream/65">{restaurant.description}</p>
            <a
              href={restaurant.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-base button-light mt-8"
            >
              Order Online
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
            </a>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-corn">Explore</h3>
            <ul className="mt-6 space-y-4">
              {restaurant.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-cream/70 transition-colors hover:text-corn"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-corn">Find us</h3>
            <ul className="mt-6 space-y-5">
              <li className="flex gap-3 text-sm leading-7 text-cream/70">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-corn" strokeWidth={1.6} aria-hidden="true" />
                <span>
                  {restaurant.address.line1}
                  <br />
                  {restaurant.address.line2}
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-cream/70">
                <Phone className="h-4 w-4 shrink-0 text-corn" strokeWidth={1.6} aria-hidden="true" />
                <a href={restaurant.phone.href} className="transition-colors hover:text-corn">
                  {restaurant.phone.display}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-cream/70">
                <Instagram className="h-4 w-4 shrink-0 text-corn" strokeWidth={1.6} aria-hidden="true" />
                <a
                  href={restaurant.instagram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-corn"
                >
                  {restaurant.instagram.label}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-8 text-[11px] uppercase tracking-[0.14em] text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {copyrightYear} {restaurant.name}. All rights reserved.</p>
          <p>Smyrna, Tennessee · Hecho con soul</p>
        </div>
      </div>
    </footer>
  )
}
