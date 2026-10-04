"use client";

import { useState } from "react";
import { site } from "@/data/site";

const types = ["Корпоратив", "День рождения", "Private dinner", "Вечеринка", "Презентация", "Другое"];
const steps = ["EVENT", "GUESTS", "DATE", "DETAILS", "CONTACT"];

export function PrivateWizard() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({ type: types[0], guests: "30", date: "", time: "19:00", details: "", name: "", phone: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");
  const next = () => setStep(s => Math.min(steps.length - 1, s + 1));
  const back = () => setStep(s => Math.max(0, s - 1));

  const send = async () => {
    setStatus("sending");
    setMessage("");
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ kind: "private-event", ...data })
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || "Не удалось передать заявку.");
      setStatus("sent");
      setMessage("Заявка передана. Команда ресторана свяжется с вами для обсуждения и подтверждения деталей.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Не удалось передать заявку.");
    }
  };

  return (
    <div className="wizard">
      <div className="wizardProgress" aria-label="Этапы заявки">{steps.map((s,i)=><button key={s} className={i===step?"active":""} onClick={()=>setStep(i)} aria-current={i===step?"step":undefined}><span>{String(i+1).padStart(2,"0")}</span>{s}</button>)}</div>
      <div className="wizardStage">
        {step===0 && <div className="choiceGrid">{types.map(t=><button key={t} className={data.type===t?"selected":""} onClick={()=>setData({...data,type:t})} aria-pressed={data.type===t}>{t}</button>)}</div>}
        {step===1 && <label className="wizardField"><span>СКОЛЬКО ГОСТЕЙ?</span><input type="number" min="2" max="300" value={data.guests} onChange={e=>setData({...data,guests:e.target.value})}/></label>}
        {step===2 && <div className="fieldGrid"><label><span>ДАТА</span><input type="date" value={data.date} onChange={e=>setData({...data,date:e.target.value})}/></label><label><span>ВРЕМЯ</span><input type="time" value={data.time} onChange={e=>setData({...data,time:e.target.value})}/></label></div>}
        {step===3 && <label className="wizardField"><span>ЧТО ВАЖНО УЧЕСТЬ?</span><textarea rows={5} value={data.details} onChange={e=>setData({...data,details:e.target.value})} placeholder="Формат вечера, музыка, рассадка, особые пожелания…"/></label>}
        {step===4 && <div className="fieldGrid"><label><span>ИМЯ</span><input value={data.name} onChange={e=>setData({...data,name:e.target.value})}/></label><label><span>ТЕЛЕФОН</span><input type="tel" value={data.phone} onChange={e=>setData({...data,phone:e.target.value})}/></label></div>}
      </div>
      {message && <p className={status === "error" ? "formError" : "formStatus"} role="status">{message}</p>}
      <div className="wizardActions">
        <button onClick={back} disabled={step===0}>← НАЗАД</button>
        {step<4 ? <button className="primaryAction" onClick={next}>ДАЛЬШЕ →</button> : <button className="primaryAction" onClick={send} disabled={!data.name || !data.phone || !data.date || status === "sending"}>{status === "sending" ? "ОТПРАВЛЯЕМ…" : "ОТПРАВИТЬ ЗАЯВКУ ↗"}</button>}
      </div>
      <p className="microcopy">Это заявка, а не автоматическое подтверждение. Если онлайн-интеграция ещё не подключена, позвоните ресторану: <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>.</p>
    </div>
  );
}
