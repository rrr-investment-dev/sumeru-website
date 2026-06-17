import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionMarker } from "@/components/ui/SectionMarker";

export function PhilosophyOfSumeru() {
  return (
    <Section
      id="philosophy"
      tone="soft"
      className="bg-px-soft relative overflow-hidden pb-16 md:pb-20"
    >
      {/* Mountain image — atmospheric background at low opacity */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-150px] right-[-10px] w-[55%] h-[60%] hidden md:block z-0"
      >
        <Image
          src="/images/mountain-why.png"
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 55vw"
          className="object-cover object-bottom opacity-30"
          priority={false}
        />
      </div>

      {/* Heading block — left-aligned column */}
      <div className="relative z-10 max-w-[620px] mb-12 md:mb-16">
        <SectionMarker number="02" label="Philosophy" />
        <h2 className="h-display text-[44px] md:text-[64px] leading-[1.05] text-ink mt-6">
          The <span className="h-accent">Philosophy</span> of Sumeru.
        </h2>
        <p className="text-ink2 text-lg leading-[1.6] mt-5">
          Inspired by Mount Meru, the cosmic center of strength, stability,
          connection, and ascent. Our investment philosophy is built on four
          enduring principles that guide how we identify opportunities, allocate
          capital, and create long-term value.
        </p>
      </div>

      {/* Four pillar cards — 2×2 grid on desktop, single column on mobile */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 items-start content-start md:min-h-[620px]">

        {/* Pillar I — The Cosmic Center */}
        <div className="group bg-card border border-line rounded-3xl p-7 md:p-9 flex flex-col transition-all duration-300 ease-out hover:border-brand-primary md:min-h-[200px]">
          <h3 className="h-display text-[26px] md:text-[30px] text-ink mt-3 leading-[1.15]">
            The Cosmic Center
          </h3>
          <div className="text-sm font-medium italic text-brand-primary mt-2">
            India as the Center of Global Growth
          </div>

          <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out motion-reduce:duration-0">
            <div className="overflow-hidden">
              <p className="text-ink2 leading-[1.65] mt-4">
                Just as Mount Meru is the axis around which the universe
                revolves, we believe India stands at the center of the next
                decade of global economic growth. Our investment philosophy is
                rooted in the conviction that India will remain a primary driver
                of wealth creation, innovation, and enterprise value in the
                years ahead.
              </p>
            </div>
          </div>

          <ChevronDown
            aria-hidden="true"
            className="hidden md:block w-4 h-4 text-ink2/40 mt-auto mx-auto mt-5 transition-all duration-300 group-hover:rotate-180 group-hover:text-brand-primary motion-reduce:duration-0"
          />
        </div>

        {/* Pillar II — The Unshakeable Mountain */}
        <div className="group bg-card border border-line rounded-3xl p-7 md:p-9 flex flex-col transition-all duration-300 ease-out hover:border-brand-primary md:min-h-[200px]">
          <h3 className="h-display text-[26px] md:text-[30px] text-ink mt-3 leading-[1.15]">
            The Unshakeable Mountain
          </h3>
          <div className="text-sm font-medium italic text-brand-primary mt-2">
            Meru is immovable, eternal, and permanent.
          </div>

          <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out motion-reduce:duration-0">
            <div className="overflow-hidden">
              <ul className="mt-4 space-y-3">
                <li className="flex gap-3">
                  <span className="text-brand-deep flex-shrink-0 mt-2 leading-none">·</span>
                  <span className="text-ink2 leading-[1.6]">
                    <span className="text-ink font-semibold">Long-horizon investing</span>:{" "}
                    not chasing trends, but building durable positions.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-deep flex-shrink-0 mt-2 leading-none">·</span>
                  <span className="text-ink2 leading-[1.6]">
                    <span className="text-ink font-semibold">Resilience</span>:{" "}
                    a fund that weathers volatility.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-deep flex-shrink-0 mt-2 leading-none">·</span>
                  <span className="text-ink2 leading-[1.6]">
                    <span className="text-ink font-semibold">Conviction</span>:{" "}
                    rooted in structural India growth, not speculation.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <ChevronDown
            aria-hidden="true"
            className="hidden md:block w-4 h-4 text-ink2/40 mt-auto mx-auto mt-5 transition-all duration-300 group-hover:rotate-180 group-hover:text-brand-primary motion-reduce:duration-0"
          />
        </div>

        {/* Pillar III — The Cosmic Axis */}
        <div className="group bg-card border border-line rounded-3xl p-7 md:p-9 flex flex-col transition-all duration-300 ease-out hover:border-brand-primary md:min-h-[200px]">
          <h3 className="h-display text-[26px] md:text-[30px] text-ink mt-3 leading-[1.15]">
            The Cosmic Axis
          </h3>
          <div className="text-sm font-medium italic text-brand-primary mt-2">
            Connecting Capital to Opportunity
          </div>

          <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out motion-reduce:duration-0">
            <div className="overflow-hidden">
              <p className="text-ink2 leading-[1.65] mt-4">
                Inspired by Meru&apos;s role as the cosmic axis, we connect
                capital with opportunity, supporting businesses with the vision
                and potential to create lasting value over time.
              </p>
            </div>
          </div>

          <ChevronDown
            aria-hidden="true"
            className="hidden md:block w-4 h-4 text-ink2/40 mt-auto mx-auto mt-5 transition-all duration-300 group-hover:rotate-180 group-hover:text-brand-primary motion-reduce:duration-0"
          />
        </div>

        {/* Pillar IV — Spiritual Ascent */}
        <div className="group bg-card border border-line rounded-3xl p-7 md:p-9 flex flex-col transition-all duration-300 ease-out hover:border-brand-primary md:min-h-[200px]">
          <h3 className="h-display text-[26px] md:text-[30px] text-ink mt-3 leading-[1.15]">
            Spiritual Ascent
          </h3>
          <div className="text-sm font-medium italic text-brand-primary mt-2">
            The Growth Journey
          </div>

          <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out motion-reduce:duration-0">
            <div className="overflow-hidden">
              <p className="text-ink2 leading-[1.65] mt-4">
                Ascending Meru represents a journey of progress and elevation.
                For us, it reflects:
              </p>
              <ul className="mt-3 space-y-3">
                <li className="flex gap-3">
                  <span className="text-brand-deep flex-shrink-0 mt-2 leading-none">·</span>
                  <span className="text-ink2 leading-[1.6]">
                    Portfolio companies evolving from emerging businesses to
                    market leaders.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-deep flex-shrink-0 mt-2 leading-none">·</span>
                  <span className="text-ink2 leading-[1.6]">
                    Investor wealth compounding over time through disciplined
                    capital allocation.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-deep flex-shrink-0 mt-2 leading-none">·</span>
                  <span className="text-ink2 leading-[1.6]">
                    A shared journey of transformation, growth, and value
                    creation.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <ChevronDown
            aria-hidden="true"
            className="hidden md:block w-4 h-4 text-ink2/40 mt-auto mx-auto mt-5 transition-all duration-300 group-hover:rotate-180 group-hover:text-brand-primary motion-reduce:duration-0"
          />
        </div>

      </div>
    </Section>
  );
}
