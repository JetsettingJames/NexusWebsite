"use client";

import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export function JoinSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with actual API endpoint
    console.log("Submitted email:", email);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <Section id="join" className="bg-muted/30">
      <Card className="max-w-2xl mx-auto border-2">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl md:text-3xl lg:text-4xl">
            Join the community
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-center text-base md:text-lg text-muted-foreground px-4">
            Get notified about upcoming events and join 1,500+ AI builders.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
                className="flex-1 px-4 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                aria-label="Email address"
              />
              <Button type="submit" size="lg" disabled={isSubmitted}>
                {isSubmitted ? "Submitted!" : "Join"}
              </Button>
            </div>
          </form>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Or{" "}
              <a
                href="https://forms.gle/placeholder"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors"
              >
                apply to join the community
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}
