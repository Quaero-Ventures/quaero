"use client";

import { useEffect } from "react";

import { initializeMetaPixel, trackMetaPageView } from "./meta-pixel";

export function MemoraMetaPixel() {
  useEffect(() => {
    initializeMetaPixel();
    trackMetaPageView();
  }, []);

  return null;
}
