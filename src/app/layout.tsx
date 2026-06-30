import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Achini Subasinghe | Portfolio",
  description: "Personal portfolio website of Achini Subasinghe — Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={caveat.variable}>
      <body>
        <Navbar />
        <main className="max-w-6xl mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
