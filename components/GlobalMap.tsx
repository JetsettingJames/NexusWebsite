"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Section } from "@/components/Section";
import { Globe } from "lucide-react";

// Dynamically import Globe component to avoid SSR issues
const GlobeComponent = dynamic(() => import("react-globe.gl"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[300px] md:h-[500px] flex items-center justify-center">
      <div className="text-muted-foreground">Loading globe...</div>
    </div>
  ),
});

interface City {
  name: string;
  lat: number;
  lng: number;
  country: string;
}

const cities: City[] = [
  { name: "San Francisco", lat: 37.7749, lng: -122.4194, country: "USA" },
  { name: "London", lat: 51.5074, lng: -0.1278, country: "UK" },
  { name: "Boston", lat: 42.3601, lng: -71.0589, country: "USA" },
  { name: "Los Angeles", lat: 34.0522, lng: -118.2437, country: "USA" },
  { name: "Washington DC", lat: 38.9072, lng: -77.0369, country: "USA" },
  { name: "Singapore", lat: 1.3521, lng: 103.8198, country: "Singapore" },
];

export function GlobalMap() {
  const globeRef = useRef<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (globeRef.current && isLoaded) {
      // Auto-rotate the globe
      const rotationSpeed = 0.1;
      let rotation = 0;

      const rotate = () => {
        if (!isHovered && globeRef.current) {
          rotation += rotationSpeed;
          globeRef.current.pointOfView({ lat: 0, lng: rotation, altitude: 2.5 }, 0);
        }
        requestAnimationFrame(rotate);
      };

      const animationId = requestAnimationFrame(rotate);
      return () => cancelAnimationFrame(animationId);
    }
  }, [isLoaded, isHovered]);

  // Generate arcs between cities
  const arcs = [];
  for (let i = 0; i < cities.length; i++) {
    for (let j = i + 1; j < cities.length; j++) {
      arcs.push({
        startLat: cities[i].lat,
        startLng: cities[i].lng,
        endLat: cities[j].lat,
        endLng: cities[j].lng,
      });
    }
  }

  return (
    <Section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-teal-500/5 to-cyan-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_70%)]" />
      <div className="relative">
        <div className="text-center space-y-4 mb-8 md:mb-12 px-4">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <Globe className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
              Global Events
            </h2>
          </div>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us in 6 cities worldwide or participate online
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-sm md:text-base text-muted-foreground mt-4">
            {cities.map((city, index) => (
              <span key={city.name}>
                {city.name}
                {index < cities.length - 1 && <span className="mx-2">•</span>}
              </span>
            ))}
            <span className="mx-2">•</span>
            <span className="font-semibold text-foreground">Online</span>
          </div>
        </div>

        <div
          className="relative w-full mx-auto h-[300px] md:h-[500px] rounded-2xl overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Glow effect container */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-teal-500/10 rounded-2xl pointer-events-none z-10" />
          
          <div className="hidden md:block h-full relative">
            <GlobeComponent
              ref={globeRef}
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
              backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
              pointsData={cities}
              pointLat="lat"
              pointLng="lng"
              pointColor={() => "#60a5fa"}
              pointRadius={0.8}
              pointLabel={(d: any) => `${d.name}, ${d.country}`}
              pointsMerge={true}
              pointResolution={2}
              pointAltitude={0.02}
              arcsData={arcs}
              arcStartLat="startLat"
              arcStartLng="startLng"
              arcEndLat="endLat"
              arcEndLng="endLng"
              arcColor={() => ["#3b82f6", "#14b8a6", "#8b5cf6"]}
              arcDashLength={0.5}
              arcDashGap={0.15}
              arcDashAnimateTime={2000}
              arcStroke={0.4}
              arcCurveResolution={64}
              onGlobeReady={() => setIsLoaded(true)}
              width={undefined}
              height={undefined}
              backgroundColor="rgba(0,0,0,0)"
            />
          </div>
          <div className="block md:hidden h-full relative">
            <GlobeComponent
              ref={globeRef}
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
              backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
              pointsData={cities}
              pointLat="lat"
              pointLng="lng"
              pointColor={() => "#60a5fa"}
              pointRadius={0.6}
              pointLabel={(d: any) => `${d.name}, ${d.country}`}
              pointsMerge={true}
              pointResolution={2}
              pointAltitude={0.02}
              arcsData={arcs.slice(0, 6)} // Fewer arcs on mobile for performance
              arcStartLat="startLat"
              arcStartLng="startLng"
              arcEndLat="endLat"
              arcEndLng="endLng"
              arcColor={() => ["#3b82f6", "#14b8a6"]}
              arcDashLength={0.4}
              arcDashGap={0.2}
              arcDashAnimateTime={2000}
              arcStroke={0.3}
              arcCurveResolution={32}
              onGlobeReady={() => setIsLoaded(true)}
              width={undefined}
              height={undefined}
              backgroundColor="rgba(0,0,0,0)"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
