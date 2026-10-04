import type { Metadata } from "next";
import { site } from "@/data/site";
export const metadata: Metadata = { title: "Atmosphere", alternates: { canonical: "/atmosphere" } };
export default function AtmospherePage(){return <>
  <section className="pageHero atmosphereHero"><p className="eyebrow">DAY → GOLDEN HOUR → NIGHT</p><h1>ATMOSPHERE</h1><p className="heroStatement">Один вечер. Три состояния.</p></section>
  <section className="atmosTimeline">
    <article className="atmosCard day" style={{"--scene-image":`url(${site.heroImage})`} as React.CSSProperties}><div><strong>18:42</strong><span>SUNSET</span></div><h2>ВОЗДУХ.<br/>ПАНОРАМА.<br/>ПЕРВЫЙ БОКАЛ.</h2></article>
    <article className="atmosCard dusk" style={{"--scene-image":`url(${site.heroImage})`} as React.CSSProperties}><div><strong>20:16</strong><span>DINNER</span></div><h2>ТЁПЛЫЙ СВЕТ.<br/>ГОРОДСКИЕ ОГНИ.<br/>УЖИН.</h2></article>
    <article className="atmosCard night" style={{"--scene-image":`url(${site.heroImage})`} as React.CSSProperties}><div><strong>23:47</strong><span>SOUND</span></div><h2>РИТМ.<br/>НОЧЬ.<br/>КРЫША.</h2></article>
  </section>
</>}
