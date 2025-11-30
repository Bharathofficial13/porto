'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export function Contact() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '83896732-5347-45ff-abd4-d457b0e05ed9',
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      })

      const result = await response.json()
      
      if (result.success) {
        setSubmitted(true)
        ;(e.currentTarget as HTMLFormElement).reset()
        setTimeout(() => setSubmitted(false), 3000)
      } else {
        console.error('Form submission error:', result)
      }
    } catch (error) {
      console.error('Error sending message:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="max-w-2xl mx-auto">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
          >
            <div className="p-8 md:p-12 bg-surface rounded-2xl border border-gray-200 dark:border-gray-800">
              <h2 className="text-3xl md:text-4xl font-bold">Let's Work Together</h2>
              <p className="mt-3 text-muted">Have a project in mind? I'd love to discuss it.</p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full px-4 py-2 rounded-lg bg-bg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-2 rounded-lg bg-bg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    placeholder="Brief message..."
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg bg-bg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-3 bg-accent hover:bg-accent/90 text-white rounded-lg font-semibold disabled:opacity-50 transition-all duration-200"
                >
                  {loading ? 'Sending…' : submitted ? 'Sent! ' : 'Send Message'}
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-700">
                <p className="text-sm text-muted mb-4">Or reach out directly:</p>
                <div className="space-y-2 text-sm">
                  <p>
                      <span className="font-medium">Email:</span> bharathofficial1310@gmail.com
                  </p>
                  <p>
                    
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
