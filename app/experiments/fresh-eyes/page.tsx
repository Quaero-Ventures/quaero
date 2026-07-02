import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  CircleHelp,
  Eye,
  FileSearch,
  Lightbulb,
  Play,
  PlayCircle,
  Radio,
  Users,
  Volume2,
} from "lucide-react";

import { ValidateCta } from "@/components/validate-analytics";

const participants = [
  {
    label: "Participante 1",
    quote: "Não sei por onde começar.",
    timestamp: "00:15",
    className: "lg:-rotate-1",
  },
  {
    label: "Participante 2",
    quote: "Achei que isso fazia outra coisa.",
    timestamp: "00:42",
    className: "lg:translate-x-6 lg:rotate-1",
  },
  {
    label: "Participante 3",
    quote: "Cadê o próximo passo?",
    timestamp: "00:31",
    className: "lg:-translate-x-2 lg:-rotate-1",
  },
];

const featureStrip = [
  { icon: Users, label: "5 usuários reais" },
  { icon: PlayCircle, label: "primeira sessão" },
  { icon: Volume2, label: "vídeo + áudio" },
  { icon: FileSearch, label: "relatório claro" },
];

const processSteps = [
  {
    title: "Colocamos usuários diante do produto",
    body: "Cinco pessoas abrem sua página, demo ou fluxo pela primeira vez, sem explicação longa e sem roteiro que entregue a resposta.",
  },
  {
    title: "Registramos dúvida, fricção e abandono",
    body: "Marcamos hesitações, cliques perdidos, falsas expectativas e momentos em que a pessoa deixa de entender o próximo passo.",
  },
  {
    title: "Entregamos o Fresh Eyes Report",
    body: "Você recebe padrões de comportamento, evidências e recomendações para decidir o próximo experimento.",
  },
];

const deliverables = [
  "Gravações ou anotações das sessões",
  "Padrões de dúvida, fricção e abandono",
  "Principais descobertas",
  "Recomendações para a próxima decisão",
];

const examples = [
  "Landing pages antes de comprar tráfego",
  "Onboarding antes de mexer em retenção",
  "MVPs antes de apresentar para clientes",
  "Demos antes de vender para leads quentes",
  "Reposicionamento antes de trocar toda a copy",
  "Protótipos antes de virar backlog",
];

const faqs = [
  {
    question: "Isso é entrevista ou teste de usabilidade?",
    answer:
      "É uma sessão de primeira impressão. A conversa existe quando ajuda, mas o foco é observar o que a pessoa faz quando encontra o produto pela primeira vez.",
  },
  {
    question: "Preciso ter produto pronto?",
    answer:
      "Não. Funciona com landing page, protótipo, demo, fluxo clicável ou MVP simples. O importante é existir algo que um usuário consiga abrir e tentar entender.",
  },
  {
    question: "O relatório traz recomendações?",
    answer:
      "Sim. O Fresh Eyes Report separa evidência observada, padrões de fricção, risco de abandono e próximos ajustes que valem um experimento.",
  },
];

export const metadata: Metadata = {
  title: "Fresh Eyes | Relatório de primeira impressão",
  description:
    "Veja 5 usuários reais usando seu produto pela primeira vez e receba um Fresh Eyes Report com padrões de comportamento, fricção e abandono.",
};

