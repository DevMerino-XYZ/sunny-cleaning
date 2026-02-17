import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Sunny's Cleaning Services",
    template: "%s | Sunny's Cleaning Services",
  },
  description:
    "Professional residential and commercial cleaning services. Free estimates, reliable staff and satisfaction guaranteed.",

  keywords: [
    "cleaning services",
    "house cleaning",
    "deep cleaning",
    "move out cleaning",
    "Arizona cleaning services",
  ],

  authors: [{ name: "Sunny's Cleaning Services" }],

  openGraph: {
    title: "Sunny's Cleaning Services",
    description:
      "Where clean meets perfection. Professional cleaning services near you.",
    url: "https://sunnyscleaningservices.com",
    siteName: "Sunny's Cleaning Services",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-white text-gray-800 antialiased`}>
        {children}
      </body>
    </html>
  );
}
