import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { EventList } from "@/components/EventList";
import { EventEmbed } from "@/components/EventEmbed";
import { HackathonCard } from "@/components/HackathonCard";
import type { Event } from "@/components/EventCard";
import { createOgImageUrl, siteMetadata } from "@/lib/metadata";

const eventsDescription =
  "Browse upcoming AI Nexus events across London, San Francisco and Boston. RSVP for curated meetups, demo nights and hackathons.";

const eventsOgImage = createOgImageUrl({
  eyebrow: "AI Nexus Events",
  title: "Meetups, demo nights & hackathons",
  description: siteMetadata.locations,
});

export const metadata: Metadata = {
  title: "Events",
  description: eventsDescription,
  alternates: {
    canonical: "/events",
  },
  openGraph: {
    type: "website",
    title: "Events — AI Nexus",
    description: eventsDescription,
    url: "/events",
    images: [
      {
        url: eventsOgImage,
        width: 1200,
        height: 630,
        alt: "Upcoming AI Nexus events in London, San Francisco and Boston",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Events — AI Nexus",
    description: eventsDescription,
    images: [eventsOgImage],
  },
};

async function getEvents(): Promise<Event[]> {
  const lumaApiKey = process.env.LUMA_API_KEY;

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

export default async function EventsPage() {
  const events = await getEvents();
  const lumaCalendarUrl = process.env.LUMA_CALENDAR_URL;
  const useLumaEmbed = !process.env.LUMA_API_KEY && !!lumaCalendarUrl;

  const currentHackathon = {
    title: "Cactus x Google DeepMind Hackathon",
    date: "Saturday, February 21, 2026",
    location: "6 Cities + Online",
    description: "Build agentic systems that run locally on-device using FunctionGemma on Cactus Engine, with seamless fallback to Gemini in the cloud.",
    href: "/cactus-deepmind",
    lumaUrl: "https://luma.com/f0arqlwy",
    sponsors: [
      { name: "Google DeepMind", logo: "/logos/deepmind.svg" },
      { name: "Cactus Compute", logo: "/logos/cactus.png" },
    ],
  };

  return (
    <Section className="min-h-screen pt-8">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Upcoming events
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Join us for curated meetups, demo nights, and hackathons across London
          and San Francisco.
        </p>
      </div>

      {/* Featured Hackathons */}
      <div className="mb-12 md:mb-16">
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Featured Hackathons
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Multi-city hackathons bringing together builders from around the world
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4">
          <HackathonCard {...currentHackathon} />
        </div>
      </div>

      {/* Regular Events */}
      <div className="mb-8">
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Meetups & Demo Nights
          </h2>
        </div>
        {useLumaEmbed && lumaCalendarUrl ? (
          <EventEmbed calendarUrl={lumaCalendarUrl} view="calendar" />
        ) : (
          <EventList events={events} />
        )}
      </div>
    </Section>
  );
}
