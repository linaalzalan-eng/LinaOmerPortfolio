import { BrainCircuit, ScanEye } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { SKILL_GROUPS } from '../data/content'
import { brandIcons } from '../data/brandIcons'
import BrandIcon from './ui/BrandIcon'
import Reveal from './ui/Reveal'
import { Section, SectionHeading } from './ui/Section'

const lucideIcons = { brain: BrainCircuit, scan: ScanEye }

function SkillTile({ skill }) {
  const Lucide = lucideIcons[skill.lucide]
  const brand = skill.icon ? brandIcons[skill.icon].hex : 'var(--primary)'
  return (
    <li
      className="group flex flex-col items-center gap-2.5 rounded-2xl border border-line bg-bg/60 px-2 py-3.5 text-center sm:flex-row sm:gap-3 sm:p-3 sm:text-start transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/25 hover:bg-surface"
      style={{ '--brand': brand }}
    >
      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-surface-2 text-ink transition-colors duration-300 group-hover:text-[var(--brand)]">
        {Lucide ? <Lucide className="size-5" aria-hidden="true" /> : <BrandIcon name={skill.icon} className="size-5" />}
      </span>
      <span className="text-xs leading-snug font-medium sm:text-sm" dir="ltr">
        {skill.name}
      </span>
    </li>
  )
}

function SkillGroup({ group, title, note, delay, wide }) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className={`rounded-[1.75rem] border border-line bg-surface p-6 sm:p-8 ${wide ? 'md:col-span-2' : ''}`}
    >
      <header className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-muted">{note}</p>
        </div>
        <span className="font-display text-3xl leading-none text-primary tabular-nums" dir="ltr">
          {String(group.skills.length).padStart(2, '0')}
        </span>
      </header>
      <ul
        className={`grid gap-3 ${wide ? 'grid-cols-3' : 'grid-cols-3 md:grid-cols-1'}`}
      >
        {group.skills.map((s) => (
          <SkillTile key={s.name} skill={s} />
        ))}
      </ul>
    </Reveal>
  )
}

export default function Skills() {
  const { t } = useLanguage()
  const s = t.skills

  return (
    <Section id="skills" className="bg-surface-2/50">
      <SectionHeading index="02" eyebrow={s.eyebrow} title={s.title} />
      <div className="grid gap-5 md:grid-cols-2">
        {SKILL_GROUPS.map((g, i) => (
          <SkillGroup
            key={g.id}
            group={g}
            title={s.groups[g.id].title}
            note={s.groups[g.id].note}
            delay={i * 90}
            wide={i === 0}
          />
        ))}
      </div>
    </Section>
  )
}
