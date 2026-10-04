import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) return NextResponse.json({ ok: false, error: "Некорректные данные" }, { status: 400 });
  const webhook = process.env.BOOKING_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json({ ok: false, error: "Онлайн-приём заявок ещё не подключён. Позвоните в ресторан по опубликованному номеру." }, { status: 503 });
  }
  const response = await fetch(webhook, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) });
  if (!response.ok) return NextResponse.json({ ok: false, error: "Не удалось передать заявку" }, { status: 502 });
  return NextResponse.json({ ok: true, status: "received", message: "Заявка передана. Ожидайте подтверждение ресторана." }, { status: 202 });
}
