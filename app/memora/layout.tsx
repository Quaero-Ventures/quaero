import type { Metadata } from "next";

import { MemoraMetaPixel } from "@/components/memora/memora-meta-pixel";
import { META_PIXEL_ID } from "@/components/memora/meta-pixel";

export const metadata: Metadata = {
  title: "Memora Presentes | Cartão personalizado para o Dia dos Pais",
  description:
    "Uma mensagem personalizada feita para guardar na carteira e lembrar por muitos anos.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MemoraLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MemoraMetaPixel />
      {children}
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
