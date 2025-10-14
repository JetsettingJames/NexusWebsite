"use client";

import { Section } from "@/components/Section";
import Image from "next/image";

const companies = [
  { name: "Cactus (YC S25)", logo: "/logos/cactus.png" },
  { name: "Earlybird VC", logo: "/logos/earlybird.png" },
  { name: "Nothing", logo: "/logos/nothing.svg" },
  { name: "HuggingFace", logo: "/logos/huggingface.svg" },
];

export function LogoCloud() {
  return (
    <Section className="bg-muted/30 py-8 md:py-12 lg:py-16">
      <div className="text-center space-y-6 md:space-y-8">
        <p className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground font-medium px-4">
          Our partners and sponsors
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
          {companies.map((company) => (
            <div
              key={company.name}
              className="relative h-10 w-24 md:h-12 md:w-32 flex items-center justify-center"
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
