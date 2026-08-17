# Raseed — Marketing & Docs Site

A static, framework-free website (plain HTML + Tailwind via CDN) — a landing
page plus a docs section. No build step, no `npm install` required; just
open `index.html` in a browser or deploy the folder as-is.

## Structure

```
index.html              Landing page (hero, features, how it works, pricing, footer)
styles.css               Small custom CSS extras (Tailwind CDN covers the rest)
docs/
  index.html             Docs hub
  getting-started.html
  transactions.html
  investments.html
  plans.html
  faq.html
```

## Before you publish

1. **Replace the `/app` links.** Every "Get started" / "Log in" button
   points at `/app` as a placeholder. Update these across all files (or set
   up a redirect from `/app` to your live app's login page) once you know
   your production app URL.
2. **Double-check pricing.** Plan limits and prices on this site were pulled
   directly from the live `plans` table (Free $0 · 1 income / 10 expense
   fields, Plus $3.99/mo or $39.99/yr · 2 income / 15 expense fields,
   Unlimited $5.99/mo or $59.99/yr · no limit) as of the day this was built.
   If you change plans in the app later, update this site to match.
3. **Add real screenshots (optional).** The hero section uses an
   illustrative, hand-built mockup card, not a real screenshot — swap in an
   actual (blurred/sample-data) dashboard screenshot if you'd like.
4. **Privacy policy link (optional).** If you want a Privacy Policy page
   linked from the footer, point it at the one already drafted for the Play
   Store listing.

## Deploying to Vercel

This is the fastest path since your app is already on Vercel:

1. Push this folder to its own GitHub repo (or a subfolder of an existing
   one).
2. In Vercel: **New Project** → import the repo → **Framework Preset:
   Other** (no build command needed, since these are static files) → set
   **Output Directory** to `.` (the repo root) → Deploy.
3. Point a subdomain at it if you'd like, e.g. `www.yourdomain.com` for the
   marketing site and `app.yourdomain.com` for the actual Raseed
   app.

## Deploying anywhere else

Since there's no build step, any static host works — Netlify, GitHub Pages,
Cloudflare Pages, or even a plain file upload to any web server. Just
upload the whole folder.
