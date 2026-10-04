import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";
export const metadata: Metadata = { title: "Контакты", alternates: { canonical: "/contacts" } };
export default function ContactsPage(){return <>
  <section className="pageHero contactsHero"><p className="eyebrow">LOCATION / KRASNODAR</p><h1>КРАСНАЯ,<br/>72</h1><p className="heroStatement">4 этаж · Центральный округ</p></section>
  <section className="contactGrid"><div><span>CALL</span><a className="bigContact" href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a></div><div><span>ROUTE</span><a className="bigContact" href={site.mapUrl} target="_blank" rel="noreferrer">ОТКРЫТЬ В 2ГИС ↗</a></div><div><span>BOOK</span><Link className="bigContact" href="/book">ЗАБРОНИРОВАТЬ ↗</Link></div><div><span>LOYALTY</span><a className="bigContact" href={site.loyaltyUrl} target="_blank" rel="noreferrer">7% КЕШБЭК ↗</a></div></section>
  <section className="legalContact"><p>{site.legal.entity}</p><p>ИНН {site.legal.inn} · ОГРН {site.legal.ogrn}</p><p>{site.legal.address}</p></section>
</>}
