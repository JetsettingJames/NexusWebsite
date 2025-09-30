import { Section } from "@/components/Section";
import { StatBadge } from "@/components/StatBadge";

export function StatsSection() {
  return (
    <Section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 px-4">
        <div className="text-center group w-full md:w-auto">
          <div className="inline-flex flex-col items-center gap-2 px-6 py-5 md:px-8 md:py-6 rounded-2xl bg-background/80 backdrop-blur-sm border-2 border-primary/20 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all w-full md:w-auto">
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              1,500+
            </span>
            <span className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground font-medium">
              Active members
            </span>
          </div>
        </div>
        <div className="hidden md:block h-16 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
        <div className="text-center group w-full md:w-auto">
          <div className="inline-flex flex-col items-center gap-2 px-6 py-5 md:px-8 md:py-6 rounded-2xl bg-background/80 backdrop-blur-sm border-2 border-accent/20 shadow-lg hover:shadow-xl hover:border-accent/40 transition-all w-full md:w-auto">
            <span className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
              London • San Francisco
            </span>
            <span className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground font-medium">
              Two vibrant hubs
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}
