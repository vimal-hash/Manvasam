"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  fadeUp, fadeLeft, fadeRight, stagger, staggerFast, lineReveal, scaleReveal,
} from "@/lib/animations";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });

/* ═══ PAGE HERO ═══ */
function PageHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.55, 0.75]);

  return (
    <section ref={ref} className="relative h-[55vh] sm:h-[60vh] lg:h-[65vh] overflow-hidden">
      <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
        <Image src="/aerial-coconut-palm.png" alt="Coconut palm grove — Manvasam plantation" fill className="object-cover object-top" priority sizes="100vw" />
      </motion.div>
      <motion.div className="absolute inset-0 bg-forest" style={{ opacity: overlayOpacity }} />
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs><pattern id="topo-about" width="200" height="200" patternUnits="userSpaceOnUse">
          <path d="M0 80Q50 60 100 80Q150 100 200 80" fill="none" stroke="#E5DCC5" strokeWidth="0.5" />
          <path d="M0 130Q50 110 100 130Q150 150 200 130" fill="none" stroke="#E5DCC5" strokeWidth="0.4" />
        </pattern></defs>
        <rect width="100%" height="100%" fill="url(#topo-about)" />
      </svg>

      <motion.div style={{ y: textY }} className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 h-full flex flex-col justify-end pb-10 lg:pb-16">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp} className="mb-4">
            <div className="flex items-center gap-2 font-body text-[10px] uppercase tracking-[0.15em] text-cream/40 font-medium">
              <Link href="/" className="hover:text-cream/70 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-cream/70">About Us</span>
            </div>
          </motion.div>
          <motion.h1 variants={fadeUp} className="font-editorial font-bold text-cream leading-[0.95] tracking-tight" style={{ fontSize: "clamp(2.2rem, 5.5vw, 5.5rem)" }}>
            Industrial Coconut<br />
            <span className="italic font-normal text-cream/60">Product Supplier</span>
          </motion.h1>
          <motion.div variants={fadeUp} className="mt-4 flex items-center gap-3">
            <div className="h-px w-8 bg-cream/30" />
            <span className="font-body text-[11px] uppercase tracking-[0.12em] text-cream/40 italic font-medium">Reliable, Sustainable, Export-Ready</span>
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-cream/10" />
    </section>
  );
}

/* ═══ NARRATIVE ═══ */
function NarrativeSection() {
  return (
    <section className="relative section-pad bg-linen overflow-hidden">
      <svg className="absolute left-3 lg:left-8 top-0 h-full w-5 opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <line x1="10" y1="0" x2="10" y2="100%" stroke="#0A210F" strokeWidth="0.5" />
        {[...Array(60)].map((_, i) => (<line key={i} x1={i % 5 === 0 ? "2" : "6"} y1={i * 30} x2="10" y2={i * 30} stroke="#0A210F" strokeWidth="0.5" />))}
      </svg>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <motion.div className="mb-10 lg:mb-16" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <motion.span variants={fadeUp} className="data-tag block mb-3">Our Story</motion.span>
          <motion.h2 variants={fadeUp} className="font-editorial font-bold text-forest" style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)", lineHeight: "1" }}>
            About <span className="italic font-normal">Us</span>
          </motion.h2>
          <motion.div variants={lineReveal} className="mt-5 h-px bg-linen-400 origin-left max-w-md" />
        </motion.div>

        {/* FIX: Reduced top/bottom padding within "Industrial Coconut Supplier" heading area */}
        <div className="grid lg:grid-cols-12 gap-y-8 lg:gap-x-16">
          <motion.div className="lg:col-span-4" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.h3 variants={fadeUp} className="font-editorial font-bold text-forest leading-[1.1] sticky top-24 py-2"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)" }}>
              Industrial Coconut<br />Product <span className="italic font-normal text-charcoal-200">Supplier</span>
            </motion.h3>
          </motion.div>

          <motion.div className="lg:col-span-8" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.p variants={fadeUp} className="text-charcoal text-sm sm:text-base lg:text-lg leading-editorial font-body font-light">
              Manvasam is more than a brand—it&apos;s a way of life.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-5 text-charcoal-200 text-sm sm:text-base leading-editorial font-body font-light">
              Rooted in tradition and crafted for the modern world, Manvasam, a brand of more than 33 years, brings the pure, authentic taste of coconut straight from nature to your table. Every product is 100% natural, free from preservatives, and made with an uncompromising commitment to quality.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-5 text-charcoal-200 text-sm sm:text-base leading-editorial font-body font-light">
              At Manvasam, the coconut is not just an ingredient—it is a promise. From refreshing coconut water and rich, flavorful flesh to thoughtfully repurposed shells, we honor every part of the coconut with a zero-waste philosophy.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-5 text-charcoal-200 text-sm sm:text-base leading-editorial font-body font-light">
              This is sustainability with purpose. This is food made with integrity.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-5 text-charcoal-200 text-sm sm:text-base leading-editorial font-body font-light">
              By fully utilizing the coconut, Manvasam supports responsible sourcing, mindful living, and a healthier relationship with what we consume. Every product tells a story of care—for the land, for tradition, and for you.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-5 text-charcoal text-sm sm:text-base leading-editorial font-body font-medium">
              Manvasam invites you to taste better, live consciously, and be part of something meaningful.
            </motion.p>
            <motion.div variants={lineReveal} className="mt-8 h-px bg-linen-400 origin-left" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══ SOLUTIONS & QUALITY ═══ */
