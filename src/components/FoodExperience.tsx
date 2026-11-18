import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'
import { copy, experienceHighlights } from '../data/content'

export function FoodExperience() {
  return (
    <section className="relative overflow-hidden border-y border-corn/50 bg-cream py-24 lg:py-36">
      <div
        className="pointer-events-none absolute -right-16 top-8 select-none font-display text-[16rem] leading-none text-corn/15 lg:text-[26rem]"
        aria-hidden="true"
      >
        MAÍZ
      </div>
      <span className="absolute inset-x-0 top-0 h-1 bg-corn" aria-hidden="true" />

      <div className="shell relative grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <Reveal>
          <SectionLabel index="03">{copy.experience.label}</SectionLabel>
          <h2 className="display mt-7 text-[clamp(2.8rem,5vw,5rem)] text-olive">
            {copy.experience.title}
          </h2>
          <p className="mt-8 max-w-lg text-lg leading-9 text-espresso/70">{copy.experience.body}</p>
          <p className="mt-9 inline-block border-l-2 border-terracotta pl-5 font-display text-xl italic text-terracotta">
            {copy.experience.closing}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <ul className="border-t border-olive/20">
            {experienceHighlights.map((item) => (
              <li
                key={item.number}
                className="group flex items-baseline gap-5 border-b border-olive/20 py-6 transition-colors duration-300 hover:border-terracotta sm:gap-8 sm:py-7"
              >
                <span className="w-8 shrink-0 text-[11px] font-bold tracking-[0.18em] text-terracotta">
                  {item.number}
                </span>
                <div className="flex flex-1 flex-col gap-2 transition-transform duration-300 group-hover:translate-x-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                  <h3 className="font-display text-2xl text-olive sm:text-3xl">{item.title}</h3>
                  <p className="max-w-xs text-sm leading-7 text-espresso/60 sm:text-right">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
