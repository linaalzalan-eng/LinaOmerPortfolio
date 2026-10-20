import Reveal from './Reveal'

export const container = 'mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8'

export function Eyebrow({ index, children }) {
  return (
    <p className="flex items-center gap-3 text-sm text-muted">
      {index && <span className="font-display text-lg text-primary italic rtl:not-italic">{index}</span>}
      <span className="h-px w-10 bg-line" aria-hidden="true" />
      <span className="font-medium ltr:text-xs ltr:tracking-[0.2em] ltr:uppercase">{children}</span>
    </p>
  )
}

export function SectionHeading({ index, eyebrow, title, className = '' }) {
  return (
    <Reveal className={`mb-12 md:mb-16 ${className}`}>
      <Eyebrow index={index}>{eyebrow}</Eyebrow>
      <h2 className="mt-4 max-w-2xl font-display text-4xl leading-[1.05] text-balance sm:text-5xl rtl:leading-tight">
        {title}
      </h2>
    </Reveal>
  )
}

export function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`py-20 sm:py-24 lg:py-32 ${className}`}>
      <div className={container}>{children}</div>
    </section>
  )
}
