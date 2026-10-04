# QA checklist

## Responsive
- 320 / 375 / 390 / 430 px mobile layout rules
- tablet breakpoint at 980 px
- fluid desktop / wide-screen typography via `clamp()`
- horizontal menu uses native scroll-snap and partial next-card visibility
- persistent mobile booking CTA + mobile navigation trigger

## Accessibility
- semantic buttons/links/forms
- visible `:focus-visible`
- labels on form fields
- ARIA labels for nav, carousel controls and menu tabs
- `prefers-reduced-motion` fallback
- no interaction requires hover on touch

## Content integrity
- menu data separated from UI
- no invented future event
- past event stored as archive
- booking request is never represented as confirmed without an integration response
- official contact/legal data centralized in `data/site.ts`

## Performance choices
- no WebGL/canvas requirement
- no GSAP/Lenis dependency
- transform/opacity motion only for the intro
- no large autoplay video payload on first paint
- display uses one verified background asset with graceful gradient treatment
- production metadata, robots and sitemap included

## Before real launch
- set `NEXT_PUBLIC_SITE_URL`
- decide whether to connect `BOOKING_WEBHOOK_URL` or a real reservation provider
- self-host/optimize final approved photo/video assets instead of relying on legacy remote URLs
- add finalized restaurant privacy/consent text approved by the operator
- add analytics only after consent/legal configuration if required
- verify every price against the restaurant's current back-office/menu immediately before launch
