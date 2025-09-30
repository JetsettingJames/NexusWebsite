import { Section } from "@/components/Section";
import { EventList } from "@/components/EventList";
import { EventEmbed } from "@/components/EventEmbed";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Event } from "@/components/EventCard";

interface EventsPreviewProps {
  events: Event[];
  useLumaEmbed?: boolean;
  lumaCalendarUrl?: string;
}

export function EventsPreview({
  events,
  useLumaEmbed = false,
  lumaCalendarUrl,
}: EventsPreviewProps) {
  return (
    <Section id="events">
      <div className="text-center space-y-3 mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
          Upcoming events
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
          Join us for curated meetups, demo nights, and hackathons.
        </p>
      </div>

      {useLumaEmbed && lumaCalendarUrl ? (
        <EventEmbed calendarUrl={lumaCalendarUrl} view="list" compact />
      ) : (
        <EventList events={events} limit={3} />
      )}

      <div className="text-center mt-6 md:mt-8 px-4">
        <Button size="lg" className="w-full sm:w-auto" asChild>
          <Link href="/events">View all events</Link>
        </Button>
      </div>
    </Section>
  );
}
