import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ValidateCta, ValidateLandingTracker } from "@/components/validate-analytics";

const steps = [
  "Conte o que você quer validar.",
  "Encontramos pessoas do seu público-alvo.",
  "Entrevistamos ou observamos essas pessoas.",
  "Você recebe os principais aprendizados.",
];

const deliverables = [
  "Gravações ou anotações das sessões.",
  "Principais dúvidas e momentos de confusão.",
  "Padrões observados entre participantes.",
  "Recomendações práticas para a próxima decisão.",
];

const examples = [
  "Ideias de produto",
  "MVPs",
  "Landing pages",
  "Fluxos de onboarding",
  "Aplicativos mobile",
  "Jogos",
  "Produtos digitais",
];

export const metadata: Metadata = {
  title: "Valide decisões com usuários reais | Quaero",
  description:
    "Valide decisões de produto com evidências de pessoas do seu público-alvo, antes de investir mais tempo construindo.",
};

function ReportMockup() {
  return (
    <aside
      aria-label="Exemplo de relatório de validação"
      className="w-full border border-[#D7D9DE] bg-white p-6 shadow-[0_24px_80px_rgba(10,10,10,0.06)] sm:p-8"
    >
      <div className="flex items-start justify-between gap-6 border-b border-[#E5E7EB] pb-6">
        <div>
          <p className="text-xs font-medium uppercase text-[#6B7280]">Quaero</p>
          <h2 className="mt-3 text-3xl font-light leading-tight">Validation Report</h2>
        </div>
        <div className="h-10 w-10 border border-[#0A0A0A]" aria-hidden="true" />
      </div>

      <dl className="grid gap-px border-b border-[#E5E7EB] bg-[#E5E7EB] py-px sm:grid-cols-2">
        <div className="bg-white py-5 pr-5">
          <dt className="text-xs font-medium uppercase text-[#6B7280]">Target audience</dt>
          <dd className="mt-2 text-lg font-light">Mobile game players</dd>
        </div>
        <div className="bg-white py-5 sm:pl-5">
          <dt className="text-xs font-medium uppercase text-[#6B7280]">Participants</dt>
          <dd className="mt-2 text-lg font-light">5 selected users</dd>
        </div>
      </dl>

      <div className="border-b border-[#E5E7EB] py-6">
        <p className="text-xs font-medium uppercase text-[#6B7280]">Top findings</p>
        <ol className="mt-4 space-y-3 text-sm leading-6 text-[#0A0A0A]">
          <li>1. 4/5 users did not understand the main CTA.</li>
          <li>2. 3/5 users hesitated before starting.</li>
          <li>3. 2/5 users expected a clearer reward.</li>
        </ol>
      </div>

      <div className="border-b border-[#E5E7EB] py-6">
        <p className="text-xs font-medium uppercase text-[#6B7280]">Evidence snippets</p>
        <div className="mt-4 space-y-3">
          <blockquote className="border-l border-[#0A0A0A] pl-4 text-sm leading-6 text-[#6B7280]">
            “Não entendi o que acontece depois.”
          </blockquote>
          <blockquote className="border-l border-[#0A0A0A] pl-4 text-sm leading-6 text-[#6B7280]">
            “Eu clicaria se soubesse o que vou receber.”
          </blockquote>
        </div>
      </div>

      <div className="pt-6">
        <p className="text-xs font-medium uppercase text-[#6B7280]">Recommendation</p>
        <p className="mt-3 text-lg font-light leading-7">
          Clarify the value before asking for action.
        </p>
      </div>
    </aside>
  );
}

