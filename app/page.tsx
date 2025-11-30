'use client'

import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Projects } from '@/components/Projects'
import { Tech } from '@/components/Tech'
import { Testimonials } from '@/components/Testimonials'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="pt-16 relative z-10">
        <Hero />

        <section className="bg-surface dark:bg-surface">
          <About />
        </section>

        <Projects />

        <section className="bg-surface dark:bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Tech Stack</h2>
              <p className="mt-2 text-muted">Technologies I work with daily</p>
            </div>
            <Tech />
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Client Testimonials</h2>
              <p className="mt-2 text-muted">What people say about working with me</p>
            </div>
            <Testimonials />
          </div>
        </section>

      <section className="bg-surface dark:bg-surface">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  )
}
