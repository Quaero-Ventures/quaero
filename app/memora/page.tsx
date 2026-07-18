import Image from "next/image";
import {
  Camera,
  CreditCard,
  Heart,
  ImageIcon,
  PenLine,
  ScanLine,
  ShieldCheck,
  Truck,
} from "lucide-react";

import { MemoraFooter } from "@/components/memora/memora-footer";
import { MemoraForm } from "@/components/memora/memora-form";
import { MemoraHeader } from "@/components/memora/memora-header";
import { MemoraPageAnalytics } from "@/components/memora/memora-page-analytics";

import styles from "./memora.module.css";

const benefits = [
  { icon: PenLine, label: "Traço original" },
  { icon: ImageIcon, label: "Desenho gravado no cartão" },
  { icon: CreditCard, label: "Cabe na carteira" },
  { icon: ShieldCheck, label: "Feito para durar" },
];

const steps = [
  {
    icon: PenLine,
    label: "A criança escreve ou desenha",
    description: "Pode ser uma mensagem, assinatura ou desenho.",
  },
  {
    icon: Camera,
    label: "Você envia uma foto",
    description: "Basta fotografar o papel com boa luz.",
  },
  {
    icon: ScanLine,
    label: "Nós gravamos o traço no cartão",
    description: "Preservamos a escrita e o desenho originais.",
  },
];

const lowerBenefits = [
  { icon: Heart, label: "Uma lembrança única" },
  { icon: Truck, label: "Frete calculado separadamente" },
  { icon: ShieldCheck, label: "Feito para guardar por muitos anos" },
];

export default function MemoraPage() {
  return (
    <div className={styles.page}>
      <MemoraHeader />

      <main>
        <section className={styles.hero} aria-labelledby="memora-title">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>O traço real, preservado em metal</p>
            <h1 id="memora-title" className={styles.heroTitle}>
              A letra do seu filho, guardada para sempre.
            </h1>
            <p className={styles.heroSubtitle}>
              Envie uma foto da mensagem ou do desenho. Nós transformamos o traço
              original em uma gravação no cartão.
            </p>
            <p className={styles.heroDescription}>
              Uma lembrança feita pela criança para o pai guardar por muitos anos.
            </p>
            <div className={styles.heroActionRow}>
              <div
                className={styles.priceBox}
                aria-label="Preço: 139 reais e 99 centavos, mais frete"
              >
                <span className={styles.price}>R$ 139,99</span>
                <span className={styles.shipping}>+ frete</span>
              </div>
              <div className={styles.primaryCta}>
                <MemoraPageAnalytics />
              </div>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <Image
              src="/memora/hero-original-trace.webp"
              alt="Mãe ajuda a filha a desenhar a família no papel enquanto o pai segura um cartão de metal com o mesmo desenho gravado"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 55vw"
              className={styles.heroImage}
            />
            <span className={styles.heroVisualCaption}>Do papel ao cartão</span>
          </div>
        </section>

        <section className={styles.benefitBar} aria-label="Diferenciais do cartão">
          <div className={styles.benefitGrid}>
            {benefits.map(({ icon: Icon, label }) => (
              <div className={styles.benefitItem} key={label}>
                <Icon aria-hidden="true" />
                <p>{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="how-title">
          <h2 id="how-title" className={styles.sectionTitle}>Como funciona</h2>
          <ol className={styles.steps}>
            {steps.map(({ icon: Icon, label, description }, index) => (
              <li className={styles.step} key={label}>
                <span className={styles.stepNumber}>{index + 1}</span>
                <Icon aria-hidden="true" />
                <h3>{label}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.examplesSection} aria-labelledby="examples-title">
          <h2 id="examples-title" className={styles.sectionTitle}>
            O traço continua sendo dela
          </h2>
          <p className={styles.sectionIntro}>
            A mesma escrita, o mesmo desenho e as mesmas imperfeições — agora
            preservados em metal.
          </p>
          <div className={styles.examples}>
            <article className={styles.example}>
              <div className={styles.exampleLabels} aria-hidden="true">
                <span>Original</span>
                <span>Gravado no cartão</span>
              </div>
              <Image
                src="/memora/example-handwriting.webp"
                alt="Comparação entre a frase infantil Te amo, papai, assinada por Sofia no papel, e a mesma escrita gravada em um cartão de metal"
                width={1536}
                height={1024}
                sizes="(max-width: 767px) 100vw, 50vw"
                className={styles.exampleImage}
              />
            </article>
            <article className={styles.example}>
              <div className={styles.exampleLabels} aria-hidden="true">
                <span>Original</span>
                <span>Gravado no cartão</span>
              </div>
              <Image
                src="/memora/example-drawing.webp"
                alt="Comparação entre um desenho infantil de pai, mãe, criança e coração assinado por Lucas, e o mesmo desenho gravado em um cartão de metal"
                width={1536}
                height={1024}
                sizes="(max-width: 767px) 100vw, 50vw"
                className={styles.exampleImage}
              />
            </article>
          </div>
        </section>

        <MemoraForm />

        <section className={`${styles.benefitBar} ${styles.lowerBar}`} aria-label="Informações adicionais">
          <div className={styles.lowerBenefitGrid}>
            {lowerBenefits.map(({ icon: Icon, label }) => (
              <div className={styles.lowerBenefit} key={label}>
                <Icon aria-hidden="true" />
                <p>{label}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <MemoraFooter />
    </div>
  );
}
