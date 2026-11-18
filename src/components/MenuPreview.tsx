import { useRef, useState, type KeyboardEvent } from 'react'
import { Info } from 'lucide-react'
import { ActionLink } from './ActionLink'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'
import { copy } from '../data/content'
import { menuCategories, menuMeta, priceVerification } from '../data/menu'
import { restaurant } from '../data/restaurant'

export function MenuPreview() {
  const [activeId, setActiveId] = useState(menuCategories[0].id)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const activeIndex = menuCategories.findIndex((category) => category.id === activeId)
  const activeCategory = menuCategories[activeIndex] ?? menuCategories[0]

  const onTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex: number | null = null

    if (event.key === 'ArrowRight') nextIndex = (index + 1) % menuCategories.length
    if (event.key === 'ArrowLeft') nextIndex = (index - 1 + menuCategories.length) % menuCategories.length
    if (event.key === 'Home') nextIndex = 0
    if (event.key === 'End') nextIndex = menuCategories.length - 1

    if (nextIndex !== null) {
      event.preventDefault()
      setActiveId(menuCategories[nextIndex].id)
      tabRefs.current[nextIndex]?.focus()
    }
  }

  return (
    <section id="menu" className="border-t border-olive/10 bg-cream py-24 lg:py-36">
      <div className="shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionLabel index="07">{copy.menu.label}</SectionLabel>
            <h2 className="display mt-7 text-[clamp(2.8rem,5vw,5rem)] text-olive">{menuMeta.title}</h2>
          </Reveal>
          <Reveal delay={100} className="max-w-xl lg:pb-3">
            <p className="text-base leading-8 text-espresso/65">{menuMeta.intro}</p>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div
            role="tablist"
            aria-label="Menu categories"
            className="no-scrollbar mt-14 flex gap-7 overflow-x-auto border-b border-olive/20"
          >
            {menuCategories.map((category, index) => (
              <button
                key={category.id}
                ref={(node) => {
                  tabRefs.current[index] = node
                }}
                type="button"
                role="tab"
                id={`menu-tab-${category.id}`}
                aria-selected={activeId === category.id}
                aria-controls="menu-panel"
                tabIndex={activeId === category.id ? 0 : -1}
                onClick={() => setActiveId(category.id)}
                onKeyDown={(event) => onTabKeyDown(event, index)}
                className={`relative shrink-0 border-b-2 pb-4 pt-2 text-[11px] font-bold uppercase tracking-[0.14em] transition-colors duration-200 ${
                  activeId === category.id
                    ? 'border-terracotta text-olive'
                    : 'border-transparent text-olive/45 hover:text-olive'
                }`}
              >
                {category.shortTitle}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div
            role="tabpanel"
            id="menu-panel"
            aria-labelledby={`menu-tab-${activeCategory.id}`}
            className="pt-12"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h3 className="font-display text-3xl text-olive sm:text-4xl">{activeCategory.title}</h3>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-olive/40">
                {activeCategory.items.length} items · Preview
              </p>
            </div>

            <ul className="mt-8 grid gap-x-16 md:grid-cols-2">
              {activeCategory.items.map((item) => (
                <li key={item.name} className="border-b border-olive/15 py-5">
                  <h4 className="font-display text-xl leading-snug text-olive sm:text-2xl">{item.name}</h4>
                  {item.description && (
                    <p className="mt-2 max-w-xl text-sm leading-7 text-espresso/60">{item.description}</p>
                  )}
                </li>
              ))}
            </ul>

            {activeCategory.note && (
              <p className="mt-7 text-sm italic text-espresso/55">{activeCategory.note}</p>
            )}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-12 flex flex-col gap-5 border-l-2 border-corn bg-cream-deep/40 px-6 py-5 sm:flex-row sm:items-center sm:gap-6">
            <Info className="h-5 w-5 shrink-0 text-terracotta" strokeWidth={1.7} aria-hidden="true" />
            <div className="text-sm leading-7 text-espresso/65">
              <p>{menuMeta.pricingNote}</p>
              <p className="mt-1 text-xs text-espresso/50">
                Last reviewed {priceVerification.verifiedOn}. {priceVerification.unverifiedNote}
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center gap-5 text-center">
            <ActionLink href={restaurant.orderUrl} icon="arrow-up-right" newTab>
              Order Online
            </ActionLink>
            <p className="text-xs uppercase tracking-[0.16em] text-olive/45">{menuMeta.actionLabel}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
