import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Calendar, MapPin, Trophy, ExternalLink } from "lucide-react";
import Image from "next/image";

interface HackathonCardProps {
  title: string;
  date: string;
  location: string;
  description: string;
  href: string;
  lumaUrl?: string;
  isPast?: boolean;
  sponsors?: Array<{ name: string; logo?: string }>;
}

export function HackathonCard({
  title,
  date,
  location,
  description,
  href,
  lumaUrl,
  isPast = false,
  sponsors = [],
}: HackathonCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-2">
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
              {isPast && (
                <Badge variant="outline" className="text-xs">
                  Past Event
                </Badge>
              )}
              {!isPast && (
                <Badge className="bg-gradient-to-r from-blue-500 to-teal-500 text-white border-0">
                  Hackathon
                </Badge>
              )}
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span>{location}</span>
              </div>
            </div>
          </div>
          <Trophy className="w-6 h-6 md:w-8 md:h-8 text-primary flex-shrink-0" />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="line-clamp-2 text-base">
          {description}
        </CardDescription>
        
        {sponsors.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-muted-foreground">Sponsored by:</span>
            {sponsors.map((sponsor, index) => (
              <div key={index} className="flex items-center gap-1">
                {sponsor.logo ? (
                  <div className="relative h-4 w-16">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      fill
                      className="object-contain opacity-70"
                    />
                  </div>
                ) : (
                  <span className="text-xs text-muted-foreground">{sponsor.name}</span>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-2">
          <Button asChild className="flex-1">
            <Link href={href}>
              Learn more
              <span className="ml-2">→</span>
            </Link>
          </Button>
          {lumaUrl && !isPast && (
            <Button variant="outline" asChild className="flex-1">
              <a
                href={lumaUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Register for ${title} on Luma`}
              >
                Register
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
