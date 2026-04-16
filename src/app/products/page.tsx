"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  stagger,
  staggerFast,
  staggerSlow,
  lineReveal,
  scaleReveal,
} from "@/lib/animations";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});

/* ═══════════════════════════════════════════════
   DATA: All 8 product categories
   ═══════════════════════════════════════════════ */
const products = [
  {
    num: "01",
    title: "Coconut Oil",
    subtitle: "Virgin, Cold-Pressed, Refined",
    desc: "High-quality coconut oil produced from selected coconuts, available in multiple variants to suit food, personal care, and industrial applications.",
    image: "/rectangle_42.jpg",
    tags: ["Food Grade", "Personal Care", "Industrial"],
    specs: [
      { label: "Moisture", value: "≤0.1%" },
      { label: "FFA", value: "≤0.2%" },
      { label: "Purity", value: "99.8%" },
    ],
  },
  {
    num: "02",
    title: "Desiccated Coconut",
    subtitle: "Fine, Medium & Coarse Grade",
    desc: "Finely grated and dried coconut with natural taste and aroma, ideal for bakeries, confectionery, and food processing industries.",
    image: "/rectangle_44.jpg",
    tags: ["Bakery", "Confectionery", "Food Processing"],
    specs: [
      { label: "Moisture", value: "≤3%" },
      { label: "Fat Content", value: "60–65%" },
      { label: "Shelf Life", value: "12 months" },
    ],
  },
  {
    num: "03",
    title: "Coconut Milk & Cream",
    subtitle: "Premium Extraction",
    desc: "Rich and smooth coconut extracts made from fresh kernels, perfect for culinary use, beverages, and ready-to-eat products.",
    image: "/rectangle_45.jpg",
    tags: ["Culinary", "Beverages", "Ready-to-Eat"],
    specs: [
      { label: "Fat Content", value: "17–24%" },
      { label: "Shelf Life", value: "18 months" },
      { label: "Additives", value: "None" },
    ],
  },
  {
    num: "04",
    title: "Coconut Water",
    subtitle: "Natural & Refreshing",
    desc: "Naturally refreshing beverage with essential electrolytes, suitable for hydration drinks and health-focused products.",
    image: "/rectangle_46.jpg",
    tags: ["Hydration", "Health", "Beverages"],
    specs: [
      { label: "Potassium", value: "~600mg/330ml" },
      { label: "Sugar", value: "Low" },
      { label: "Preservatives", value: "None" },
    ],
  },
  {
    num: "05",
    title: "Coconut Flour & Sugar",
    subtitle: "Natural Alternatives",
    desc: "Natural and minimally processed alternatives, ideal for health-conscious food brands and baking applications.",
    image: "/aerial-coconut-palm.png",
    tags: ["Gluten-Free", "Baking", "Health Foods"],
    specs: [
      { label: "Processing", value: "Minimal" },
      { label: "Fiber", value: "High" },
      { label: "Glycemic Index", value: "Low" },
    ],
  },
  {
    num: "06",
    title: "Activated Charcoal",
    subtitle: "From Coconut Shell",
    desc: "Eco-friendly charcoal with high absorption properties, widely used in filtration, cosmetics, and industrial applications.",
    image: "/rectangle_40.jpg",
    tags: ["Filtration", "Cosmetics", "Industrial"],
    specs: [
      { label: "Absorption", value: "High" },
      { label: "Source", value: "Coconut Shell" },
      { label: "Grade", value: "Industrial" },
    ],
  },
  {
    num: "07",
    title: "Coconut Shell Handicrafts",
    subtitle: "Sustainable Décor",
    desc: "Sustainable handcrafted products made from coconut shells, perfect for home décor and eco-friendly lifestyle items.",
    image: "/rectangle_51.png",
    tags: ["Home Décor", "Eco-Friendly", "Handcrafted"],
    specs: [
      { label: "Material", value: "Coconut Shell" },
      { label: "Type", value: "Handcrafted" },
      { label: "Waste", value: "Zero" },
    ],
  },
  {
    num: "08",
    title: "Coir Products",
    subtitle: "Ropes, Mats & Brushes",
    desc: "Durable and biodegradable products made from coconut fibers, suitable for agriculture, construction, and daily use.",
    image: "/eco-envi.jpg",
    tags: ["Agriculture", "Construction", "Biodegradable"],
    specs: [
      { label: "Fiber", value: "Coconut Coir" },
      { label: "Durability", value: "High" },
      { label: "Biodegradable", value: "100%" },
    ],
  },
];

