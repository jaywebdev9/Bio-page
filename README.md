# Joshua Mwalukimba — Link in Bio

A clean, modern personal link-in-bio page for **Joshua Mwalukimba**, Software Developer.

Live profile links: Portfolio, GitHub, Fiverr, Instagram, and Facebook — with dark/light theme support.

## Stack

- **TanStack Start** + React 19
- **Vite 8** + Tailwind CSS 4
- TypeScript
- Radix UI primitives + Lucide icons

## Getting Started

```bash
# Install
npm install

# Development (http://localhost:8080)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
├── public/           # Static assets (avatar, favicon, OG image)
├── src/
│   ├── components/   # UI components (LinkInBio, ThemeToggle, icons)
│   ├── lib/          # Profile data, utilities, auth/db helpers
│   ├── routes/       # File-based routes (TanStack Router)
│   ├── styles.css    # Global styles + design tokens
│   └── router.tsx
├── scripts/          # Build helpers & migration utilities
├── server/           # Server middleware
├── migrations/       # Optional DB migrations
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## Customization

Edit `src/lib/profile.ts` to update name, bio, links, and socials.

Avatar and Open Graph images live in `public/`.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the repository in the [Vercel Dashboard](https://vercel.com/new).
3. Framework preset: Vite (or leave auto-detect).
4. Deploy.

No environment variables are required for the basic link-in-bio experience.

## License

Private / personal use.
