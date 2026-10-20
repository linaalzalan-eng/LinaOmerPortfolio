import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { useTheme } from '../theme/ThemeContext'
import { useActiveSection } from '../hooks/useActiveSection'
import { useScrolledPast } from '../hooks/useScrolledPast'
import { NAV_IDS } from '../data/content'
import { container } from './ui/Section'

const iconBtn =
  'inline-flex size-10 items-center justify-center rounded-full border border-line bg-surface/70 text-ink transition-all duration-300 hover:border-ink/40 active:scale-95'

function LanguageSwitch() {
  const { lang, toggleLang, t } = useLanguage()
  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={t.a11y.switchLang}
      className="relative inline-flex h-10 items-center rounded-full border border-line bg-surface/70 p-1 text-xs font-semibold"
      dir="ltr"
    >
      <span
        aria-hidden="true"
        className={`absolute top-1 bottom-1 w-9 rounded-full bg-ink transition-transform duration-300 ease-out-soft ${
          lang === 'ar' ? 'translate-x-9' : 'translate-x-0'
        }`}
      />
      {['en', 'ar'].map((code) => (
        <span
          key={code}
          className={`relative z-10 w-9 text-center transition-colors duration-300 ${
            lang === code ? 'text-bg' : 'text-muted'
          }`}
        >
          {code.toUpperCase()}
        </span>
      ))}
    </button>
  )
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage()
  const isDark = theme === 'dark'
  return (
    <button type="button" onClick={toggleTheme} aria-label={isDark ? t.a11y.toLight : t.a11y.toDark} className={iconBtn}>
      <span className="relative size-[18px]">
        <Sun
          className={`absolute inset-0 size-[18px] transition-all duration-500 ${isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
        />
        <Moon
          className={`absolute inset-0 size-[18px] transition-all duration-500 ${isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`}
        />
      </span>
    </button>
  )
}

export default function Navbar() {
  const { t, lang } = useLanguage()
  const active = useActiveSection(NAV_IDS)
  const scrolled = useScrolledPast(12)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 768 && setOpen(false)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        open ? 'border-b border-line bg-bg' : scrolled ? 'border-b border-line bg-bg/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className={`${container} flex h-16 items-center justify-between gap-4 md:h-[4.5rem]`}>
        <a href="#hero" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid size-9 place-items-center rounded-xl bg-primary font-display text-xl text-on-primary transition-transform duration-300 group-hover:-rotate-6 rtl:text-lg">
            {lang === 'ar' ? 'ل' : 'L'}
          </span>
          <span className="text-[15px] font-semibold tracking-tight">{lang === 'ar' ? 'لينة الزعلان' : 'Lina Alzalan'}</span>
        </a>

        <nav aria-label={t.a11y.mainNav} className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-full border border-line bg-surface/70 p-1 backdrop-blur">
            {NAV_IDS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? 'true' : undefined}
                  className={`relative block rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                    active === id ? 'bg-ink text-bg' : 'text-muted hover:text-ink'
                  }`}
                >
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitch />
          <ThemeToggle />
          <button
            type="button"
            className={`${iconBtn} md:hidden`}
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
          >
            {open ? <X className="size-[18px]" /> : <Menu className="size-[18px]" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out-soft md:hidden ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
        inert={open ? undefined : ''}
      >
        <nav aria-label={t.a11y.mainNav} className="min-h-0">
          <ul className={`${container} flex flex-col gap-1 pt-2 pb-6`}>
            {NAV_IDS.map((id, i) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === id ? 'true' : undefined}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg transition-colors ${
                    active === id ? 'bg-surface-2 text-ink' : 'text-muted hover:bg-surface-2 hover:text-ink'
                  }`}
                >
                  {t.nav[id]}
                  <span className="font-display text-sm text-primary">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