export default function ValidatePage() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#0A0A0A]">
      <ValidateLandingTracker />
      <header className="border-b border-[#E5E7EB]">
        <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 lg:px-10">
          <Link href="/" aria-label="Quaero" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt=""
              width={40}
              height={40}
              className="h-9 w-9 object-contain mix-blend-multiply"
            />
            <span className="text-sm font-medium uppercase">Quaero</span>
          </Link>
          <ValidateCta source="nav" className="hidden sm:inline-flex" />
        </nav>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-24 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-32">
        <div className="max-w-4xl">
          <p className="mb-6 text-xs font-medium uppercase text-[#6B7280]">
            Pesquisa com usuários
          </p>
          <h1 className="text-5xl font-light leading-tight sm:text-7xl lg:text-8xl">
            Pare de adivinhar o que seus usuários pensam.
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-[#6B7280]">
            Conectamos você com pessoas do seu público-alvo para que você valide
            decisões com evidências, não opiniões.
          </p>
          <ValidateCta source="hero" className="mt-10" />
        </div>
        <ReportMockup />
      </section>

      <section className="border-y border-[#E5E7EB]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[0.35fr_0.65fr] lg:px-10">
          <p className="text-xs font-medium uppercase text-[#6B7280]">O problema</p>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-light leading-tight sm:text-5xl">
              Muitas decisões nascem de suposições.
            </h2>
            <p className="mt-8 text-lg leading-8 text-[#6B7280]">
              Conversas com amigos, clientes atuais e a própria intuição ajudam,
              mas raramente mostram como pessoas reais se comportam quando
              encontram uma ideia, uma página ou um produto pela primeira vez.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-medium uppercase text-[#6B7280]">
            Como funciona
          </p>
          <h2 className="text-4xl font-light leading-tight sm:text-6xl">
            Um ciclo curto para trocar opinião por evidência.
          </h2>
        </div>
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {steps.map((step, index) => (
            <article key={step} className="border border-[#E5E7EB] bg-[#FAFAF8] p-8">
              <p className="text-xs text-[#6B7280]">{String(index + 1).padStart(2, "0")}</p>
              <p className="mt-12 max-w-md text-2xl font-light leading-snug">{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#E5E7EB]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[0.35fr_0.65fr] lg:px-10">
          <p className="text-xs font-medium uppercase text-[#6B7280]">
            O que você recebe
          </p>
          <div>
            <h2 className="max-w-3xl text-4xl font-light leading-tight sm:text-6xl">
              Evidências organizadas para decidir o próximo passo.
            </h2>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {deliverables.map((item) => (
                <article key={item} className="border border-[#E5E7EB] bg-[#FAFAF8] p-6">
                  <div className="mb-8 h-px w-10 bg-[#0A0A0A]" />
                  <p className="text-lg font-light leading-7">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-medium uppercase text-[#6B7280]">
            O que podemos validar
          </p>
          <h2 className="text-4xl font-light leading-tight sm:text-6xl">
            Testes pequenos para decisões importantes.
          </h2>
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          {examples.map((example) => (
            <div
              key={example}
              className="border border-[#E5E7EB] bg-[#FAFAF8] px-5 py-3 text-sm text-[#0A0A0A]"
            >
              {example}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-10 lg:py-32">
        <Image
          src="/logo.png"
          alt=""
          width={96}
          height={96}
          className="mx-auto mb-10 h-20 w-20 object-contain mix-blend-multiply"
        />
        <h2 className="text-4xl font-light leading-tight sm:text-6xl">
          Conte o que você está construindo.
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#6B7280]">
          Conte o que você está construindo e o que quer validar. Vamos analisar
          e entrar em contato se pudermos ajudar.
        </p>
        <ValidateCta source="final_cta" className="mt-10" />
        <p className="mt-5 text-sm text-[#6B7280]">
          O formulário abre em uma nova aba.
        </p>
      </section>

      <footer className="border-t border-[#E5E7EB]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-[#6B7280] sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <span>Quaero</span>
          <Link href="/" className="transition-colors hover:text-[#0A0A0A]">
            Voltar para o site
            <ArrowRight aria-hidden="true" className="ml-2 inline h-3.5 w-3.5" />
          </Link>
        </div>
      </footer>
    </main>
  );
}
