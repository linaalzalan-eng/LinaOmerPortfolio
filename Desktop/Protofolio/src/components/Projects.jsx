import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { PROJECTS } from '../data/content'
import BrandIcon from './ui/BrandIcon'
import Button from './ui/Button'
import Reveal from './ui/Reveal'
import { Section, SectionHeading } from './ui/Section'

function ProjectCard({ project, index, description, t, wide }) {
  const num = String(index + 1).padStart(2, '0')
  return (
    <Reveal
      as="article"
      delay={(index % 2) * 90}
      className={`group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-line bg-surface p-6 transition-[border-color,box-shadow,translate] duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_48px_-28px_rgb(0_0_0/0.35)] sm:p-8 ${
        wide ? 'md:col-span-2' : ''
      }`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-4 end-4 font-display text-[7rem] leading-none text-surface-2 transition-colors duration-500 select-none group-hover:text-primary-soft sm:text-[9rem]"
        dir="ltr"
      >
        {num}
      </span>

      <div className="relative flex items-center gap-3 text-xs font-medium text-muted">
        <span className="font-display text-base text-primary" dir="ltr">
          {num}
        </span>
        <span className="h-px w-6 bg-line" aria-hidden="true" />
        <span className="rounded-full bg-accent-soft px-2.5 py-1 text-accent">{t.kinds[project.kind]}</span>
      </div>

      <h3 className="relative mt-8 font-display text-[1.9rem] leading-tight text-balance rtl:font-sans rtl:text-2xl">
        <bdi>{project.title}</bdi>
      </h3>

      <p className={`relative mt-4 leading-relaxed text-muted rtl:leading-loose ${wide ? 'max-w-3xl' : ''}`}>{description}</p>

      <ul className="relative mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
            {tag}
          </li>
        ))}
      </ul>

      <div className="relative mt-auto flex flex-wrap gap-3 pt-8">
        <Button href={project.github} external variant="outline" className="!min-h-11 !px-5">
          <BrandIcon name="github" className="size-4" />
          {t.source}
          <span className="sr-only">— {project.title}</span>
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5" />
        </Button>
        {project.demo && (
          <Button href={project.demo} external className="!min-h-11 !px-5">
            {t.demo}
            <span className="sr-only">— {project.title}</span>
            <ArrowUpRight className="size-4 rtl:-scale-x-100" />
          </Button>
        )}
      </div>
    </Reveal>
  )
}

export default function Projects() {
  const { t } = useLanguage()
  const p = t.projects
  const oddCount = PROJECTS.length % 2 === 1

  return (
    <Section id="work">
      <SectionHeading index="03" eyebrow={p.eyebrow} title={p.title} />
      <div className="grid gap-5 md:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            description={p.items[project.id]}
            t={p}
            wide={oddCount && i === PROJECTS.length - 1}
          />
        ))}
      </div>
    </Section>
  )
}
