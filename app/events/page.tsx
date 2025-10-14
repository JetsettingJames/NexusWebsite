import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { EventList } from "@/components/EventList";
import { EventEmbed } from "@/components/EventEmbed";
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

      {useLumaEmbed && lumaCalendarUrl ? (
        <EventEmbed calendarUrl={lumaCalendarUrl} view="calendar" />
      ) : (
        <EventList events={events} />
      )}
    </Section>
  );
}
