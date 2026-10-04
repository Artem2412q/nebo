import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://xn----8sbbobb2a2ad3bd1j.xn--p1ai"),
  title: { default: "Небесный Сад — панорамный ресторан и sound space", template: "%s · Небесный Сад" },
  description: "Панорамный ресторан и sound space на крыше в центре Краснодара: кухня, закаты, события и частные вечера.",
  openGraph: { title: "Небесный Сад", description: "Краснодар остаётся внизу.", type: "website", locale: "ru_RU" },
  twitter: { card: "summary_large_image", title: "Небесный Сад", description: "Panoramic restaurant / rooftop / sound space" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: site.name,
    telephone: site.phoneDisplay,
    address: { "@type": "PostalAddress", streetAddress: "ул. Красная, 72", addressLocality: "Краснодар", addressCountry: "RU" },
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://xn----8sbbobb2a2ad3bd1j.xn--p1ai",
    hasMenu: `${process.env.NEXT_PUBLIC_SITE_URL || "https://xn----8sbbobb2a2ad3bd1j.xn--p1ai"}/menu`,
    acceptsReservations: true
  };
  return (
    <html lang="ru">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
