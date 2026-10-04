import type { Metadata } from "next";
export const metadata: Metadata = { title: "О ресторане", alternates: { canonical: "/about" } };
export default function AboutPage(){return <section className="pageHero longCopy"><p className="eyebrow">ABOUT / SKY ABOVE THE CITY</p><h1>НЕБЕСНЫЙ<br/>САД</h1><div className="aboutGrid"><p>Видовой sound space на крыше: панорама города, открытая терраса, кухня, бар и музыкальные события.</p><p>Новый сайт не пытается превратить название в буквальные облака и звёзды. Его язык — высота, воздух, свет, отражения, золотой час и ночь.</p></div></section>}
