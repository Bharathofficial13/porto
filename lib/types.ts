export interface Project {
  id: string
  title: string
  slug: string
  summary: string
  tech: string[]
  image?: string
}

export interface Testimonial {
  id: string
  nameOrInitials: string
  quote: string
}

export interface TechItem {
  id: string
  name: string
  icon: string
}
