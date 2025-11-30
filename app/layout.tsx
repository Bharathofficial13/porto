import type { Metadata, Viewport } from 'next'
import '@/styles/globals.css'
import { ThemeProviderWrapper } from '@/components/ThemeProviderWrapper'
import { BackgroundAnimation } from '@/components/BackgroundAnimation'

export const metadata: Metadata = {
  title: 'Bharath S — Full-Stack Developer & SaaS Builder',
  description: 'Portfolio of a full-stack developer specializing in SaaS, CRM, and scalable systems.'
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            try {
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
              } else {
                document.documentElement.classList.remove('dark')
              }
            } catch (e) {}
          `
        }} />
      </head>
      <body className="bg-bg text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <BackgroundAnimation numShapes={8} />
        <ThemeProviderWrapper>
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  )
}
