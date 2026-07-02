"use client";

import posthog from "posthog-js";
import { PostHogProvider as PostHogReactProvider } from "posthog-js/react";

const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;

if (typeof window !== "undefined" && posthogKey) {
  posthog.init(posthogKey, {
    api_host: posthogHost || "https://us.i.posthog.com",
    capture_pageview: "history_change",
  });
}

type PostHogProviderProps = {
  children: React.ReactNode;
};

export function PostHogProvider({ children }: PostHogProviderProps) {
  if (!posthogKey) {
    if (process.env.NODE_ENV === "development") {
      console.warn("PostHog disabled: missing NEXT_PUBLIC_POSTHOG_KEY");
    }

    return <>{children}</>;
  }

  return (
    <PostHogReactProvider client={posthog}>
      {children}
    </PostHogReactProvider>
  );
}
