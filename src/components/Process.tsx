"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { fadeUp, fadeLeft, fadeRight, stagger, staggerSlow, lineReveal } from "@/lib/animations";

const steps = [
  {
    num: "01",
    title: "Sourcing",
    desc: "Ethical procurement from 2,000+ local farmers across Tamil Nadu's richest coconut regions.",
  },
  {
    num: "02",
    title: "Processing",
    desc: "ISO-certified clean-room environment with stainless steel extraction and hygienic processing.",
  },
  {
    num: "03",
    title: "Quality",
    desc: "Multi-stage lab testing for moisture content, free fatty acid, purity, and food safety compliance.",
  },
  {
    num: "04",
    title: "Packaging",
    desc: "Custom bulk packaging to international food-grade standards. Private labeling available.",
  },
  {
    num: "05",
    title: "Export",
    desc: "Global shipping via major Indian ports with end-to-end logistics and documentation.",
  },
];

const specsData = [
  "MOISTURE: <3%",
  "FAT CONTENT: 60–65%",
  "ORGANIC CERTIFIED",
  "ISO 22000 COMPLIANT",
  "FSSAI APPROVED",
  "HACCP VERIFIED",
  "FREE FATTY ACID: ≤0.2%",
  "SHELF LIFE: 18 MONTHS",
  "GMP CERTIFIED",
  "HALAL COMPLIANT",
];

export default function Process() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageParallax = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      ref={ref}
      id="process"
      className="relative overflow-hidden bg-forest"
    >
      {/* ── Hexagon Mesh SVG ── */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="hex" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
            <path
              d="M28 0L56 16.67V50L28 66.67L0 50V16.67Z M28 100L56 83.33V50L28 33.33L0 50V83.33Z"
              fill="none"
              stroke="#E5DCC5"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex)" />
      </svg>

      <div className="relative z-10 section-pad">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
          {/* ── Top: Image + "Why Choose" text ── */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-20 lg:mb-32">
            {/* Image */}
            <motion.div
              className="lg:col-span-5 relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeLeft}
            >
              <motion.div style={{ y: imageParallax }} className="relative">
                <div className="aspect-[4/5] relative overflow-hidden border border-forest-400/30">
                  <Image
                    src="/images/factory-line.png"
                    alt="Manvasam coconut processing facility production line"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                {/* Factory overlay data */}
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 bg-gradient-to-t from-forest via-forest/80 to-transparent">
                  <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-cream/50">
                    Production Capacity
                  </div>
                  <div className="font-editorial text-cream text-2xl font-bold">
                    High-Volume
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Text */}
            <motion.div
              className="lg:col-span-7"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <motion.span variants={fadeUp} className="font-mono text-[11px] uppercase tracking-[0.2em] text-cream/40 block mb-5">
                Why Manvasam
              </motion.span>
              <motion.h2 variants={fadeUp} className="text-display-md font-editorial font-bold text-cream leading-[1.05]">
                Your Desiccated Coconut &amp; Coconut Chips{" "}
                <span className="italic font-normal text-cream/60">Supplier</span>
              </motion.h2>
              <motion.div variants={lineReveal} className="mt-6 h-px bg-cream/10 origin-left" />
              <motion.p variants={fadeUp} className="mt-6 text-cream/50 text-sm sm:text-base leading-editorial font-body font-light max-w-xl">
                At Manvasam, we stand out through our strong commitment to
                sustainable sourcing and reliable supply. We work closely with
                over 2,000 local farmers, ensuring ethical coconut sourcing while
                supporting rural communities and promoting long-term growth.
              </motion.p>

              {/* Product images grid */}
              <motion.div variants={fadeUp} className="mt-10 grid grid-cols-2 gap-3">
                <div className="aspect-square relative overflow-hidden border border-forest-400/20">
                  <Image
                    src="/images/coconut-halves.png"
                    alt="Fresh coconut halves"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="20vw"
                  />
                </div>
                <div className="aspect-square relative overflow-hidden border border-forest-400/20">
                  <Image
                    src="/images/coconut-pieces.png"
                    alt="Processed coconut chips"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="20vw"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* ── Supply Chain Flowchart ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.div variants={fadeUp} className="mb-12 lg:mb-16">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-cream/30">
                Transparent Supply Chain
              </span>
              <h3 className="text-display-sm font-editorial font-bold text-cream mt-2">
                From Grove to Container
              </h3>
            </motion.div>

            <div className="grid md:grid-cols-5 gap-px bg-cream/5">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  variants={fadeUp}
                  className="group relative p-5 lg:p-7 bg-forest border border-cream/5 hover:border-cream/15 transition-colors duration-500"
                >
                  <div className="number-outline text-cream/20 group-hover:text-cream/40 transition-colors duration-500 mb-5">
                    {step.num}
                  </div>
                  <h4 className="font-editorial text-cream text-lg font-bold mb-2">
                    {step.title}
                  </h4>
                  <p className="text-cream/40 text-xs leading-relaxed font-body font-light">
                    {step.desc}
                  </p>
                  {/* Connector arrow */}
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-10 text-cream/15">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M6 10h8M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Specs Marquee Ticker ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 lg:mt-24 border-t border-b border-cream/5 py-4 overflow-hidden"
        >
          <div className="marquee-track">
            {[...specsData, ...specsData].map((spec, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-4 mx-6 font-mono text-[11px] uppercase tracking-[0.15em] text-cream/30 whitespace-nowrap"
              >
                {spec}
                <span className="w-1 h-1 rounded-full bg-cream/20" />
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