/* ═══════════════════════════════════════════════
   SECTION: Page Hero
   ═══════════════════════════════════════════════ */
function PageHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section ref={ref} className="relative bg-forest overflow-hidden">
      {/* Hexagon mesh bg */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hex-prod" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
            <path d="M28 0L56 16.67V50L28 66.67L0 50V16.67Z M28 100L56 83.33V50L28 33.33L0 50V83.33Z" fill="none" stroke="#E5DCC5" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-prod)" />
      </svg>

      <motion.div
        style={{ y: textY }}
        className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 pt-32 sm:pt-40 lg:pt-[180px] pb-16 lg:pb-24"
      >
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp} className="mb-5">
            <div className="flex items-center gap-2 font-body text-[10px] uppercase tracking-[0.2em] text-cream/40">
              <Link href="/" className="hover:text-cream/70 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-cream/70">Products</span>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-editorial font-bold text-cream leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
          >
            Product Categories
            <br />
            <span className="italic font-normal text-cream/50">Covered</span>
          </motion.h1>

          <motion.div variants={fadeUp} className="mt-5 flex items-center gap-3">
            <div className="h-px w-8 bg-cream/30" />
            <span className="font-body text-[11px] uppercase tracking-[0.15em] text-cream/40 italic">
              8 Categories — Farm to Export
            </span>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-8 max-w-xl text-cream/50 text-sm sm:text-base leading-editorial font-body font-light">
            From virgin coconut oil to coir products — we process, package, and export
            the full spectrum of coconut derivatives for global B2B buyers.
          </motion.p>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-cream/10" />
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SECTION: Product Catalog — Alternating layouts
   ═══════════════════════════════════════════════ */
