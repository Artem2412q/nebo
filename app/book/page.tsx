import type { Metadata } from "next";
import { BookingForm } from "@/components/BookingForm";
export const metadata: Metadata = { title: "Бронирование", alternates: { canonical: "/book" } };
export default function BookPage(){return <section className="bookingPage"><div className="bookingIntro"><p className="eyebrow">TABLE RESERVATION</p><h1>ВАШ ВЕЧЕР<br/>НАЧИНАЕТСЯ<br/>ЗДЕСЬ.</h1><p>Заполните детали. Заявка уйдёт в официальный канал связи; стол считается забронированным только после подтверждения ресторана.</p></div><BookingForm/></section>}
