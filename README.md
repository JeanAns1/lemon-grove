# Lemon Grove

One-page site for a restaurant: presentation, menu, house specials, table reservation and contact.

> Demo project. Lemon Grove is a fictional restaurant.

## Sections

- **Hero** — tagline, call to action, key info
- **About** — story and values
- **Menu** — starters, mains and desserts in tabs
- **Specials** — the most ordered dishes
- **Reservation** — table request form with validation
- **Visit** — address with Google Maps link, opening hours, contact, newsletter sign-up

Responsive on mobile, tablet and desktop, with smooth scrolling between sections.

## Tech stack

React 19 · Vite · plain CSS (no UI library)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173

### Receive reservations by email

The form works without a backend. To receive requests by email, create a free form on
[Formspree](https://formspree.io) (or similar), then:

```bash
cp .env.example .env
# set VITE_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx
```

## Customize

- Restaurant info (name, phone, address, social links): `src/data/site.js`
- Menu and specials: `src/data/menu.js`
- Colors and fonts: `src/styles/global.css`

## Deploy

Vercel or Netlify: build command `npm run build`, output directory `dist`.

## Git workflow

`master` (releases) · `develop` (integration) · `feature/*` · `fix/*`

## License

MIT
