import type { Metadata } from "next";
import { Caveat, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StarBackground } from "@/components/StarBackground";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Achini Subasinghe | Portfolio",
  description:
    "Personal portfolio of Achini Subasinghe — software engineer building practical applications with clean code and creative thinking.",
  openGraph: {
    title: "Achini Subasinghe | Portfolio",
    description:
      "Software engineer and NSBM undergraduate. Projects, experience, and ways to get in touch.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${caveat.variable}`}>
      <body className="font-sans min-h-dvh">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <StarBackground />
        <div className="ambient-glow" aria-hidden="true" />
        <div className="noise-overlay" aria-hidden="true" />
        <div className="relative z-10 flex min-h-dvh flex-col">
          <Navbar />
          <main
            id="main-content"
            className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 md:px-6 md:py-14"
          >
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
