import { ArrowUp } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { useScrolledPast } from '../hooks/useScrolledPast'
import { container } from './ui/Section'

export function ScrollTop() {
  const { t } = useLanguage()
  const visible = useScrolledPast(400)
  return (
    <a
      href="#hero"
      aria-label={t.a11y.backToTop}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={`fixed end-5 bottom-5 z-40 grid size-12 place-items-center rounded-full bg-ink text-bg shadow-lg transition-all duration-300 hover:-translate-y-1 sm:end-8 sm:bottom-8 ${
        visible ? 'opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <ArrowUp className="size-5" aria-hidden="true" />
    </a>
  )
}

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="border-t border-line py-10">
      <div className={`${container} flex flex-col gap-2 text-center text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:text-start`}>
        <p className="text-ink">{t.footer.line1}</p>
        <p>
          {t.footer.line2} {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
