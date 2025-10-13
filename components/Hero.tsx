import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/Section";
import { Calendar } from "lucide-react";

export function Hero() {
  return (
    <Section className="relative pt-16 pb-12 md:pt-32 md:pb-24 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-background to-cyan-500/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.15),transparent_50%)] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.15),transparent_50%)] animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.08),transparent_70%)]" />
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="relative text-center space-y-8 max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            1,500+ active members
          </span>
          <Link href="/hackathon" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white text-sm font-semibold shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 hover:scale-105 transition-all">
            <Calendar className="w-4 h-4" />
            Mobile Hackathon • Nov 28-29
          </Link>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground to-foreground/70 px-4">
          Where AI founders, researchers, and builders meet.
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
          AI Nexus is a 1,500+ expert community running curated meetups, demo
          nights, and hackathons across{" "}
          <span className="font-semibold text-foreground">London</span>,{" "}
          <span className="font-semibold text-foreground">Boston</span>, and{" "}
          <span className="font-semibold text-foreground">San Francisco</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4 px-4 w-full sm:w-auto">
          <Button size="lg" className="group w-full sm:w-auto" asChild>
            <Link href="/events">
              See upcoming events
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
