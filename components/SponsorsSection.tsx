import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Handshake } from "lucide-react";

export function SponsorsSection() {
  return (
    <Section id="sponsors">
      <Card className="max-w-3xl mx-auto border-2">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Handshake className="h-12 w-12 text-primary" aria-hidden="true" />
          </div>
          <CardTitle className="text-2xl md:text-3xl lg:text-4xl">Sponsors</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <p className="text-base md:text-lg text-muted-foreground px-4">
            We partner with forward-thinking organisations to support
            high-impact builder events.
          </p>
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <a
              href="mailto:hello@ainexus.org?subject=Sponsorship Enquiry"
              target="_blank"
              rel="noopener noreferrer"
            >
              Become a sponsor
            </a>
          </Button>
          <p className="text-sm text-muted-foreground">
            Interested in supporting the community?{" "}
            <a
              href="mailto:hello@ainexus.org?subject=Partnership Deck Request"
              className="underline hover:text-foreground transition-colors"
            >
              Get the deck
            </a>
          </p>
        </CardContent>
      </Card>
    </Section>
  );
}
