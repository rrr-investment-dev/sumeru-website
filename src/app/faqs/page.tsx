import React from "react";
import { Section } from "@/components/ui/Section";
import { SectionMarker } from "@/components/ui/SectionMarker";
import { Button } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { faqCategories } from "@/lib/faq-data";

export const metadata = {
  title: "FAQs · Shakti Sphere · Sumeru India Growth Fund",
  description: "Common investor questions about Sumeru India Growth Fund (SIGF), Shakti Sphere's flagship Category III AIF — eligibility, strategy, minimum investment, NRI eligibility, taxation, reporting, and more.",
  alternates: { canonical: "/faqs" },
  openGraph: {
    title: "FAQs · Sumeru India Growth Fund",
    description: "Common investor questions about Sumeru India Growth Fund (SIGF), Shakti Sphere's flagship Category III AIF.",
    url: "/faqs",
  },
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap((c) => c.items).map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Section tone="paper" className="bg-px py-16 md:py-24">
        {/* Hero block */}
        <header className="text-center max-w-[920px] mx-auto pb-6">
          <div className="flex justify-center">
            <SectionMarker number="FAQ" label="Questions, answered" />
          </div>
          <h1 className="h-display text-[44px] md:text-[64px] text-ink mt-6 leading-[1.05]">
            Common questions, <span className="h-accent">answered.</span>
          </h1>
          <p className="text-ink2 text-lg leading-[1.6] mt-5 max-w-[600px] mx-auto font-sans font-light">
            What investors, family offices, and advisors ask most often about Sumeru India Growth Fund and Category III AIFs. For specifics not covered here, the team is one message away.
          </p>
        </header>

        {/* Categories */}
        <div className="max-w-[840px] mx-auto">
          {faqCategories.map((category) => (
            <section
              key={category.id}
              id={category.id}
              className="scroll-mt-24 mt-16 md:mt-20 animate-fade-in"
            >
              <h2 className="h-display text-[28px] md:text-[36px] text-ink mb-4">
                {category.title}
              </h2>
              <FAQAccordion items={category.items} />
            </section>
          ))}

          {/* Closing CTA panel */}
          <div className="mt-20 md:mt-24 p-10 md:p-14 bg-px-soft rounded-3xl text-center">
            <h3 className="h-display text-[32px] md:text-[40px] text-ink leading-[1.05]">
              Still have questions?
            </h3>
            <p className="text-ink2 mt-3 max-w-[440px] mx-auto leading-[1.6] font-sans font-light">
              For specifics not covered here, including a copy of the Private Placement Memorandum, our team is one message away.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-7">
              <Button variant="accent" size="lg" withArrow href="/#contact">
                Talk to the team
              </Button>
              <Button variant="ghost" size="lg" href="mailto:info@sumerufunds.com">
                Email us
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
