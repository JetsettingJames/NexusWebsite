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
  
  // Convert URL to embed format if needed
  let embedUrl = calendarUrl;
  
  // If already in embed format (luma.com/embed/calendar/cal-XXX/events), use as-is
  if (calendarUrl.includes('/embed/calendar/') && calendarUrl.includes('/events')) {
    embedUrl = calendarUrl;
  } else if (calendarUrl.includes('/embed/')) {
    // If it has /embed/ but not the full path, use as-is
    embedUrl = calendarUrl;
  } else {
    // Extract calendar ID from various URL formats
    let calId = '';
    
    // Handle lu.ma URLs: https://lu.ma/cal-XXX or https://lu.ma/calendar/cal-XXX
    if (calendarUrl.includes('lu.ma/')) {
      const match = calendarUrl.match(/lu\.ma\/(?:calendar\/)?(cal-[A-Za-z0-9]+)/);
      if (match) {
        calId = match[1];
        embedUrl = `https://luma.com/embed/calendar/${calId}/events`;
      }
    }
    // Handle luma.com URLs: https://luma.com/cal-XXX or https://luma.com/calendar/cal-XXX
    else if (calendarUrl.includes('luma.com/')) {
      const match = calendarUrl.match(/luma\.com\/(?:calendar\/)?(cal-[A-Za-z0-9]+)/);
      if (match) {
        calId = match[1];
        embedUrl = `https://luma.com/embed/calendar/${calId}/events`;
      }
    }
    // Fallback: try to extract any cal-XXX pattern
    else {
      const match = calendarUrl.match(/(cal-[A-Za-z0-9]+)/);
      if (match) {
        calId = match[1];
        embedUrl = `https://luma.com/embed/calendar/${calId}/events`;
      }
    }
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
