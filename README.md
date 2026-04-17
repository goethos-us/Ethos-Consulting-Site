# Ethos Consulting Group — Marketing Site

Public marketing site for **Ethos Consulting Group LLC**, built with [Next.js](https://nextjs.org/) (App Router) and deployed on [Vercel](https://vercel.com/).

## Tech stack

- **Next.js 15** — React framework, static generation for the home page
- **React 19**
- **Tailwind CSS** — layout and styling
- **FormSubmit** — contact form delivery (no backend required)

## Prerequisites

- **Node.js** 18.18+ or 20+ (LTS recommended)
- **npm** (comes with Node)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The dev server uses Webpack by default; if the `.next` cache misbehaves on Windows, use `npm run dev:fresh` once.

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start dev server |
| `npm run dev:fresh` | Remove `.next`, then start dev |
| `npm run dev:turbo` | Dev with Turbopack (optional) |
| `npm run build` | Production build |
| `npm run start` | Run production build locally |
| `npm run lint` | ESLint |
| `npm run clean` | Delete `.next` only |

## Environment variables

Contact form posts to **FormSubmit**. The inbox is controlled by:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_FORM_RECIPIENT` | Email where FormSubmit delivers messages (set in **Vercel → Project → Settings → Environment Variables** for Production). |

Copy `.env.example` to `.env.local` for local testing (`.env.local` is gitignored):

```bash
copy .env.example .env.local
```

Then edit `NEXT_PUBLIC_FORM_RECIPIENT` if needed. The first use of a new inbox requires confirming FormSubmit’s activation email.

## Deployment

- **GitHub:** `goethos-us/Ethos-Consulting-Site` (source of truth).
- **Vercel:** Connected to this repo; pushes to **`main`** trigger production deploys.
- **Domain:** DNS (e.g. GoDaddy) points to Vercel per **Project → Settings → Domains** instructions.

Do not commit real secrets. Use Vercel env vars for production.

## Project layout

```
app/            App Router — layout, global styles, home page
components/     UI sections (Header, Hero, Services, Contact, etc.)
lib/            Shared helpers (images, form action, spotlight copy)
public/         Static assets (favicon, logo)
```

## Contributing

1. Create a branch from `main`.
2. Make changes; run `npm run lint` and `npm run build` before pushing.
3. Open a Pull Request into `main` and merge after review (or per team policy).

## License / usage

Private repository for Ethos Consulting Group LLC unless otherwise stated.
