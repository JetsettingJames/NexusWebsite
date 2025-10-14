import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { LogoCloud } from "@/components/LogoCloud";
import { EventsPreview } from "@/components/EventsPreview";
import { CommunitySection } from "@/components/CommunitySection";
import { StatsSection } from "@/components/StatsSection";
import type { Event } from "@/components/EventCard";
import { createOgImageUrl, siteMetadata } from "@/lib/metadata";

const homeOgImage = createOgImageUrl({
  eyebrow: "AI Nexus Community",
  title: "Curated meetups, demos & hackathons",
  description: siteMetadata.locations,
});

export const metadata: Metadata = {
  title: { absolute: siteMetadata.defaultTitle },
  description: siteMetadata.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteMetadata.defaultTitle,
    description: siteMetadata.description,
    url: "/",
    images: [
      {
        url: homeOgImage,
        width: 1200,
        height: 630,
        alt: "AI Nexus community overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.defaultTitle,
    description: siteMetadata.description,
    images: [homeOgImage],
  },
};

async function getEvents(): Promise<Event[]> {
  const lumaApiKey = process.env.LUMA_API_KEY;
  const lumaCalendarUrl = process.env.LUMA_CALENDAR_URL;

  // If API key is configured, try to fetch from API
  if (lumaApiKey) {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
      const response = await fetch(`${baseUrl}/api/events`, {
        next: { revalidate: 600 },
      });
      
      if (response.ok) {
        const data = await response.json();
        return data.events || [];
      }
    } catch (error) {
      console.error("Failed to fetch events:", error);
    }
  }

  // Return empty array if API not configured or fails
  return [];
}

export default async function Home() {
  const events = await getEvents();
  const lumaCalendarUrl = process.env.LUMA_CALENDAR_URL;
  const useLumaEmbed = !process.env.LUMA_API_KEY && !!lumaCalendarUrl;

  return (
    <>
      <Hero />
      <LogoCloud />
      <EventsPreview
        events={events}
        useLumaEmbed={useLumaEmbed}
        lumaCalendarUrl={lumaCalendarUrl}
      />
      <StatsSection />
      <CommunitySection />
    </>
  );
}
