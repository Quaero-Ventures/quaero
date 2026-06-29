import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CircleHelp,
  Lightbulb,
  PlayCircle,
  Radio,
  Search,
  Users,
  Volume2,
} from "lucide-react";

import { ValidateCta } from "@/components/validate-analytics";

const participants = [
  {
    initials: "M",
    quote: "Achei que era outro jogo.",
    timestamp: "00:15",
    className: "lg:-rotate-1",
  },
  {
    initials: "R",
    quote: "Cadê o botão pra continuar?",
    timestamp: "00:42",
    className: "lg:translate-x-5 lg:rotate-1",
  },
  {
    initials: "L",
    quote: "Fiquei perdido aqui...",
    timestamp: "00:31",
    className: "lg:-translate-x-1 lg:-rotate-2",
  },
];

const reportRows = [
  ["Não entenderam o objetivo", "4 de 5"],
  ["Procuraram por algo que não estava ali", "5 de 5"],
  ["Tentaram sair ou fechar", "3 de 5"],
  ['Chegaram ao momento "Aha!"', "1 de 5"],
];

const featureStrip = [
  { icon: Users, label: "5 usuários" },
  { icon: PlayCircle, label: "primeira sessão" },
  { icon: Volume2, label: "vídeo + áudio" },
  { icon: Lightbulb, label: "insights claros" },
];

const processSteps = [
  {
    title: "Observamos a primeira vez",
    body: "Usuários abrem seu produto sem briefing longo. A sessão mostra o que eles entendem, ignoram e tentam fazer por conta própria.",
  },
  {
    title: "Marcamos os momentos de fricção",
    body: "Dúvidas, hesitações, voltas, cliques perdidos e abandono viram evidência organizada, não opinião solta.",
  },
  {
    title: "Entregamos um relatório direto",
    body: "Você recebe o que aconteceu, por que importa e qual decisão deve ser testada em seguida.",
  },
];

const examples = [
  "Landing pages antes de comprar tráfego",
  "Protótipos antes de virar backlog",
  "Jogos antes de polir tutorial",
  "Onboarding antes de mexer em retenção",
  "MVPs antes de apresentar para clientes",
  "Reposicionamento antes de trocar toda a copy",
];

const faqs = [
  {
    question: "Isso e entrevista ou teste de usabilidade?",
    answer:
      "É uma sessão de primeira impressão. Conversamos quando ajuda, mas o foco principal é observar comportamento real diante do produto.",
  },
  {
    question: "Preciso ter produto pronto?",
    answer:
      "Não. Funciona com página, protótipo, demo, fluxo clicável, jogo em desenvolvimento ou MVP simples.",
  },
  {
    question: "O relatório traz recomendações?",
    answer:
      "Sim. O relatório separa evidência observada, padrões de fricção e próximos ajustes sugeridos.",
  },
];

