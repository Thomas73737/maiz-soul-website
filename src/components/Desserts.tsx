import { ActionLink } from './ActionLink'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'
import { copy, dessertHighlights } from '../data/content'
import { images } from '../data/images'

export function Desserts() {
  return (
    <section id="desserts" className="bg-cream py-24 lg:py-36">
      <div className="shell grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
        <Reveal>
          <SectionLabel index="06">{copy.desserts.label}</SectionLabel>
          <h2 className="display mt-7 text-[clamp(2.8rem,5vw,5rem)] text-olive">
            {copy.desserts.title}
          </h2>
          <p className="mt-8 max-w-lg text-lg leading-9 text-espresso/70">{copy.desserts.body}</p>

          <ul className="mt-11 max-w-lg border-t border-olive/20">
            {dessertHighlights.map((item) => (
              <li
                key={item.name}
                className="flex items-baseline justify-between gap-6 border-b border-olive/20 py-5"
              >
                <span className="font-display text-xl text-olive sm:text-2xl">{item.name}</span>
                <span className="text-right text-xs leading-5 text-espresso/50">{item.note}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <ActionLink href="#menu" variant="outline">
              {copy.desserts.cta}
            </ActionLink>
          </div>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="absolute -left-6 -top-6 h-40 w-40 bg-corn/60" aria-hidden="true" />
          <div className="relative overflow-hidden bg-cream-deep">
            <img
              src={images.restaurantMeals.src}
              alt={images.restaurantMeals.alt}
              width={images.restaurantMeals.width}
              height={images.restaurantMeals.height}
              loading="lazy"
              className="aspect-[5/4] w-full object-cover object-center"
            />
          </div>
          <p className="mt-5 text-right text-[10px] font-bold uppercase tracking-[0.2em] text-olive/50">
            From the Maíz Soul kitchen
          </p>
        </Reveal>
      </div>
    </section>
  )
}
