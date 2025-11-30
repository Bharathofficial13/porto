import type { Project, Testimonial, TechItem } from './types'

export const projects: Project[] = [
  {
    id: 'sangaas',
    title: 'Sangaas CRM Platform',
    slug: 'sangaas-crm',
    summary: 'End-to-end CRM for sales teams with real-time automation and advanced reporting.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis'],
    image: '/projects/sangaas.jpg'
  },
  {
    id: 'presales',
    title: 'Presales Automation Suite',
    slug: 'presales-automation',
    summary: 'Automate demo scheduling, proposals, and lead routing with intelligent workflows.',
    tech: ['React', 'Python', 'AWS', 'WebSocket'],
    image: '/projects/presales.jpg'
  },
  {
    id: 'hrm',
    title: 'HRM Mini SaaS',
    slug: 'hrm-saas',
    summary: 'Lightweight HR management system for small and medium-sized teams.',
    tech: ['Next.js', 'Node.js', 'MongoDB'],
    image: '/projects/hrm.jpg'
  },
  {
    id: 'taskflow',
    title: 'TaskFlow Kanban',
    slug: 'taskflow-kanban',
    summary: 'Real-time collaborative Kanban board with live presence and updates.',
    tech: ['React', 'WebSocket', 'Node.js', 'Redis'],
    image: '/projects/taskflow.jpg'
  },
  {
    id: 'brandpulse',
    title: 'BrandPulse Tracker',
    slug: 'brandpulse-tracker',
    summary: 'Competitor intelligence and market insights dashboard with real-time alerts.',
    tech: ['Next.js', 'Python', 'PostgreSQL', 'Scraping'],
    image: '/projects/brandpulse.jpg'
  },
  {
    id: 'automation',
    title: 'Enterprise Automation',
    slug: 'enterprise-automation',
    summary: 'Custom workflow automation reducing manual tasks by 80% for enterprise clients.',
    tech: ['Python', 'Node.js', 'Docker', 'Kubernetes'],
    image: '/projects/automation.jpg'
  }
]

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    nameOrInitials: 'CEO, CloudScale',
    quote: 'Delivered our CRM platform with exceptional code quality and attention to detail. Truly professional.'
  },
  {
    id: 't2',
    nameOrInitials: 'PM, TechStudio',
    quote: 'Deep technical understanding combined with strong product sense. Makes excellent decisions autonomously.'
  },
  {
    id: 't3',
    nameOrInitials: 'Founder, BrightLabs',
    quote: 'Reliable, detail-oriented, and highly professional. Would hire again without hesitation.'
  }
]

export const techStack: TechItem[] = [
  { id: 'react', name: 'React', icon: '⚛️' },
  { id: 'nextjs', name: 'Next.js', icon: '▲' },
  { id: 'nodejs', name: 'Node.js', icon: '🟢' },
  { id: 'python', name: 'Python', icon: '🐍' },
  { id: 'postgres', name: 'PostgreSQL', icon: '🐘' },
  { id: 'mongodb', name: 'MongoDB', icon: '🍃' },
  { id: 'redis', name: 'Redis', icon: '🔴' },
  { id: 'docker', name: 'Docker', icon: '🐳' },
  { id: 'aws', name: 'AWS', icon: '☁️' },
  { id: 'tailwind', name: 'Tailwind', icon: '🎨' },
  { id: 'prisma', name: 'Prisma', icon: '◆' },
  { id: 'websocket', name: 'WebSocket', icon: '📡' }
]
