import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "@/app/globals.css";

import { FloatingConcierge } from "@/components/layout/floating-concierge";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: {
    default: "Aurora Estates Collective",
    template: "%s | Aurora Estates Collective"
  },
  description:
    "Discover bespoke residences with Aurora Estates Collective. Explore curated listings, cinematic property tours, and concierge-led buying experiences.",
  keywords: [
    "luxury real estate",
    "exclusive listings",
    "modern villas",
    "penthouse tours",
    "concierge real estate",
    "boutique real estate agency"
  ],
  authors: [{ name: "Aurora Estates Collective" }],
  metadataBase: new URL("https://www.auroraestates.example"),
  openGraph: {
    title: "Aurora Estates Collective",
    description:
      "Explore bespoke residences and private tours with Aurora Estates Collective.",
    url: "https://www.auroraestates.example",
    siteName: "Aurora Estates Collective",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurora Estates Collective",
    description:
      "A cinematic catalogue of modern estates with concierge-led service.",
    creator: "@auroraestates"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable, playfair.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col overflow-hidden">
            <div className="pointer-events-none absolute inset-x-0 top-[-20%] mx-auto h-[420px] w-[920px] rounded-full bg-primary/10 blur-[120px]" />
            <Navbar />
            <main className="relative flex-1">{children}</main>
            <Footer />
            <FloatingConcierge />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
