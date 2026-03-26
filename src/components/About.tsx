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
  const parallaxText = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const parallaxImage = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      ref={ref}
      id="about"
      className="relative section-pad overflow-hidden"
      style={{ background: "#FDFDFD" }}
    >
      {/* ── Vertical Ruler SVG (left) ── */}
      <svg
        className="absolute left-4 lg:left-10 top-0 h-full w-6 opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="12" y1="0" x2="12" y2="100%" stroke="#0A210F" strokeWidth="0.5" />
        {[...Array(50)].map((_, i) => (
          <g key={i}>
            <line
              x1={i % 5 === 0 ? "4" : "8"}
              y1={i * 40}
              x2="12"
              y2={i * 40}
              stroke="#0A210F"
              strokeWidth="0.5"
            />
            {i % 5 === 0 && (
              <text x="16" y={i * 40 + 3} fill="#0A210F" fontSize="6" fontFamily="monospace">
                {i * 10}mm
              </text>
            )}
          </g>
        ))}
      </svg>

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* ── Rotated vertical section label (desktop) ── */}
        <div className="hidden xl:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4">
          <span className="vertical-text font-mono text-[10px] uppercase tracking-[0.3em] text-linen-400">
            About Manvasam
          </span>
        </div>

        {/* ── Header ── */}
        <motion.div
          className="max-w-3xl mb-16 lg:mb-24"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
        >
          <motion.span variants={fadeUp} className="data-tag block mb-4">
            Our Story
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-display-lg font-editorial font-bold text-forest">
            More than a brand—<br />
            <span className="italic font-normal">it&apos;s a way of life.</span>
          </motion.h2>
          <motion.div variants={lineReveal} className="mt-6 h-px bg-linen-400 origin-left" />
        </motion.div>

        {/* ── Two-column content ── */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-[120px] items-start">
          {/* Images */}
          <motion.div
            className="lg:col-span-5 relative"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="flex gap-4 sm:gap-5">
              <motion.div variants={fadeLeft} className="w-1/2" style={{ y: parallaxImage }}>
                <div className="aspect-[3/4] relative overflow-hidden border border-linen-400">
                  <Image
                    src="/images/palm-grove.png"
                    alt="Coconut palm grove in Tamil Nadu"
                    fill
                    className="object-cover grayscale-[20%]"
                    sizes="25vw"
                  />
                </div>
                {/* Experience badge */}
                <motion.div
                  variants={fadeUp}
                  className="mt-4 p-4 border border-linen-400 bg-white"
                >
                  <div className="number-outline text-forest">33+</div>
                  <div className="data-tag mt-1">Years of Experience</div>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeRight} className="w-1/2 mt-12 lg:mt-16">
                <div className="aspect-[3/4] relative overflow-hidden border border-linen-400">
                  <Image
                    src="/images/worker-back.png"
                    alt="Manvasam coconut plantation worker"
                    fill
                    className="object-cover grayscale-[20%]"
                    sizes="25vw"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="lg:col-span-7"
            style={{ y: parallaxText }}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p
              variants={fadeUp}
              className="text-charcoal text-base sm:text-lg leading-editorial font-body font-light"
            >
              Rooted in tradition and crafted for the modern world, Manvasam, a
              brand of more than 33 years, brings the pure, authentic taste of
              coconut straight from nature to your table. Every product is 100%
              natural, free from preservatives, and made with an uncompromising
              commitment to quality.
            </motion.p>

            <motion.a
              variants={fadeUp}
              href="#process"
              data-cursor="READ"
              className="inline-flex items-center gap-2 mt-8 font-mono text-[11px] uppercase tracking-[0.15em] text-forest border-b border-forest pb-1 hover:text-forest-300 hover:border-forest-300 transition-colors duration-300"
            >
              Read More
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>

            {/* Founder card */}
            <motion.div
              variants={fadeUp}
              className="mt-12 lg:mt-16 flex items-center gap-5 p-5 lg:p-6 border border-linen-400 bg-white"
            >
              <div className="w-14 h-14 rounded-full bg-linen-200 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-charcoal-200" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div>
                <div className="font-editorial font-bold text-forest text-lg">
                  Saravanan
                </div>
                <div className="data-tag">CEO &amp; Founder</div>
              </div>
            </motion.div>

            {/* Vision / Mission Bento Grid */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-12 lg:mt-16 grid grid-cols-2 gap-px bg-linen-400"
            >
              {/* Vision — full width */}
              <motion.div variants={fadeUp} className="col-span-2 p-6 lg:p-8 bg-white border border-linen-400">
                <div className="flex items-start gap-4">
                  <span className="number-outline text-forest text-3xl lg:text-4xl flex-shrink-0">V</span>
                  <div>
                    <h3 className="font-editorial text-xl lg:text-2xl font-bold text-forest mb-3">Vision</h3>
                    <p className="text-charcoal-200 text-sm leading-editorial font-body font-light">
                      We strive to be the most preferred supply chain partner for
                      Industrial Coconut Product in the global market.
                    </p>
                  </div>
                </div>
              </motion.div>
              {/* Mission — split */}
              <motion.div variants={fadeUp} className="col-span-2 sm:col-span-1 p-6 lg:p-8 bg-white border border-linen-400">
                <span className="number-outline text-forest text-3xl lg:text-4xl">M</span>
                <h3 className="font-editorial text-xl font-bold text-forest mt-3 mb-2">Mission</h3>
                <p className="text-charcoal-200 text-sm leading-editorial font-body font-light">
                  To be the leader of Industrial Coconut Product Supplier and the
                  sustainable player in the global supply chain.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="col-span-2 sm:col-span-1 p-6 lg:p-8 bg-white border border-linen-400 flex flex-col justify-center">
                <div className="data-tag mb-2">Certifications</div>
                <div className="flex flex-wrap gap-2">
                  {["ISO 22000", "FSSAI", "HACCP", "GMP", "Halal"].map((c) => (
                    <span key={c} className="px-3 py-1 border border-linen-400 text-charcoal-200 font-mono text-[10px] uppercase tracking-wider">
                      {c}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
