export const META_PIXEL_ID =
  process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "1392382389464709";

type MetaPixelFunction = {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  loaded: boolean;
  push: MetaPixelFunction;
  version: string;
};

declare global {
  interface Window {
    _fbq?: MetaPixelFunction;
    fbq?: MetaPixelFunction;
    __memoraMetaPixelInitialized?: boolean;
    __memoraMetaPageViewTracked?: boolean;
  }
}

export function initializeMetaPixel(): void {
  if (typeof window === "undefined" || !META_PIXEL_ID) return;

  if (typeof window.fbq !== "function") {
    const fbq = function (...args: unknown[]) {
      if (fbq.callMethod) fbq.callMethod(...args);
      else fbq.queue.push(args);
    } as MetaPixelFunction;

    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];
    window.fbq = fbq;
    window._fbq = fbq;

    if (!document.querySelector('script[src="https://connect.facebook.net/en_US/fbevents.js"]')) {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://connect.facebook.net/en_US/fbevents.js";
      document.head.appendChild(script);
    }
  }

  if (!window.__memoraMetaPixelInitialized) {
    window.fbq?.("init", META_PIXEL_ID);
    window.__memoraMetaPixelInitialized = true;
  }
}

export function trackMetaPageView(): void {
  if (
    typeof window === "undefined" ||
    typeof window.fbq !== "function" ||
    window.__memoraMetaPageViewTracked
  ) return;

  try {
    window.fbq("track", "PageView");
    window.__memoraMetaPageViewTracked = true;
  } catch {
    // Analytics must never affect the landing experience.
  }
}

export function trackMetaLead(): void {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;

  try {
    window.fbq("track", "Lead", {
      content_name: "Memora Dia dos Pais",
      content_category: "Cadastro de interesse",
      currency: "BRL",
      value: 139.99,
    });
  } catch {
    // The lead submission result remains authoritative if analytics is unavailable.
  }
}
