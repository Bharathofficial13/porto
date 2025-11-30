# Bharath S — Premium Portfolio

A production-ready, professional portfolio built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion + next-themes**.

## Features

✨ **White-first design** with automatic system dark mode support  
🎨 **Professional theme system** with CSS variables for light/dark modes  
⚡ **Framer Motion animations** — subtle, performant fade-ups and hover effects  
🌙 **Theme toggle** with `next-themes` integration  
📱 **Fully responsive** — optimized for mobile, tablet, desktop  
♿ **Accessible** — semantic HTML, focus states, ARIA labels  
🚀 **Production-ready** — optimized builds, clean component structure  

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Motion:** Framer Motion
- **Theme:** next-themes
- **Deployment:** Ready for Vercel, Netlify, AWS

## Getting Started

### Installation

```bash
cd d:\porto
npm install
npm run dev
```

The app will start on `http://localhost:3001` (or next available port).

### Build & Deploy

```bash
npm run build
npm start
```

## Customization

### Update Client Information

1. **Name & Title** → Edit `app/page.tsx` and `components/Hero.tsx`
2. **About Text** → Edit `components/About.tsx`
3. **Projects** → Update `lib/data.ts` (projects array)
4. **Testimonials** → Update `lib/data.ts` (testimonials array)
5. **Contact Email/Phone** → Edit `components/Contact.tsx`

### Add Profile Image

Place your image at `/public/images/profile.jpg`, then update `About.tsx`:

```tsx
<Image
  src="/images/profile.jpg"
  alt="Profile"
  width={288}
  height={288}
  priority
  className="rounded-2xl"
/>
```

### Theme Colors

Edit `styles/globals.css` to customize light/dark theme colors:

```css
:root {
  --bg: #ffffff;
  --surface: #f8f9fa;
  --muted: #6b7280;
  --accent: #0f6ffc;
  --accent-2: #6c5ce7;
}

html.dark {
  --bg: #0a0a0a;
  --surface: #111214;
  --muted: #a1a1aa;
  --accent: #4ea1ff;
  --accent-2: #8b78f6;
}
```

## Project Structure

```
d:/porto/
├── app/
│   ├── layout.tsx          # Root layout with ThemeProvider
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Tailwind directives & CSS vars
├── components/
│   ├── Navbar.tsx          # Fixed nav with theme toggle
│   ├── Hero.tsx            # Hero section with CTAs
│   ├── About.tsx           # About + skills grid
│   ├── Projects.tsx        # Projects grid
│   ├── Tech.tsx            # Tech stack icons
│   ├── Testimonials.tsx    # Testimonials grid
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer with social links
│   └── ThemeToggle.tsx     # Theme switcher button
├── lib/
│   ├── data.ts             # Projects, testimonials, tech stack
│   ├── types.ts            # TypeScript interfaces
│   └── motion.ts           # Framer Motion variants
└── public/                 # Static assets (add images here)
```

## Motion System

Framer Motion is configured with consistent animation variants:

- **fadeUp:** Subtle fade-in with upward movement on scroll
- **staggerList:** Staggered animations for list items
- **hoverLift:** Hover effect with slight lift & scale

Components use `whileInView` to trigger animations on scroll.

## Dark Mode

Dark mode is **system-based by default** via `next-themes`:

- User's OS preference is detected automatically
- Manual theme toggle button in navbar (sun/moon icon)
- Persisted in localStorage

## Deployment

###Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Build for Production

```bash
npm run build
```

This generates optimized Next.js files in `.next/`.

## Performance

- **Fast builds:** App Router with minimal bundle size
- **Image optimization:** Tailwind utilities only (no unused CSS)
- **Animations:** GPU-accelerated Framer Motion (minimal JS overhead)
- **Lighthouse:** Target score 90+

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private portfolio. All rights reserved to Bharath S.

---

**Ready to go live?** Just update the data in `lib/data.ts`, add your image, customize colors, and deploy to Vercel!

