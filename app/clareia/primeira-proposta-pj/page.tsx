import {
  ArrowRight,
  Check,
  CircleUserRound,
  ClipboardCheck,
  FileSearch,
  FileText,
  Info,
  LockKeyhole,
  MailCheck,
  MessageCircleQuestion,
  Search,
  ShieldCheck,
  X,
} from "lucide-react";

import { CHECKOUT_EVENT, isExternalPaymentUrl, PAYMENT_URL } from "./config";
import styles from "./primeira-proposta-pj.module.css";

const steps = [
  {
    icon: FileText,
    title: "Você preenche o formulário",
    text: "Conte sobre seu emprego atual e a proposta recebida.",
  },
  {
    icon: Search,
    title: "Analisamos seu caso",
    text: "Comparamos valores, benefícios, riscos e informações ausentes.",
  },
  {
    icon: ClipboardCheck,
    title: "Preparamos seu relatório",
    text: "A análise é produzida manualmente para o seu cenário.",
  },
  {
    icon: MailCheck,
    title: "Você recebe em até 24h úteis",
    text: "O relatório é enviado em PDF para o seu e-mail.",
  },
];

const reportItems = [
  "Comparação estimada entre CLT e PJ",
  "Valores anuais dos dois cenários",
  "Equivalência PJ para a mudança valer a pena",
  "Margem escolhida para o risco valer",
  "Benefícios e proteções que você deixará de ter",
  "Custos que passarão a ser seus",
  "Pontos desconhecidos ou mal definidos",
  "Perguntas sugeridas para a empresa",
  "Faixa sugerida para contraproposta",
  "Mensagem pronta para esclarecer, negociar ou recusar",
];

const unsuitableFor = [
  "Freelancers ou autônomos",
  "Contratos por projeto fechado",
  "Pagamento em moeda estrangeira",
  "Propostas por hora ou diária",
  "Casos tributários muito específicos",
];

const reportRows = [
  ["Cenário CLT anual", "R$ 103.780"],
  ["Cenário PJ anual", "R$ 128.240"],
  ["Diferença anual", "R$ 24.460"],
  ["Equivalência PJ mensal", "R$ 10.875"],
  ["Margem escolhida", "20%"],
];

type CheckoutLinkProps = {
  location: "hero" | "pricing";
  className: string;
  children: React.ReactNode;
};

