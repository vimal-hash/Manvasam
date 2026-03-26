"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  fadeIn,
  stagger,
  staggerFast,
  staggerSlow,
  lineReveal,
  scaleReveal,
  clipReveal,
} from "@/lib/animations";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});

/* ═══════════════════════════════════════════════
   SECTION: Page Hero — Plantation grove with 
   overlay text, parallax depth, breadcrumb
   ═══════════════════════════════════════════════ */
function PageHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.55, 0.75]);

  return (
    <section
      ref={ref}
      className="relative h-[60vh] sm:h-[65vh] lg:h-[70vh] overflow-hidden"
    >
      {/* Background image with parallax zoom */}
      <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
        <Image
          src="/images/about-hero-grove.png"
          alt="Lush coconut palm grove in Tamil Nadu — Manvasam plantation"
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Dark overlay */}
      <motion.div
        className="absolute inset-0 bg-forest"
        style={{ opacity: overlayOpacity }}
      />

      {/* Topographic pattern overlay */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="topo-about"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 80Q50 60 100 80Q150 100 200 80"
              fill="none"
              stroke="#E5DCC5"
              strokeWidth="0.5"
            />
            <path
              d="M0 130Q50 110 100 130Q150 150 200 130"
              fill="none"
              stroke="#E5DCC5"
              strokeWidth="0.4"
            />
            <path
              d="M0 30Q60 10 120 30Q180 50 200 30"
              fill="none"
              stroke="#E5DCC5"
              strokeWidth="0.3"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#topo-about)" />
      </svg>

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 h-full flex flex-col justify-end pb-12 lg:pb-20"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Breadcrumb */}
          <motion.div variants={fadeUp} className="mb-5">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-cream/40">
              <Link
                href="/"
                className="hover:text-cream/70 transition-colors"
              >
                Home
              </Link>
              <span>/</span>
              <span className="text-cream/70">About Us</span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            className="font-editorial font-bold text-cream leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
          >
            Industrial Coconut
            <br />
            <span className="italic font-normal text-cream/60">
              Product Supplier
            </span>
          </motion.h1>

          {/* Subtitle tag */}
          <motion.div variants={fadeUp} className="mt-5 flex items-center gap-3">
            <div className="h-px w-8 bg-cream/30" />
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-cream/40 italic">
              Reliable, Sustainable, Export-Ready
            </span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-cream/10" />
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SECTION: Long-form Narrative Prose
   The "Editorial Spread" — wide margins, 
   precision typography, vertical label
   ═══════════════════════════════════════════════ */
function NarrativeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rulerY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section className="relative section-pad bg-linen overflow-hidden">
      {/* Vertical ruler SVG */}
      <motion.svg
        style={{ y: rulerY }}
        className="absolute left-3 lg:left-8 top-0 h-[150%] w-5 opacity-[0.05]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="10"
          y1="0"
          x2="10"
          y2="100%"
          stroke="#0A210F"
          strokeWidth="0.5"
        />
        {[...Array(80)].map((_, i) => (
          <g key={i}>
            <line
              x1={i % 5 === 0 ? "2" : "6"}
              y1={i * 30}
              x2="10"
              y2={i * 30}
              stroke="#0A210F"
              strokeWidth="0.5"
            />
          </g>
        ))}
      </motion.svg>

      {/* Rotated vertical label (desktop) */}
      <div className="hidden xl:block absolute left-0 top-1/3">
        <span className="vertical-text font-mono text-[10px] uppercase tracking-[0.3em] text-linen-400">
          About Manvasam
        </span>
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16"
      >
        {/* Section header */}
        <motion.div
          className="mb-12 lg:mb-20"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
        >
          <motion.span variants={fadeUp} className="data-tag block mb-4">
            Our Story
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-display-lg font-editorial font-bold text-forest"
          >
            About <span className="italic font-normal">Us</span>
          </motion.h2>
          <motion.div
            variants={lineReveal}
            className="mt-6 h-px bg-linen-400 origin-left max-w-md"
          />
        </motion.div>

        {/* Prose — editorial wide-margin layout */}
        <div className="grid lg:grid-cols-12 gap-y-10 lg:gap-x-20">
          {/* Narrow heading column */}
          <motion.div
            className="lg:col-span-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.h3
              variants={fadeUp}
              className="font-editorial text-display-sm font-bold text-forest leading-[1.1] sticky top-28"
            >
              Industrial Coconut
              <br />
              Product{" "}
              <span className="italic font-normal text-charcoal-200">
                Supplier
              </span>
            </motion.h3>
          </motion.div>

          {/* Wide prose column */}
          <motion.div
            className="lg:col-span-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p
              variants={fadeUp}
              className="text-charcoal text-base sm:text-lg leading-editorial font-body font-light"
            >
              Manvasam is more than a brand—it&apos;s a way of life.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-charcoal-200 text-sm sm:text-base leading-editorial font-body font-light"
            >
              Rooted in tradition and crafted for the modern world, Manvasam, a
              brand of more than 33 years, brings the pure, authentic taste of
              coconut straight from nature to your table. Every product is 100%
              natural, free from preservatives, and made with an uncompromising
              commitment to quality.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-charcoal-200 text-sm sm:text-base leading-editorial font-body font-light"
            >
              At Manvasam, the coconut is not just an ingredient—it is a
              promise. From refreshing coconut water and rich, flavorful flesh to
              thoughtfully repurposed shells, we honor every part of the coconut
              with a zero-waste philosophy. Nothing is overlooked. Nothing is
              wasted.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-charcoal-200 text-sm sm:text-base leading-editorial font-body font-light"
            >
              This is sustainability with purpose. This is food made with
              integrity.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-charcoal-200 text-sm sm:text-base leading-editorial font-body font-light"
            >
              By fully utilizing the coconut, Manvasam supports responsible
              sourcing, mindful living, and a healthier relationship with what we
              consume. Every product tells a story of care—for the land, for
              tradition, and for you.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-charcoal text-sm sm:text-base leading-editorial font-body font-medium"
            >
              Manvasam invites you to taste better, live consciously, and be part
              of something meaningful.
            </motion.p>

            {/* Divider */}
            <motion.div
              variants={lineReveal}
              className="mt-10 h-px bg-linen-400 origin-left"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SECTION: Customized Solutions & Quality Trust
   Two alternating content blocks with images
   ═══════════════════════════════════════════════ */
function SolutionsAndQuality() {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageY1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const imageY2 = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section className="relative overflow-hidden" style={{ background: "#FDFDFD" }}>
      {/* Subtle graph paper */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.025]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="graph-about"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="#0A210F"
              strokeWidth="0.3"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#graph-about)" />
      </svg>

      <div
        ref={imageRef}
        className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16"
      >
        {/* ── Block 1: Customized Solutions ── */}
        <div className="section-pad border-b border-linen-400">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-center">
            {/* Text */}
            <motion.div
              className="lg:col-span-6"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <motion.span
                variants={fadeUp}
                className="data-tag block mb-5"
              >
                B2B Solutions
              </motion.span>
              <motion.h3
                variants={fadeUp}
                className="text-display-sm font-editorial font-bold text-forest leading-[1.1]"
              >
                Customized Solutions for
                <br />
                <span className="italic font-normal text-charcoal-200">
                  Global Coconut Buyers
                </span>
              </motion.h3>
              <motion.div
                variants={lineReveal}
                className="mt-6 h-px bg-linen-400 origin-left"
              />
              <motion.p
                variants={fadeUp}
                className="mt-6 text-charcoal-200 text-sm sm:text-base leading-editorial font-body font-light"
              >
                At Manvasam, we offer flexible packaging options like 10kg and
                25kg bulk packs, along with customized moisture levels and
                private label support to meet different market requirements.
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="mt-4 text-charcoal-200 text-sm sm:text-base leading-editorial font-body font-light"
              >
                Our export team ensures smooth delivery with complete
                documentation and export-ready labeling.
              </motion.p>

              {/* Spec tags */}
              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-2"
              >
                {[
                  "10kg Packs",
                  "25kg Bulk",
                  "Custom Moisture",
                  "Private Label",
                  "Export-Ready",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 border border-linen-400 font-mono text-[10px] uppercase tracking-[0.12em] text-charcoal-200 hover:border-forest hover:text-forest transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              className="lg:col-span-6"
              style={{ y: imageY1 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeRight}
            >
              <div className="aspect-[4/5] relative overflow-hidden border border-linen-400">
                <Image
                  src="/images/about-farmer-coconut.png"
                  alt="Farmer harvesting fresh coconuts in Tamil Nadu plantation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/10 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Block 2: Quality You Can Trust ── */}
        <div className="section-pad">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-center">
            {/* Image — reversed order on desktop */}
            <motion.div
              className="lg:col-span-6 order-2 lg:order-1"
              style={{ y: imageY2 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeLeft}
            >
              <div className="aspect-[4/5] relative overflow-hidden border border-linen-400">
                <Image
                  src="/images/about-quality-tree.png"
                  alt="Coconut harvester climbing palm tree — quality sourcing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/10 via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              className="lg:col-span-6 order-1 lg:order-2"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <motion.span
                variants={fadeUp}
                className="data-tag block mb-5"
              >
                Quality Assurance
              </motion.span>
              <motion.h3
                variants={fadeUp}
                className="text-display-sm font-editorial font-bold text-forest leading-[1.1]"
              >
                <span className="italic font-normal text-charcoal-200">
                  Quality
                </span>{" "}
                You Can Trust
              </motion.h3>
              <motion.div
                variants={lineReveal}
                className="mt-6 h-px bg-linen-400 origin-left"
              />
              <motion.p
                variants={fadeUp}
                className="mt-6 text-charcoal-200 text-sm sm:text-base leading-editorial font-body font-light"
              >
                Quality and transparency are the foundation of everything we
                deliver at Manvasam. Each batch of our coconut products goes
                through strict internal quality checks to ensure consistent
                taste, texture, and hygiene standards.
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="mt-4 text-charcoal-200 text-sm sm:text-base leading-editorial font-body font-light"
              >
                We maintain proper production records and traceability systems so
                our customers can confidently track product origin and processing
                details.
              </motion.p>

              {/* Quality metrics */}
              <motion.div
                variants={staggerFast}
                className="mt-8 grid grid-cols-2 gap-3"
              >
                {[
                  { val: "100%", label: "Traceability" },
                  { val: "Batch", label: "Testing" },
                  { val: "FSSAI", label: "Compliant" },
                  { val: "ISO", label: "Certified" },
                ].map((m) => (
                  <motion.div
                    key={m.label}
                    variants={fadeUp}
                    className="p-4 border border-linen-400 bg-white"
                  >
                    <div className="font-editorial text-xl lg:text-2xl font-bold text-forest leading-none">
                      {m.val}
                    </div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.12em] text-charcoal-200 mt-1.5">
                      {m.label}
                    </div>
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

/* ═══════════════════════════════════════════════
   SECTION: Manufacturing Products Catalog
   Dark section — Museum gallery style with 
   blueprint hover, specs, same DNA as landing
   ═══════════════════════════════════════════════ */
const products = [
  {
    title: "Coconut Oil",
    subtitle: "Virgin, Cold-Pressed, Refined",
    image: "/images/coconut-oil.png",
    specs: [
      { label: "Moisture", value: "≤0.1%" },
      { label: "FFA", value: "≤0.2%" },
      { label: "Purity", value: "99.8%" },
    ],
  },
  {
    title: "Desiccated Coconut",
    subtitle: "Fine, Medium & Coarse",
    image: "/images/desiccated-coconut.png",
    specs: [
      { label: "Moisture", value: "≤3%" },
      { label: "Fat", value: "60–65%" },
      { label: "Shelf", value: "12 mo" },
    ],
  },
  {
    title: "Coconut Milk & Cream",
    subtitle: "Premium Extraction",
    image: "/images/coconut-milk.png",
    specs: [
      { label: "Fat", value: "17–24%" },
      { label: "Shelf", value: "18 mo" },
      { label: "Additives", value: "None" },
    ],
  },
];

function ManufacturingProducts() {
  return (
    <section className="relative overflow-hidden bg-forest">
      {/* Hexagon mesh */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="hex-about"
            width="56"
            height="100"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(1.5)"
          >
            <path
              d="M28 0L56 16.67V50L28 66.67L0 50V16.67Z M28 100L56 83.33V50L28 33.33L0 50V83.33Z"
              fill="none"
              stroke="#E5DCC5"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-about)" />
      </svg>

      <div className="relative z-10 section-pad max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <motion.div
          className="mb-12 lg:mb-20"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span
            variants={fadeUp}
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-cream/30 block mb-4"
          >
            Our Range
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-display-md font-editorial font-bold text-cream"
          >
            Manufacturing{" "}
            <span className="italic font-normal text-cream/50">Products</span>
          </motion.h2>
          <motion.div
            variants={lineReveal}
            className="mt-6 h-px bg-cream/10 origin-left max-w-sm"
          />
        </motion.div>

        {/* Product grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-cream/5"
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
              className="group bg-forest border border-cream/5 overflow-hidden transition-all duration-700 hover:border-cream/15"
            >
              {/* Image with blueprint ghost on hover */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-forest/20 group-hover:bg-forest/10 transition-colors duration-500" />
                {/* Blueprint overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <svg
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern
                        id={`bp-about-${p.title.replace(/\s/g, "")}`}
                        width="16"
                        height="16"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 16 0 L 0 0 0 16"
                          fill="none"
                          stroke="#E5DCC5"
                          strokeWidth="0.15"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width="100%"
                      height="100%"
                      fill={`url(#bp-about-${p.title.replace(/\s/g, "")})`}
                      opacity="0.4"
                    />
                    <line
                      x1="50%"
                      y1="0"
                      x2="50%"
                      y2="100%"
                      stroke="#E5DCC5"
                      strokeWidth="0.3"
                      opacity="0.2"
                    />
                    <line
                      x1="0"
                      y1="50%"
                      x2="100%"
                      y2="50%"
                      stroke="#E5DCC5"
                      strokeWidth="0.3"
                      opacity="0.2"
                    />
                    <circle
                      cx="50%"
                      cy="50%"
                      r="25"
                      fill="none"
                      stroke="#E5DCC5"
                      strokeWidth="0.3"
                      opacity="0.15"
                    />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 lg:p-7">
                <h4 className="font-editorial text-xl lg:text-2xl font-bold text-cream italic">
                  {p.title}
                </h4>
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-cream/30 mt-1">
                  ({p.subtitle})
                </p>

                {/* Specs */}
                <div className="mt-5 space-y-2">
                  {p.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex items-center justify-between py-1.5 border-b border-cream/5 last:border-0"
                    >
                      <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-cream/30">
                        {spec.label}
                      </span>
                      <span className="font-mono text-xs font-medium text-cream/70 letter-wide">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Specs Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-14 lg:mt-20 border-t border-b border-cream/5 py-4 overflow-hidden"
        >
          <div className="marquee-track">
            {[
              "MOISTURE: <3%",
              "FAT CONTENT: 60–65%",
              "ORGANIC CERTIFIED",
              "ISO 22000",
              "FSSAI APPROVED",
              "HACCP VERIFIED",
              "FREE FATTY ACID: ≤0.2%",
              "SHELF LIFE: 18 MONTHS",
              "GMP CERTIFIED",
              "HALAL COMPLIANT",
              "MOISTURE: <3%",
              "FAT CONTENT: 60–65%",
              "ORGANIC CERTIFIED",
              "ISO 22000",
              "FSSAI APPROVED",
              "HACCP VERIFIED",
              "FREE FATTY ACID: ≤0.2%",
              "SHELF LIFE: 18 MONTHS",
              "GMP CERTIFIED",
              "HALAL COMPLIANT",
            ].map((spec, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-4 mx-6 font-mono text-[11px] uppercase tracking-[0.15em] text-cream/25 whitespace-nowrap"
              >
                {spec}
                <span className="w-1 h-1 rounded-full bg-cream/15" />
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   PAGE COMPOSITION
   ═══════════════════════════════════════════════ */
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
