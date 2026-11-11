import { site } from "./site";

/** URL pública do site. Defina NEXT_PUBLIC_SITE_URL no ambiente de produção. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

/** Dados estruturados (schema.org) — apenas informações confirmadas. */
export const structuredData = {
  "@context": "https://schema.org",
  "@type": "CatholicChurch",
  name: site.name,
  alternateName: site.fullName,
  description: site.description,
  url: siteUrl,
  telephone: site.phone.e164,
  address: {
    "@type": "PostalAddress",
    ...(site.address.street ? { streetAddress: site.address.street } : {}),
    ...(site.address.postalCode ? { postalCode: site.address.postalCode } : {}),
    addressLocality: site.city,
    addressRegion: site.state,
    addressCountry: "BR",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: site.phone.e164,
      contactType: "Secretaria",
      availableLanguage: "pt-BR",
    },
    {
      "@type": "ContactPoint",
      telephone: site.whatsapp.e164,
      contactType: "WhatsApp",
      url: site.whatsapp.href,
      availableLanguage: "pt-BR",
    },
  ],
};