function LogoMark() {
  return (
    <div
      aria-hidden="true"
      className="relative grid h-11 w-11 place-items-center rounded-full bg-[#111111]"
    >
      <div className="h-5 w-5 rounded-full bg-[#F6EFE3]" />
      <div className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-[#111111]" />
      <div className="absolute bottom-1.5 right-0 h-2 w-2 rounded-full bg-[#E5483F]" />
    </div>
  );
}

function ParticipantCard({
  className,
  label,
  quote,
  timestamp,
}: {
  className: string;
  label: string;
  quote: string;
  timestamp: string;
}) {
  return (
    <article
      className={`relative overflow-hidden border border-[#D8CDBD] bg-[#FFF8EA] p-3 shadow-[0_14px_30px_rgba(17,17,17,0.12)] ${className}`}
    >
      <div className="grid gap-4 sm:grid-cols-[160px_1fr]">
        <div className="relative aspect-video overflow-hidden border border-[#111111]/15 bg-[#2E2A26]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,#d9ad91_0_13%,transparent_14%),radial-gradient(circle_at_50%_66%,#111111_0_23%,transparent_24%),linear-gradient(135deg,rgba(255,248,234,0.16),transparent_55%)]" />
          <div className="absolute left-3 top-3 flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-wide text-[#FFF8EA]">
            <span className="h-2 w-2 rounded-full bg-[#E5483F]" />
            REC
          </div>
          <div className="absolute inset-0 grid place-items-center">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-[#FFF8EA]/90 text-[#111111]">
              <Play aria-hidden="true" className="h-5 w-5 fill-[#111111]" />
            </div>
          </div>
          <div className="absolute bottom-3 right-3 bg-[#111111]/75 px-2 py-1 font-mono text-xs text-[#FFF8EA]">
            {timestamp}
          </div>
        </div>
        <div className="flex min-h-32 flex-col justify-between py-1">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#E5483F]">
            {label}
          </p>
          <p className="mt-5 font-serif text-2xl italic leading-snug text-[#111111]">
            &ldquo;{quote}&rdquo;
          </p>
          <p className="mt-5 font-mono text-xs uppercase tracking-wide text-[#5F5A52]">
            primeira sessão
          </p>
        </div>
      </div>
    </article>
  );
}

function ParticipantStack() {
  return (
    <div className="relative space-y-4 lg:pt-3">
      {participants.map((participant) => (
        <ParticipantCard key={participant.timestamp} {...participant} />
      ))}
      <div className="border-l-2 border-[#E5483F] bg-[#FFF8EA] p-5 shadow-[0_10px_26px_rgba(17,17,17,0.08)]">
        <p className="font-serif text-2xl italic leading-tight text-[#111111] sm:text-3xl">
          A primeira sessão revela o que a copy ainda não conseguiu explicar.
        </p>
      </div>
    </div>
  );
}

function FeatureStrip() {
  return (
    <div className="grid grid-cols-2 border-y border-[#D8CDBD] md:grid-cols-4">
      {featureStrip.map((feature) => {
        const Icon = feature.icon;

        return (
          <div
            key={feature.label}
            className="flex min-h-24 flex-col items-center justify-center gap-2 border-[#D8CDBD] px-4 py-4 text-center md:border-r md:last:border-r-0"
          >
            <Icon aria-hidden="true" className="h-6 w-6 text-[#111111]" />
            <span className="text-sm font-medium text-[#111111]">{feature.label}</span>
          </div>
        );
      })}
    </div>
  );
}

export default function FreshEyesPage() {
  return (
    <main className="min-h-screen bg-[#F6EFE3] text-[#111111] [background-image:radial-gradient(rgba(17,17,17,0.055)_0.8px,transparent_0.8px)] [background-size:6px_6px]">
      <header className="mx-auto max-w-[1500px] px-6 pt-8 lg:px-10">
        <nav className="flex items-center justify-between border-b border-[#D8CDBD] pb-6">
          <Link href="/experiments/fresh-eyes" className="flex items-center gap-4">
            <LogoMark />
            <span className="text-2xl font-black uppercase tracking-tight">
              Fresh Eyes
            </span>
          </Link>
          <div className="hidden items-center gap-12 text-lg font-medium lg:flex">
            <a href="#como-funciona" className="hover:text-[#E5483F]">
              Como funciona
            </a>
            <a href="#o-que-voce-recebe" className="hover:text-[#E5483F]">
              O que recebe
            </a>
            <a href="#faq" className="hover:text-[#E5483F]">
              FAQ
            </a>
          </div>
          <ValidateCta
            label="Quero meu relatório"
            source="nav"
            className="hidden rounded-sm border-[#111111] bg-[#111111] px-7 text-base text-[#FFF8EA] hover:bg-[#2A2A2A] sm:inline-flex"
          />
        </nav>
      </header>

      <section className="mx-auto grid max-w-[1500px] gap-12 px-6 py-12 lg:grid-cols-[0.86fr_1fr] lg:items-start lg:px-10 lg:py-16">
        <div className="flex flex-col justify-between">
          <div>
            <p className="mb-7 flex items-center gap-4 font-mono text-sm font-semibold uppercase tracking-wide text-[#E5483F]">
              <span className="h-3 w-3 rounded-full bg-[#E5483F]" />
              Primeira impressão
            </p>
            <h1 className="max-w-[700px] font-serif text-6xl font-semibold leading-[0.95] tracking-tight sm:text-7xl xl:text-[5.2rem]">
              A verdade está no que eles{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#111111]">fazem</span>
                <span
                  aria-hidden="true"
                  className="absolute bottom-1 left-0 h-5 w-full -rotate-2 bg-[#F5D547]"
                />
              </span>
              , não no que dizem.
            </h1>
            <p className="mt-7 max-w-[620px] text-xl leading-8 text-[#111111]">
              Veja 5 usuários reais usando seu produto pela primeira vez.
              Descubra exatamente onde eles hesitam, se confundem e desistem.
            </p>
            <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center">
              <ValidateCta
                label="Quero meu relatório de primeira impressão"
                source="hero"
                className="h-auto min-h-12 w-full whitespace-normal rounded-sm border-[#E5483F] bg-[#E5483F] px-7 py-3 text-center text-base leading-6 text-white shadow-[0_10px_22px_rgba(229,72,63,0.24)] hover:bg-[#C9352D] sm:w-auto"
              />
              <a
                href="#como-funciona"
                className="inline-flex items-center gap-3 border-b border-[#111111] pb-1 text-lg font-semibold text-[#111111] hover:text-[#E5483F]"
              >
                Ver como funciona
                <ArrowRight aria-hidden="true" className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="mt-10 max-w-[620px]">
            <FeatureStrip />
          </div>
        </div>

        <ParticipantStack />
      </section>

      <section id="como-funciona" className="border-y border-[#D8CDBD] bg-[#FFF8EA]/70">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-6 py-20 lg:grid-cols-[0.35fr_0.65fr] lg:px-10">
          <div>
            <p className="font-mono text-sm font-semibold uppercase tracking-wide text-[#E5483F]">
              Como funciona
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              Um campo curto de evidências sobre o primeiro encontro com seu produto.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <article key={step.title} className="border border-[#D8CDBD] bg-[#FFF8EA] p-6">
                <p className="font-mono text-sm text-[#E5483F]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-10 text-2xl font-semibold leading-tight">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[#5F5A52]">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="o-que-voce-recebe"
        className="mx-auto max-w-[1320px] px-6 py-20 lg:px-10"
      >
        <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            <p className="font-mono text-sm font-semibold uppercase tracking-wide text-[#E5483F]">
              O que você recebe
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              Um relatório simples para decidir o próximo experimento.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {deliverables.map((item) => (
              <article key={item} className="flex gap-4 border border-[#D8CDBD] bg-[#FFF8EA] p-5">
                <Check aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-[#E5483F]" />
                <p className="text-lg font-semibold leading-7 text-[#111111]">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="exemplos" className="border-y border-[#D8CDBD] bg-[#FFF8EA]/70">
        <div className="mx-auto max-w-[1320px] px-6 py-20 lg:px-10">
          <div className="max-w-3xl">
            <p className="font-mono text-sm font-semibold uppercase tracking-wide text-[#E5483F]">
              Onde usar
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              Para decisões em que a primeira impressão decide se alguém continua.
            </h2>
          </div>
          <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {examples.map((example) => (
              <div key={example} className="border border-[#D8CDBD] bg-[#FFF8EA] p-5">
                <Radio aria-hidden="true" className="mb-8 h-5 w-5 text-[#E5483F]" />
                <p className="text-lg font-semibold leading-7">{example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#D8CDBD] bg-[#F6EFE3]">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-6 py-20 lg:grid-cols-[0.46fr_0.54fr] lg:px-10">
          <div>
            <p className="font-mono text-sm font-semibold uppercase tracking-wide text-[#E5483F]">
              Por que importa
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              Fundadores costumam ouvir explicações. O Fresh Eyes mostra comportamento.
            </h2>
          </div>
          <div className="grid gap-5">
            <div className="border-l-2 border-[#E5483F] bg-[#FFF8EA] p-6">
              <Eye aria-hidden="true" className="h-6 w-6 text-[#E5483F]" />
              <p className="mt-5 text-xl leading-8 text-[#111111]">
                A pessoa pode dizer que entendeu, mas procurar outro CTA, pausar
                antes de agir ou abandonar antes de criar conta. É nesse intervalo
                que o produto perde intenção.
              </p>
            </div>
            <div className="border-l-2 border-[#111111] bg-[#FFF8EA] p-6">
              <Lightbulb aria-hidden="true" className="h-6 w-6 text-[#111111]" />
              <p className="mt-5 text-xl leading-8 text-[#111111]">
                O relatório transforma esses sinais em padrões para decidir o
                próximo experimento de copy, onboarding, proposta de valor ou fluxo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-[#D8CDBD] bg-[#111111] text-[#FFF8EA]">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-6 py-20 lg:grid-cols-[0.35fr_0.65fr] lg:px-10">
          <div>
            <p className="font-mono text-sm font-semibold uppercase tracking-wide text-[#F5D547]">
              FAQ
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              Perguntas antes da primeira sessão.
            </h2>
          </div>
          <div className="divide-y divide-[#FFF8EA]/20 border-y border-[#FFF8EA]/20">
            {faqs.map((faq) => (
              <article key={faq.question} className="grid gap-4 py-7 md:grid-cols-[0.35fr_0.65fr]">
                <h3 className="flex gap-3 text-xl font-semibold">
                  <CircleHelp
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 text-[#F5D547]"
                  />
                  {faq.question}
                </h3>
                <p className="text-lg leading-8 text-[#E9DDCB]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#E5483F] px-6 py-16 text-white lg:px-10">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <p className="font-mono text-sm font-semibold uppercase tracking-wide text-white/75">
              Fresh Eyes Report
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-6xl">
              Descubra onde usuários travam antes de investir no palpite errado.
            </h2>
          </div>
          <ValidateCta
            label="Quero meu relatório"
            source="final_cta"
            className="shrink-0 rounded-sm border-white bg-white px-7 text-base text-[#E5483F] hover:bg-[#FFF8EA]"
          />
        </div>
      </section>

      <footer className="border-t border-[#D8CDBD] px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-4 text-sm text-[#5F5A52] sm:flex-row sm:items-center sm:justify-between">
          <span>Fresh Eyes</span>
          <span>5 usuários reais + relatório de primeira impressão.</span>
        </div>
      </footer>
    </main>
  );
}