function ProductCatalog() {
  return (
    <section className="relative overflow-hidden bg-linen">
      {/* Graph paper */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="graph-prod" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0A210F" strokeWidth="0.3" />
          </pattern>
          <pattern id="graph-prod-major" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M 200 0 L 0 0 0 200" fill="none" stroke="#0A210F" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#graph-prod)" />
        <rect width="100%" height="100%" fill="url(#graph-prod-major)" />
      </svg>

      {/* Vertical label */}
      <div className="hidden xl:block absolute left-0 top-1/4">
        <span className="vertical-text font-body text-[10px] uppercase tracking-[0.3em] text-linen-400">
          Product Catalog
        </span>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        {products.map((product, index) => {
          const isEven = index % 2 === 0;
          const isLast = index === products.length - 1;

          return (
            <motion.div
              key={product.num}
              className={`grid lg:grid-cols-12 gap-8 lg:gap-16 xl:gap-20 items-center section-pad-sm ${
                !isLast ? "border-b border-linen-400" : ""
              }`}
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {/* Image column */}
              <motion.div
                className={`lg:col-span-5 ${isEven ? "order-1" : "order-1 lg:order-2"}`}
                variants={isEven ? fadeLeft : fadeRight}
              >
                <div
                  className="group relative aspect-[4/3] overflow-hidden border border-linen-400 bg-white"
                  data-cursor="VIEW SPECS"
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  {/* Blueprint overlay on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id={`bp-p-${product.num}`} width="16" height="16" patternUnits="userSpaceOnUse">
                          <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#0A210F" strokeWidth="0.12" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#bp-p-${product.num})`} opacity="0.25" />
                      <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#0A210F" strokeWidth="0.3" opacity="0.12" />
                      <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#0A210F" strokeWidth="0.3" opacity="0.12" />
                      <circle cx="50%" cy="50%" r="28" fill="none" stroke="#0A210F" strokeWidth="0.3" opacity="0.1" />
                    </svg>
                  </div>
                  {/* Number badge */}
                  <div className="absolute top-4 left-4 number-outline text-forest/15 text-4xl lg:text-5xl">
                    {product.num}
                  </div>
                </div>
              </motion.div>

              {/* Content column */}
              <motion.div
                className={`lg:col-span-7 ${isEven ? "order-2" : "order-2 lg:order-1"}`}
                variants={stagger}
              >
                <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                  <span className="font-body text-[10px] uppercase tracking-[0.2em] text-charcoal-200">
                    Category {product.num}
                  </span>
                  <div className="h-px flex-1 bg-linen-400 max-w-[60px]" />
                </motion.div>

                <motion.h3
                  variants={fadeUp}
                  className="text-display-sm font-editorial font-bold text-forest leading-[1.05]"
                >
                  {product.title}
                </motion.h3>
                <motion.p
                  variants={fadeUp}
                  className="font-editorial italic text-charcoal-200 text-base mt-1"
                >
                  {product.subtitle}
                </motion.p>

                <motion.div variants={lineReveal} className="mt-5 h-px bg-linen-400 origin-left" />

                <motion.p
                  variants={fadeUp}
                  className="mt-5 text-charcoal-200 text-sm sm:text-base leading-editorial font-body font-light max-w-lg"
                >
                  {product.desc}
                </motion.p>

                {/* Tags */}
                <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 border border-linen-400 font-body text-[10px] uppercase tracking-[0.12em] text-charcoal-200 hover:border-forest hover:text-forest transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>

                {/* Specs row */}
                <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
                  {product.specs.map((spec) => (
                    <div key={spec.label} className="px-4 py-3 border border-linen-400 bg-white min-w-[100px]">
                      <div className="font-body text-[9px] uppercase tracking-[0.12em] text-charcoal-200">
                        {spec.label}
                      </div>
                      <div className="font-editorial text-lg font-bold text-forest mt-0.5 leading-none">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SECTION: CTA Banner
   ═══════════════════════════════════════════════ */
function CTABanner() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#E5DCC5" }}>
      {/* Wave SVG */}
      <svg className="absolute bottom-0 left-0 w-[200%] h-16 lg:h-24 animate-wave opacity-[0.06]" viewBox="0 0 2880 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0 60C240 20 480 100 720 60C960 20 1200 100 1440 60C1680 20 1920 100 2160 60C2400 20 2640 100 2880 60V120H0V60Z" fill="#0A210F" />
      </svg>

      <div className="relative z-10 section-pad-sm max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.span variants={fadeUp} className="data-tag block mb-4 text-charcoal-200">
            Ready to Order?
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-display-sm font-editorial font-bold text-forest">
            Let&apos;s build your <span className="italic font-normal">supply chain</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-charcoal-200 text-sm leading-editorial font-body font-light">
            Whether you need bulk desiccated coconut, private-label coconut oil, or custom coir products — our team is ready to help.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/export"
              data-cursor="EXPLORE"
              className="group inline-flex items-center gap-3 px-7 py-3.5 bg-forest text-cream font-body text-[11px] uppercase tracking-[0.15em] hover:bg-forest-400 transition-colors duration-500"
            >
              Export & Logistics
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/#contact"
              data-cursor="LET'S TALK"
              className="px-7 py-3.5 border border-forest text-forest font-body text-[11px] uppercase tracking-[0.15em] hover:bg-forest hover:text-cream transition-all duration-500"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   PAGE COMPOSITION
   ═══════════════════════════════════════════════ */
export default function ProductsPage() {
  return (
    <>
      <CustomCursor />
      <Header currentPage="/products" />
      <main>
        <PageHero />
        <ProductCatalog />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
