export type EventItem = {
  id: string;
  date: string;
  day: string;
  month: string;
  title: string;
  kicker: string;
  time: string;
  age: string;
  price: string;
  description: string;
  lineUp: string[];
  status: "upcoming" | "past";
};

export const events: EventItem[] = [
  {
    id: "deep-house-1909",
    date: "2026-09-19",
    day: "19",
    month: "SEP",
    title: "Нужен #дипхаус",
    kicker: "IDEEP COMMUNITY / OPEN AIR",
    time: "PRE 20:00 · MAIN 23:00–05:00",
    age: "18+ / FC",
    price: "на входе после 22:00 — 1 500 ₽ · с флаером — 1 200 ₽",
    description: "Открытая терраса с панорамным видом, видеоинсталляция, фотозона, репортажная фотосессия и съемка музыкального подкаста.",
    lineUp: ["DJ Ostap", "Clapan", "Sergey Kireev", "Missud", "Elena Litvinenko", "Mass form", "Alexander Svoyanovsky", "Sergey Redkovski", "Digmass", "Orlikov", "Sleney"],
    status: "past"
  }
];
