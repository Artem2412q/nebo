import type { Metadata } from "next";
import Link from "next/link";
import { events } from "@/data/events";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Афиша",
  description: "События и архив Небесного Сада.",
  alternates: { canonical: "/events" }
};

export default function EventsPage() {
  const upcoming = events.filter(event => event.status === "upcoming");
  const past = events.filter(event => event.status === "past");
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://xn----8sbbobb2a2ad3bd1j.xn--p1ai";
  const eventSchemas = past.map(event => ({
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    startDate: `${event.date}T20:00:00+03:00`,
    endDate: "2026-09-20T05:00:00+03:00",
    eventStatus: "https://schema.org/EventCompleted",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: site.name,
      address: site.address
    },
    url: `${base}/events`
  }));

  return <>
    {eventSchemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
    <section className="pageHero eventsHero">
      <p className="eyebrow">EVENTS / SOUND / NIGHT</p>
      <h1>АФИША</h1>
      <p className="heroStatement">Не карточки. Цифровые афиши.</p>
    </section>

    <section className="eventsSection">
      <div className="sectionHeader"><span>UPCOMING</span><strong>{String(upcoming.length).padStart(2,"0")}</strong></div>
      {upcoming.length === 0 && <div className="emptyState">
        <h2>БЛИЖАЙШИЕ СОБЫТИЯ<br/>ПОКА НЕ ОПУБЛИКОВАНЫ.</h2>
        <p>Мы не подставляем сторонние или неподтверждённые события вместо официальной афиши.</p>
        <Link href="/book">ЗАБРОНИРОВАТЬ ОБЫЧНЫЙ ВЕЧЕР ↗</Link>
      </div>}
    </section>

    <section className="eventsSection archive">
      <div className="sectionHeader"><span>PAST / ARCHIVE</span><strong>{String(past.length).padStart(2,"0")}</strong></div>
      {past.map(event => <article className="fullPoster" key={event.id}>
        <div className="posterBigDate"><strong>{event.day}</strong><span>{event.month}</span></div>
        <div className="posterMain">
          <p>{event.kicker}</p>
          <h2>{event.title}</h2>
          <div className="posterDetails"><span>{event.time}</span><span>{event.age}</span><span>{event.price}</span></div>
          <p className="posterDescription">{event.description}</p>
          <div className="lineup">{event.lineUp.map(name => <span key={name}>{name}</span>)}</div>
        </div>
        <Link href="/book" className="circleCta">BOOK<br/>TABLE ↗</Link>
      </article>)}
    </section>
  </>;
}
