"use client";

import { KeyboardEvent, PointerEvent, WheelEvent, useMemo, useRef, useState } from "react";
import { MenuItem, menuSections, barNote } from "@/data/menu";
import { site } from "@/data/site";

export function MenuExperience() {
  const [active, setActive] = useState(menuSections[0].id);
  const [selected, setSelected] = useState<MenuItem | null>(null);
  const rail = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, x: 0, scroll: 0 });
  const section = useMemo(() => menuSections.find(item => item.id === active) ?? menuSections[0], [active]);

  const move = (direction: 1 | -1) => {
    rail.current?.scrollBy({ left: direction * Math.min(window.innerWidth * .68, 760), behavior: "smooth" });
  };

  const onWheel = (event: WheelEvent<HTMLDivElement>) => {
    const element = event.currentTarget;
    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
    const goingRight = event.deltaY > 0;
    const atStart = element.scrollLeft <= 0;
    const atEnd = Math.ceil(element.scrollLeft + element.clientWidth) >= element.scrollWidth;
    if ((goingRight && !atEnd) || (!goingRight && !atStart)) {
      event.preventDefault();
      element.scrollLeft += event.deltaY;
    }
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
    if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch" || (event.target as HTMLElement).closest("button, a")) return;
    drag.current = { active: true, x: event.clientX, scroll: event.currentTarget.scrollLeft };
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!drag.current.active || event.pointerType === "touch") return;
    event.currentTarget.scrollLeft = drag.current.scroll - (event.clientX - drag.current.x);
  };
  const endDrag = () => { drag.current.active = false; };

  return (
    <div className="menuExperience">
      <div className="categoryRail" role="tablist" aria-label="Категории меню">
        {menuSections.map(item => (
          <button key={item.id} role="tab" aria-selected={active === item.id} className={active === item.id ? "active" : ""} onClick={() => setActive(item.id)}>{item.title}</button>
        ))}
      </div>
      <div className="menuMeta">
        <div><span>Категория</span><strong>{section.title}</strong></div>
        <div><span>Позиций</span><strong>{String(section.items.length).padStart(2, "0")}</strong></div>
        <div className="menuArrows"><button onClick={() => move(-1)} aria-label="Назад">←</button><button onClick={() => move(1)} aria-label="Вперед">→</button></div>
      </div>
      <div
        className="dishRail"
        key={section.id}
        ref={rail}
        tabIndex={0}
        aria-label={`Блюда: ${section.title}`}
        onWheel={onWheel}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        {section.items.map((item, index) => (
          <article className="dishCard" key={`${section.id}-${item.name}`}>
            <div className="dishIndex">{String(index + 1).padStart(2, "0")}</div>
            <div className="dishGlow" aria-hidden="true" />
            <div className="dishBody">
              <p className="eyebrow">НЕБЕСНЫЙ САД · {section.title.toUpperCase()}</p>
              <h2>{item.name}</h2>
              {item.description && <p className="dishDescription">{item.description}</p>}
              <div className="dishBottom"><span>{item.weight ?? "—"}</span><strong>{item.price}</strong></div>
              <button className="dishOpen" type="button" onClick={() => setSelected(item)}>ОТКРЫТЬ ПОЗИЦИЮ ↗</button>
            </div>
          </article>
        ))}
      </div>
      {(["cocktails", "beer", "wine"].includes(active)) && (
        <aside className="sourceNote"><p>{barNote}</p><a href={site.menuSourceUrl} target="_blank" rel="noreferrer">Открыть полную исходную барную карту ↗</a></aside>
      )}

      {selected && <div className="dishModal" role="dialog" aria-modal="true" aria-label={selected.name} onClick={() => setSelected(null)}>
        <div className="dishModalInner" onClick={event => event.stopPropagation()}>
          <button className="dishModalClose" type="button" onClick={() => setSelected(null)}>CLOSE ×</button>
          <p className="eyebrow">{section.title}</p>
          <h2>{selected.name}</h2>
          {selected.description && <p>{selected.description}</p>}
          <div className="dishModalMeta"><span>{selected.weight ?? "—"}</span><strong>{selected.price}</strong></div>
        </div>
      </div>}
    </div>
  );
}
