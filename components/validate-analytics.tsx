"use client";

import { useCallback } from "react";
import { ExternalLink } from "lucide-react";
import posthog from "posthog-js";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const experimentProperties = {
  experiment_id: "fresh-eyes",
  landing: "validate",
};

const googleFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSehDjcd_HfnJfQNa9FFVif3toHl79FrJSP0BymvZDFMuwf2Zw/viewform?usp=header";

const trackedUtmParams = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
];

function getGoogleFormUrlWithUtms() {
  const destination = new URL(googleFormUrl);
  const currentParams = new URLSearchParams(window.location.search);

  trackedUtmParams.forEach((param) => {
    const value = currentParams.get(param);

    if (value) {
      destination.searchParams.set(param, value);
    }
  });

  return destination.toString();
}

type ValidateCtaProps = {
  className?: string;
  label?: string;
  source: "hero" | "final_cta" | "nav";
};

export function ValidateCta({
  className = "",
  label = "Quero validar meu produto",
  source,
}: ValidateCtaProps) {
  const handleClick = useCallback(() => {
    const destinationUrl = getGoogleFormUrlWithUtms();

    if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.capture("validate_requested", {
        ...experimentProperties,
        route: window.location.pathname,
        destination: "google_form",
        source,
      });
    }

    window.open(destinationUrl, "_blank", "noopener,noreferrer");
  }, [source]);

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(buttonVariants({ size: "lg" }), className)}
    >
      {label}
      <ExternalLink aria-hidden="true" className="h-4 w-4" />
    </button>
  );
}
