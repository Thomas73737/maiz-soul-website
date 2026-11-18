import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'
import { copy } from '../data/content'
import { galleryImages } from '../data/images'

export function Gallery() {
  return (
    <section id="gallery" className="bg-cream-deep/40 py-24 lg:py-36">
      <div className="shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionLabel index="08">{copy.gallery.label}</SectionLabel>
            <h2 className="display mt-7 text-[clamp(2.8rem,5vw,5rem)] text-olive">
              {copy.gallery.title}
            </h2>
          </Reveal>
          <Reveal delay={100} className="max-w-md lg:pb-3">
            <p className="text-base leading-8 text-espresso/65">{copy.gallery.body}</p>
          </Reveal>
        </div>

        <div className="mt-14 columns-2 gap-4 md:columns-3 lg:gap-6">
          {galleryImages.map((image, index) => (
            <Reveal key={image.src} delay={(index % 3) * 80} className="mb-4 break-inside-avoid md:mb-6">
              <figure className="group">
                <div className={`overflow-hidden bg-cream ${image.shape}`}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                </div>
                <figcaption className="mt-3 flex items-center gap-3">
                  <span className="h-px w-5 bg-terracotta" aria-hidden="true" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-olive/55">
                    {image.caption}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
