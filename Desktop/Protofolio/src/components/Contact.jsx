import { useEffect, useState } from 'react'
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { EMAIL, SOCIALS } from '../data/content'
import BrandIcon from './ui/BrandIcon'
import Button from './ui/Button'
import Reveal from './ui/Reveal'
import { Eyebrow, Section } from './ui/Section'

function useCopy(text) {
  const [copied, setCopied] = useState(false)
  useEffect(() => {
    if (!copied) return
    const id = window.setTimeout(() => setCopied(false), 2000)
    return () => window.clearTimeout(id)
  }, [copied])
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
    } catch {
      window.location.href = `mailto:${text}`
    }
  }
  return [copied, copy]
}

export default function Contact() {
  const { t } = useLanguage()
  const c = t.contact
  const [copied, copy] = useCopy(EMAIL)

  return (
    <Section id="contact">
      <Reveal className="relative overflow-hidden rounded-[2rem] border border-line bg-surface">
        <div
          aria-hidden="true"
          className="bg-dots absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]"
        />
        <div className="relative grid gap-12 p-6 sm:p-10 lg:grid-cols-12 lg:gap-10 lg:p-14">
          <div className="lg:col-span-7">
            <Eyebrow index="04">{c.eyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] text-balance sm:text-5xl lg:text-6xl rtl:leading-tight">
              {c.title}
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted rtl:leading-loose">{c.lead}</p>

            <div className="mt-10">
              <p className="text-sm text-muted">{c.emailLabel}</p>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-1 inline-block font-display text-2xl break-all text-ink underline decoration-line decoration-1 underline-offset-8 transition-colors hover:decoration-primary sm:text-3xl rtl:font-sans rtl:text-xl rtl:font-medium sm:rtl:text-2xl"
                dir="ltr"
              >
                {EMAIL}
              </a>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={`mailto:${EMAIL}`}>
                  <Mail className="size-4" aria-hidden="true" />
                  {c.sendEmail}
                </Button>
                <Button variant="outline" onClick={copy} aria-live="polite">
                  {copied ? (
                    <Check className="size-4 text-accent" aria-hidden="true" />
                  ) : (
                    <Copy className="size-4" aria-hidden="true" />
                  )}
                  {copied ? c.copied : c.copy}
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 lg:border-s lg:border-line lg:ps-10">
            <p className="mb-4 text-sm text-muted">{c.socialsLabel}</p>
            <ul className="divide-y divide-line border-y border-line">
              {SOCIALS.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 py-4 transition-colors"
                  >
                    <span className="grid size-11 place-items-center rounded-xl bg-surface-2 text-ink transition-colors duration-300 group-hover:bg-primary group-hover:text-on-primary">
                      <BrandIcon name={s.icon} className="size-5" />
                    </span>
                    <span className="flex-1 font-medium">{s.name}</span>
                    <span className="sr-only">{t.a11y.newTab}</span>
                    <ArrowUpRight
                      className="size-5 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
