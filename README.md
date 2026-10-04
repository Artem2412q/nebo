# Небесный Сад — digital rebuild

Production-oriented redesign of the panoramic restaurant / rooftop / sound space **«Небесный Сад»** in Krasnodar.

## Stack

- Next.js 15 / App Router
- React 19
- TypeScript
- Framer Motion
- CSS design system (no template UI kit)

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

For production:

```bash
npm run build
npm start
```

Set the public URL before deployment:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.ru
```

An optional server-to-server booking integration can be connected later:

```bash
BOOKING_WEBHOOK_URL=https://...
```

If the webhook is not configured, `/api/booking` deliberately returns `503` rather than pretending that a reservation was confirmed. The visible booking and private-event flows submit to `/api/booking`. If no webhook is configured, the interface reports that online intake is unavailable and offers the restaurant's published phone number; it never fakes a confirmation.

## Content architecture

- `data/site.ts` — contacts, legal entity, source URLs, brand facts
- `data/menu.ts` — structured digital menu
- `data/events.ts` — upcoming/archive event model
- `components/MenuExperience.tsx` — category + horizontal catalogue UX
- `components/BookingForm.tsx` — table request flow
- `components/PrivateWizard.tsx` — five-step event concierge flow

The content is separated from presentation so it can later be replaced by a headless CMS without rebuilding the interface.

## Routes

- `/` — cinematic homepage
- `/menu` — digital menu
- `/events` — upcoming + visual archive
- `/private` — corporate/private events + concierge wizard
- `/atmosphere` — day → sunset → night story
- `/about` — positioning
- `/contacts` — contacts, map, legal details
- `/book` — booking request
- `/privacy` — implementation-aware privacy page

Technical routes: `sitemap.xml`, `robots.txt`, custom `404`, booking API stub.

## Motion & accessibility

The intro is shown once per browser session and can be skipped. `prefers-reduced-motion` disables non-essential motion. Interactive controls use native buttons/links, visible focus states are provided, touch layouts do not depend on hover, and the menu catalogue uses native horizontal scroll/snap on mobile.

## Important content rule

No unverified dishes, prices or future events were invented. The official restaurant domain is treated as source of truth. The current official event shown during research was dated 19 September 2026, so in this build it is placed in the archive instead of `UPCOMING`.

## GitHub / deploy

Архив `nebesny-sad-github-ready.zip` подготовлен так, чтобы файлы проекта можно было загрузить прямо в корень GitHub-репозитория. Подробные шаги — в `DEPLOY.md`.
