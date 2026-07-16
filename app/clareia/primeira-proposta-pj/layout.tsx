import type { Metadata } from "next";

const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (productionHost ? `https://${productionHost}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Minha Primeira Proposta PJ | Clareia",
  description:
    "Compare sua proposta PJ com seu emprego CLT, descubra o valor de equivalência, os riscos envolvidos e o que perguntar antes de decidir.",
  alternates: {
    canonical: "/clareia/primeira-proposta-pj",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/clareia/primeira-proposta-pj",
    siteName: "Clareia",
    title: "Recebeu sua primeira proposta PJ?",
    description:
      "Receba uma análise personalizada com comparação CLT vs PJ, pontos de atenção e uma mensagem pronta para negociar.",
    images: [
      {
        url: "/clareia/primeira-proposta-pj/og.png",
        width: 1200,
        height: 630,
        alt: "Clareia — Sua proposta PJ, explicada com clareza.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recebeu sua primeira proposta PJ?",
    description:
      "Receba uma análise personalizada com comparação CLT vs PJ, pontos de atenção e uma mensagem pronta para negociar.",
    images: ["/clareia/primeira-proposta-pj/og.png"],
  },
};

export default function ClareiaLandingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
