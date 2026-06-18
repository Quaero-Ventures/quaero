import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ExperimentLanding } from "@/components/experiment-landing";
import { experiments, getExperimentBySlug } from "@/data/experiments";

type ExperimentPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return experiments.map((experiment) => ({
    slug: experiment.slug,
  }));
}

export async function generateMetadata({
  params,
}: ExperimentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const experiment = getExperimentBySlug(slug);

  if (!experiment) {
    return {
      title: "Experiment not found | Quaero",
    };
  }

  return {
    title: `${experiment.name} | Quaero Experiment`,
    description: experiment.description,
  };
}

export default async function ExperimentPage({ params }: ExperimentPageProps) {
  const { slug } = await params;
  const experiment = getExperimentBySlug(slug);

  if (!experiment) {
    notFound();
  }

  return <ExperimentLanding experiment={experiment} />;
}
