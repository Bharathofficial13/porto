'use client'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-20 bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">© {new Date().getFullYear()} Bharath S. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/Bharathofficial13" aria-label="GitHub" className="text-sm text-muted hover:text-accent transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/bharath-s-382202269/" aria-label="LinkedIn" className="text-sm text-muted hover:text-accent transition-colors">
              LinkedIn
            </a>
            <a href="#" aria-label="Twitter" className="text-sm text-muted hover:text-accent transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
