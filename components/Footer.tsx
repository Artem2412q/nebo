import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerMark">НЕБЕСНЫЙ САД</div>
      <div className="footerGrid">
        <div>
          <p>{site.address}</p>
          <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>
        </div>
        <div>
          <Link href="/menu">Меню</Link>
          <Link href="/events">Афиша</Link>
          <Link href="/private">Корпоративы</Link>
        </div>
        <div>
          <Link href="/privacy">Конфиденциальность</Link>
          <a href={site.loyaltyUrl} target="_blank" rel="noreferrer">Лояльность · 7% кешбэк ↗</a>
        </div>
      </div>
      <div className="legalLine">
        <span>{site.legal.entity} · ИНН {site.legal.inn} · ОГРН {site.legal.ogrn}</span>
        <span>© {new Date().getFullYear()} Небесный Сад</span>
      </div>
    </footer>
  );
}
