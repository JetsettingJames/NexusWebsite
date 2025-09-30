import { Section } from "@/components/Section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, Rocket } from "lucide-react";

export function CommunitySection() {
  return (
    <Section id="community">
      <div className="text-center space-y-3 mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
          Community
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
          Quality over quantity. Every event is carefully curated for impact.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
        <Card className="group relative overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <CardHeader className="relative">
            <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
              <Users className="h-8 w-8" aria-hidden="true" />
            </div>
            <CardTitle className="text-2xl">Curated meetups</CardTitle>
            <CardDescription className="text-base">
              Intimate, topic-led sessions for founders, researchers, and
              engineers.
            </CardDescription>
          </CardHeader>
          <CardContent className="relative">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Join focused discussions on the latest in AI research, practical
              implementations, and emerging trends. Network with peers tackling
              similar challenges.
            </p>
          </CardContent>
        </Card>

        <Card className="group relative overflow-hidden hover:shadow-xl hover:border-accent/50 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <CardHeader className="relative">
            <div className="mb-4 inline-flex p-3 rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20">
              <Rocket className="h-8 w-8" aria-hidden="true" />
            </div>
            <CardTitle className="text-2xl">Demo nights & hackathons</CardTitle>
            <CardDescription className="text-base">
              Ship fast, get feedback, and meet collaborators.
            </CardDescription>
          </CardHeader>
          <CardContent className="relative">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Showcase your projects, get real-time feedback from experts, and
              collaborate with builders across the ecosystem. Rapid iteration
              meets real community.
            </p>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
