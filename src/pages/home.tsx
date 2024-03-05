/**
 * Home page
 */

import { AboutSection } from "@/features/landing/ui/sections/about-section";
import { ContactSection } from "@/features/landing/ui/sections/contact-section";
import { Divisor } from "@/features/landing/ui/divisor";
import { HomeSection } from "@/features/landing/ui/sections/home-section";
import { ShowcaseSection } from "@/features/landing/ui/sections/showcase-section";

export function HomePage() {
  return (
    <main className="pt-8">
      <HomeSection />
      <AboutSection />
      <ShowcaseSection />
      <Divisor />
      <ContactSection />
    </main>
  );
}
