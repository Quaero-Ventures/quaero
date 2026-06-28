"use client";

import { useCallback, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import posthog from "posthog-js";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const experimentProperties = {
  experiment_id: "EXP-001",
  landing: "validate",
  route: "/validate",
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

let posthogInitialized = false;

function initPostHog() {
  if (posthogInitialized) {
    return true;
  }

  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;

  if (!key || !host) {
    return false;
  }

  posthog.init(key, {
    api_host: host,
    capture_pageview: true,
  });
  posthogInitialized = true;

  return true;
}

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

export function ValidateLandingTracker() {
  useEffect(() => {
    initPostHog();
  }, []);

  return null;
}

type ValidateCtaProps = {
  className?: string;
  source: "hero" | "final_cta" | "nav";
};

export function ValidateCta({ className = "", source }: ValidateCtaProps) {
  const handleClick = useCallback(() => {
    const destinationUrl = getGoogleFormUrlWithUtms();

    if (initPostHog()) {
      posthog.capture("validate_requested", {
        ...experimentProperties,
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
      Quero validar meu produto
      <ExternalLink aria-hidden="true" className="h-4 w-4" />
    </button>
  );
}
