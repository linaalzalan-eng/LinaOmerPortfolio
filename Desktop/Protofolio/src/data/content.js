// Language-independent content. Translatable text lives in src/i18n.

export const EMAIL = 'linaalzalan@gmail.com'

export const NAV_IDS = ['hero', 'about', 'skills', 'work', 'contact']

export const STATS = [
  { key: 'projects', value: 6, suffix: '+' },
  { key: 'years', value: 2, suffix: '+' },
  { key: 'tech', value: 4, suffix: '+' },
  { key: 'ai', display: '∞' },
]

// `icon` is a key from brandIcons; `lucide` marks skills shown with a Lucide icon.
export const SKILL_GROUPS = [
  {
    id: 'frontend',
    skills: [
      { name: 'HTML5', icon: 'html5' },
      { name: 'CSS3', icon: 'css' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'React', icon: 'react' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'Bootstrap', icon: 'bootstrap' },
    ],
  },
  {
    id: 'tools',
    skills: [
      { name: 'Vite', icon: 'vite' },
      { name: 'Git & GitHub', icon: 'git' },
      { name: 'Postman', icon: 'postman' },
    ],
  },
  {
    id: 'ai',
    skills: [
      { name: 'Python', icon: 'python' },
      { name: 'Machine Learning', lucide: 'brain' },
      { name: 'Pattern Recognition', lucide: 'scan' },
    ],
  },
]

// Add a `demo` URL to any project to show a "Live demo" button.
export const PROJECTS = [
  {
    id: 'calculator',
    title: 'Interactive JavaScript Calculator',
    kind: 'web',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/linaalzalan-eng/Ass8',
  },
  {
    id: 'bistro',
    title: 'Subset Bistro — Restaurant Website',
    kind: 'web',
    tags: ['HTML5', 'CSS3', 'Bootstrap 5', 'JS'],
    github: 'https://github.com/linaalzalan-eng/Ass7',
  },
  {
    id: 'smartHaven',
    title: 'Smart Haven Marketplace',
    kind: 'web',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/linaalzalan-eng',
  },
  {
    id: 'beauty',
    title: 'Beauty Store',
    kind: 'web',
    tags: ['HTML5', 'CSS3'],
    github: 'https://github.com/linaalzalan-eng/beauty-store-landing-page',
  },
  {
    id: 'personality',
    title: 'Customer Personality Analysis',
    kind: 'ml',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
    github: 'https://github.com/linaalzalan-eng/ASS2-ML',
  },
]

export const SOCIALS = [
  { name: 'GitHub', icon: 'github', href: 'https://github.com/linaalzalan-eng', handle: 'linaalzalan-eng' },
  { name: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/lina-omar-85824a33', handle: 'lina-omar' },
  { name: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/lina_omer04', handle: '@lina_omer04' },
  { name: 'Telegram', icon: 'telegram', href: 'https://t.me/lina_omer04', handle: '@lina_omer04' },
  { name: 'WhatsApp', icon: 'whatsapp', href: 'https://wa.me/972567495458', handle: '+972 56 749 5458' },
]
