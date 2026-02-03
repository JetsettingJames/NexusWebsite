import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Users, Trophy, Clock, Zap, Globe, Code, Cloud, Smartphone } from "lucide-react";
import { createOgImageUrl } from "@/lib/metadata";

const hackathonDescription =
  "A multi-city, one-day global hackathon exploring agentic systems that run locally on-device using FunctionGemma on Cactus Engine, with seamless fallback to Gemini in the cloud. February 21, 2026.";

const hackathonOgImage = createOgImageUrl({
  eyebrow: "AI Nexus Hackathon",
  title: "Cactus x Google DeepMind Hackathon",
  description: "Local-first AI with FunctionGemma & Gemini • Feb 21, 2026",
});

export const metadata: Metadata = {
  title: "Cactus x Google DeepMind Hackathon",
  description: hackathonDescription,
  alternates: {
    canonical: "/cactus-deepmind",
  },
  openGraph: {
    type: "website",
    title: "Cactus x Google DeepMind Hackathon — AI Nexus",
    description: hackathonDescription,
    url: "/cactus-deepmind",
    images: [
      {
        url: hackathonOgImage,
        width: 1200,
        height: 630,
        alt: "Cactus x Google DeepMind Hackathon presented by AI Nexus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cactus x Google DeepMind Hackathon — AI Nexus",
    description: hackathonDescription,
    images: [hackathonOgImage],
  },
};

const cities = [
  { name: "San Francisco", country: "California, USA" },
  { name: "London", country: "United Kingdom" },
  { name: "Boston", country: "Massachusetts, USA" },
  { name: "Los Angeles", country: "California, USA" },
  { name: "DC/Maryland", country: "USA" },
  { name: "Singapore", country: "Singapore" },
];

export default function CactusDeepMindHackathonPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="relative pt-16 pb-12 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-background to-teal-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_50%)] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(20,184,166,0.15),transparent_50%)] animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="relative text-center space-y-8 max-w-5xl mx-auto">
          <div className="inline-block mb-4 animate-fade-in">
            <Badge className="px-4 py-2 text-sm font-medium hover:scale-105 transition-transform bg-gradient-to-r from-blue-500 to-teal-500 text-white border-0">
              <Globe className="w-4 h-4 mr-2" />
              Multi-City Global Hackathon
            </Badge>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground to-foreground/70 px-4 animate-fade-in-up">
            Cactus x Google DeepMind Hackathon
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Build agentic systems that run locally on-device using FunctionGemma on Cactus Engine, with seamless fallback to Gemini in the cloud.
          </p>

          <div className="flex items-center justify-center gap-2 text-muted-foreground flex-wrap px-4">
            <Calendar className="w-5 h-5" />
            <span className="text-lg font-medium">Saturday, February 21, 2026</span>
            <span className="hidden sm:inline">•</span>
            <MapPin className="w-5 h-5" />
            <span className="text-lg font-medium">6 Cities + Online</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4 px-4 animate-fade-in">
            <Button size="lg" className="group w-full sm:w-auto hover:scale-105 transition-all" asChild>
              <Link href="https://luma.com/f0arqlwy" target="_blank" rel="noopener noreferrer">
                Register now
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Sponsors/Hosts Section */}
      <Section className="bg-muted/30">
        <div className="text-center space-y-8">
          <div>
            <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-6">
              Organized by
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center justify-items-center max-w-5xl mx-auto">
              <div className="relative h-12 w-32 md:h-16 md:w-40 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Image
                  src="/logos/deepmind.svg"
                  alt="Google DeepMind logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-12 w-32 md:h-16 md:w-40 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Image
                  src="/logos/cactus.png"
                  alt="Cactus Compute logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-sm font-semibold text-foreground">AI Tinkerers</p>
                <p className="text-xs text-muted-foreground">Community Partner</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-sm font-semibold text-foreground">AI Nexus</p>
                <p className="text-xs text-muted-foreground">Presented by</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* City Locations Section */}
      <Section id="locations">
        <div className="text-center space-y-4 mb-12 px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
            Global Locations
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us in person or online from anywhere in the world
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 max-w-6xl mx-auto px-4">
          {cities.map((city) => (
            <Card key={city.name} className="p-4 md:p-6 space-y-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
              <MapPin className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto" />
              <h3 className="text-base md:text-lg font-semibold">{city.name}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">{city.country}</p>
            </Card>
          ))}
          <Card className="p-4 md:p-6 space-y-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center border-2 border-primary/30">
            <Globe className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto" />
            <h3 className="text-base md:text-lg font-semibold">Online/Remote</h3>
            <p className="text-xs md:text-sm text-muted-foreground">Join from anywhere</p>
          </Card>
        </div>
      </Section>

      {/* What You'll Build */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-teal-500/5 to-cyan-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_60%)]" />
        <div className="relative">
          <div className="text-center space-y-4 mb-12 px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
              What You&apos;ll Be Building
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Create agentic applications that combine local execution with cloud intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
            <Card className="p-6 space-y-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <Smartphone className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-semibold">Local-First AI</h3>
              <p className="text-muted-foreground">
                FunctionGemma for fast, local execution on mobile devices and Macs using Cactus Compute as the runtime.
              </p>
            </Card>

            <Card className="p-6 space-y-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <Cloud className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-semibold">Cloud Fallback</h3>
              <p className="text-muted-foreground">
                Gemini APIs as a cloud fallback for more complex reasoning and heavy tasks when local processing isn&apos;t sufficient.
              </p>
            </Card>
          </div>

          <div className="mt-8 max-w-3xl mx-auto px-4">
            <Card className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-center">The Goal</h3>
              <p className="text-center text-muted-foreground">
                Design systems that intelligently decide <strong>where</strong> computation should happen — locally or in the cloud — based on context, cost, latency, and capability.
              </p>
            </Card>
          </div>

          <div className="mt-8 max-w-4xl mx-auto px-4">
            <Card className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-center mb-4">Example Directions</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">Offline-first AI assistants with cloud escalation</p>
                </div>
                <div className="flex items-start gap-3">
                  <Code className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">Local agents coordinating tools and workflows</p>
                </div>
                <div className="flex items-start gap-3">
                  <Smartphone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">Privacy-preserving AI apps that minimize data exfiltration</p>
                </div>
                <div className="flex items-start gap-3">
                  <Cloud className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">Hybrid inference pipelines across edge + cloud</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Key Details */}
      <Section id="details">
        <div className="text-center space-y-4 mb-12 px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
            Event details
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about the hackathon
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
          <Card className="p-6 space-y-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">When</h3>
            <p className="text-muted-foreground">
              Saturday, February 21, 2026
              <br />
              8:30 AM - 8:30 PM PST
            </p>
          </Card>

          <Card className="p-6 space-y-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Where</h3>
            <p className="text-muted-foreground">
              6 cities worldwide
              <br />
              Plus online/remote option
            </p>
          </Card>

          <Card className="p-6 space-y-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Who</h3>
            <p className="text-muted-foreground">
              Senior engineers, technical founders, ML/infra engineers
              <br />
              Teams of 1-4 builders
            </p>
          </Card>
        </div>
      </Section>

      {/* Schedule */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-teal-500/5 to-cyan-500/5" />
        <div className="relative">
          <div className="text-center space-y-4 mb-12 px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
              Schedule
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 px-4">
            {[
              { time: "8:30 AM", event: "Doors open, breakfast & networking" },
              { time: "9:00 AM", event: "Welcome + technical overview from Google DeepMind & Cactus Compute" },
              { time: "10:00 AM", event: "Hacking begins" },
              { time: "10:30 AM", event: "Team formation deadline" },
              { time: "5:30 PM", event: "Project submissions due" },
              { time: "6:00 PM", event: "Preliminary judging" },
              { time: "7:00 PM", event: "Final demos" },
              { time: "8:00 PM", event: "Winners announced" },
              { time: "8:30 PM", event: "Event concludes" },
            ].map((item, index) => (
              <Card key={index} className="p-4 md:p-6 hover:shadow-md hover:border-primary/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <div className="font-semibold text-primary min-w-[80px]">{item.time}</div>
                  <div className="text-muted-foreground">{item.event}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Teams */}
      <Section>
        <div className="text-center space-y-4 mb-12 px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
            How Teams Work
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 px-4">
          <Card className="p-6 space-y-4">
            <div className="flex items-start gap-4">
              <Users className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Team Formation</h3>
                <p className="text-muted-foreground">
                  Teams of <strong>1-4 builders</strong>. Solo builders are welcome! You can arrive with an idea or form one on the spot.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-start gap-4">
              <Trophy className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Submission Requirements</h3>
                <p className="text-muted-foreground mb-2">All teams must submit:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>A working demo</li>
                  <li>A short explanation of architecture & trade-offs</li>
                  <li>Clear use of FunctionGemma and/or Gemini</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* What You'll Get */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-teal-500/5 to-cyan-500/5" />
        <div className="relative">
          <div className="text-center space-y-4 mb-12 px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
              What You&apos;ll Get
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 px-4">
            {[
              "Direct access to DeepMind and Cactus Compute technical context",
              "A high-signal room of builders who ship",
              "Real-time feedback on your architecture and design decisions",
              "Exposure for standout projects across the AI Tinkerers network",
              "Prizes and recognition for top teams (details announced on-site)",
            ].map((benefit, index) => (
              <Card key={index} className="p-4 md:p-6 hover:shadow-md hover:border-primary/30 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 max-w-3xl mx-auto px-4">
            <Card className="p-6 md:p-8 space-y-4 border-2 border-primary/50">
              <p className="text-center text-lg font-semibold">
                Most importantly: You&apos;ll leave having built something real — and learned patterns you can reuse immediately.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="text-center space-y-4 mb-12 px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
            Frequently asked questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 px-4">
          <Card className="p-4 md:p-6 hover:shadow-md hover:border-primary/30 transition-all duration-300">
            <h3 className="text-base md:text-lg font-semibold mb-2">What are the team sizes?</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Teams of 1-4 builders. Solo builders are welcome! You can arrive with an idea or form one on the spot.
            </p>
          </Card>

          <Card className="p-4 md:p-6 hover:shadow-md hover:border-primary/30 transition-all duration-300">
            <h3 className="text-base md:text-lg font-semibold mb-2">What technologies will I use?</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              You&apos;ll be building with FunctionGemma for local execution, Cactus Compute as the runtime, and Gemini APIs for cloud fallback. The goal is to create hybrid systems that intelligently decide where computation happens.
            </p>
          </Card>

          <Card className="p-4 md:p-6 hover:shadow-md hover:border-primary/30 transition-all duration-300">
            <h3 className="text-base md:text-lg font-semibold mb-2">Is this hackathon curated?</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Yes. This hackathon is curated. Attendees are actively building AI systems in production or near-production environments. You&apos;ll be working alongside senior software engineers, technical founders, ML/infra engineers, and researchers translating ideas into products.
            </p>
          </Card>

          <Card className="p-4 md:p-6 hover:shadow-md hover:border-primary/30 transition-all duration-300">
            <h3 className="text-base md:text-lg font-semibold mb-2">Can I participate remotely?</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Yes! There&apos;s an online/remote option available. You can join from anywhere in the world.
            </p>
          </Card>

          <Card className="p-4 md:p-6 hover:shadow-md hover:border-primary/30 transition-all duration-300">
            <h3 className="text-base md:text-lg font-semibold mb-2">How do I register?</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Space is limited to 150 attendees per city, and registration is reviewed to maintain a high-signal room. Click the &quot;Register now&quot; button above to request to join.
            </p>
          </Card>

          <Card className="p-4 md:p-6 hover:shadow-md hover:border-primary/30 transition-all duration-300">
            <h3 className="text-base md:text-lg font-semibold mb-2">What are the prizes?</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Prizes and recognition details will be announced on-site. Top teams will receive exposure across the AI Tinkerers network and direct feedback from DeepMind and Cactus Compute teams.
            </p>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section id="register" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-background to-teal-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="relative text-center space-y-8 max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight">
            Ready to build the future of local-first AI?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground">
            Join engineers, founders, and researchers in building agentic systems that push inference closer to the user without giving up access to frontier models when needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4">
            <Button size="lg" className="group w-full sm:w-auto text-base md:text-lg px-6 md:px-8 hover:scale-105 transition-all" asChild>
              <Link href="https://luma.com/f0arqlwy" target="_blank" rel="noopener noreferrer">
                Register on Luma
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Space is limited to 150 attendees per city • Registration requires approval
          </p>
        </div>
      </Section>
    </>
  );
}
