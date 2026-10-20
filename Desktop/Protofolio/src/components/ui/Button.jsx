const base =
  'group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium transition-all duration-300 ease-out-soft active:scale-[0.97] disabled:pointer-events-none'

const variants = {
  primary:
    'bg-primary text-on-primary shadow-[0_8px_24px_-12px_var(--primary)] hover:bg-primary-hover hover:-translate-y-0.5',
  outline: 'border border-line bg-surface/60 text-ink hover:border-ink/40 hover:-translate-y-0.5',
  ghost: 'text-ink hover:bg-surface-2',
}

// Renders an <a> when `href` is given, otherwise a <button>.
export default function Button({ href, variant = 'primary', className = '', external, children, ...rest }) {
  const cls = `${base} ${variants[variant]} ${className}`
  if (href) {
    const ext = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
    return (
      <a href={href} className={cls} {...ext} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  )
}
