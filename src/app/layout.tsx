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
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23FFFBF6'/><defs><clipPath id='shakti-logo-clip'><rect x='0' y='50' width='100' height='50' /></clipPath></defs><g transform='translate(0, -2)'><path d='M 50 36 Q 47.5 24 50 2 Q 52.5 24 50 36 Z' fill='%23FF8842' transform='rotate(-70 50 50)'/><path d='M 50 36 Q 47.5 24 50 2 Q 52.5 24 50 36 Z' fill='%23FF8842' transform='rotate(-52.5 50 50)'/><path d='M 50 36 Q 47.5 24 50 2 Q 52.5 24 50 36 Z' fill='%23FF8842' transform='rotate(-35 50 50)'/><path d='M 50 36 Q 47.5 24 50 2 Q 52.5 24 50 36 Z' fill='%23FF8842' transform='rotate(-17.5 50 50)'/><path d='M 50 36 Q 47.5 24 50 2 Q 52.5 24 50 36 Z' fill='%23FF8842' transform='rotate(0 50 50)'/><path d='M 50 36 Q 47.5 24 50 2 Q 52.5 24 50 36 Z' fill='%23FF8842' transform='rotate(17.5 50 50)'/><path d='M 50 36 Q 47.5 24 50 2 Q 52.5 24 50 36 Z' fill='%23FF8842' transform='rotate(35 50 50)'/><path d='M 50 36 Q 47.5 24 50 2 Q 52.5 24 50 36 Z' fill='%23FF8842' transform='rotate(52.5 50 50)'/><path d='M 50 36 Q 47.5 24 50 2 Q 52.5 24 50 36 Z' fill='%23FF8842' transform='rotate(70 50 50)'/></g><g transform='translate(0, 2)' clip-path='url(%23shakti-logo-clip)'><path d='M 50 64 Q 47.5 76 50 98 Q 52.5 76 50 64 Z' fill='%23FF8842' transform='rotate(-90 50 50)'/><path d='M 50 64 Q 47.5 76 50 98 Q 52.5 76 50 64 Z' fill='%23FF8842' transform='rotate(-67.5 50 50)'/><path d='M 50 64 Q 47.5 76 50 98 Q 52.5 76 50 64 Z' fill='%23FF8842' transform='rotate(-45 50 50)'/><path d='M 50 64 Q 47.5 76 50 98 Q 52.5 76 50 64 Z' fill='%23FF8842' transform='rotate(-22.5 50 50)'/><path d='M 50 64 Q 47.5 76 50 98 Q 52.5 76 50 64 Z' fill='%23FF8842' transform='rotate(0 50 50)'/><path d='M 50 64 Q 47.5 76 50 98 Q 52.5 76 50 64 Z' fill='%23FF8842' transform='rotate(22.5 50 50)'/><path d='M 50 64 Q 47.5 76 50 98 Q 52.5 76 50 64 Z' fill='%23FF8842' transform='rotate(45 50 50)'/><path d='M 50 64 Q 47.5 76 50 98 Q 52.5 76 50 64 Z' fill='%23FF8842' transform='rotate(67.5 50 50)'/><path d='M 50 64 Q 47.5 76 50 98 Q 52.5 76 50 64 Z' fill='%23FF8842' transform='rotate(90 50 50)'/><path d='M 28 50 A 22 22 0 0 0 72 50 Z' fill='%23FF8842' /><path d='M 35 50 A 15 15 0 0 0 65 50 Z' fill='%23FC6900' /><path d='M 42 50 A 8 8 0 0 0 58 50 Z' fill='%23D25000' /></g></svg>",
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

