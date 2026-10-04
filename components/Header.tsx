"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  ["Ресторан", "/"],
  ["Меню", "/menu"],
  ["Афиша", "/events"],
  ["Private", "/private"],
  ["Atmosphere", "/atmosphere"],
  ["Контакты", "/contacts"]
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header className="siteHeader">
        <Link href="/" className="wordmark" aria-label="Небесный Сад — главная">
          <span>НЕБЕСНЫЙ</span><span>САД</span>
        </Link>
        <nav className="desktopNav" aria-label="Основная навигация">
          <Link href="/menu">MENU</Link>
          <Link href="/events">EVENTS</Link>
          <Link href="/private">PRIVATE</Link>
          <Link href="/contacts">CONTACTS</Link>
        </nav>
        <div className="headerActions">
          <Link className="bookPill" href="/book">BOOK A TABLE</Link>
          <button className="menuToggle" onClick={() => setOpen(true)} aria-label="Открыть меню" aria-expanded={open}>MENU</button>
        </div>
      </header>

      <div className={`menuOverlay ${open ? "isOpen" : ""}`} aria-hidden={!open}>
        <div className="menuOverlayTop">
          <span className="eyebrow">Krasnodar · Krasnaya 72 · 4 floor</span>
          <button onClick={() => setOpen(false)} aria-label="Закрыть меню">CLOSE ×</button>
        </div>
        <nav className="overlayNav" aria-label="Полноэкранное меню">
          {links.map(([label, href], index) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              <span>{String(index + 1).padStart(2, "0")}</span>{label}
            </Link>
          ))}
        </nav>
        <div className="overlayFoot">PANORAMIC RESTAURANT / ROOFTOP / SOUND SPACE</div>
      </div>
      <Link href="/book" className="mobileBook">ЗАБРОНИРОВАТЬ</Link>
    </>
  );
}
