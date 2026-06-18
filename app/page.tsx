import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Binoculars,
  CircleDot,
  Compass,
  FlaskConical,
  Microscope,
  MoveRight,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HeroDiscoveryMap, SignalNoiseField } from "./discovery-visuals";

const process = [
  {
    step: "01",
    title: "Hypothesis",
    text: "Every idea starts as a question.",
  },
  {
    step: "02",
    title: "Experiment",
    text: "Build the smallest test capable of generating evidence.",
  },
  {
    step: "03",
    title: "Decision",
    text: "Continue, pivot, or kill the idea based on reality.",
  },
];

const principles = [
  { title: "Curiosity", text: "Ask better questions before choosing answers.", icon: Binoculars },
  { title: "Exploration", text: "Move through uncertainty with a map, not a script.", icon: Compass },
  { title: "Evidence", text: "Trust what the field returns.", icon: Microscope },
  { title: "Clarity", text: "Remove noise until the next move is visible.", icon: CircleDot },
  { title: "Patience", text: "Let signals mature before naming certainty.", icon: MoveRight },
  { title: "Rigor", text: "Test with discipline, document what changes.", icon: FlaskConical },
];

function BrandMark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="Quaero"
      width={180}
      height={180}
      priority
      className={cn("h-auto w-full mix-blend-multiply", className)}
    />
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#0A0A0A]">
      <header className="sticky top-0 z-50 border-b border-[#E5E7EB] bg-[#FAFAF8]/95 backdrop-blur-sm">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link href="#" aria-label="Quaero home" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt=""
              width={40}
              height={40}
              className="h-9 w-9 object-contain mix-blend-multiply"
            />
            <span className="text-sm font-medium uppercase">Quaero</span>
          </Link>
          <div className="hidden items-center gap-10 text-sm text-[#6B7280] md:flex">
            <Link href="#process" className="transition-colors hover:text-[#0A0A0A]">
              Process
            </Link>
            <Link href="#experiments" className="transition-colors hover:text-[#0A0A0A]">
              Experiments
            </Link>
            <Link href="#philosophy" className="transition-colors hover:text-[#0A0A0A]">
              Philosophy
            </Link>
          </div>
          <Link href="#contact" className={buttonVariants({ variant: "outline", size: "sm" })}>
            Talk to Us
            <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
          </Link>
        </nav>
      </header>

      <main>
        <section className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-12 w-28 sm:w-36">
              <BrandMark />
            </div>
            <p className="mb-6 text-xs font-medium uppercase text-[#6B7280]">
              Product discovery studio
            </p>
            <h1 className="max-w-4xl text-6xl font-light leading-[1.02] text-[#0A0A0A] sm:text-7xl lg:text-8xl">
              Discover what deserves to exist.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6B7280]">
              Quaero helps founders and studios reduce uncertainty through rapid experimentation, evidence gathering, and disciplined product discovery.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" className={buttonVariants({ size: "lg" })}>
                Start an Experiment
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <Link href="#process" className={buttonVariants({ variant: "outline", size: "lg" })}>
                See the Process
                <MoveRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <HeroDiscoveryMap />
        </section>

        <section id="process" className="border-y border-[#E5E7EB]">
          <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
            <div className="max-w-3xl">
              <p className="mb-5 text-xs font-medium uppercase text-[#6B7280]">
                How Quaero works
              </p>
              <h2 className="text-4xl font-light leading-tight sm:text-6xl">
                Ideas compete. Evidence decides.
              </h2>
            </div>
            <div className="mt-20 grid gap-px border border-[#E5E7EB] bg-[#E5E7EB] lg:grid-cols-3">
              {process.map((item) => (
                <article key={item.step} className="bg-[#FAFAF8] p-8 transition-colors hover:bg-white">
                  <div className="mb-14 flex items-center justify-between text-xs text-[#6B7280]">
                    <span>{item.step}</span>
                    <span>Observation</span>
                  </div>
                  <h3 className="text-2xl font-light">{item.title}</h3>
                  <p className="mt-5 max-w-sm leading-7 text-[#6B7280]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="philosophy" className="relative overflow-hidden">
          <div className="contour-lines absolute inset-0 opacity-80" />
          <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-32 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
            <div>
              <p className="text-xs font-medium uppercase text-[#6B7280]">The philosophy</p>
            </div>
            <div>
              <blockquote className="text-5xl font-light leading-tight sm:text-7xl">
                Seek before building.
              </blockquote>
              <div className="mt-14 grid gap-8 border-l border-[#0A0A0A] pl-8 text-xl leading-9 text-[#6B7280] md:grid-cols-2">
                <p>Most products fail because conviction arrives before evidence.</p>
                <p>Quaero exists to reverse that order.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="experiments" className="py-10">
          <div className="mx-auto max-w-7xl px-6 pb-12 lg:px-10">
            <p className="mb-5 text-xs font-medium uppercase text-[#6B7280]">
              Signal vs noise
            </p>
            <h2 className="max-w-3xl text-4xl font-light leading-tight sm:text-6xl">
              What matters is often hidden inside what merely appears.
            </h2>
          </div>
          <SignalNoiseField />
        </section>

        <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-xs font-medium uppercase text-[#6B7280]">
                What we look for
              </p>
              <h2 className="max-w-2xl text-4xl font-light leading-tight sm:text-6xl">
                Principles for finding stronger signals.
              </h2>
            </div>
            <p className="max-w-sm leading-7 text-[#6B7280]">
              A field notebook for product uncertainty: measured, patient, and unwilling to confuse noise for proof.
            </p>
          </div>
          <div className="grid gap-px border border-[#E5E7EB] bg-[#E5E7EB] md:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <article
                  key={principle.title}
                  className="group min-h-64 bg-[#FAFAF8] p-7 transition-colors hover:bg-white"
                >
                  <Icon className="h-5 w-5 text-[#0A0A0A]" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="mt-16 text-2xl font-light">{principle.title}</h3>
                  <p className="mt-4 leading-7 text-[#6B7280]">{principle.text}</p>
                  <div className="mt-8 h-px w-10 bg-[#0A0A0A] transition-all duration-500 group-hover:w-20" />
                </article>
              );
            })}
          </div>
        </section>

        <section id="contact" className="border-y border-[#E5E7EB]">
          <div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-32 text-center lg:px-10">
            <div className="mb-12 w-24">
              <BrandMark />
            </div>
            <h2 className="text-5xl font-light leading-tight sm:text-7xl">
              There may be something interesting here.
            </h2>
            <p className="mt-8 text-xl text-[#6B7280]">Let&apos;s find out.</p>
            <Link href="mailto:gabrielfpaula@gmail.com" className={cn(buttonVariants({ size: "lg" }), "mt-10")}>
              Start an Experiment
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-14 lg:px-10">
        <div className="flex flex-col justify-between gap-8 border-b border-[#E5E7EB] pb-10 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt=""
              width={44}
              height={44}
              className="h-10 w-10 object-contain mix-blend-multiply"
            />
            <div>
              <p className="text-sm font-medium uppercase">Quaero</p>
              <p className="mt-1 text-sm text-[#6B7280]">
                A system for discovering what deserves to exist.
              </p>
            </div>
          </div>
          <div className="flex gap-8 text-sm text-[#6B7280]">
            <Link href="#process" className="hover:text-[#0A0A0A]">
              Process
            </Link>
            <Link href="#philosophy" className="hover:text-[#0A0A0A]">
              Philosophy
            </Link>
            <Link href="#contact" className="hover:text-[#0A0A0A]">
              Contact
            </Link>
          </div>
        </div>
        <p className="text-xs text-[#6B7280]">Quaero. Seek before building.</p>
      </footer>
    </div>
  );
}
