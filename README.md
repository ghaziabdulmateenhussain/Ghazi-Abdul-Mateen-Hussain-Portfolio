# Ghazi Abdul Mateen Hussain — Portfolio

A modern, animated, fully responsive personal portfolio built with **Next.js**, **Tailwind CSS**, and **Framer Motion**. Dark theme, blue/purple gradients, glassmorphism, and scroll-triggered animations throughout.

## ✨ Features

- Hero section with typewriter effect and animated code-editor panel
- Glassmorphism cards, gradient accents, animated grid background
- Scroll progress bar, custom cursor (desktop), boot-style page loader
- Animated skill progress bars
- Animated education timeline
- Project showcase with hover reveal actions
- Contact form (opens the visitor's email client with a pre-filled message) + map placeholder
- Fully responsive (mobile, tablet, desktop) and keyboard-accessible
- SEO metadata configured in `app/layout.js`

## 🛠 Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/) icons

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open http://localhost:3000
```

Build for production:

```bash
npm run build
npm start
```

## 📁 Project Structure

```
app/
  layout.js        # Root layout, fonts, SEO metadata
  page.js           # Assembles all sections
  globals.css        # Tailwind base + design tokens/utilities
components/
  Navbar.js, Hero.js, About.js, Skills.js,
  Education.js, Projects.js, Contact.js, Footer.js
  ScrollProgress.js, CustomCursor.js, PageLoader.js
  ui/GlassCard.js, ui/SectionHeading.js, ui/Typewriter.js
lib/
  data.js           # All editable content (skills, projects, education, links)
public/
  CV-Ghazi-Abdul-Mateen-Hussain.pdf   # Placeholder — replace with your real CV
  icon.png                              # Favicon
```

## ✏️ Editing Content

Almost everything (name, skills, education, projects, contact info, social links) lives in **`lib/data.js`** — edit that one file to update the site's content without touching components.

- Replace `public/CV-Ghazi-Abdul-Mateen-Hussain.pdf` with your real CV/résumé (keep the same filename, or update the `href` in `components/Hero.js`).
- Update `socials.linkedin` and `socials.github` in `lib/data.js` with your real profile URLs.
- Swap the project placeholders in `lib/data.js` for real projects (add live demo/GitHub links) as you build them.

## 🌐 Deploying

The fastest path is [Vercel](https://vercel.com/) (made by the Next.js team):

1. Push this repo to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Deploy — no configuration needed.

It also deploys cleanly to Netlify, Cloudflare Pages, or any Node hosting that supports Next.js.

## 📄 License

Free to use and modify for your own portfolio.
