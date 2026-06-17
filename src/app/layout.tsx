import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { StickyCTA } from "@/components/site/StickyCTA";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sumeru India Growth Fund — Partnering in India's next decade",
  description: "Sumeru India Growth Fund (SIGF) is Shakti Sphere's Category III AIF, partnering India's next decade of wealth creation through disciplined, quality-focused investing.",
  icons: {
    icon: "/images/sumeru-logo.png",
  },
};

export const viewport = {
  themeColor: "#FC6900",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-brand-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-full focus:outline-none"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <Header />
        <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}

