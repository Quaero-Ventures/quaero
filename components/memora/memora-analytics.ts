"use client";

import posthog from "posthog-js";

export const MEMORA_LANDING_VARIANT = "default";
export const MEMORA_PRICE = 139.99;

export type MemoraAttribution = {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  fbclid: string;
  referrer: string;
};

export type MemoraEventName =
  | "memora_landing_viewed"
  | "memora_primary_cta_clicked"
  | "memora_form_viewed"
  | "memora_form_started"
  | "memora_form_submitted"
  | "memora_form_submission_failed";

export function getMemoraAttribution(): MemoraAttribution {
  const searchParams = new URLSearchParams(window.location.search);

  return {
    utm_source: searchParams.get("utm_source") ?? "",
    utm_medium: searchParams.get("utm_medium") ?? "",
    utm_campaign: searchParams.get("utm_campaign") ?? "",
    utm_content: searchParams.get("utm_content") ?? "",
    utm_term: searchParams.get("utm_term") ?? "",
    fbclid: searchParams.get("fbclid") ?? "",
    referrer: document.referrer,
  };
}

function getDeviceType() {
  if (window.innerWidth < 768) return "mobile";
  if (window.innerWidth < 1024) return "tablet";
  return "desktop";
}

export function captureMemoraEvent(
  eventName: MemoraEventName,
  attribution: MemoraAttribution,
  properties: { http_status?: number } = {},
) {
  if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) return;

  try {
    posthog.capture(eventName, {
      ...attribution,
      device_type: getDeviceType(),
      landing_variant: MEMORA_LANDING_VARIANT,
      price: MEMORA_PRICE,
      ...properties,
    });
  } catch {
    // Analytics must never block the lead submission or landing experience.
  }
}
