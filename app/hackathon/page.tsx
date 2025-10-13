import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Calendar, MapPin, Users, Trophy, Clock, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Nexus Mobile Hackathon — London",
  description:
    "Join us for the AI Nexus Mobile Hackathon on November 27-28 in London. Sponsored by Cactus, Hugging Face, and Nothing.",
};

export default function HackathonPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="relative pt-16 pb-12 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 animate-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.15),transparent_50%)]" />
        
        <div className="relative text-center space-y-8 max-w-5xl mx-auto">
          <div className="inline-block mb-4">
            <Badge className="px-4 py-2 text-sm font-medium">
              <Calendar className="w-4 h-4 mr-2" />
              November 27-28, 2025
            </Badge>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground to-foreground/70 px-4">
            AI Nexus Mobile Hackathon
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Build the future of mobile AI in 48 hours. Join developers, designers, and AI enthusiasts in London for an intensive weekend of innovation.
          </p>

          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="w-5 h-5" />
            <span className="text-lg font-medium">London, UK</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4 px-4">
            <Button size="lg" className="group w-full sm:w-auto" asChild>
              <Link href="#register">
                Register now
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 w-full sm:w-auto" asChild>
              <Link href="#details">View details</Link>
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
              <div className="relative h-16 w-40 flex items-center justify-center">
                <Image
                  src="/logos/cactus.png"
                  alt="Cactus (YC S25) logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-16 w-40 flex items-center justify-center">
                <Image
                  src="/logos/huggingface.svg"
                  alt="Hugging Face logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-16 w-40 flex items-center justify-center">
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
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Event details
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about the hackathon
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">When</h3>
            <p className="text-muted-foreground">
              November 27-28, 2025
              <br />
              48-hour intensive hackathon
            </p>
          </Card>

          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Where</h3>
            <p className="text-muted-foreground">
              London, UK
              <br />
              Venue TBA
            </p>
          </Card>

          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Who</h3>
            <p className="text-muted-foreground">
              Developers, designers, AI enthusiasts
              <br />
              All skill levels welcome
            </p>
          </Card>
        </div>
      </Section>

      {/* What to Build */}
      <Section className="bg-muted/30">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            What to build
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Create innovative mobile applications powered by AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 space-y-3">
            <Zap className="w-8 h-8 text-primary" />
            <h3 className="text-xl font-semibold">Mobile-First AI Apps</h3>
            <p className="text-muted-foreground">
              Build native or cross-platform mobile applications that leverage cutting-edge AI models and APIs.
            </p>
          </Card>

          <Card className="p-6 space-y-3">
            <Trophy className="w-8 h-8 text-primary" />
            <h3 className="text-xl font-semibold">On-Device AI</h3>
            <p className="text-muted-foreground">
              Explore on-device machine learning with frameworks like Core ML, TensorFlow Lite, or ONNX Runtime.
            </p>
          </Card>

          <Card className="p-6 space-y-3">
            <Users className="w-8 h-8 text-primary" />
            <h3 className="text-xl font-semibold">Practical Solutions</h3>
            <p className="text-muted-foreground">
              Focus on real-world problems and create apps that make a meaningful impact on users&apos; lives.
            </p>
          </Card>

          <Card className="p-6 space-y-3">
            <Clock className="w-8 h-8 text-primary" />
            <h3 className="text-xl font-semibold">Rapid Prototyping</h3>
            <p className="text-muted-foreground">
              Move fast, iterate quickly, and ship a working prototype within 48 hours.
            </p>
          </Card>
        </div>
      </Section>

      {/* Schedule */}
      <Section>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Schedule
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Two days of building, learning, and networking
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {/* Day 1 */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Badge variant="outline" className="text-base px-3 py-1">Day 1</Badge>
              <span>November 27</span>
            </h3>
            <div className="space-y-4 border-l-2 border-primary/20 pl-6 ml-3">
              <div className="relative">
                <div className="absolute -left-[1.875rem] w-3 h-3 rounded-full bg-primary border-4 border-background" />
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold">Registration & Breakfast</h4>
                  <span className="text-sm text-muted-foreground">9:00 AM</span>
                </div>
                <p className="text-muted-foreground text-sm">Check in, grab coffee, and meet your fellow hackers</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[1.875rem] w-3 h-3 rounded-full bg-primary border-4 border-background" />
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold">Opening Ceremony</h4>
                  <span className="text-sm text-muted-foreground">10:00 AM</span>
                </div>
                <p className="text-muted-foreground text-sm">Welcome, rules, sponsor intros, and team formation</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[1.875rem] w-3 h-3 rounded-full bg-primary border-4 border-background" />
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold">Hacking Begins!</h4>
                  <span className="text-sm text-muted-foreground">11:00 AM</span>
                </div>
                <p className="text-muted-foreground text-sm">Start building your mobile AI application</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[1.875rem] w-3 h-3 rounded-full bg-primary border-4 border-background" />
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold">Lunch</h4>
                  <span className="text-sm text-muted-foreground">1:00 PM</span>
                </div>
                <p className="text-muted-foreground text-sm">Fuel up with provided lunch</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[1.875rem] w-3 h-3 rounded-full bg-primary border-4 border-background" />
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold">Workshop: Mobile AI Best Practices</h4>
                  <span className="text-sm text-muted-foreground">3:00 PM</span>
                </div>
                <p className="text-muted-foreground text-sm">Learn from experts about optimizing AI for mobile</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[1.875rem] w-3 h-3 rounded-full bg-primary border-4 border-background" />
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold">Dinner</h4>
                  <span className="text-sm text-muted-foreground">7:00 PM</span>
                </div>
                <p className="text-muted-foreground text-sm">Evening meal provided</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[1.875rem] w-3 h-3 rounded-full bg-primary border-4 border-background" />
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold">Late Night Hacking</h4>
                  <span className="text-sm text-muted-foreground">8:00 PM</span>
                </div>
                <p className="text-muted-foreground text-sm">Keep building through the night (venue open 24/7)</p>
              </div>
            </div>
          </div>

          {/* Day 2 */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Badge variant="outline" className="text-base px-3 py-1">Day 2</Badge>
              <span>November 28</span>
            </h3>
            <div className="space-y-4 border-l-2 border-primary/20 pl-6 ml-3">
              <div className="relative">
                <div className="absolute -left-[1.875rem] w-3 h-3 rounded-full bg-primary border-4 border-background" />
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold">Breakfast</h4>
                  <span className="text-sm text-muted-foreground">8:00 AM</span>
                </div>
                <p className="text-muted-foreground text-sm">Morning fuel for the final push</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[1.875rem] w-3 h-3 rounded-full bg-primary border-4 border-background" />
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold">Final Sprint</h4>
                  <span className="text-sm text-muted-foreground">9:00 AM</span>
                </div>
                <p className="text-muted-foreground text-sm">Polish your app and prepare your demo</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[1.875rem] w-3 h-3 rounded-full bg-accent border-4 border-background" />
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold">Submissions Due</h4>
                  <span className="text-sm text-muted-foreground">12:00 PM</span>
                </div>
                <p className="text-muted-foreground text-sm">Submit your project and demo video</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[1.875rem] w-3 h-3 rounded-full bg-primary border-4 border-background" />
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold">Lunch</h4>
                  <span className="text-sm text-muted-foreground">12:30 PM</span>
                </div>
                <p className="text-muted-foreground text-sm">Relax and recharge before demos</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[1.875rem] w-3 h-3 rounded-full bg-primary border-4 border-background" />
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold">Project Demos</h4>
                  <span className="text-sm text-muted-foreground">2:00 PM</span>
                </div>
                <p className="text-muted-foreground text-sm">Teams present their projects to judges</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[1.875rem] w-3 h-3 rounded-full bg-primary border-4 border-background" />
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold">Judging & Deliberation</h4>
                  <span className="text-sm text-muted-foreground">4:00 PM</span>
                </div>
                <p className="text-muted-foreground text-sm">Judges evaluate projects and select winners</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[1.875rem] w-3 h-3 rounded-full bg-accent border-4 border-background" />
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold">Awards Ceremony</h4>
                  <span className="text-sm text-muted-foreground">5:00 PM</span>
                </div>
                <p className="text-muted-foreground text-sm">Winners announced and prizes awarded</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[1.875rem] w-3 h-3 rounded-full bg-primary border-4 border-background" />
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold">Closing & Networking</h4>
                  <span className="text-sm text-muted-foreground">6:00 PM</span>
                </div>
                <p className="text-muted-foreground text-sm">Celebrate, network, and say goodbye</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Prizes */}
      <Section className="bg-muted/30">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Prizes & perks
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Amazing prizes for the best projects
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-8 space-y-4 text-center border-2 border-primary/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold">
              1ST PLACE
            </div>
            <Trophy className="w-12 h-12 text-primary mx-auto" />
            <h3 className="text-2xl font-bold">£5,000</h3>
            <p className="text-muted-foreground">
              Cash prize + sponsor swag + mentorship opportunities
            </p>
          </Card>

          <Card className="p-8 space-y-4 text-center border-2">
            <div className="absolute top-0 right-0 bg-muted text-muted-foreground px-3 py-1 text-xs font-bold">
              2ND PLACE
            </div>
            <Trophy className="w-12 h-12 text-muted-foreground mx-auto" />
            <h3 className="text-2xl font-bold">£2,500</h3>
            <p className="text-muted-foreground">
              Cash prize + sponsor swag
            </p>
          </Card>

          <Card className="p-8 space-y-4 text-center border-2">
            <div className="absolute top-0 right-0 bg-muted text-muted-foreground px-3 py-1 text-xs font-bold">
              3RD PLACE
            </div>
            <Trophy className="w-12 h-12 text-muted-foreground mx-auto" />
            <h3 className="text-2xl font-bold">£1,000</h3>
            <p className="text-muted-foreground">
              Cash prize + sponsor swag
            </p>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Plus special category prizes from our sponsors!
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Frequently asked questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">Do I need a team?</h3>
            <p className="text-muted-foreground">
              You can participate solo or in teams of up to 4 people. We&apos;ll have team formation sessions at the start if you&apos;re looking for teammates.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">What should I bring?</h3>
            <p className="text-muted-foreground">
              Bring your laptop, chargers, and any mobile devices you want to test on. We&apos;ll provide WiFi, food, drinks, and a great atmosphere!
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">Is there a cost to attend?</h3>
            <p className="text-muted-foreground">
              No! The event is completely free thanks to our generous sponsors. This includes all meals, snacks, and swag.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">What if I&apos;m a beginner?</h3>
            <p className="text-muted-foreground">
              All skill levels are welcome! We&apos;ll have mentors available throughout the event to help you learn and build.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">Can I start working on my project before the event?</h3>
            <p className="text-muted-foreground">
              No, all work must be done during the hackathon. However, you can come with ideas and use existing libraries/frameworks.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">Will there be API credits provided?</h3>
            <p className="text-muted-foreground">
              Yes! Our sponsors will provide API credits and access to their platforms for all participants.
            </p>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section id="register" className="bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Ready to build the future?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Join us for 48 hours of innovation, learning, and building amazing mobile AI applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4">
            <Button size="lg" className="group w-full sm:w-auto text-lg px-8" asChild>
              <Link href="https://lu.ma/ai-nexus" target="_blank" rel="noopener noreferrer">
                Register on Luma
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 w-full sm:w-auto text-lg px-8" asChild>
              <Link href="/#join">Join our community</Link>
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
