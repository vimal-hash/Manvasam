"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { fadeUp, fadeLeft, fadeRight, stagger, lineReveal } from "@/lib/animations";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const parallaxText = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const parallaxImage = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      ref={ref}
      id="about"
      className="relative section-pad overflow-hidden"
      style={{ background: "#FDFDFD" }}
    >
      {/* Vertical Ruler SVG */}
      <svg className="absolute left-4 lg:left-10 top-0 h-full w-6 opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
        <line x1="12" y1="0" x2="12" y2="100%" stroke="#0A210F" strokeWidth="0.5" />
        {[...Array(50)].map((_, i) => (
          <g key={i}>
            <line x1={i % 5 === 0 ? "4" : "8"} y1={i * 40} x2="12" y2={i * 40} stroke="#0A210F" strokeWidth="0.5" />
          </g>
        ))}
      </svg>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* Header — FIX: Line 1 "More than a brand" Line 2 "It's a way of life" */}
        <motion.div
          className="max-w-3xl mb-12 lg:mb-20"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span variants={fadeUp} className="data-tag block mb-4">Our Story</motion.span>
          <motion.h2 variants={fadeUp} className="font-editorial font-bold text-forest" style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)", lineHeight: "1.05" }}>
            More than a brand
          </motion.h2>
          <motion.p variants={fadeUp} className="font-body font-light text-charcoal-200 mt-2" style={{ fontSize: "clamp(1.2rem, 3vw, 2.2rem)", lineHeight: "1.3" }}>
            It&apos;s a way of life.
          </motion.p>
          <motion.div variants={lineReveal} className="mt-6 h-px bg-linen-400 origin-left" />
        </motion.div>

        {/* Two-column content */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 xl:gap-20 items-start">
          {/* Images column */}
          <motion.div
            className="lg:col-span-5 relative"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* FIX: "About Manvasam" centered above images instead of left side */}
            <motion.div variants={fadeUp} className="text-center mb-5">
              {/* <span className="font-body text-[10px] sm:text-xs uppercase tracking-[0.2em] text-linen-400 font-medium">
                About Manvasam
              </span> */}
            </motion.div>

            <div className="flex gap-3 sm:gap-4">
              <motion.div variants={fadeLeft} className="w-1/2" style={{ y: parallaxImage }}>
                <div className="aspect-[3/4] relative overflow-hidden rounded-xl border border-linen-400">
                  <Image src="/rectangle_41.jpg" alt="Coconut palm grove in Tamil Nadu" fill className="object-cover grayscale-[15%]" sizes="25vw" />
                </div>
                <motion.div variants={fadeUp} className="mt-3 sm:mt-4 p-3 sm:p-4 rounded-xl border border-linen-400 bg-white">
                  <div className="number-filled text-forest text-3xl sm:text-4xl">33+</div>
                  <div className="data-tag mt-1">Years of Experience</div>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeRight} className="w-1/2 mt-10 lg:mt-14">
                <div className="aspect-[3/4] relative overflow-hidden rounded-xl border border-linen-400">
                  <Image src="/rectangle_42.jpg" alt="Manvasam coconut plantation worker" fill className="object-cover grayscale-[15%]" sizes="25vw" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            className="lg:col-span-7"
            style={{ y: parallaxText }}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p variants={fadeUp} className="text-charcoal text-sm sm:text-base lg:text-lg leading-editorial font-body font-light">
              Rooted in tradition and crafted for the modern world, Manvasam, a brand of more than 33 years, brings the pure, authentic taste of coconut straight from nature to your table. Every product is 100% natural, free from preservatives, and made with an uncompromising commitment to quality.
            </motion.p>

            <motion.a variants={fadeUp} href="#process" data-cursor="READ"
              className="inline-flex items-center gap-2 mt-6 font-body text-[11px] uppercase tracking-[0.12em] text-forest border-b border-forest pb-1 font-bold hover:text-forest-300 hover:border-forest-300 transition-colors duration-300">
              Read More
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>

            {/* FIX: Reduced spacing between Read More and Saravanan — mt-6 instead of mt-12 */}
            <motion.div variants={fadeUp} className="mt-6 flex items-center gap-4 p-4 sm:p-5 rounded-xl border border-linen-400 bg-white">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-linen-200 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-charcoal-200" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div>
                <div className="font-editorial font-bold text-forest text-base sm:text-lg">Saravanan</div>
                <div className="data-tag">CEO &amp; Founder</div>
              </div>
            </motion.div>

            {/* FIX: Vision/Mission/Certs — rounded corners, consistent alignment, gap between cards */}
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="mt-8 lg:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {/* Vision — full width */}
              <motion.div variants={fadeUp} className="sm:col-span-2 p-5 sm:p-6 lg:p-7 bg-white rounded-xl border border-linen-400">
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="number-filled text-forest/20 text-2xl sm:text-3xl flex-shrink-0 mt-0.5">V</span>
                  <div>
                    <h3 className="font-editorial text-lg sm:text-xl font-bold text-forest mb-2">Vision</h3>
                    <p className="text-charcoal-200 text-sm leading-editorial font-body font-light">
                      We strive to be the most preferred supply chain partner for Industrial Coconut Product in the global market.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Mission */}
              <motion.div variants={fadeUp} className="p-5 sm:p-6 lg:p-7 bg-white rounded-xl border border-linen-400">
                <span className="number-filled text-forest/20 text-2xl sm:text-3xl">M</span>
                <h3 className="font-editorial text-lg sm:text-xl font-bold text-forest mt-2 mb-2">Mission</h3>
                <p className="text-charcoal-200 text-sm leading-editorial font-body font-light">
                  To be the leader of Industrial Coconut Product Supplier and the sustainable player in the global supply chain.
                </p>
              </motion.div>

              {/* FIX: Certifications — more prominent badges */}
              <motion.div variants={fadeUp} className="p-5 sm:p-6 lg:p-7 bg-white rounded-xl border border-linen-400 flex flex-col justify-center">
                <div className="data-tag mb-3 font-bold text-forest">Certifications</div>
                <div className="flex flex-wrap gap-2">
                  {["ISO 22000", "FSSAI", "HACCP", "GMP", "Halal"].map((c) => (
                    <span key={c} className="px-3 py-1.5 bg-forest/5 border border-forest/15 text-forest font-body text-[10px] uppercase tracking-[0.1em] font-bold rounded-md">
                      {c}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* FIX: Certification marquee — sliding animation for extra prominence */}
            <motion.div variants={fadeUp} className="mt-5 overflow-hidden rounded-lg border border-linen-400 bg-white py-3">
              <div className="marquee-track">
                {["ISO 22000", "FSSAI APPROVED", "HACCP VERIFIED", "GMP CERTIFIED", "HALAL COMPLIANT", "ORGANIC",
                  "ISO 22000", "FSSAI APPROVED", "HACCP VERIFIED", "GMP CERTIFIED", "HALAL COMPLIANT", "ORGANIC"].map((c, i) => (
                  <span key={i} className="inline-flex items-center gap-3 mx-4 font-body text-[11px] uppercase tracking-[0.1em] text-forest/60 font-bold whitespace-nowrap">
                    {c}
                    <span className="w-1.5 h-1.5 rounded-full bg-forest/20" />
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
