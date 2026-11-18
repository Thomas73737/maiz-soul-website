import { ActionLink } from './ActionLink'
import { Reveal } from './Reveal'
import { images } from '../data/images'
import { restaurant } from '../data/restaurant'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream pb-24 pt-14 lg:pb-36 lg:pt-20">
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[28%] border-l border-olive/5 lg:block" aria-hidden="true" />

      <div className="shell relative grid items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow text-terracotta">
            <span className="h-px w-8 bg-terracotta" aria-hidden="true" />
            Venezuelan &amp; Latin American · Smyrna, TN
          </p>

          <h1 className="display mt-8 text-[clamp(3.25rem,6.5vw,6.6rem)] text-olive">
            A Taste of
            <span className="block italic font-normal text-terracotta">Venezuela,</span>
            Made with Soul.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-espresso/70 sm:text-lg sm:leading-9">
            {restaurant.description}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <ActionLink href="#menu">Explore Our Menu</ActionLink>
            <ActionLink href={restaurant.orderUrl} variant="outline" icon="arrow-up-right" newTab>
              Order Online
            </ActionLink>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-olive/15 pt-7">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-olive/60">
              Arepas
            </span>
            <span className="h-1 w-1 rounded-full bg-terracotta" aria-hidden="true" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-olive/60">
              Patacones
            </span>
            <span className="h-1 w-1 rounded-full bg-terracotta" aria-hidden="true" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-olive/60">
              Café &amp; more
            </span>
          </div>
        </Reveal>

        <Reveal delay={140} className="relative">
          <div className="relative">
            <div className="absolute -bottom-5 -right-5 h-full w-full border border-corn sm:-bottom-7 sm:-right-7" aria-hidden="true" />
            <div className="relative overflow-hidden bg-cream-deep">
              <img
                src={images.heroPatacones.src}
                alt={images.heroPatacones.alt}
                width={images.heroPatacones.width}
                height={images.heroPatacones.height}
                fetchPriority="high"
                className="aspect-[4/3] w-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 bg-olive px-6 py-5 text-cream sm:-left-10 sm:px-8 sm:py-6">
              <p className="font-display text-2xl leading-none sm:text-3xl">Made with soul.</p>
              <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.22em] text-corn">
                Venezuelan flavors in Smyrna
              </p>
            </div>
          </div>
          <p className="mt-10 text-right text-[10px] font-bold uppercase tracking-[0.2em] text-olive/45">
            Patacones · Maíz Soul by Tía Yaya
          </p>
        </Reveal>
      </div>
    </section>
  )
}
