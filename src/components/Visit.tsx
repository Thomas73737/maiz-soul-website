import { Clock3, Instagram, MapPin, Navigation, Phone } from 'lucide-react'
import { ActionLink } from './ActionLink'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'
import { copy } from '../data/content'
import { restaurant } from '../data/restaurant'

export function Visit() {
  return (
    <section id="visit" className="bg-cream py-24 lg:py-36">
      <div className="shell grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
        <Reveal>
          <SectionLabel index="09">{copy.visit.label}</SectionLabel>
          <h2 className="display mt-7 text-[clamp(2.8rem,5vw,5rem)] text-olive">{copy.visit.title}</h2>
          <p className="mt-8 max-w-lg text-lg leading-9 text-espresso/70">{copy.visit.body}</p>

          <div className="mt-12 grid gap-9 sm:grid-cols-2">
            <div className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-terracotta" strokeWidth={1.6} aria-hidden="true" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-olive/45">Address</p>
                <address className="mt-3 not-italic text-base leading-7 text-espresso/80">
                  {restaurant.name}
                  <br />
                  {restaurant.address.line1}
                  <br />
                  {restaurant.address.line2}
                </address>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-terracotta" strokeWidth={1.6} aria-hidden="true" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-olive/45">Phone</p>
                <a
                  href={restaurant.phone.href}
                  className="mt-3 inline-block font-display text-xl text-olive transition-colors hover:text-terracotta"
                >
                  {restaurant.phone.display}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <div className="flex items-center gap-3 border-b border-olive/20 pb-4">
              <Clock3 className="h-4 w-4 text-terracotta" strokeWidth={1.7} aria-hidden="true" />
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-olive">Opening hours</h3>
            </div>
            <ul className="grid gap-x-12 sm:grid-cols-2">
              {restaurant.hours.map((entry) => (
                <li
                  key={entry.day}
                  className="flex items-baseline justify-between gap-4 border-b border-olive/10 py-3.5"
                >
                  <span className="text-sm text-espresso/70">{entry.day}</span>
                  <span className="text-sm font-medium text-olive">{entry.time}</span>
                </li>
              ))}
            </ul>
            {!restaurant.hoursVerified && (
              <p className="mt-5 text-xs leading-6 text-espresso/45">{restaurant.hoursNote}</p>
            )}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative flex h-full flex-col justify-between bg-olive p-8 text-cream sm:p-12">
            <div className="absolute right-6 top-6 h-16 w-16 border-r border-t border-corn/50" aria-hidden="true" />
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-corn text-olive">
                <MapPin className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
              </div>
              <h3 className="display mt-10 text-4xl leading-tight sm:text-5xl">{restaurant.name}</h3>
              <p className="mt-5 max-w-sm text-base leading-8 text-cream/70">
                {restaurant.address.line1}
                <br />
                {restaurant.address.line2}
              </p>
            </div>

            <div className="mt-14 space-y-4">
              <ActionLink href={restaurant.directionsUrl} variant="light" newTab>
                Get Directions
              </ActionLink>
              <div className="flex flex-col gap-3 pt-3 sm:flex-row">
                <ActionLink
                  href={restaurant.orderUrl}
                  variant="ghost-light"
                  icon="arrow-up-right"
                  newTab
                  className="flex-1"
                >
                  Order Online
                </ActionLink>
                <a
                  href={restaurant.instagram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-base button-ghost-light flex-1"
                >
                  <Instagram className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <p className="mt-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-olive/45">
            <Navigation className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" />
            Easy to find, right on North Lowry Street
          </p>
        </Reveal>
      </div>
    </section>
  )
}
