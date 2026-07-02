import type { Metadata } from "next";
import { PostHogProvider } from "./posthog-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quaero | Discover what deserves to exist",
  description:
    "Quaero is a product discovery studio for reducing uncertainty through disciplined experimentation and evidence gathering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
