import { Coffee } from 'lucide-react'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'
import { copy, drinkHighlights } from '../data/content'
import { images } from '../data/images'

export function CoffeeDrinks() {
  return (
    <section id="drinks" className="relative overflow-hidden bg-olive py-24 text-cream lg:py-36">
      <div className="pointer-events-none absolute -left-32 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full border border-cream/5" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-52 top-1/2 h-[620px] w-[620px] -translate-y-1/2 rounded-full border border-cream/5" aria-hidden="true" />

      <div className="shell relative grid items-center gap-16 lg:grid-cols-[0.88fr_1.12fr] lg:gap-24">
        <Reveal>
          <div className="relative">
            <div className="absolute -bottom-5 -right-5 h-36 w-36 bg-corn" aria-hidden="true" />
            <div className="relative overflow-hidden bg-olive-deep">
              <img
                src={images.chichaBrandCup.src}
                alt={images.chichaBrandCup.alt}
                width={images.chichaBrandCup.width}
                height={images.chichaBrandCup.height}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover object-center"
              />
            </div>
          </div>
          <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-corn">
            Chicha · served in Maíz Soul branding
          </p>

          <div className="mt-8 flex items-center gap-4 border border-cream/20 px-5 py-4">
            <Coffee className="h-5 w-5 shrink-0 text-corn" strokeWidth={1.5} aria-hidden="true" />
            <p className="text-xs leading-6 text-cream/60">{copy.coffee.note}</p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <SectionLabel index="05" tone="light">
            {copy.coffee.label}
          </SectionLabel>
          <h2 className="display mt-7 max-w-2xl text-[clamp(2.8rem,5vw,5rem)] text-cream">
            {copy.coffee.title}
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-9 text-cream/70">{copy.coffee.body}</p>

          <ul className="mt-12 grid gap-x-10 border-t border-cream/20 sm:grid-cols-2">
            {drinkHighlights.map((drink, index) => (
              <li
                key={drink}
                className="flex items-center gap-4 border-b border-cream/20 py-5 transition-colors duration-300 hover:border-corn/60"
              >
                <span className="text-[10px] font-bold tracking-[0.16em] text-corn">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="font-display text-lg text-cream sm:text-xl">{drink}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
