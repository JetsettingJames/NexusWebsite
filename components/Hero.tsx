import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/Section";
import { Calendar } from "lucide-react";

export function Hero() {
  return (
    <Section className="relative pt-16 pb-12 md:pt-32 md:pb-24 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 animate-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.15),transparent_50%)] animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(var(--accent)/0.1),transparent_50%)]" />
      
      <div className="relative text-center space-y-8 max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            1,500+ active members
          </span>
          <Link href="/hackathon" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium border border-accent/20 hover:bg-accent/20 transition-colors">
            <Calendar className="w-4 h-4" />
            Mobile Hackathon • Nov 27-28
          </Link>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground to-foreground/70 px-4">
          Where AI founders, researchers, and builders meet.
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
          AI Nexus is a 1,500+ expert community running curated meetups, demo
          nights, and hackathons across{" "}
          <span className="font-semibold text-foreground">London</span> and{" "}
          <span className="font-semibold text-foreground">San Francisco</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4 px-4 w-full sm:w-auto">
          <Button size="lg" className="group w-full sm:w-auto" asChild>
            <Link href="/events">
              See upcoming events
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-2 w-full sm:w-auto" asChild>
            <Link href="/#join">Join the community</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
