import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'
import { copy } from '../data/content'

export function BrandIntro() {
  return (
    <section id="story" className="border-t border-olive/10 bg-cream py-24 lg:py-36">
      <div className="shell grid gap-12 lg:grid-cols-[minmax(0,0.28fr)_minmax(0,0.72fr)] lg:gap-16">
        <Reveal>
          <SectionLabel index="01">{copy.intro.label}</SectionLabel>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="display max-w-4xl text-[clamp(2.6rem,5vw,5rem)] text-olive">
            More Than a Meal.
            <span className="block italic font-normal text-terracotta">A Taste of Venezuela.</span>
          </h2>

          <p className="mt-9 max-w-2xl text-lg leading-9 text-espresso/70">{copy.intro.body}</p>

          <div className="mt-14 grid gap-9 border-t border-olive/15 pt-9 sm:grid-cols-3 sm:gap-10">
            {copy.intro.pillars.map((pillar) => (
              <div key={pillar.number}>
                <p className="text-[11px] font-bold tracking-[0.2em] text-terracotta">{pillar.number}</p>
                <h3 className="mt-4 font-display text-xl text-olive">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-espresso/65">{pillar.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
