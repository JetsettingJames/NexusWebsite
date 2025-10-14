import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Calendar, MapPin, Users, Trophy, Clock, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Mobile Agent Hackathon — AI Nexus",
  description:
    "Build the future of local, private and personal AI. Join Flutter, React Native and Kotlin developers for the Mobile Agent Hackathon on November 28-29.",
};

export default function HackathonPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="relative pt-16 pb-12 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-background to-pink-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(249,115,22,0.15),transparent_50%)] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.15),transparent_50%)] animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="relative text-center space-y-8 max-w-5xl mx-auto">
          <div className="inline-block mb-4 animate-fade-in">
            <Badge className="px-4 py-2 text-sm font-medium hover:scale-105 transition-transform">
              <Calendar className="w-4 h-4 mr-2" />
              November 28-29, 2025
            </Badge>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground to-foreground/70 px-4 animate-fade-in-up">
            Mobile Agent Hackathon
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            The future of personal AI lives on the edge. Build the future of local, private and personal AI with Cactus (YC S25), Nothing Phones, and HuggingFace.
          </p>

          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="w-5 h-5" />
            <span className="text-lg font-medium">London, UK + Online Globally</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4 px-4 animate-fade-in">
            <Button size="lg" className="group w-full sm:w-auto hover:scale-105 transition-all" asChild>
              <Link href="https://luma.com/jrec73nt" target="_blank" rel="noopener noreferrer">
                Register now
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Sponsors Section */}
      <Section className="bg-muted/30">
        <div className="text-center space-y-8">
          <div>
            <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-6">
              Proudly sponsored by
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center max-w-4xl mx-auto">
              <div className="relative h-16 w-40 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Image
                  src="/logos/cactus.png"
                  alt="Cactus (YC S25) logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-16 w-40 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Image
                  src="/logos/huggingface.svg"
                  alt="HuggingFace logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-16 w-40 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Image
                  src="/logos/nothing.svg"
                  alt="Nothing logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
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
              November 28-29, 2025
              <br />
              5 PM to 5 PM GMT
            </p>
          </Card>

          <Card className="p-6 space-y-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Where</h3>
            <p className="text-muted-foreground">
              London, UK (Venue TBA)
              <br />
              Or join online from anywhere
            </p>
          </Card>

          <Card className="p-6 space-y-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Who</h3>
            <p className="text-muted-foreground">
              Flutter, React Native & Kotlin developers
              <br />
              Teams of 1-3 people
            </p>
          </Card>
        </div>
      </Section>

      {/* What to Build */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-violet-500/5 to-pink-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.08),transparent_60%)]" />
        <div className="relative">
          <div className="text-center space-y-4 mb-12 px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
              Challenge Tracks
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Build innovative solutions using cutting-edge mobile AI technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
          <Card className="p-6 space-y-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <Zap className="w-8 h-8 text-primary" />
            <h3 className="text-xl font-semibold">Shared Memory & RAG</h3>
            <p className="text-muted-foreground">
              Design shared memory/RAG/knowledge systems for local LLMs running on mobile devices.
            </p>
          </Card>

          <Card className="p-6 space-y-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <Trophy className="w-8 h-8 text-primary" />
            <h3 className="text-xl font-semibold">Hybrid Inference Strategy</h3>
            <p className="text-muted-foreground">
              Design a local-cloud hybrid inference strategy that balances performance and privacy.
            </p>
          </Card>
          </div>

          <div className="mt-8 max-w-3xl mx-auto px-4">
            <Card className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-center">Tech Stack</h3>
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Framework</p>
                  <p className="font-semibold">Cactus (YC S25)</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Models</p>
                  <p className="font-semibold">HuggingFace Smol 500m VLM or Qwen3 600m</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Test Device</p>
                  <p className="font-semibold">Nothing Phones</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>


      {/* Prizes */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-orange-500/5 to-pink-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1),transparent_70%)]" />
        <div className="relative">
          <div className="text-center space-y-4 mb-12 px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
              Prizes & perks
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Amazing prizes for the best projects
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 px-4">
            <Card className="p-6 md:p-8 space-y-4 border-2 border-primary/50 relative overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold">
                WINNER
              </div>
              <Trophy className="w-12 h-12 text-primary" />
              <h3 className="text-2xl font-bold">1st Place</h3>
              <p className="text-muted-foreground">
                Sponsored trip to San Francisco for a week + Lunch with a YC partner
              </p>
            </Card>

            <Card className="p-6 md:p-8 space-y-4 border-2 hover:shadow-lg transition-all duration-300">
              <Trophy className="w-10 h-10 text-primary" />
              <h3 className="text-xl font-bold">Top 3</h3>
              <p className="text-muted-foreground">
                Guaranteed job interview at Cactus, HuggingFace and Nothing
              </p>
            </Card>

            <Card className="p-6 md:p-8 space-y-4 border-2 hover:shadow-lg transition-all duration-300">
              <Trophy className="w-10 h-10 text-primary" />
              <h3 className="text-xl font-bold">Top 5</h3>
              <p className="text-muted-foreground">
                Roundtable dinner with leaders from Cactus, HuggingFace and Nothing
              </p>
            </Card>
          </div>

          <div className="mt-8 text-center relative">
            <p className="text-muted-foreground">
              Other prizes: Nothing Phone, HuggingFace Reachy Robot, and more!
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Details to be emailed after acceptance!
            </p>
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
              Teams can be 1-3 people. You can participate solo or form a small team.
            </p>
          </Card>

          <Card className="p-4 md:p-6 hover:shadow-md hover:border-primary/30 transition-all duration-300">
            <h3 className="text-base md:text-lg font-semibold mb-2">What technologies should I use?</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              We&apos;re inviting Flutter, React Native, and Kotlin developers. You&apos;ll use the Cactus framework (YC S25), HuggingFace Smol 500m VLM or Qwen3 600m models, and test on Nothing Phones.
            </p>
          </Card>

          <Card className="p-4 md:p-6 hover:shadow-md hover:border-primary/30 transition-all duration-300">
            <h3 className="text-base md:text-lg font-semibold mb-2">What are the challenge tracks?</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              There are two tracks: (1) Design shared memory/RAG/knowledge for local LLMs, and (2) Design a local-cloud hybrid inference strategy.
            </p>
          </Card>

          <Card className="p-4 md:p-6 hover:shadow-md hover:border-primary/30 transition-all duration-300">
            <h3 className="text-base md:text-lg font-semibold mb-2">Is there a cost to attend?</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              No! The event is completely free thanks to our generous sponsors.
            </p>
          </Card>

          <Card className="p-4 md:p-6 hover:shadow-md hover:border-primary/30 transition-all duration-300">
            <h3 className="text-base md:text-lg font-semibold mb-2">Can I participate remotely?</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Yes! The hackathon is available both in-person in London and online globally.
            </p>
          </Card>

          <Card className="p-4 md:p-6 hover:shadow-md hover:border-primary/30 transition-all duration-300">
            <h3 className="text-base md:text-lg font-semibold mb-2">When will I receive more details?</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Additional details will be emailed after your application is accepted!
            </p>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section id="register" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-background to-cyan-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15),transparent_60%)]" />
        <div className="relative text-center space-y-8 max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight">
            Ready to build the future of mobile AI?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground">
            Join Flutter, React Native, and Kotlin developers in building local, private, and personal AI on the edge.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4">
            <Button size="lg" className="group w-full sm:w-auto text-base md:text-lg px-6 md:px-8 hover:scale-105 transition-all" asChild>
              <Link href="https://luma.com/jrec73nt" target="_blank" rel="noopener noreferrer">
                Register on Luma
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Limited spots available • Registration closes November 20
          </p>
        </div>
      </Section>
    </>
  );
}
