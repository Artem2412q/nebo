import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots { const base=process.env.NEXT_PUBLIC_SITE_URL||"https://xn----8sbbobb2a2ad3bd1j.xn--p1ai"; return {rules:{userAgent:"*",allow:"/"},sitemap:`${base}/sitemap.xml`}; }
