"use client";

import { FormEvent, useState } from "react";
import { site } from "@/data/site";

type State = "idle" | "sending" | "sent" | "error";

export function BookingForm() {
  const [form, setForm] = useState({ date: "", time: "19:00", guests: "2", name: "", phone: "", comment: "" });
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.date || !form.name || !form.phone) {
      setState("error");
      setMessage("Заполните дату, имя и телефон.");
      return;
    }

    setState("sending");
    setMessage("");
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ kind: "table", ...form })
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || "Не удалось передать заявку.");
      setState("sent");
      setMessage("Заявка передана команде ресторана. Это ещё не подтверждение стола — дождитесь ответа.");
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Не удалось передать заявку.");
    }
  };

  return (
    <form className="bookingForm" onSubmit={submit}>
      <div className="fieldGrid">
        <label><span>01 · Дата</span><input type="date" value={form.date} onChange={e => setForm({...form, date:e.target.value})} required /></label>
        <label><span>02 · Время</span><input type="time" value={form.time} onChange={e => setForm({...form, time:e.target.value})} required /></label>
        <label><span>03 · Гостей</span><input type="number" min="1" max="30" value={form.guests} onChange={e => setForm({...form, guests:e.target.value})} required /></label>
        <label><span>04 · Имя</span><input type="text" value={form.name} onChange={e => setForm({...form, name:e.target.value})} autoComplete="name" required /></label>
        <label className="full"><span>05 · Телефон</span><input type="tel" value={form.phone} onChange={e => setForm({...form, phone:e.target.value})} autoComplete="tel" placeholder="+7 900 000-00-00" required /></label>
        <label className="full"><span>Комментарий</span><textarea value={form.comment} onChange={e => setForm({...form, comment:e.target.value})} rows={3} placeholder="Например: стол у панорамы, день рождения, аллергии" /></label>
      </div>
      <label className="consent"><input type="checkbox" required /> <span>Согласен на обработку данных для связи по заявке. Бронь считается подтверждённой только после ответа ресторана.</span></label>
      {message && <p className={state === "error" ? "formError" : "formStatus"} role="status">{message}</p>}
      <div className="bookingActions">
        <button className="primaryAction" type="submit" disabled={state === "sending"}>{state === "sending" ? "ОТПРАВЛЯЕМ…" : "ОТПРАВИТЬ ЗАЯВКУ ↗"}</button>
        <a className="textAction" href={`tel:${site.phoneHref}`}>ПОЗВОНИТЬ {site.phoneDisplay}</a>
      </div>
    </form>
  );
}
