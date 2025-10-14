import type { Metadata } from "next";

const FALLBACK_BASE_URL = "https://ainexus.community";

function resolveMetadataBase(): URL {
  const envUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL;

  if (envUrl) {
    try {
      const normalised = envUrl.startsWith("http")
        ? envUrl
        : `https://${envUrl}`;
      return new URL(normalised);
    } catch {
      // Ignore invalid URLs and fall through to the fallback.
    }
  }

  return new URL(FALLBACK_BASE_URL);
}

const metadataBase = resolveMetadataBase();

export const siteMetadata = {
  name: "AI Nexus",
  defaultTitle: "AI Nexus — London, San Francisco & Boston",
  tagline: "Curated community for AI founders, researchers and builders.",
  description:
    "A 1,500+ expert AI community running curated meetups, demo nights and hackathons across London, San Francisco and Boston.",
  locations: "London • San Francisco • Boston",
  baseUrl: metadataBase.origin,
  metadataBase,
  keywords: [
    "AI Nexus",
    "AI community",
    "AI events",
    "AI meetups",
    "AI hackathons",
    "London AI",
    "San Francisco AI",
    "Boston AI",
  ],
};

export const absoluteUrl = (path = "/"): string =>
  new URL(path, metadataBase).toString();

export type OgImageOptions = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export const createOgImageUrl = (options: OgImageOptions = {}): string => {
  const params = new URLSearchParams();

  if (options.eyebrow) {
    params.set("eyebrow", options.eyebrow);
  }

  if (options.title) {
    params.set("title", options.title);
  }

  if (options.description) {
    params.set("description", options.description);
  }

  const query = params.toString();

  return `/api/og${query ? `?${query}` : ""}`;
};

export const baseMetadata: Metadata = {
  metadataBase,
  title: {
    default: siteMetadata.defaultTitle,
    template: `%s — ${siteMetadata.name}`,
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: siteMetadata.name,
    locale: "en_GB",
    title: siteMetadata.defaultTitle,
    description: siteMetadata.description,
    url: "/",
    images: [
      {
        url: createOgImageUrl({
          eyebrow: siteMetadata.name,
          title: "Curated AI meetups, demos & hackathons",
          description: siteMetadata.locations,
        }),
        alt: "AI Nexus community covering London, San Francisco and Boston",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.defaultTitle,
    description: siteMetadata.description,
    images: [
      createOgImageUrl({
        eyebrow: siteMetadata.name,
        title: "Curated AI meetups, demos & hackathons",
        description: siteMetadata.locations,
      }),
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#05060a" },
  ],
  icons: {
    icon: "/logos/nexus-dark.png",
    shortcut: "/logos/nexus-dark.png",
    apple: "/logos/nexus-dark.png",
  },
};
