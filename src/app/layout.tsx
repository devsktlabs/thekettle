import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "The Brewer's Kettle | Wilmington, NC",
  description:
    "Cold pours, real games, and a vibe that keeps bringing you back. Wilmington's go-to spot for craft beers, full bar, events, and cannabis alternative drinks.",
  openGraph: {
    title: "The Brewer's Kettle",
    description: "Your favorite third place in Wilmington, NC.",
    siteName: "The Brewer's Kettle",
  },
};

export const viewport: Viewport = {
  themeColor: "#090e09",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${
        geistSans.variable
      } ${geistMono.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-accent px-5 py-3 font-semibold text-white transition-transform duration-200 focus:translate-y-0"
        >
          Skip to Content
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}