export const metadata: Metadata = {
  title: "Fresh Eyes | User behavior research",
  description:
    "Veja usuários reais usando seu produto pela primeira vez e receba um relatório com momentos de dúvida, fricção e abandono.",
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

function PaperClip({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute h-12 w-4 rounded-full border-2 border-[#5F5A52]/70 ${className}`}
    >
      <div className="absolute left-1/2 top-2 h-8 w-1.5 -translate-x-1/2 rounded-full border border-[#5F5A52]/50" />
    </div>
  );
}

function ParticipantCard({
  className,
  initials,
  quote,
  timestamp,
}: {
  className: string;
  initials: string;
  quote: string;
  timestamp: string;
}) {
  return (
    <article
      className={`relative grid min-h-[144px] grid-cols-[104px_1fr] gap-5 border border-[#D8CDBD] bg-[#FFF8EA] p-3 shadow-[0_12px_28px_rgba(17,17,17,0.12)] ${className}`}
    >
      <PaperClip className="-left-1 -top-3 rotate-6" />
      <div className="relative overflow-hidden border border-[#D8CDBD] bg-[#E9DDCB]">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(17,17,17,0.12),transparent_52%),radial-gradient(circle_at_50%_24%,#f0c7a8_0_18%,transparent_19%),radial-gradient(circle_at_50%_58%,#111111_0_24%,transparent_25%)]" />
        <div className="absolute inset-x-0 bottom-0 h-10 bg-[#2E2A26]" />
        <div className="absolute left-1/2 top-5 grid h-16 w-16 -translate-x-1/2 place-items-center rounded-full bg-[#C8916D] text-2xl font-semibold text-[#111111]">
          {initials}
        </div>
        <div className="absolute left-1/2 top-9 h-6 w-24 -translate-x-1/2 rounded-full border-4 border-[#111111]" />
      </div>
      <div className="flex flex-col justify-between py-2">
        <p className="font-serif text-2xl italic leading-snug text-[#111111]">
          &ldquo;{quote}&rdquo;
        </p>
        <p className="font-mono text-xl text-[#E5483F]">{timestamp}</p>
      </div>
    </article>
  );
}

function ParticipantStack() {
  return (
    <div className="relative space-y-4 lg:pt-10">
      <div
        aria-hidden="true"
        className="absolute -left-10 top-32 hidden h-16 w-10 rounded-l-full border-b-2 border-l-2 border-[#111111] lg:block"
      />
      <div
        aria-hidden="true"
        className="absolute -right-2 bottom-32 hidden h-16 w-10 rounded-r-full border-b-2 border-r-2 border-[#111111] lg:block"
      />
      {participants.map((participant) => (
        <ParticipantCard key={participant.timestamp} {...participant} />
      ))}
      <p className="mx-auto max-w-xs border-l-2 border-[#111111] pl-5 font-serif text-xl italic leading-7 text-[#111111]">
        Usuários reais. Primeira vez. Sem filtro.
      </p>
    </div>
  );
}

function ReportCard() {
  return (
    <aside className="relative border border-[#D8CDBD] bg-[#FFF8EA] p-5 shadow-[0_14px_34px_rgba(17,17,17,0.16)] sm:p-7 lg:mt-12">
      <PaperClip className="right-8 -top-3 rotate-3" />
      <div className="absolute inset-2 border border-[#D8CDBD]/70" aria-hidden="true" />
      <div className="relative">
        <div className="flex items-start justify-between gap-5 border-b border-[#111111]/35 pb-7">
          <div>
            <h2 className="font-mono text-xl font-semibold uppercase tracking-wide text-[#111111]">
              Relatorio rapido
            </h2>
            <p className="mt-3 font-mono text-sm uppercase tracking-wide text-[#5F5A52]">
              Sessao #004
            </p>
          </div>
          <div className="-rotate-3 border-2 border-[#E5483F] px-3 py-2 text-center font-mono text-xs font-semibold uppercase leading-5 tracking-wide text-[#E5483F]">
              Não entendeu
            <br />o objetivo
          </div>
        </div>

        <div className="divide-y divide-[#111111]/25 border-b border-dashed border-[#111111]/35">
          {reportRows.map(([label, value]) => (
            <div key={label} className="grid grid-cols-[1fr_86px]">
              <p className="border-r border-[#111111]/20 py-5 pr-4 text-base leading-6 text-[#111111]">
                {label}
              </p>
              <p className="py-5 pl-5 font-mono text-base text-[#111111]">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-[#F5D547]/55 p-5 shadow-[inset_0_0_34px_rgba(255,248,234,0.72)]">
          <p className="flex items-center gap-3 font-mono text-sm font-semibold uppercase tracking-wide text-[#111111]">
            <Search aria-hidden="true" className="h-5 w-5" />
            Insight principal
          </p>
          <p className="mt-4 font-serif text-3xl leading-tight text-[#111111]">
            A proposta de valor não ficou clara nos primeiros 30 segundos.
          </p>
          <div className="mt-3 h-1.5 w-40 -rotate-1 bg-[#F5D547]" aria-hidden="true" />
        </div>
      </div>
    </aside>
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
            <a href="#exemplos" className="hover:text-[#E5483F]">
              Exemplos
            </a>
            <a href="#faq" className="hover:text-[#E5483F]">
              FAQ
            </a>
          </div>
          <ValidateCta
            label="Quero um relatório"
            source="nav"
            className="hidden rounded-sm border-[#111111] bg-[#111111] px-7 text-base text-[#FFF8EA] hover:bg-[#2A2A2A] sm:inline-flex"
          />
        </nav>
      </header>

      <section className="mx-auto grid max-w-[1500px] gap-10 px-6 py-12 lg:grid-cols-[0.98fr_0.78fr_1fr] lg:px-10 lg:py-16">
        <div className="flex flex-col justify-between">
          <div>
            <p className="mb-7 flex items-center gap-4 font-mono text-sm font-semibold uppercase tracking-wide text-[#E5483F]">
              <span className="h-3 w-3 rounded-full bg-[#E5483F]" />
              Primeira impressão
            </p>
            <h1 className="max-w-[620px] font-serif text-6xl font-semibold leading-[0.95] tracking-tight sm:text-7xl xl:text-[4.35rem] min-[1440px]:text-[5.4rem]">
              A verdade está no que eles{" "}
              <span className="relative inline-block text-[#E5483F]">
                fazem
                <span
                  aria-hidden="true"
                  className="absolute -bottom-2 left-0 h-2 w-full -rotate-2 bg-[#E5483F]"
                />
              </span>
              , não no que dizem.
            </h1>
            <div className="mt-4 h-2 w-56 -rotate-1 bg-[#F5D547]" aria-hidden="true" />
            <p className="mt-7 max-w-[520px] text-xl leading-8 text-[#111111]">
              Veja usuários reais usando seu produto pela primeira vez. Receba
              um relatório mostrando os momentos de dúvida, fricção e abandono
              para tomar decisões com evidências.
            </p>
            <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center">
              <ValidateCta
                label="Quero um relatório de primeira impressão"
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
          <div className="mt-10 max-w-[540px]">
            <FeatureStrip />
          </div>
        </div>

        <ParticipantStack />
        <ReportCard />
      </section>

      <section id="como-funciona" className="border-y border-[#D8CDBD] bg-[#FFF8EA]/70">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-6 py-20 lg:grid-cols-[0.35fr_0.65fr] lg:px-10">
          <div>
            <p className="font-mono text-sm font-semibold uppercase tracking-wide text-[#E5483F]">
              Como funciona
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              Uma investigação curta sobre o primeiro encontro com seu produto.
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

      <section id="exemplos" className="mx-auto max-w-[1320px] px-6 py-20 lg:px-10">
        <div className="max-w-3xl">
          <p className="font-mono text-sm font-semibold uppercase tracking-wide text-[#E5483F]">
            Exemplos
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
            Bom para qualquer momento em que a primeira impressão decide o
            próximo passo.
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
              Relatório de primeira impressão
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-6xl">
              Descubra onde usuários travam antes de investir no palpite errado.
            </h2>
          </div>
          <ValidateCta
            label="Quero um relatório"
            source="final_cta"
            className="shrink-0 rounded-sm border-white bg-white px-7 text-base text-[#E5483F] hover:bg-[#FFF8EA]"
          />
        </div>
      </section>

      <footer className="border-t border-[#D8CDBD] px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-4 text-sm text-[#5F5A52] sm:flex-row sm:items-center sm:justify-between">
          <span>Fresh Eyes</span>
          <span>User behavior research for first interactions.</span>
        </div>
      </footer>
    </main>
  );
}