function SolutionsAndQuality() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#FDFDFD" }}>
      <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
        <defs><pattern id="graph-about" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="#0A210F" strokeWidth="0.3" /></pattern></defs>
        <rect width="100%" height="100%" fill="url(#graph-about)" />
      </svg>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* FIX: 64px+ spacing before B2B section */}
        <div className="pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20 border-b border-linen-400">
          {/* FIX: B2B text top-aligned with image (items-start not items-center) */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <motion.div className="lg:col-span-6" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
              <motion.span variants={fadeUp} className="data-tag block mb-4">B2B Solutions</motion.span>
              <motion.h3 variants={fadeUp} className="font-editorial font-bold text-forest leading-[1.1]" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
                Customized Solutions for<br /><span className="italic font-normal text-charcoal-200">Global Coconut Buyers</span>
              </motion.h3>
              <motion.div variants={lineReveal} className="mt-5 h-px bg-linen-400 origin-left" />
              <motion.p variants={fadeUp} className="mt-5 text-charcoal-200 text-sm sm:text-base leading-editorial font-body font-light">
                At Manvasam, we offer flexible packaging options like 10kg and 25kg bulk packs, along with customized moisture levels and private label support to meet different market requirements.
              </motion.p>
              <motion.p variants={fadeUp} className="mt-3 text-charcoal-200 text-sm sm:text-base leading-editorial font-body font-light">
                Our export team ensures smooth delivery with complete documentation and export-ready labeling.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-2">
                {["10kg Packs", "25kg Bulk", "Custom Moisture", "Private Label", "Export-Ready"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-md border border-linen-400 font-body text-[10px] uppercase tracking-[0.1em] text-charcoal-200 font-medium hover:border-forest hover:text-forest transition-colors duration-300">
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div className="lg:col-span-6" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeRight}>
              <div className="aspect-[4/5] relative overflow-hidden rounded-2xl border border-linen-400">
                <Image src="/rectangle_51.png" alt="Farmer harvesting coconuts" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Quality You Can Trust */}
        <div className="py-12 sm:py-16 lg:py-20">
          {/* FIX: "Quality You Can Trust" text top-aligned with image (items-start) */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <motion.div className="lg:col-span-6 order-2 lg:order-1" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeLeft}>
              <div className="aspect-[4/5] relative overflow-hidden rounded-2xl border border-linen-400">
                <Image src="/rectangle_41.jpg" alt="Coconut harvester — quality sourcing" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" />
              </div>
            </motion.div>

            <motion.div className="lg:col-span-6 order-1 lg:order-2" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
              <motion.span variants={fadeUp} className="data-tag block mb-4">Quality Assurance</motion.span>
              <motion.h3 variants={fadeUp} className="font-editorial font-bold text-forest leading-[1.1]" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
                <span className="italic font-normal text-charcoal-200">Quality</span> You Can Trust
              </motion.h3>
              <motion.div variants={lineReveal} className="mt-5 h-px bg-linen-400 origin-left" />
              <motion.p variants={fadeUp} className="mt-5 text-charcoal-200 text-sm sm:text-base leading-editorial font-body font-light">
                Quality and transparency are the foundation of everything we deliver at Manvasam. Each batch of our coconut products goes through strict internal quality checks to ensure consistent taste, texture, and hygiene standards.
              </motion.p>
              <motion.p variants={fadeUp} className="mt-3 text-charcoal-200 text-sm sm:text-base leading-editorial font-body font-light">
                We maintain proper production records and traceability systems so our customers can confidently track product origin and processing details.
              </motion.p>

              {/* Consistent card styling with home page — rounded corners */}
              <motion.div variants={staggerFast} className="mt-6 grid grid-cols-2 gap-3">
                {[{ val: "100%", label: "Traceability" }, { val: "Batch", label: "Testing" }, { val: "FSSAI", label: "Compliant" }, { val: "ISO", label: "Certified" }].map((m) => (
                  <motion.div key={m.label} variants={fadeUp} className="p-3 sm:p-4 rounded-xl border border-linen-400 bg-white">
                    <div className="font-editorial text-lg sm:text-xl font-bold text-forest leading-none">{m.val}</div>
                    <div className="font-body text-[9px] uppercase tracking-[0.1em] text-charcoal-200 mt-1 font-medium">{m.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══ MANUFACTURING PRODUCTS ═══ */
const products = [
  { title: "Coconut Oil", subtitle: "Virgin, Cold-Pressed, Refined", image: "/rectangle_45.jpg",
    specs: [{ label: "Moisture", value: "≤0.1%" }, { label: "FFA", value: "≤0.2%" }, { label: "Purity", value: "99.8%" }] },
  { title: "Desiccated Coconut", subtitle: "Fine, Medium & Coarse", image: "/rectangle_46.jpg",
    specs: [{ label: "Moisture", value: "≤3%" }, { label: "Fat", value: "60–65%" }, { label: "Shelf", value: "12 mo" }] },
  { title: "Coconut Milk & Cream", subtitle: "Premium Extraction", image: "/rectangle_50.jpg",
    specs: [{ label: "Fat", value: "17–24%" }, { label: "Shelf", value: "18 mo" }, { label: "Additives", value: "None" }] },
];

function ManufacturingProducts() {
  return (
    <section className="relative overflow-hidden bg-forest">
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs><pattern id="hex-about" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
          <path d="M28 0L56 16.67V50L28 66.67L0 50V16.67Z M28 100L56 83.33V50L28 33.33L0 50V83.33Z" fill="none" stroke="#E5DCC5" strokeWidth="0.5" />
        </pattern></defs>
        <rect width="100%" height="100%" fill="url(#hex-about)" />
      </svg>

      <div className="relative z-10 section-pad max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <motion.div className="mb-10 lg:mb-16" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <motion.span variants={fadeUp} className="font-body text-[11px] uppercase tracking-[0.15em] text-cream/30 block mb-3 font-medium">Our Range</motion.span>
          <motion.h2 variants={fadeUp} className="font-editorial font-bold text-cream" style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}>
            Manufacturing <span className="italic font-normal text-cream/50">Products</span>
          </motion.h2>
          <motion.div variants={lineReveal} className="mt-5 h-px bg-cream/10 origin-left max-w-sm" />
        </motion.div>

        {/* Cards — consistent with home page: rounded corners, gap, whole-card hover */}
        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
          {products.map((p) => (
            <motion.div key={p.title} variants={scaleReveal} data-cursor="VIEW SPECS"
              className="group bg-forest rounded-xl border border-cream/5 overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:border-cream/15">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-700" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                <div className="absolute inset-0 bg-forest/20 group-hover:bg-forest/10 transition-colors duration-500" />
              </div>
              <div className="p-4 sm:p-5">
                <h4 className="font-editorial text-lg sm:text-xl font-bold text-cream italic">{p.title}</h4>
                <p className="font-body text-[10px] uppercase tracking-[0.1em] text-cream/30 mt-1 font-medium">({p.subtitle})</p>
                <div className="mt-4 space-y-1.5">
                  {p.specs.map((spec) => (
                    <div key={spec.label} className="flex items-center justify-between py-1 border-b border-cream/5 last:border-0">
                      <span className="font-body text-[10px] uppercase tracking-[0.08em] text-cream/30 font-medium">{spec.label}</span>
                      <span className="font-body text-xs font-semibold text-cream/70">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
          className="mt-12 lg:mt-16 border-t border-b border-cream/5 py-3.5 overflow-hidden">
          <div className="marquee-track">
            {["MOISTURE: <3%", "FAT CONTENT: 60–65%", "ORGANIC CERTIFIED", "ISO 22000", "FSSAI APPROVED", "HACCP VERIFIED", "FREE FATTY ACID: ≤0.2%", "SHELF LIFE: 18 MONTHS", "GMP CERTIFIED", "HALAL COMPLIANT",
              "MOISTURE: <3%", "FAT CONTENT: 60–65%", "ORGANIC CERTIFIED", "ISO 22000", "FSSAI APPROVED", "HACCP VERIFIED", "FREE FATTY ACID: ≤0.2%", "SHELF LIFE: 18 MONTHS", "GMP CERTIFIED", "HALAL COMPLIANT"
            ].map((spec, i) => (
              <span key={i} className="inline-flex items-center gap-3 mx-5 font-body text-[11px] uppercase tracking-[0.1em] text-cream/25 whitespace-nowrap font-medium">
                {spec}<span className="w-1 h-1 rounded-full bg-cream/15" />
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══ PAGE COMPOSITION ═══ */
export default function AboutPage() {
  return (
    <>
      <CustomCursor />
      <Header currentPage="/about" />
      <main>
        <PageHero />
        <NarrativeSection />
        <SolutionsAndQuality />
        <ManufacturingProducts />
      </main>
      <Footer />
    </>
  );
}
