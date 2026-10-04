import type { Metadata } from "next";
import { PrivateWizard } from "@/components/PrivateWizard";
export const metadata: Metadata = { title: "Private Events", description: "Корпоративы, дни рождения и частные события в Небесном Саду.", alternates: { canonical: "/private" } };
export default function PrivatePage(){return <>
  <section className="pageHero privateHero"><p className="eyebrow">EVENTS & PRIVATE</p><h1>НЕ ПРОСТО<br/>КОРПОРАТИВ.</h1><p className="heroStatement">Ваш вечер над городом.</p></section>
  <section className="privateStory"><div className="stickyWord">PRIVATE</div><div className="privateChapters"><article><span>01</span><h2>ПАНОРАМА</h2><p>Пространство на крыше в центре Краснодара — вид становится частью сценария вечера.</p></article><article><span>02</span><h2>КУХНЯ + БАР</h2><p>Ресторанный формат, барная карта и обслуживание остаются внутри одного пространства.</p></article><article><span>03</span><h2>SOUND</h2><p>Площадка позиционируется как sound space и регулярно работает с музыкальными событиями.</p></article><article><span>04</span><h2>ВАШ ФОРМАТ</h2><p>Корпоратив, день рождения, банкет, вечеринка, презентация или закрытый ужин.</p></article></div></section>
  <section className="wizardSection"><div className="wizardIntro"><span>CONCIERGE REQUEST</span><h2>СОЗДАДИМ<br/>ВАШ ВЕЧЕР?</h2><p>Пять коротких шагов. Никаких лишних полей.</p></div><PrivateWizard/></section>
</>}
