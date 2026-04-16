"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { fadeUp, fadeLeft, stagger, lineReveal } from "@/lib/animations";

const steps = [
  { num: "01", title: "Sourcing", desc: "Ethical procurement from 2,000+ local farmers across Tamil Nadu's richest coconut regions." },
  { num: "02", title: "Processing", desc: "ISO-certified clean-room environment with stainless steel extraction and hygienic processing." },
  { num: "03", title: "Quality", desc: "Multi-stage lab testing for moisture content, free fatty acid, purity, and food safety compliance." },
  { num: "04", title: "Packaging", desc: "Custom bulk packaging to international food-grade standards. Private labeling available." },
  { num: "05", title: "Export", desc: "Global shipping via major Indian ports with end-to-end logistics and documentation." },
];

const specsData = [
  "MOISTURE: <3%", "FAT CONTENT: 60–65%", "ORGANIC CERTIFIED", "ISO 22000 COMPLIANT",
  "FSSAI APPROVED", "HACCP VERIFIED", "FREE FATTY ACID: ≤0.2%", "SHELF LIFE: 18 MONTHS",
  "GMP CERTIFIED", "HALAL COMPLIANT",
];

export default function Process() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={ref} id="process" className="relative overflow-hidden bg-forest">
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hex" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
            <path d="M28 0L56 16.67V50L28 66.67L0 50V16.67Z M28 100L56 83.33V50L28 33.33L0 50V83.33Z" fill="none" stroke="#E5DCC5" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex)" />
      </svg>

      <div className="relative z-10 section-pad">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          {/* Top: Image + Why Choose text */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-16 lg:mb-28">
            <motion.div className="lg:col-span-5 relative" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeLeft}>
              <motion.div style={{ y: imageParallax }} className="relative">
                <div className="aspect-[4/5] relative overflow-hidden rounded-xl border border-forest-400/30">
                  <Image src="/eco-envi.jpg" alt="Manvasam coconut processing facility" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 rounded-b-xl bg-gradient-to-t from-forest via-forest/80 to-transparent">
                  <div className="font-body text-[10px] uppercase tracking-[0.12em] text-cream/50 font-medium">Production Capacity</div>
                  <div className="font-editorial text-cream text-xl sm:text-2xl font-bold">High-Volume</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div className="lg:col-span-7" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
              <motion.span variants={fadeUp} className="font-body text-[11px] uppercase tracking-[0.15em] text-cream/40 block mb-4 font-medium">Why Manvasam</motion.span>
              {/* FIX: Larger "Why Manvasam" heading */}
              <motion.h2 variants={fadeUp} className="font-editorial font-bold text-cream leading-[1.05]" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.8rem)" }}>
                Your Desiccated Coconut &amp; Coconut Chips{" "}
                <span className="italic font-normal text-cream/60">Supplier</span>
              </motion.h2>
              <motion.div variants={lineReveal} className="mt-5 h-px bg-cream/10 origin-left" />
              <motion.p variants={fadeUp} className="mt-5 text-cream/50 text-sm sm:text-base leading-editorial font-body font-light max-w-xl">
                At Manvasam, we stand out through our strong commitment to sustainable sourcing and reliable supply. We work closely with over 2,000 local farmers, ensuring ethical coconut sourcing while supporting rural communities and promoting long-term growth.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 grid grid-cols-2 gap-3">
                <div className="aspect-square relative overflow-hidden rounded-lg border border-forest-400/20">
                  <Image src="/rectangle_40.jpg" alt="Fresh coconut halves" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="20vw" />
                </div>
                <div className="aspect-square relative overflow-hidden rounded-lg border border-forest-400/20">
                  <Image src="/rectangle_44.jpg" alt="Processed coconut chips" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="20vw" />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Supply Chain Flowchart */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <motion.div variants={fadeUp} className="mb-10 lg:mb-14">
              <span className="font-body text-[11px] uppercase tracking-[0.15em] text-cream/30 font-medium">Transparent Supply Chain</span>
              <h3 className="font-editorial font-bold text-cream mt-2" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>From Grove to Container</h3>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {steps.map((step, i) => (
                <motion.div key={step.num} variants={fadeUp}
                  className="group relative p-4 sm:p-5 lg:p-6 bg-forest rounded-xl border border-cream/5 hover:border-cream/15 transition-colors duration-500">
                  {/* FIX: Filled numbers instead of stroke style */}
                  <div className="font-editorial font-bold text-cream/25 group-hover:text-cream/40 transition-colors duration-500 mb-4" style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)", lineHeight: "1" }}>
                    {step.num}
                  </div>
                  <h4 className="font-editorial text-cream text-base sm:text-lg font-bold mb-1.5">{step.title}</h4>
                  <p className="text-cream/40 text-xs leading-relaxed font-body font-light">{step.desc}</p>
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-10 text-cream/15">
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <path d="M6 10h8M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Specs Marquee */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
          className="mt-12 lg:mt-20 border-t border-b border-cream/5 py-3.5 overflow-hidden">
          <div className="marquee-track">
            {[...specsData, ...specsData].map((spec, i) => (
              <span key={i} className="inline-flex items-center gap-3 mx-5 font-body text-[11px] uppercase tracking-[0.1em] text-cream/30 whitespace-nowrap font-medium">
                {spec}<span className="w-1 h-1 rounded-full bg-cream/20" />
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