function CheckoutLink({ location, className, children }: CheckoutLinkProps) {
  const external = isExternalPaymentUrl(PAYMENT_URL);

  return (
    <a
      href={PAYMENT_URL}
      className={className}
      data-event={CHECKOUT_EVENT}
      data-location={location}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

function ReportPreview({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`${styles.report} ${compact ? styles.reportCompact : ""}`}>
      <div className={styles.reportBrand}>
        <span className={styles.brandSpark} aria-hidden="true" />
        Clareia
      </div>
      <div className={styles.reportHeading}>
        <p>Análise personalizada</p>
        <strong>CLT <span>vs</span> PJ</strong>
        <small>Comparação, cenários e recomendações</small>
      </div>
      <div className={styles.reportLabel}>Resumo executivo</div>
      <dl className={styles.reportTable}>
        {reportRows.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
      <div className={styles.chartTitle}>Visão geral</div>
      <div className={styles.chart} aria-label="Gráfico ilustrativo comparando os valores anuais CLT e PJ">
        <div className={styles.chartColumn}>
          <span>R$ 103.780</span>
          <i className={styles.cltBar} />
          <small>CLT (anual)</small>
        </div>
        <div className={styles.chartColumn}>
          <span>R$ 128.240</span>
          <i className={styles.pjBar} />
          <small>PJ (anual)</small>
        </div>
      </div>
      <p className={styles.illustrativeNote}>Dados meramente ilustrativos</p>
    </div>
  );
}

function ClareiaHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a className={styles.brand} href="#inicio" aria-label="Clareia — início da página">
          <span className={styles.wordmark}>Clareia<span aria-hidden="true">.</span></span>
          <span className={styles.tagline}>Decisões complicadas,<br />explicadas com clareza.</span>
        </a>
        <span className={styles.betaBadge}>Beta limitada</span>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-title">
      <div className={`${styles.container} ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Minha primeira proposta PJ</p>
          <h1 id="hero-title">Sua próxima decisão merece clareza.</h1>
          <p className={styles.lead}>
            Entenda se a proposta PJ realmente compensa, quais riscos você assume e o que
            precisa esclarecer antes de aceitar.
          </p>
          <p className={styles.supportingCopy}>
            Você recebe uma análise personalizada comparando seu emprego CLT atual com a
            proposta PJ, além de perguntas e uma mensagem pronta para negociar.
          </p>
          <div className={styles.heroAction}>
            <CheckoutLink location="hero" className={styles.primaryButton}>
              Quero minha análise <ArrowRight aria-hidden="true" />
            </CheckoutLink>
            <span>Pagamento único de <strong>R$39</strong></span>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <span className={`${styles.questionBubble} ${styles.bubbleOne}`}>
            <ShieldCheck aria-hidden="true" /> Vale a pena?
          </span>
          <span className={`${styles.questionBubble} ${styles.bubbleTwo}`}>
            <MessageCircleQuestion aria-hidden="true" /> O que perguntar?
          </span>
          <ReportPreview />
        </div>
      </div>
    </section>
  );
}

function ProcessSteps() {
  return (
    <section className={`${styles.section} ${styles.processSection}`} aria-labelledby="process-title">
      <div className={styles.container}>
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>Simples do início ao fim</p>
          <h2 id="process-title">Como funciona</h2>
        </div>
        <ol className={styles.steps}>
          {steps.map(({ icon: Icon, title, text }, index) => (
            <li key={title} className={styles.step}>
              <span className={styles.stepNumber}>{index + 1}</span>
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
              {index < steps.length - 1 && <ArrowRight className={styles.stepArrow} aria-hidden="true" />}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ReportContents() {
  return (
    <section className={styles.section} aria-labelledby="contents-title">
      <div className={`${styles.container} ${styles.contentsCard}`}>
        <div className={styles.contentsCopy}>
          <p className={styles.eyebrow}>Feito para o seu caso</p>
          <h2 id="contents-title">Seu relatório inclui</h2>
          <ul className={styles.checkList}>
            {reportItems.map((item) => (
              <li key={item}><Check aria-hidden="true" /><span>{item}</span></li>
            ))}
          </ul>
        </div>
        <div className={styles.reportShowcase}>
          <div className={styles.pdfLabel}><FileText aria-hidden="true" /> Relatório personalizado em PDF</div>
          <ReportPreview compact />
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section className={`${styles.section} ${styles.audienceSection}`} aria-labelledby="audience-title">
      <div className={`${styles.container} ${styles.audienceGrid}`}>
        <article className={styles.audienceCard}>
          <CircleUserRound aria-hidden="true" />
          <div>
            <h2 id="audience-title">Para quem é este serviço</h2>
            <p>Principalmente para quem trabalha como CLT e recebeu sua primeira proposta PJ com valor mensal fixo em reais.</p>
            <p className={styles.muted}>Também podemos analisar propostas de pessoas desempregadas, mas sem comparação com um emprego CLT atual.</p>
          </div>
        </article>
        <article className={`${styles.audienceCard} ${styles.notForCard}`}>
          <FileSearch aria-hidden="true" />
          <div>
            <h2>Esta beta não é indicada para</h2>
            <ul>
              {unsuitableFor.map((item) => <li key={item}><X aria-hidden="true" />{item}</li>)}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}

function PricingCard() {
  return (
    <section className={styles.pricingSection} aria-labelledby="pricing-title">
      <div className={`${styles.container} ${styles.pricingCard}`}>
        <div className={styles.priceBlock}>
          <p className={styles.eyebrow}>Oferta beta</p>
          <h2 id="pricing-title"><sup>R$</sup>39</h2>
          <span>Pagamento único</span>
        </div>
        <div className={styles.pricingAction}>
          <CheckoutLink location="pricing" className={styles.primaryButton}>
            Quero minha análise <ArrowRight aria-hidden="true" />
          </CheckoutLink>
          <p><LockKeyhole aria-hidden="true" /> Pagamento seguro por link externo.</p>
          <p><MailCheck aria-hidden="true" /> Entrega em até 24 horas úteis após o preenchimento completo do formulário.</p>
        </div>
      </div>
    </section>
  );
}

function DisclaimerSection() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.disclaimer}`}>
        <Info aria-hidden="true" />
        <div>
          <h2>Importante</h2>
          <p>A análise é baseada nas informações fornecidas e utiliza estimativas. Ela não substitui orientação contábil, jurídica ou financeira.</p>
          <p>Não diremos se você deve aceitar ou rejeitar a proposta. O objetivo é apresentar uma comparação clara, os principais riscos e as perguntas que ainda precisam ser respondidas.</p>
        </div>
      </div>
      <div className={`${styles.container} ${styles.footerNote}`}>Clareia, um experimento da Quaero.</div>
    </footer>
  );
}

export default function PrimeiraPropostaPjPage() {
  return (
    <div className={styles.page} lang="pt-BR">
      <ClareiaHeader />
      <main>
        <HeroSection />
        <ProcessSteps />
        <ReportContents />
        <AudienceSection />
        <PricingCard />
      </main>
      <DisclaimerSection />
    </div>
  );
}
