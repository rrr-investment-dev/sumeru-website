import { Hero } from "@/components/sections/Hero";
import { FeaturedFund } from "@/components/sections/FeaturedFund";
import { PhilosophyOfSumeru } from "@/components/sections/PhilosophyOfSumeru";
import { EDGE } from "@/components/sections/EDGE";
import { Partners } from "@/components/sections/Partners";
import { Contact } from "@/components/sections/Contact";
import { Section } from "@/components/ui/Section";
import { Pill } from "@/components/ui/Pill";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { Button } from "@/components/ui/Button";
import { faqCategories } from "@/lib/faq-data";

export default function Home() {
  // Get first 3 FAQs from the first category
  const homeFaqs = faqCategories[0].items.slice(0, 3);

  return (
    <div className="bg-px flex flex-col w-full">
      {/* Hero Section */}
      <Hero />

      {/* Featured Fund Section */}
      <FeaturedFund />

      {/* Philosophy of Sumeru Section */}
      <PhilosophyOfSumeru />

      {/* EDGE Framework Section */}
      <EDGE />

      {/* Partners Section */}
      <Partners />

      {/* FAQs Section */}
      <Section id="faqs" tone="soft" className="py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full">
          {/* Left Column: Heading and More button */}
          <div className="col-span-1 lg:col-span-5 flex flex-col items-start text-left">
            <Pill className="mb-4">FAQs</Pill>
            <h2 className="h-display text-4xl md:text-5xl leading-tight">
              Frequently Asked <span className="h-accent">Questions.</span>
            </h2>
            <p className="text-base text-ink2 max-w-xl font-light leading-relaxed mt-4">
              Get clarity on investment sizes, SEBI guidelines, redemption periods, and other administrative details.
            </p>
            <Button
              href="/faqs"
              variant="accent"
              size="lg"
              withArrow
              className="mt-8"
            >
              More FAQs
            </Button>
          </div>

          {/* Right Column: Accordion */}
          <div className="col-span-1 lg:col-span-7 w-full">
            <FAQAccordion items={homeFaqs} />
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
