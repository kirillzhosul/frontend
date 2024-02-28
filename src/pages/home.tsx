/**
 * Home page
 */

import { AboutSection } from "@/features/landing/ui/about-section";
import { ContactSection } from "@/features/landing/ui/contact-section";
import { Divisor } from "@/features/landing/ui/divisor";
import { HomeSection } from "@/features/landing/ui/home-section";
import { ShowcaseSection } from "@/features/landing/ui/showcase-section";
import { Footer } from "@/shared/ui/components/footer";

export function HomePage() {
  return (
    <main className="pt-8">
      <HomeSection />
      <AboutSection />
      <ShowcaseSection />
      <Divisor />
      <ContactSection />
      <Footer />
    </main>
  );
}
