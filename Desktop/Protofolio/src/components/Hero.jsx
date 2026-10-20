import { ArrowRight, CodeXml } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { SOCIALS } from '../data/content'
import Button from './ui/Button'
import BrandIcon from './ui/BrandIcon'
import { container } from './ui/Section'

const heroSocials = SOCIALS.filter((s) => s.icon === 'github' || s.icon === 'linkedin')

function OrbitBadge({ text }) {
  return (
    <div className="absolute -bottom-6 -start-2 grid size-32 place-items-center rounded-full border border-line bg-surface shadow-xl shadow-ink/5 sm:-start-6 sm:size-36">
      <svg viewBox="0 0 200 200" className="absolute inset-0 size-full animate-spin-slow text-ink" aria-hidden="true">
        <defs>
          <path id="orbit" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
        </defs>
        <text className="fill-current text-[15.5px] font-medium tracking-[0.18em]" direction="ltr">
          <textPath href="#orbit">{text}</textPath>
        </text>
      </svg>
      <span className="grid size-12 place-items-center rounded-full bg-primary text-on-primary">
        <CodeXml className="size-5" aria-hidden="true" />
      </span>
    </div>
  )
}

export default function Hero() {
  const { t } = useLanguage()
  const h = t.hero

  return (
    <section id="hero" className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-32 lg:flex lg:min-h-svh lg:items-center lg:pt-24 lg:pb-16">
      <div
        aria-hidden="true"
        className="bg-dots absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]"
      />

      <div className={`${container} grid items-center gap-16 lg:grid-cols-12 lg:gap-10`}>
        <div className="lg:col-span-7">
          <p className="animate-rise inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 text-xs font-medium text-muted">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {h.status}
          </p>

          <h1 className="mt-7 animate-rise [--delay:80ms]">
            <span className="block text-lg text-muted">{h.greeting}</span>
            <span className="mt-2 block font-display text-[clamp(3rem,9vw,6.5rem)] leading-[0.95] tracking-tight text-balance rtl:text-[clamp(2.6rem,8vw,5.25rem)] rtl:leading-[1.15]">
              {h.name}
            </span>
          </h1>

          <p className="mt-6 flex animate-rise items-center gap-3 text-xl font-medium text-primary [--delay:160ms] sm:text-2xl">
            <span className="h-px w-10 bg-primary" aria-hidden="true" />
            {h.role}
          </p>

          <p className="mt-6 max-w-xl animate-rise text-base leading-relaxed text-muted [--delay:240ms] sm:text-lg rtl:leading-loose">
            {h.description}
          </p>

          <div className="mt-10 flex animate-rise flex-wrap items-center gap-3 [--delay:320ms]">
            <Button href="#work">
              {h.ctaWork}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
            </Button>
            <Button href="#contact" variant="outline">
              {h.ctaContact}
            </Button>
            <span className="mx-1 hidden h-6 w-px bg-line sm:block" aria-hidden="true" />
            <div className="flex gap-1">
              {heroSocials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.name} ${t.a11y.newTab}`}
                  className="grid size-12 place-items-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-ink"
                >
                  <BrandIcon name={s.icon} className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="animate-rise [--delay:200ms] lg:col-span-5">
          <div className="relative mx-auto w-full max-w-[19rem] sm:max-w-sm lg:ms-auto lg:me-0">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-full rounded-b-[2rem] border border-primary/50 rtl:-translate-x-4"
            />
            <div className="relative aspect-[3/4] overflow-hidden rounded-t-full rounded-b-[2rem] bg-surface-2">
              <img
                src="/photo_2026-10-14_13-10-06.jpg"
                alt={h.photoAlt}
                width="720"
                height="960"
                fetchPriority="high"
                decoding="async"
                className="size-full object-cover object-[50%_30%]"
              />
            </div>
            <OrbitBadge text={h.orbit} />
          </div>
        </div>
      </div>
    </section>
  )
}
