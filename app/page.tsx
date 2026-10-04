import type { Metadata } from "next";
import Link from "next/link";
import { Intro } from "@/components/Intro";
import { site } from "@/data/site";
import { events } from "@/data/events";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function HomePage() {
  const archive = events[0];
  return (
    <>
      <Intro />
      <section className="hero" style={{"--hero-image": `url(${site.heroImage})`} as React.CSSProperties}>
        <div className="heroShade" />
        <div className="heroTopline"><span>KRASNODAR · 45.035°N</span><span>ROOFTOP / SOUND / FOOD / SUNSETS</span></div>
        <div className="heroTitle"><span>НЕБЕСНЫЙ</span><span className="offset">САД</span></div>
        <div className="heroFoot"><p>Панорамный ресторан и sound space на крыше. Город остаётся внизу.</p><Link href="/book" className="circleCta">BOOK<br/>TABLE ↗</Link></div>
      </section>

      <section className="story storyCity">
        <div className="storyNumber">01</div>
        <p className="storyEyebrow">CITY → HEIGHT</p>
        <h2>КРАСНОДАР<br/><em>ОСТАЁТСЯ ВНИЗУ.</em></h2>
        <p className="storyCopy">Красная, 72. Четвёртый этаж. Панорама, открытая терраса и вечер, который начинается ещё до первого заказа.</p>
      </section>

      <section className="timeScene sunset">
        <div className="timeStamp"><strong>18:42</strong><span>SUNSET</span></div>
        <div className="sceneText"><p>Здесь город встречается с небом.</p><h2>ЗАКАТ<br/>СТАНОВИТСЯ<br/>ЧАСТЬЮ УЖИНА.</h2><Link href="/atmosphere">SEE ATMOSPHERE ↗</Link></div>
      </section>

      <section className="menuTeaser">
        <div className="teaserHead"><span>02 · GASTRONOMY</span><Link href="/menu">ОТКРЫТЬ МЕНЮ ↗</Link></div>
        <div className="menuWord">MENU</div>
        <div className="teaserRow"><p>Не PDF и не фотографии страниц. Реальные позиции собраны в живое digital-меню с категориями, swipe/drag и быстрым возвратом.</p><div className="priceGlyph">₽</div></div>
      </section>

      <section className="eventTeaser">
        <div className="eventPoster">
          <div className="posterDate"><strong>{archive.day}</strong><span>{archive.month}</span></div>
          <div className="posterContent"><span>PAST / ARCHIVE</span><h2>{archive.title}</h2><p>{archive.kicker}</p></div>
          <div className="posterFoot"><span>{archive.time}</span><Link href="/events">EVENT ARCHIVE ↗</Link></div>
        </div>
        <div className="eventAside"><span>03 · SOUND</span><h3>ПОСЛЕ ЗАКАТА<br/>ПРОСТРАНСТВО<br/><em>МЕНЯЕТСЯ.</em></h3><p>Прошедшие события не исчезают: они становятся визуальным архивом истории площадки.</p></div>
      </section>

      <section className="privateTeaser">
        <div><span>04 · PRIVATE</span><h2>НЕ ПРОСТО<br/>КОРПОРАТИВ.<br/><em>ВАШ ВЕЧЕР<br/>НАД ГОРОДОМ.</em></h2></div>
        <div className="privateRight"><p>Закрытые события, дни рождения, банкеты, вечеринки и презентации — с одним понятным concierge-сценарием вместо длинной формы.</p><Link href="/private" className="primaryAction">PRIVATE EVENTS ↗</Link></div>
      </section>

      <section className="locationStrip">
        <div><span>05 · LOCATION</span><h2>КРАСНАЯ, 72<br/>4 ЭТАЖ</h2></div>
        <div><p>{site.phoneDisplay}</p><Link href="/contacts">КОНТАКТЫ И МАРШРУТ ↗</Link></div>
      </section>
    </>
  );
}
