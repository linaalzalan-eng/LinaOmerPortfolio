import { useLanguage } from '../i18n/LanguageContext'
import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'
import { STATS } from '../data/content'
import Reveal from './ui/Reveal'
import { Section, SectionHeading } from './ui/Section'

function Stat({ value, suffix = '', display, label, start }) {
  const count = useCountUp(value, start)
  return (
    <div className="flex flex-col gap-2 border-t border-line pt-5">
      <span className="font-display text-5xl leading-none text-ink tabular-nums rtl:font-sans rtl:text-4xl rtl:font-semibold" dir="ltr">
        {display ?? `${count}${suffix}`}
      </span>
      <span className="text-sm text-muted">{label}</span>
    </div>
  )
}

export default function About() {
  const { t } = useLanguage()
  const a = t.about
  const [statsRef, statsInView] = useInView({ threshold: 0.4 })
  const [before, strong, after] = a.paragraph

  return (
    <Section id="about">
      <SectionHeading index="01" eyebrow={a.eyebrow} title={a.title} />

      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal as="figure" className="lg:col-span-5">
          <blockquote className="relative border-s-2 border-primary ps-6 font-display text-3xl leading-snug text-ink italic sm:text-[2.1rem] rtl:text-2xl rtl:leading-relaxed rtl:not-italic">
            {a.quote}
          </blockquote>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal as="p" delay={100} className="text-lg leading-relaxed text-muted sm:text-xl rtl:leading-loose">
            {before}
            <strong className="font-semibold text-ink">{strong}</strong>
            {after}
          </Reveal>

          <div ref={statsRef} className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {STATS.map((s) => (
              <Stat key={s.key} {...s} label={a.stats[s.key]} start={statsInView} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
