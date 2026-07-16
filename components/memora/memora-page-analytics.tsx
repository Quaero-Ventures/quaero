"use client";

import { useEffect, useRef } from "react";

import {
  captureMemoraEvent,
  getMemoraAttribution,
} from "./memora-analytics";

export function MemoraPageAnalytics() {
  const captured = useRef(false);

  useEffect(() => {
    if (captured.current) return;
    captured.current = true;
    captureMemoraEvent("memora_landing_viewed", getMemoraAttribution());
  }, []);

  function handlePrimaryCtaClick() {
    captureMemoraEvent("memora_primary_cta_clicked", getMemoraAttribution());
  }

  return (
    <a href="#personalizar" onClick={handlePrimaryCtaClick} data-memora-primary-cta>
      Quero personalizar
    </a>
  );
}
