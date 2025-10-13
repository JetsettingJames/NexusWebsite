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
    "Join us for the AI Nexus Mobile Hackathon on November 28-29 in London. Sponsored by Cactus, Hugging Face, and Nothing.",
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
            AI Nexus Mobile Hackathon
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Build the future of mobile AI in 24 hours. Join developers, designers, and AI enthusiasts in London for an intensive day of innovation.
          </p>

          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="w-5 h-5" />
            <span className="text-lg font-medium">London, UK</span>
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
                  alt="Hugging Face logo"
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
              24-hour intensive hackathon
            </p>
          </Card>

          <Card className="p-6 space-y-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
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

          <Card className="p-6 space-y-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
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
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-violet-500/5 to-pink-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.08),transparent_60%)]" />
        <div className="relative">
          <div className="text-center space-y-4 mb-12 px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
              What to build
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Create innovative mobile applications powered by AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
          <Card className="p-6 space-y-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <Zap className="w-8 h-8 text-primary" />
            <h3 className="text-xl font-semibold">Mobile-First AI Apps</h3>
            <p className="text-muted-foreground">
              Build native or cross-platform mobile applications that leverage cutting-edge AI models and APIs.
            </p>
          </Card>

          <Card className="p-6 space-y-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <Trophy className="w-8 h-8 text-primary" />
            <h3 className="text-xl font-semibold">On-Device AI</h3>
            <p className="text-muted-foreground">
              Explore on-device machine learning with frameworks like Core ML, TensorFlow Lite, or ONNX Runtime.
            </p>
          </Card>

          <Card className="p-6 space-y-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <Users className="w-8 h-8 text-primary" />
            <h3 className="text-xl font-semibold">Practical Solutions</h3>
            <p className="text-muted-foreground">
              Focus on real-world problems and create apps that make a meaningful impact on users&apos; lives.
            </p>
          </Card>

          <Card className="p-6 space-y-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <Clock className="w-8 h-8 text-primary" />
            <h3 className="text-xl font-semibold">Rapid Prototyping</h3>
            <p className="text-muted-foreground">
              Move fast, iterate quickly, and ship a working prototype within 24 hours.
            </p>
          </Card>
          </div>
        </div>
      </Section>

      {/* Schedule */}
      <Section>
        <div className="text-center space-y-4 mb-12 px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
            Schedule
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            One day of building, learning, and networking
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8 px-4">
          {/* Day 1 */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
              <Badge variant="outline" className="text-sm md:text-base px-3 py-1">Friday</Badge>
              <span>November 28</span>
            </h3>
            <div className="space-y-4 border-l-2 border-primary/20 pl-6 ml-3">
              <div className="relative">
                <div className="absolute -left-[1.875rem] w-3 h-3 rounded-full bg-primary border-4 border-background" />
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-1">
                  <h4 className="font-semibold text-sm md:text-base">Registration & Breakfast</h4>
                  <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">9:00 AM</span>
                </div>
                <p className="text-muted-foreground text-sm">Check in, grab coffee, and meet your fellow hackers</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[1.875rem] w-3 h-3 rounded-full bg-primary border-4 border-background" />
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-1">
                  <h4 className="font-semibold text-sm md:text-base">Opening Ceremony</h4>
                  <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">10:00 AM</span>
                </div>
                <p className="text-muted-foreground text-sm">Welcome, rules, sponsor intros, and team formation</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[1.875rem] w-3 h-3 rounded-full bg-primary border-4 border-background" />
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-1">
                  <h4 className="font-semibold text-sm md:text-base">Hacking Begins!</h4>
                  <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">11:00 AM</span>
                </div>
                <p className="text-muted-foreground text-sm">Start building your mobile AI application</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[1.875rem] w-3 h-3 rounded-full bg-primary border-4 border-background" />
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-1">
                  <h4 className="font-semibold text-sm md:text-base">Lunch</h4>
                  <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">1:00 PM</span>
                </div>
                <p className="text-muted-foreground text-sm">Fuel up with provided lunch</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[1.875rem] w-3 h-3 rounded-full bg-primary border-4 border-background" />
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-1">
                  <h4 className="font-semibold text-sm md:text-base">Workshop: Mobile AI Best Practices</h4>
                  <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">3:00 PM</span>
                </div>
                <p className="text-muted-foreground text-sm">Learn from experts about optimizing AI for mobile</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[1.875rem] w-3 h-3 rounded-full bg-primary border-4 border-background" />
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-1">
                  <h4 className="font-semibold text-sm md:text-base">Dinner</h4>
                  <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">7:00 PM</span>
                </div>
                <p className="text-muted-foreground text-sm">Evening meal provided</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[1.875rem] w-3 h-3 rounded-full bg-primary border-4 border-background" />
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-1">
                  <h4 className="font-semibold text-sm md:text-base">Late Night Hacking</h4>
                  <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">8:00 PM</span>
                </div>
                <p className="text-muted-foreground text-sm">Keep building through the night (venue open 24/7)</p>
              </div>
            </div>
          </div>

          {/* Day 2 */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
              <Badge variant="outline" className="text-sm md:text-base px-3 py-1">Saturday</Badge>
              <span>November 29</span>
            </h3>
            <div className="space-y-4 border-l-2 border-primary/20 pl-6 ml-3">
              <div className="relative">
                <div className="absolute -left-[1.875rem] w-3 h-3 rounded-full bg-primary border-4 border-background" />
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-1">
                  <h4 className="font-semibold text-sm md:text-base">Breakfast</h4>
                  <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">8:00 AM</span>
                </div>
                <p className="text-muted-foreground text-sm">Morning fuel for the final push</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[1.875rem] w-3 h-3 rounded-full bg-primary border-4 border-background" />
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-1">
                  <h4 className="font-semibold text-sm md:text-base">Final Sprint</h4>
                  <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">9:00 AM</span>
                </div>
                <p className="text-muted-foreground text-sm">Polish your app and prepare your demo</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[1.875rem] w-3 h-3 rounded-full bg-accent border-4 border-background" />
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-1">
                  <h4 className="font-semibold text-sm md:text-base">Submissions Due</h4>
                  <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">12:00 PM</span>
                </div>
                <p className="text-muted-foreground text-sm">Submit your project and demo video</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[1.875rem] w-3 h-3 rounded-full bg-primary border-4 border-background" />
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-1">
                  <h4 className="font-semibold text-sm md:text-base">Lunch</h4>
                  <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">12:30 PM</span>
                </div>
                <p className="text-muted-foreground text-sm">Relax and recharge before demos</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[1.875rem] w-3 h-3 rounded-full bg-primary border-4 border-background" />
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-1">
                  <h4 className="font-semibold text-sm md:text-base">Project Demos</h4>
                  <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">2:00 PM</span>
                </div>
                <p className="text-muted-foreground text-sm">Teams present their projects to judges</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[1.875rem] w-3 h-3 rounded-full bg-primary border-4 border-background" />
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-1">
                  <h4 className="font-semibold text-sm md:text-base">Judging & Deliberation</h4>
                  <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">4:00 PM</span>
                </div>
                <p className="text-muted-foreground text-sm">Judges evaluate projects and select winners</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[1.875rem] w-3 h-3 rounded-full bg-accent border-4 border-background" />
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-1">
                  <h4 className="font-semibold text-sm md:text-base">Awards Ceremony</h4>
                  <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">5:00 PM</span>
                </div>
                <p className="text-muted-foreground text-sm">Winners announced and prizes awarded</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[1.875rem] w-3 h-3 rounded-full bg-primary border-4 border-background" />
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-1">
                  <h4 className="font-semibold text-sm md:text-base">Closing & Networking</h4>
                  <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">6:00 PM</span>
                </div>
                <p className="text-muted-foreground text-sm">Celebrate, network, and say goodbye</p>
              </div>
            </div>
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

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
          <Card className="p-6 md:p-8 space-y-4 text-center border-2 border-primary/50 relative overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold">
              1ST PLACE
            </div>
            <Trophy className="w-12 h-12 text-primary mx-auto" />
            <h3 className="text-2xl font-bold">£5,000</h3>
            <p className="text-muted-foreground">
              Cash prize + sponsor swag + mentorship opportunities
            </p>
          </Card>

          <Card className="p-6 md:p-8 space-y-4 text-center border-2 relative overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300">
            <div className="absolute top-0 right-0 bg-muted text-muted-foreground px-3 py-1 text-xs font-bold">
              2ND PLACE
            </div>
            <Trophy className="w-12 h-12 text-muted-foreground mx-auto" />
            <h3 className="text-2xl font-bold">£2,500</h3>
            <p className="text-muted-foreground">
              Cash prize + sponsor swag
            </p>
          </Card>

          <Card className="p-6 md:p-8 space-y-4 text-center border-2 relative overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300">
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

          <div className="mt-8 text-center relative">
            <p className="text-muted-foreground">
              Plus special category prizes from our sponsors!
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
            <h3 className="text-base md:text-lg font-semibold mb-2">Do I need a team?</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              You can participate solo or in teams of up to 4 people. We&apos;ll have team formation sessions at the start if you&apos;re looking for teammates.
            </p>
          </Card>

          <Card className="p-4 md:p-6 hover:shadow-md hover:border-primary/30 transition-all duration-300">
            <h3 className="text-base md:text-lg font-semibold mb-2">What should I bring?</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Bring your laptop, chargers, and any mobile devices you want to test on. We&apos;ll provide WiFi, food, drinks, and a great atmosphere!
            </p>
          </Card>

          <Card className="p-4 md:p-6 hover:shadow-md hover:border-primary/30 transition-all duration-300">
            <h3 className="text-base md:text-lg font-semibold mb-2">Is there a cost to attend?</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              No! The event is completely free thanks to our generous sponsors. This includes all meals, snacks, and swag.
            </p>
          </Card>

          <Card className="p-4 md:p-6 hover:shadow-md hover:border-primary/30 transition-all duration-300">
            <h3 className="text-base md:text-lg font-semibold mb-2">What if I&apos;m a beginner?</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              All skill levels are welcome! We&apos;ll have mentors available throughout the event to help you learn and build.
            </p>
          </Card>

          <Card className="p-4 md:p-6 hover:shadow-md hover:border-primary/30 transition-all duration-300">
            <h3 className="text-base md:text-lg font-semibold mb-2">Can I start working on my project before the event?</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              No, all work must be done during the hackathon. However, you can come with ideas and use existing libraries/frameworks.
            </p>
          </Card>

          <Card className="p-4 md:p-6 hover:shadow-md hover:border-primary/30 transition-all duration-300">
            <h3 className="text-base md:text-lg font-semibold mb-2">Will there be API credits provided?</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Yes! Our sponsors will provide API credits and access to their platforms for all participants.
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
            Ready to build the future?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground">
            Join us for 24 hours of innovation, learning, and building amazing mobile AI applications.
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
