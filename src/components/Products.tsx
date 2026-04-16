"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, stagger, scaleReveal, lineReveal } from "@/lib/animations";

const products = [
  {
    title: "Coconut Oil", subtitle: "Virgin, Cold-Pressed, Refined", image: "/rectangle_45.jpg",
    specs: [{ label: "Moisture", value: "≤0.1%" }, { label: "Free Fatty Acid", value: "≤0.2%" }, { label: "Purity", value: "99.8%" }],
  },
  {
    title: "Desiccated Coconut", subtitle: "Fine, Medium & Coarse Grade", image: "/rectangle_46.jpg",
    specs: [{ label: "Moisture", value: "≤3%" }, { label: "Fat Content", value: "60–65%" }, { label: "Shelf Life", value: "12 months" }],
  },
  {
    title: "Coconut Milk & Cream", subtitle: "Premium Extraction", image: "/rectangle_50.jpg",
    specs: [{ label: "Fat Content", value: "17–24%" }, { label: "Shelf Life", value: "18 months" }, { label: "Additives", value: "None" }],
  },
];

export default function Products() {
  return (
    <section id="products" className="relative section-pad overflow-hidden bg-linen">
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="graph" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0A210F" strokeWidth="0.3" /></pattern>
          <pattern id="graph-major" width="200" height="200" patternUnits="userSpaceOnUse"><path d="M 200 0 L 0 0 0 200" fill="none" stroke="#0A210F" strokeWidth="0.5" /></pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#graph)" />
        <rect width="100%" height="100%" fill="url(#graph-major)" />
      </svg>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <motion.div className="mb-6 lg:mb-8" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <motion.span variants={fadeUp} className="data-tag block mb-3">Product Range</motion.span>
          <motion.h2 variants={fadeUp} className="font-editorial font-bold text-forest" style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)", lineHeight: "1" }}>
            What <span className="italic font-normal">we offer</span>
          </motion.h2>
          <motion.div variants={lineReveal} className="mt-5 h-px bg-linen-400 origin-left max-w-xl" />
        </motion.div>

        <motion.p className="max-w-2xl text-charcoal-200 text-sm sm:text-base leading-editorial font-body font-light mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
          High quality solutions for <span className="text-forest font-medium">Global Market</span>. Every product is carefully processed under strict hygiene conditions to ensure freshness, purity, and consistent taste.
        </motion.p>

        <motion.div className="mb-8 lg:mb-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h3 className="font-editorial font-bold text-forest" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)" }}>
            Categories <span className="italic font-normal text-charcoal-200">Covered</span>
          </h3>
        </motion.div>

        {/* FIX: Cards — smaller, 16-20px gap, whole card scales on hover */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl"
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
          {products.map((p) => (
            <motion.div key={p.title} variants={scaleReveal} data-cursor="VIEW SPECS"
              className="group relative bg-white rounded-xl border border-linen-400 overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_16px_40px_rgba(229,220,197,0.4)]">
              {/* Image — no individual scale, the whole card scales */}
              <div className="relative aspect-[4/3] overflow-hidden bg-linen-100">
                <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-700" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs><pattern id={`bp-${p.title}`} width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="#0A210F" strokeWidth="0.15" /></pattern></defs>
                    <rect width="100%" height="100%" fill={`url(#bp-${p.title})`} opacity="0.3" />
                    <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#0A210F" strokeWidth="0.3" opacity="0.15" />
                    <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#0A210F" strokeWidth="0.3" opacity="0.15" />
                  </svg>
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <h4 className="font-editorial text-lg sm:text-xl font-bold text-forest italic">{p.title}</h4>
                <p className="data-tag mt-1">({p.subtitle})</p>
                <div className="mt-4 space-y-1.5">
                  {p.specs.map((spec) => (
                    <div key={spec.label} className="flex items-center justify-between py-1 border-b border-linen-400/50 last:border-0">
                      <span className="font-body text-[10px] uppercase tracking-[0.08em] text-charcoal-200 font-medium">{spec.label}</span>
                      <span className="font-body text-xs font-semibold text-forest">{spec.value}</span>
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
