import { ActionLink } from './ActionLink'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'
import { copy } from '../data/content'
import { images } from '../data/images'

export function BreakfastBrunch() {
  return (
    <section id="breakfast" className="bg-cream-deep/50 py-24 lg:py-36">
      <div className="shell grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal className="relative">
          <div className="absolute -left-5 -top-5 h-32 w-32 border-l border-t border-terracotta/60" aria-hidden="true" />
          <div className="relative overflow-hidden bg-cream">
            <img
              src={images.restaurantDishesApril.src}
              alt={images.restaurantDishesApril.alt}
              width={images.restaurantDishesApril.width}
              height={images.restaurantDishesApril.height}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover object-center"
            />
          </div>
          <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-olive/50">
            From the Maíz Soul kitchen
          </p>
        </Reveal>

        <Reveal delay={120}>
          <SectionLabel index="04">{copy.breakfast.label}</SectionLabel>
          <h2 className="display mt-7 text-[clamp(2.8rem,5vw,5rem)] text-olive">
            {copy.breakfast.title}
          </h2>
          <p className="mt-8 max-w-lg text-lg leading-9 text-espresso/70">{copy.breakfast.body}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <ActionLink href="#menu">{copy.breakfast.cta}</ActionLink>
          </div>

          <div className="mt-14 grid max-w-lg grid-cols-2 gap-6 border-t border-olive/20 pt-8">
            <div>
              <p className="font-display text-2xl text-olive">Venezuelan favorites</p>
              <p className="mt-2 text-sm text-espresso/60">From arepas to desayuno criollo.</p>
            </div>
            <div>
              <p className="font-display text-2xl text-olive">Café classics</p>
              <p className="mt-2 text-sm text-espresso/60">Coffee and breakfast, side by side.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
