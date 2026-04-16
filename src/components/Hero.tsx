"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { fadeUp, stagger, staggerFast } from "@/lib/animations";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  // FIX: Remove early opacity fade — content stays fully visible until user scrolls well past
  const opacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0.6]);

  return (
    <section ref={ref} id="home" className="relative min-h-screen overflow-hidden bg-linen">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" opacity="0.07">
        <defs>
          <pattern id="topo" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M0 80 Q50 60 100 80 Q150 100 200 80" fill="none" stroke="#0A210F" strokeWidth="0.5" />
            <path d="M0 120 Q50 100 100 120 Q150 140 200 120" fill="none" stroke="#0A210F" strokeWidth="0.4" />
            <path d="M0 160 Q50 140 100 160 Q150 180 200 160" fill="none" stroke="#0A210F" strokeWidth="0.3" />
            <path d="M0 40 Q50 20 100 40 Q150 60 200 40" fill="none" stroke="#0A210F" strokeWidth="0.3" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="#0A210F" strokeWidth="0.2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#topo)" />
      </svg>

      <motion.div style={{ y: textY, opacity }} className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 pt-28 sm:pt-36 lg:pt-[160px] pb-16 lg:pb-[100px]">
        <div className="grid lg:grid-cols-16 gap-4 items-end min-h-[65vh] lg:min-h-[70vh]">
          <motion.div className="lg:col-span-9 xl:col-span-8 relative z-20" variants={stagger} initial="hidden" animate="visible">
            <motion.div variants={fadeUp} className="mb-5 lg:mb-7">
              <span className="data-tag">Tamil Nadu, India — Since 1992</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-editorial font-bold text-forest leading-[0.92] tracking-tight" style={{ fontSize: "clamp(2.5rem, 7vw, 7.5rem)" }}>
              Desiccated<br />
              <span className="italic font-normal text-forest-300">Coconut</span><br />
              Processing
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-5 lg:mt-8 max-w-md text-charcoal-200 font-body text-sm sm:text-base leading-editorial">
              From farm-fresh coconuts to export-ready products, we manage the complete supply chain for bulk orders, food industries, and global trade requirements.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6 lg:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
              <a href="#contact" data-cursor="LET'S TALK"
                className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 bg-forest text-cream font-body text-[11px] uppercase tracking-[0.12em] font-bold rounded-full hover:bg-forest-400 transition-colors duration-500">
                Get a Quote
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#about" data-cursor="SCROLL"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 border border-linen-400 text-charcoal-200 font-body text-[11px] uppercase tracking-[0.12em] font-medium rounded-full hover:border-forest hover:text-forest transition-all duration-500">
                Our Story
              </a>
            </motion.div>

            <motion.div variants={staggerFast} initial="hidden" animate="visible" className="mt-10 lg:mt-16 flex flex-wrap gap-6 sm:gap-8 lg:gap-12 border-t border-linen-400 pt-6 sm:pt-8">
              {[{ val: "33+", label: "Years" }, { val: "2,000+", label: "Farmers" }, { val: "100%", label: "Natural" }, { val: "<3%", label: "Moisture" }].map((s) => (
                <motion.div key={s.label} variants={fadeUp}>
                  <div className="font-editorial text-xl sm:text-2xl lg:text-3xl font-bold text-forest leading-none">{s.val}</div>
                  <div className="data-tag mt-1">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="lg:col-span-7 xl:col-span-8 relative lg:absolute lg:right-0 lg:top-[10%] lg:w-[52%] xl:w-[48%] z-10" style={{ y: imageY }}
            initial={{ opacity: 0, x: 80, scale: 0.96 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}>
            <div className="aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] relative overflow-hidden">
              <Image src="/rectangle-43.png" alt="Premium desiccated coconut and whole coconuts" fill className="object-cover object-center" priority sizes="(max-width: 1024px) 100vw, 52vw" />
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-linen via-linen/50 to-transparent hidden lg:block" />
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-linen to-transparent" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-linen-400" />
    </section>
  );
}
