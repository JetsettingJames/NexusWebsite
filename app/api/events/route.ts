import { NextResponse } from "next/server";
import type { Event } from "@/components/EventCard";

export const revalidate = 600; // Revalidate every 10 minutes

export async function GET() {
  const lumaApiKey = process.env.LUMA_API_KEY;

  if (!lumaApiKey) {
    // Return empty array if API key is not configured
    return NextResponse.json({ events: [] });
  }

  try {
    // TODO: Replace with actual Luma API endpoint
    // This is a placeholder implementation
    const response = await fetch("https://api.lu.ma/events", {
      headers: {
        Authorization: `Bearer ${lumaApiKey}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 600 },
    });

    if (!response.ok) {
      throw new Error(`Luma API error: ${response.status}`);
    }

    const data = await response.json();

    // Transform Luma API response to our Event type
    const events: Event[] = data.events?.map((lumaEvent: any) => ({
      id: lumaEvent.id,
      title: lumaEvent.name || lumaEvent.title,
      description: lumaEvent.description || "",
      startDate: lumaEvent.start_date || lumaEvent.startAt,
      endDate: lumaEvent.end_date || lumaEvent.endAt,
      location: lumaEvent.location?.name || lumaEvent.venue?.name,
      isOnline: lumaEvent.is_online || lumaEvent.location_type === "online",
      rsvpUrl: lumaEvent.url || `https://lu.ma/${lumaEvent.id}`,
      coverImage: lumaEvent.cover_image || lumaEvent.image_url,
    })) || [];

    return NextResponse.json({ events });
  } catch (error) {
    console.error("Error fetching events from Luma:", error);
    return NextResponse.json(
      { error: "Failed to fetch events", events: [] },
      { status: 500 }
    );
  }
}
