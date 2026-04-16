"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { fadeUp, fadeLeft, fadeRight, stagger, lineReveal } from "@/lib/animations";

function CircularBadge() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div ref={ref} className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 flex-shrink-0">
      <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
        <circle cx="60" cy="60" r="52" fill="none" stroke="#0A210F" strokeWidth="1" opacity="0.1" />
        <motion.circle cx="60" cy="60" r="52" fill="none" stroke="#0A210F" strokeWidth="2.5" strokeLinecap="round"
          strokeDasharray={`${2 * Math.PI * 52}`}
          initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
          animate={isInView ? { strokeDashoffset: 0 } : {}}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-editorial text-xl sm:text-2xl lg:text-3xl font-bold text-forest leading-none">100%</span>
        <span className="font-body text-[8px] sm:text-[9px] uppercase tracking-[0.12em] text-charcoal-200 mt-1 font-medium">Organic</span>
      </div>
    </motion.div>
  );
}

export default function Sustainability() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const waveX = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={ref} id="sustainability" className="relative section-pad overflow-hidden" style={{ background: "#E5DCC5" }}>
      <motion.div className="absolute bottom-0 left-0 right-0 h-20 lg:h-28" style={{ x: waveX }}>
        <svg viewBox="0 0 2880 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[200%] h-full" preserveAspectRatio="none">
          <path d="M0 60C240 20 480 100 720 60C960 20 1200 100 1440 60C1680 20 1920 100 2160 60C2400 20 2640 100 2880 60V120H0V60Z" fill="#0A210F" opacity="0.06" />
          <path d="M0 80C240 50 480 110 720 80C960 50 1200 110 1440 80C1680 50 1920 110 2160 80C2400 50 2640 110 2880 80V120H0V80Z" fill="#0A210F" opacity="0.04" />
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* FIX: Left-aligned heading (removed center margins) */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <motion.span variants={fadeUp} className="data-tag block mb-4 text-charcoal-200">Sustainability</motion.span>
          {/* FIX: Larger heading */}
          <motion.h2 variants={fadeUp} className="font-editorial font-bold text-forest leading-[1.05]" style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}>
            A Sustainable Approach to <span className="italic font-normal">Coconut Supply</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-start mt-10 lg:mt-14">
          {/* FIX: Larger image with rounded corners */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeLeft}>
            <div className="aspect-[4/3] relative overflow-hidden rounded-2xl border border-forest/10">
              <Image src="/rectangle_47.png" alt="Sustainable coconut sourcing" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </motion.div>

          {/* Text + FIX: "Organic 100%" on the right side */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.div variants={lineReveal} className="h-px bg-forest/10 origin-left mb-5" />
            <motion.p variants={fadeUp} className="text-charcoal text-sm sm:text-base leading-editorial font-body font-light">
              At Manvasam, we produce premium Desiccated Coconut and Coconut Chips with a strong focus on sustainability and supply reliability. From responsible sourcing to Eco-friendly production, we ensure every product supports both your business and the communities behind it.
            </motion.p>

            {/* FIX: "Organic 100%" badge on the right — layout: metrics left, badge right */}
            <motion.div variants={fadeUp} className="mt-8 flex items-center gap-6 lg:gap-8">
              <div className="grid grid-cols-2 gap-3 flex-1">
                {[
                  { val: "2,000+", label: "Partner Farmers" },
                  { val: "Zero", label: "Waste Policy" },
                  { val: "Eco", label: "Production" },
                  { val: "Fair", label: "Trade Pricing" },
                ].map((m) => (
                  <div key={m.label} className="p-3 rounded-xl border border-forest/10 bg-cream-50/50">
                    <div className="font-editorial text-base sm:text-lg font-bold text-forest leading-none">{m.val}</div>
                    <div className="font-body text-[9px] uppercase tracking-[0.1em] text-charcoal-200 mt-1 font-medium">{m.label}</div>
                  </div>
                ))}
              </div>
              {/* Organic badge on the right */}
              <CircularBadge />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
