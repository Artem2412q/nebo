import type { Metadata } from "next";
import { MenuExperience } from "@/components/MenuExperience";
import { site } from "@/data/site";
export const metadata: Metadata = { title: "Меню", description: "Digital-меню Небесного Сада: кухня, напитки, коктейли и бар.", alternates: { canonical: "/menu" } };
export default function MenuPage(){return <>
  <section className="pageHero compact"><p className="eyebrow">GASTRONOMY / DIGITAL CATALOGUE</p><h1>МЕНЮ</h1><div className="pageHeroFoot"><p>Фактические названия, цены и граммовки перенесены из опубликованного меню ресторана.</p><a href={site.menuSourceUrl} target="_blank" rel="noreferrer">ПЕРВОИСТОЧНИК ↗</a></div></section>
  <MenuExperience />
</>}
