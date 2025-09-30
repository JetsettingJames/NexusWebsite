import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Nexus — London & San Francisco",
  description:
    "A 1,500+ expert AI community running curated meetups, demo nights, and hackathons across London and San Francisco.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  openGraph: {
    title: "AI Nexus — London & San Francisco",
    description:
      "A 1,500+ expert AI community running curated meetups, demo nights, and hackathons across London and San Francisco.",
    type: "website",
    images: [{ url: "/api/og" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Nexus — London & San Francisco",
    description:
      "A 1,500+ expert AI community running curated meetups, demo nights, and hackathons across London and San Francisco.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
