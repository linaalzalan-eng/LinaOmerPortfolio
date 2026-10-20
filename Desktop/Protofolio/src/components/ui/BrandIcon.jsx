import { brandIcons } from '../../data/brandIcons'

export default function BrandIcon({ name, className = 'size-5' }) {
  const icon = brandIcons[name]
  if (!icon) return null
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" focusable="false">
      <path d={icon.path} />
    </svg>
  )
}
