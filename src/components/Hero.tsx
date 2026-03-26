"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { fadeUp, fadeIn, stagger, staggerFast } from "@/lib/animations";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen overflow-hidden bg-linen"
    >
      {/* ── Topographic SVG Background ── */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        opacity="0.07"
      >
        <defs>
          <pattern id="topo" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M0 80 Q50 60 100 80 Q150 100 200 80" fill="none" stroke="#0A210F" strokeWidth="0.5" />
            <path d="M0 120 Q50 100 100 120 Q150 140 200 120" fill="none" stroke="#0A210F" strokeWidth="0.4" />
            <path d="M0 160 Q50 140 100 160 Q150 180 200 160" fill="none" stroke="#0A210F" strokeWidth="0.3" />
            <path d="M0 40 Q50 20 100 40 Q150 60 200 40" fill="none" stroke="#0A210F" strokeWidth="0.3" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="#0A210F" strokeWidth="0.2" />
            <circle cx="100" cy="100" r="30" fill="none" stroke="#0A210F" strokeWidth="0.15" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#topo)" />
      </svg>

      {/* ── Content ── */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 pt-32 sm:pt-40 lg:pt-[180px] pb-20 lg:pb-[120px]"
      >
        <div className="grid lg:grid-cols-16 gap-4 items-end min-h-[70vh] lg:min-h-[75vh]">
          {/* Left column: text */}
          <motion.div
            className="lg:col-span-9 xl:col-span-8 relative z-20"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {/* Data tag */}
            <motion.div variants={fadeUp} className="mb-6 lg:mb-8">
              <span className="data-tag">
                Tamil Nadu, India — Since 1992
              </span>
            </motion.div>

            {/* Mega headline */}
            <motion.h1
              variants={fadeUp}
              className="font-editorial font-bold text-forest leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(2.8rem, 8vw, 8.5rem)" }}
            >
              Desiccated
              <br />
              <span className="italic font-normal text-forest-300">Coconut</span>
              <br />
              Processing
            </motion.h1>

            {/* Sub line */}
            <motion.p
              variants={fadeUp}
              className="mt-6 lg:mt-10 max-w-md text-charcoal-200 font-body text-sm sm:text-base leading-editorial"
            >
              From farm-fresh coconuts to export-ready products, we manage the
              complete supply chain for bulk orders, food industries, and global
              trade requirements.
            </motion.p>

            {/* CTA row */}
            <motion.div variants={fadeUp} className="mt-8 lg:mt-12 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                data-cursor="LET'S TALK"
                className="group inline-flex items-center gap-3 px-7 py-3.5 bg-forest text-cream font-mono text-[11px] uppercase tracking-[0.15em] hover:bg-forest-400 transition-colors duration-500"
              >
                Get a Quote
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#about"
                data-cursor="SCROLL"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-linen-400 text-charcoal-200 font-mono text-[11px] uppercase tracking-[0.15em] hover:border-forest hover:text-forest transition-all duration-500"
              >
                Our Story
              </a>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              variants={staggerFast}
              initial="hidden"
              animate="visible"
              className="mt-12 lg:mt-20 flex flex-wrap gap-8 lg:gap-14 border-t border-linen-400 pt-8"
            >
              {[
                { val: "33+", label: "Years" },
                { val: "2,000+", label: "Farmers" },
                { val: "100%", label: "Natural" },
                { val: "<3%", label: "Moisture" },
              ].map((s) => (
                <motion.div key={s.label} variants={fadeUp}>
                  <div className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-forest leading-none">
                    {s.val}
                  </div>
                  <div className="data-tag mt-1">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column: hero image — overlaps text for depth */}
          <motion.div
            className="lg:col-span-7 xl:col-span-8 relative lg:absolute lg:right-0 lg:top-[10%] lg:w-[55%] xl:w-[50%] z-10"
            style={{ y: imageY }}
            initial={{ opacity: 0, x: 100, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          >
            <div className="aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] relative overflow-hidden">
              <Image
                src="/images/hero-coconut.png"
                alt="Premium desiccated coconut and whole coconuts on natural burlap textile"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              {/* Cream gradient overlay left edge for depth blend */}
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-linen via-linen/50 to-transparent hidden lg:block" />
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-linen to-transparent" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Bottom line ── */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linen-400" />
    </section>
  );
}
