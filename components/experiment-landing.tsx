import Link from "next/link";

import type { Experiment } from "@/data/experiments";
import { buttonVariants } from "@/components/ui/button";

type ExperimentLandingProps = {
  experiment: Experiment;
};

export function ExperimentLanding({ experiment }: ExperimentLandingProps) {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#0A0A0A]">
      <div className="mx-auto max-w-5xl px-6 py-10 lg:px-10">
        <header className="border-b border-[#E5E7EB] pb-10">
          <Link href="/" className="text-sm text-[#6B7280] transition-colors hover:text-[#0A0A0A]">
            Quaero
          </Link>
          <div className="mt-24 max-w-4xl">
            <p className="mb-5 text-xs font-medium uppercase text-[#6B7280]">
              Experiment / {experiment.status}
            </p>
            <h1 className="text-5xl font-light leading-tight sm:text-7xl">
              {experiment.name}
            </h1>
            <p className="mt-8 max-w-3xl text-2xl font-light leading-9 text-[#0A0A0A]">
              {experiment.tagline}
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6B7280]">
              {experiment.description}
            </p>
            <Link href={experiment.primaryCtaHref} className={buttonVariants({ size: "lg", className: "mt-10" })}>
              {experiment.primaryCtaLabel}
            </Link>
          </div>
        </header>

        <section className="grid gap-12 border-b border-[#E5E7EB] py-16 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p className="text-xs font-medium uppercase text-[#6B7280]">Hypothesis</p>
          </div>
          <p className="text-3xl font-light leading-tight text-[#0A0A0A]">
            {experiment.hypothesis}
          </p>
        </section>

        <section className="divide-y divide-[#E5E7EB]">
          {experiment.sections.map((section) => (
            <article
              key={section.title}
              className="grid gap-8 py-12 lg:grid-cols-[0.35fr_0.65fr]"
            >
              <h2 className="text-xl font-light">{section.title}</h2>
              <p className="max-w-2xl text-lg leading-8 text-[#6B7280]">{section.body}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
