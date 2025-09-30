"use client";

interface EventEmbedProps {
  calendarUrl: string;
  view?: "list" | "calendar";
  compact?: boolean;
}

export function EventEmbed({
  calendarUrl,
  view = "list",
  compact = false,
}: EventEmbedProps) {
  // Responsive heights for mobile vs desktop
  const height = compact ? "350px" : "500px";
  
  // Convert lu.ma URL to embed format if needed
  let embedUrl = calendarUrl;
  if (calendarUrl.includes('lu.ma/')) {
    // Extract calendar ID from lu.ma URL
    const calId = calendarUrl.split('lu.ma/')[1];
    embedUrl = `https://lu.ma/embed/calendar/${calId}/events`;
  } else if (!calendarUrl.includes('/embed/')) {
    // If it's already a luma.com URL but not embed format
    embedUrl = `${calendarUrl}/embed/events`;
  }

  return (
    <div className="w-full rounded-lg overflow-hidden border bg-card shadow-lg">
      <iframe
        src={embedUrl}
        width="100%"
        height={height}
        frameBorder="0"
        title="Event calendar"
        className="w-full min-h-[350px] md:min-h-[500px]"
        aria-label="Luma event calendar"
        allowFullScreen
      />
    </div>
  );
}
