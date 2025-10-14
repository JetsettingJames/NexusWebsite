import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Nexus — London, San Francisco & Boston",
  description:
    "A 1,500+ expert AI community running curated meetups, demo nights, and hackathons across London, San Francisco, and Boston.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  icons: {
    icon: "/logos/nexus-dark.png",
  },
  openGraph: {
    title: "AI Nexus — London, San Francisco & Boston",
    description:
      "A 1,500+ expert AI community running curated meetups, demo nights, and hackathons across London, San Francisco, and Boston.",
    type: "website",
    images: [{ url: "/api/og" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Nexus — London, San Francisco & Boston",
    description:
      "A 1,500+ expert AI community running curated meetups, demo nights, and hackathons across London, San Francisco, and Boston.",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
