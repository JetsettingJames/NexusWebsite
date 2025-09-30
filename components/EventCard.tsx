import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import { format } from "date-fns";
import Image from "next/image";

export interface Event {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  location?: string;
  isOnline: boolean;
  rsvpUrl: string;
  coverImage?: string;
}

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const eventDate = new Date(event.startDate);
  const formattedDate = format(eventDate, "d MMMM yyyy");
  const formattedTime = format(eventDate, "HH:mm");

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      {event.coverImage && (
        <div className="relative h-48 w-full bg-muted">
          <Image
            src={event.coverImage}
            alt={event.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2 flex-1">
            <CardTitle className="text-xl">{event.title}</CardTitle>
            <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                <span>
                  {formattedDate} at {formattedTime}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span>{event.isOnline ? "Online" : event.location}</span>
              </div>
            </div>
          </div>
          {event.isOnline && (
            <Badge variant="secondary" aria-label="Online event">
              Online
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="line-clamp-3">
          {event.description}
        </CardDescription>
        <Button asChild className="w-full">
          <a
            href={event.rsvpUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`RSVP for ${event.title} on Luma`}
          >
            RSVP on Luma
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
