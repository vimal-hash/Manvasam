"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, stagger, scaleReveal, lineReveal } from "@/lib/animations";

const products = [
  {
    title: "Coconut Oil",
    subtitle: "Virgin, Cold-Pressed, Refined",
    image: "/images/coconut-oil.png",
    specs: [
      { label: "Moisture", value: "≤0.1%" },
      { label: "Free Fatty Acid", value: "≤0.2%" },
      { label: "Purity", value: "99.8%" },
    ],
  },
  {
    title: "Desiccated Coconut",
    subtitle: "Fine, Medium & Coarse Grade",
    image: "/images/desiccated-coconut.png",
    specs: [
      { label: "Moisture", value: "≤3%" },
      { label: "Fat Content", value: "60–65%" },
      { label: "Shelf Life", value: "12 months" },
    ],
  },
  {
    title: "Coconut Milk & Cream",
    subtitle: "Premium Extraction",
    image: "/images/coconut-milk.png",
    specs: [
      { label: "Fat Content", value: "17–24%" },
      { label: "Shelf Life", value: "18 months" },
      { label: "Additives", value: "None" },
    ],
  },
];

export default function Products() {
  return (
    <section id="products" className="relative section-pad overflow-hidden bg-linen">
      {/* ── Graph Paper SVG ── */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="graph" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0A210F" strokeWidth="0.3" />
          </pattern>
          <pattern id="graph-major" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M 200 0 L 0 0 0 200" fill="none" stroke="#0A210F" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#graph)" />
        <rect width="100%" height="100%" fill="url(#graph-major)" />
      </svg>

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* ── Header ── */}
        <motion.div
          className="mb-8 lg:mb-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
        >
          <motion.span variants={fadeUp} className="data-tag block mb-4">
            Product Range
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-display-lg font-editorial font-bold text-forest">
            What <span className="italic font-normal">we offer</span>
          </motion.h2>
          <motion.div variants={lineReveal} className="mt-6 h-px bg-linen-400 origin-left max-w-xl" />
        </motion.div>

        <motion.p
          className="max-w-2xl text-charcoal-200 text-sm sm:text-base leading-editorial font-body font-light mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          High quality solutions for{" "}
          <span className="text-forest font-medium">Global Market</span>. Every
          product is carefully processed under strict hygiene conditions to
          ensure freshness, purity, and consistent taste. From selecting the
          right coconuts to final packaging, we maintain high-quality control at
          every stage.
        </motion.p>

        {/* ── Categories heading ── */}
        <motion.div
          className="mb-10 lg:mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="font-editorial text-display-sm font-bold text-forest">
            Categories <span className="italic font-normal text-charcoal-200">Covered</span>
          </h3>
        </motion.div>

        {/* ── Product Cards — Museum Gallery ── */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-linen-400"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {products.map((p) => (
            <motion.div
              key={p.title}
              variants={scaleReveal}
              data-cursor="VIEW SPECS"
              className="group relative bg-white border border-linen-400 overflow-hidden transition-all duration-700 hover:shadow-[0_20px_40px_rgba(229,220,197,0.4)]"
            >
              {/* Image container with blueprint ghost */}
              <div className="relative aspect-[4/3] overflow-hidden bg-linen-100">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Blueprint overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id={`bp-${p.title}`} width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#0A210F" strokeWidth="0.15" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#bp-${p.title})`} opacity="0.3" />
                    {/* Crosshair center */}
                    <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#0A210F" strokeWidth="0.3" opacity="0.2" />
                    <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#0A210F" strokeWidth="0.3" opacity="0.2" />
                    <circle cx="50%" cy="50%" r="30" fill="none" stroke="#0A210F" strokeWidth="0.3" opacity="0.15" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 lg:p-7">
                <h4 className="font-editorial text-xl lg:text-2xl font-bold text-forest italic">
                  {p.title}
                </h4>
                <p className="data-tag mt-1">({p.subtitle})</p>

                {/* Technical specs */}
                <div className="mt-5 space-y-2">
                  {p.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex items-center justify-between py-1.5 border-b border-linen-400/50 last:border-0"
                    >
                      <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-charcoal-200">
                        {spec.label}
                      </span>
                      <span className="font-mono text-xs font-medium text-forest letter-wide">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
