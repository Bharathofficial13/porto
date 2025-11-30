/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        muted: 'var(--muted)',
        accent: 'var(--accent)',
        'accent-2': 'var(--accent-2)'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'ui-sans-serif']
      },
      fontSize: {
        h1: '48px',
        h2: '28px',
        body: '18px'
      },
      spacing: {
        section: '5rem'
      }
    }
  },
  plugins: []
}
