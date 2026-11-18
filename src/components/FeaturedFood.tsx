import { ArrowUpRight } from 'lucide-react'
import { ActionLink } from './ActionLink'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'
import { copy, featuredDishes } from '../data/content'

const layoutClasses = [
  'lg:col-span-7',
  'lg:col-span-5 lg:mt-24',
  'lg:col-span-5',
  'lg:col-span-7 lg:mt-16',
]

const imageShapes = ['aspect-[4/3]', 'aspect-[3/4]', 'aspect-[4/5]', 'aspect-[16/11]']

export function FeaturedFood() {
  return (
    <section id="featured" className="border-t border-olive/10 bg-cream py-24 lg:py-32">
      <div className="shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionLabel index="02">{copy.featured.label}</SectionLabel>
            <h2 className="display mt-7 text-[clamp(2.8rem,5.4vw,5.2rem)] text-olive">
              {copy.featured.title}
            </h2>
          </Reveal>
          <Reveal delay={100} className="max-w-md lg:pb-3">
            <p className="text-base leading-8 text-espresso/65">{copy.featured.body}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-y-24">
          {featuredDishes.map((dish, index) => (
            <Reveal
              key={dish.name}
              delay={(index % 2) * 90}
              className={`${layoutClasses[index]} ${index === 2 ? 'md:mt-16 lg:mt-0' : ''}`}
            >
              <figure className="group">
                <div className={`overflow-hidden bg-cream-deep ${imageShapes[index]}`}>
                  <img
                    src={dish.image.src}
                    alt={dish.image.alt}
                    width={dish.image.width}
                    height={dish.image.height}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.045]"
                  />
                </div>
                <figcaption className="mt-6 flex items-start justify-between gap-6 border-t border-olive/15 pt-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-terracotta">
                      {dish.category}
                    </p>
                    <h3 className="mt-3 font-display text-2xl leading-tight text-olive sm:text-3xl">
                      {dish.name}
                    </h3>
                    {dish.description && (
                      <p className="mt-2 max-w-md text-sm leading-7 text-espresso/65">{dish.description}</p>
                    )}
                  </div>
                  <a
                    href="#menu"
                    aria-label={`Find ${dish.name} on the menu`}
                    className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center border border-olive/20 text-olive transition-all hover:border-olive hover:bg-olive hover:text-cream"
                  >
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                  </a>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 flex justify-center lg:mt-28">
          <ActionLink href="#menu">{copy.featured.cta}</ActionLink>
        </Reveal>
      </div>
    </section>
  )
}
