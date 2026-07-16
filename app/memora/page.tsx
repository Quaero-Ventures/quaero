import Image from "next/image";
import {
  Gift,
  PenLine,
  Ruler,
  ScanLine,
  ShieldCheck,
  Truck,
  WalletCards,
} from "lucide-react";

import { MemoraFooter } from "@/components/memora/memora-footer";
import { MemoraForm } from "@/components/memora/memora-form";
import { MemoraHeader } from "@/components/memora/memora-header";
import { MemoraPageAnalytics } from "@/components/memora/memora-page-analytics";

import styles from "./memora.module.css";

const benefits = [
  { icon: PenLine, label: "Mensagem personalizada" },
  { icon: ScanLine, label: "Gravação frente e verso" },
  { icon: WalletCards, label: "Cabe na carteira" },
  { icon: Ruler, label: "Verso com régua em cm" },
];

const steps = [
  { icon: PenLine, label: "Você escreve" },
  { icon: ScanLine, label: "Nós gravamos" },
  { icon: Gift, label: "Você presenteia" },
];

const lowerBenefits = [
  { icon: Gift, label: "Feito para presentear" },
  { icon: Truck, label: "Frete calculado separadamente" },
  { icon: ShieldCheck, label: "Feito para durar" },
];

export default function MemoraPage() {
  return (
    <div className={styles.page}>
      <MemoraHeader />

      <main>
        <section className={styles.hero} aria-labelledby="memora-title">
          <div className={styles.heroCopy}>
            <h1 id="memora-title" className={styles.heroTitle}>
              Palavras que ficam pra sempre.
            </h1>
            <p className={styles.heroSubtitle}>
              Cartão de metal personalizado para o Dia dos Pais.
            </p>
            <p className={styles.heroDescription}>
              Uma mensagem feita para guardar na carteira e lembrar por muitos anos.
            </p>
            <div className={styles.priceBox} aria-label="Preço: 139 reais e 99 centavos, mais frete">
              <span className={styles.price}>R$ 139,99</span>
              <span className={styles.shipping}>+ frete</span>
            </div>
            <div className={styles.primaryCta}>
              <MemoraPageAnalytics />
            </div>
          </div>
          <div className={styles.heroVisual}>
            <Image
              src="/memora/hero-wallet-card.png"
              alt="Cartão de metal sobre uma carteira de couro, ao lado de uma caixa de presente com laço dourado"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 62vw"
              className={styles.heroImage}
            />
          </div>
        </section>

        <section className={styles.benefitBar} aria-label="Características do cartão">
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
            {steps.map(({ icon: Icon, label }, index) => (
              <li className={styles.step} key={label}>
                <span className={styles.stepNumber}>{index + 1}</span>
                <Icon aria-hidden="true" />
                <p>{label}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.examplesSection} aria-labelledby="examples-title">
          <h2 id="examples-title" className={styles.sectionTitle}>Exemplos</h2>
          <div className={styles.examples}>
            <article className={styles.example}>
              <h3>Frente</h3>
              <div className={`${styles.metalCard} ${styles.cardFront}`}>
                <p className={styles.cardGreeting}>Pai,</p>
                <p>
                  Obrigado por cada conselho,<br />
                  por cada apoio e por acreditar<br />
                  em mim todos os dias.
                </p>
                <p className={styles.signature}>Guilherme</p>
              </div>
            </article>
            <article className={styles.example}>
              <h3>Verso</h3>
              <div className={`${styles.metalCard} ${styles.cardBack}`}>
                <div className={`${styles.ruler} ${styles.centimeters}`} aria-label="Régua superior em centímetros">
                  <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8 cm</span>
                </div>
                <div className={`${styles.ruler} ${styles.inches}`} aria-label="Régua inferior em polegadas">
                  <span>0</span><span>1</span><span>2</span><span>3 in</span>
                </div>
              </div>
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
