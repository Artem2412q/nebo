# Research / content decisions

Research snapshot: **4 October 2026**.

## Official source of truth

Primary source: https://xn----8sbbobb2a2ad3bd1j.xn--p1ai/
Menu source: https://xn----8sbbobb2a2ad3bd1j.xn--p1ai/menu

Confirmed from the official site at research time:

- Brand: «Небесный Сад»
- Positioning: rooftop / panoramic sound space
- Phone: +7 (989) 240-88-88
- Address: Краснодар, ул. Красная, 72, 4 этаж
- Operator: ООО «СКАЙ»
- ИНН: 2310202071
- ОГРН: 1172375060846
- Loyalty: 7% cashback, external service at https://nebosad.ru
- Official afisha still displayed «Нужен #дипхаус» dated 19 September 2026. Since that date is already past, it is represented as archive content.

## Menu migration

The legacy site exposes menu content in an awkward presentation, while a text-readable official menu endpoint also exists. Confirmed dishes, weights/volumes and prices were normalized into `data/menu.ts`.

No random stock food photography is attached to a dish that did not have a reliable matching official image. This avoids creating a visually attractive but factually misleading menu.

The full alcohol/wine catalogue is broader and more update-sensitive than the subset normalized in the build. Verified cocktails and beer are included; a source link is retained for the wider bar catalogue rather than fabricating or freezing uncertain data.

## Booking

No reliable public reservation API contract was identified during the rebuild. Therefore the UI does **not** show a fake “reservation confirmed” state. The default UI submits to `/api/booking`, an integration-ready server endpoint that only accepts requests when `BOOKING_WEBHOOK_URL` is configured. Until then it clearly reports that online intake is unavailable and offers the restaurant's published phone number.

## Images

The interface uses only imagery associated with the existing restaurant source. Where a verified specific dish/event photograph is unavailable, the design falls back to typography, light, composition and motion rather than unrelated stock photos.

## Recommended CMS mapping

- `MenuCategory`
- `MenuItem`
- `Event`
- `GalleryItem`
- `CorporateEventType`
- `Contact`
- `SiteSettings`

A future CMS should keep `startAt`, `endAt`, `status`, `publishedAt` for events so expired events automatically migrate to archive.
