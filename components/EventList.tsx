import { EventCard, type Event } from "@/components/EventCard";

interface EventListProps {
  events: Event[];
  limit?: number;
}

export function EventList({ events, limit }: EventListProps) {
  const displayEvents = limit ? events.slice(0, limit) : events;

  if (events.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-muted-foreground">
          No upcoming events at the moment. Check back soon!
        </p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
