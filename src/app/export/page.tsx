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
   SECTION: Page Hero
   ═══════════════════════════════════════════════ */
function PageHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 0.75]);

  return (
    <section ref={ref} className="relative h-[60vh] sm:h-[65vh] lg:h-[70vh] overflow-hidden">
      <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
        <Image
          src="/images/factory-line.png"
          alt="Manvasam export facility — packaging and logistics"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      <motion.div className="absolute inset-0 bg-forest" style={{ opacity: overlayOpacity }} />

      {/* Shipping route SVG overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="route-lines" width="300" height="300" patternUnits="userSpaceOnUse">
            <path d="M0 150 Q75 100 150 150 Q225 200 300 150" fill="none" stroke="#E5DCC5" strokeWidth="0.5" strokeDasharray="8 4" />
            <path d="M0 75 Q75 50 150 75 Q225 100 300 75" fill="none" stroke="#E5DCC5" strokeWidth="0.3" strokeDasharray="5 3" />
            <path d="M0 225 Q75 200 150 225 Q225 250 300 225" fill="none" stroke="#E5DCC5" strokeWidth="0.3" strokeDasharray="5 3" />
            <circle cx="75" cy="120" r="3" fill="none" stroke="#E5DCC5" strokeWidth="0.5" />
            <circle cx="225" cy="180" r="3" fill="none" stroke="#E5DCC5" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#route-lines)" />
      </svg>

      <motion.div
        style={{ y: textY }}
        className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 h-full flex flex-col justify-end pb-12 lg:pb-20"
      >
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp} className="mb-5">
            <div className="flex items-center gap-2 font-body text-[10px] uppercase tracking-[0.2em] text-cream/40">
              <Link href="/" className="hover:text-cream/70 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-cream/70">Export & Logistics</span>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-editorial font-bold text-cream leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
          >
            Export &amp;
            <br />
            <span className="italic font-normal text-cream/50">Logistics</span>
          </motion.h1>

          <motion.div variants={fadeUp} className="mt-5 flex items-center gap-3">
            <div className="h-px w-8 bg-cream/30" />
            <span className="font-body text-[11px] uppercase tracking-[0.15em] text-cream/40 italic">
              Seamless Export &amp; Reliable Global Delivery
            </span>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-cream/50 text-sm sm:text-base leading-editorial font-body font-light">
            We ensure smooth and efficient export of coconut products with proper
            handling, packaging, and documentation—delivering quality products
            safely to international markets.
          </motion.p>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-cream/10" />
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SECTION: Export Capabilities
   ═══════════════════════════════════════════════ */
const capabilities = [
  {
    num: "01",
    title: "Bulk Order Processing",
    desc: "Efficient handling of large-volume orders with consistent quality across every batch.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Container Shipments",
    desc: "Full container loads in 20ft and 40ft configurations for optimized international shipping.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 3.5V16h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Flexible Packaging",
    desc: "Multiple packaging options including 10kg and 25kg bags, tailored to client specifications.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Custom Labeling",
    desc: "Private branding and custom labeling services to support your market identity.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Market Compliance",
    desc: "Support for different market requirements including documentation, labeling standards, and certifications.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

function ExportCapabilities() {
  return (
    <section className="relative section-pad overflow-hidden bg-linen">
      {/* Ruler SVG */}
      <svg className="absolute left-3 lg:left-8 top-0 h-full w-5 opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <line x1="10" y1="0" x2="10" y2="100%" stroke="#0A210F" strokeWidth="0.5" />
        {[...Array(60)].map((_, i) => (
          <line key={i} x1={i % 5 === 0 ? "2" : "6"} y1={i * 30} x2="10" y2={i * 30} stroke="#0A210F" strokeWidth="0.5" />
        ))}
      </svg>

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        <motion.div
          className="mb-12 lg:mb-20"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span variants={fadeUp} className="data-tag block mb-4">Capabilities</motion.span>
          <motion.h2 variants={fadeUp} className="text-display-md font-editorial font-bold text-forest">
            Export <span className="italic font-normal">Capabilities</span>
          </motion.h2>
          <motion.div variants={lineReveal} className="mt-6 h-px bg-linen-400 origin-left max-w-md" />
        </motion.div>

        {/* Capabilities grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-linen-400"
          variants={staggerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {capabilities.map((cap) => (
            <motion.div
              key={cap.num}
              variants={scaleReveal}
              className="group p-6 lg:p-8 bg-white border border-linen-400 hover:shadow-[0_20px_40px_rgba(229,220,197,0.35)] transition-all duration-700"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="text-forest/80 group-hover:text-forest transition-colors duration-300">
                  {cap.icon}
                </div>
                <span className="number-outline text-forest/10 text-3xl group-hover:text-forest/20 transition-colors duration-500">
                  {cap.num}
                </span>
              </div>
              <h4 className="font-editorial text-lg lg:text-xl font-bold text-forest mb-2">
                {cap.title}
              </h4>
              <p className="text-charcoal-200 text-sm leading-editorial font-body font-light">
                {cap.desc}
              </p>
            </motion.div>
          ))}

          {/* Example image card filling the grid */}
          <motion.div
            variants={scaleReveal}
            className="relative overflow-hidden border border-linen-400"
          >
            <Image
              src="/images/hero-coconut.png"
              alt="Export packaging — bulk coconut products"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-forest/40 flex items-end p-6">
              <span className="font-body text-[10px] uppercase tracking-[0.15em] text-cream/70">
                Export-Ready Packaging
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SECTION: Logistics & Shipping + Packaging
   Two dark columns side-by-side
   ═══════════════════════════════════════════════ */
const logisticsItems = [
  { title: "Sea Freight", desc: "Primary mode for bulk export — cost-effective container shipping via major Indian ports." },
  { title: "Air Freight", desc: "For urgent orders requiring faster transit to international destinations." },
  { title: "Secure Packaging", desc: "Export-grade materials with moisture-controlled inner lining for long-distance transport." },
  { title: "Timely Dispatch", desc: "Coordinated delivery schedules with real-time tracking and documentation." },
];

const packagingItems = [
  { title: "Hygienic Packing", desc: "Clean-room packing process following ISO and FSSAI standards." },
  { title: "Moisture Control", desc: "Specialized moisture-barrier packaging to preserve product quality." },
  { title: "Export-Grade Materials", desc: "Strong, tamper-proof packaging built for container shipping." },
  { title: "Transit Protection", desc: "Multi-layer protection designed for long-distance sea and air freight." },
];

function LogisticsAndPackaging() {
  return (
    <section className="relative overflow-hidden bg-forest">
      {/* Hex mesh */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hex-export" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
            <path d="M28 0L56 16.67V50L28 66.67L0 50V16.67Z M28 100L56 83.33V50L28 33.33L0 50V83.33Z" fill="none" stroke="#E5DCC5" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-export)" />
      </svg>

      <div className="relative z-10 section-pad max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-px">
          {/* Logistics column */}
          <motion.div
            className="p-6 sm:p-8 lg:p-12 border border-cream/5 bg-forest"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
              <svg viewBox="0 0 24 24" fill="none" stroke="#E5DCC5" strokeWidth="1.2" className="w-6 h-6 opacity-50">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <h3 className="font-editorial text-xl lg:text-2xl font-bold text-cream">
                Logistics &amp; Shipping
              </h3>
            </motion.div>

            <div className="space-y-6">
              {logisticsItems.map((item, i) => (
                <motion.div key={item.title} variants={fadeUp} className="group">
                  <div className="flex items-start gap-4">
                    <span className="font-body text-[10px] text-cream/20 mt-1 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h4 className="font-editorial text-base font-bold text-cream mb-1">
                        {item.title}
                      </h4>
                      <p className="text-cream/40 text-sm leading-relaxed font-body font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  {i < logisticsItems.length - 1 && (
                    <div className="mt-5 h-px bg-cream/5" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Example image */}
            <motion.div
              variants={fadeUp}
              className="mt-8 aspect-[16/9] relative overflow-hidden border border-cream/5"
            >
              <Image
                src="/images/sustainable-coconut.png"
                alt="Sea freight logistics — coconut export"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-forest/30" />
            </motion.div>
          </motion.div>

          {/* Packaging column */}
          <motion.div
            className="p-6 sm:p-8 lg:p-12 border border-cream/5 bg-forest"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
              <svg viewBox="0 0 24 24" fill="none" stroke="#E5DCC5" strokeWidth="1.2" className="w-6 h-6 opacity-50">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              </svg>
              <h3 className="font-editorial text-xl lg:text-2xl font-bold text-cream">
                Packaging &amp; Handling
              </h3>
            </motion.div>

            <div className="space-y-6">
              {packagingItems.map((item, i) => (
                <motion.div key={item.title} variants={fadeUp} className="group">
                  <div className="flex items-start gap-4">
                    <span className="font-body text-[10px] text-cream/20 mt-1 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h4 className="font-editorial text-base font-bold text-cream mb-1">
                        {item.title}
                      </h4>
                      <p className="text-cream/40 text-sm leading-relaxed font-body font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  {i < packagingItems.length - 1 && (
                    <div className="mt-5 h-px bg-cream/5" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Example image */}
            <motion.div
              variants={fadeUp}
              className="mt-8 aspect-[16/9] relative overflow-hidden border border-cream/5"
            >
              <Image
                src="/images/vision-products.png"
                alt="Hygienic packaging process — export-grade materials"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-forest/30" />
            </motion.div>
          </motion.div>
        </div>

        {/* Specs ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-0 border-t border-b border-cream/5 py-4 overflow-hidden"
        >
          <div className="marquee-track">
            {[
              "20FT CONTAINERS",
              "40FT CONTAINERS",
              "10KG PACKS",
              "25KG PACKS",
              "SEA FREIGHT",
              "AIR FREIGHT",
              "PRIVATE LABEL",
              "CUSTOM LABELING",
              "ISO 22000",
              "FSSAI APPROVED",
              "20FT CONTAINERS",
              "40FT CONTAINERS",
              "10KG PACKS",
              "25KG PACKS",
              "SEA FREIGHT",
              "AIR FREIGHT",
              "PRIVATE LABEL",
              "CUSTOM LABELING",
              "ISO 22000",
              "FSSAI APPROVED",
            ].map((spec, i) => (
              <span key={i} className="inline-flex items-center gap-4 mx-6 font-body text-[11px] uppercase tracking-[0.15em] text-cream/25 whitespace-nowrap">
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
   SECTION: Documentation & Process Summary
   Cream background editorial prose + docs list
   ═══════════════════════════════════════════════ */
function DocumentationSection() {
  return (
    <section className="relative section-pad overflow-hidden" style={{ background: "#E5DCC5" }}>
      {/* Wave bg */}
      <svg className="absolute bottom-0 left-0 w-[200%] h-20 lg:h-28 animate-wave opacity-[0.05]" viewBox="0 0 2880 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0 60C240 20 480 100 720 60C960 20 1200 100 1440 60C1680 20 1920 100 2160 60C2400 20 2640 100 2880 60V120H0V60Z" fill="#0A210F" />
      </svg>

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Prose */}
          <motion.div
            className="lg:col-span-7"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.span variants={fadeUp} className="data-tag block mb-4 text-charcoal-200">
              Our Process
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-display-md font-editorial font-bold text-forest leading-[1.05]">
              Seamless Global{" "}
              <span className="italic font-normal">Export</span>
            </motion.h2>
            <motion.div variants={lineReveal} className="mt-6 h-px bg-forest/10 origin-left max-w-md" />

            <motion.p variants={fadeUp} className="mt-6 text-charcoal text-sm sm:text-base leading-editorial font-body font-light">
              At Manvasam, we ensure smooth and reliable export of coconut
              products to global markets. From processing and packaging to final
              delivery, every step is carefully managed to maintain product
              quality and consistency.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-4 text-charcoal-200 text-sm sm:text-base leading-editorial font-body font-light">
              We support bulk shipments with flexible packaging options such as
              10kg and 25kg bags, along with custom labeling for different market
              needs. Our logistics process includes secure packing, timely
              dispatch, and coordination through sea or air freight based on
              customer requirements.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-4 text-charcoal-200 text-sm sm:text-base leading-editorial font-body font-light">
              To simplify international trade, we provide complete export
              documentation including invoices, packing lists, COA reports, and
              shipment details—ensuring a hassle-free import experience for our
              clients.
            </motion.p>
          </motion.div>

          {/* Documentation cards */}
          <motion.div
            className="lg:col-span-5"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp} className="mb-6">
              <h3 className="font-editorial text-xl font-bold text-forest mb-1">
                Export Documentation
              </h3>
              <p className="data-tag text-charcoal-200">Provided with every shipment</p>
            </motion.div>

            <div className="space-y-3">
              {[
                { title: "Commercial Invoice", desc: "Complete pricing and transaction details" },
                { title: "Packing List", desc: "Itemized contents with weights and dimensions" },
                { title: "Certificate of Analysis", desc: "Lab-tested quality report per batch" },
                { title: "Bill of Lading", desc: "Shipping carrier documentation" },
                { title: "Phytosanitary Certificate", desc: "Plant health compliance for import clearance" },
                { title: "Certificate of Origin", desc: "Country of manufacture verification" },
              ].map((doc, i) => (
                <motion.div
                  key={doc.title}
                  variants={fadeUp}
                  className="flex items-start gap-4 p-4 border border-forest/10 bg-cream-50/50 hover:bg-white transition-colors duration-300"
                >
                  <span className="font-body text-[10px] text-forest/30 mt-0.5 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="font-editorial text-sm font-bold text-forest">
                      {doc.title}
                    </h4>
                    <p className="text-charcoal-200 text-xs leading-relaxed font-body font-light mt-0.5">
                      {doc.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SECTION: CTA — Request a Quote + Contact
   Green stroke + Green fill buttons
   ═══════════════════════════════════════════════ */
function CTASection() {
  return (
    <section className="relative section-pad-sm overflow-hidden bg-linen">
      {/* Graph paper */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="graph-cta" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0A210F" strokeWidth="0.2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#graph-cta)" />
      </svg>

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        <motion.div
          className="border border-linen-400 bg-white p-8 sm:p-12 lg:p-16 text-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Accent line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-8 bg-forest/20" />

          <motion.span variants={fadeUp} className="data-tag block mb-4">
            Start Exporting
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-display-sm font-editorial font-bold text-forest max-w-2xl mx-auto">
            Ready to bring premium coconut products{" "}
            <span className="italic font-normal">to your market?</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-charcoal-200 text-sm sm:text-base leading-editorial font-body font-light max-w-xl mx-auto">
            Whether you&apos;re a distributor, food manufacturer, or private label brand — our export team is here to support your requirements.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {/* Request a Quote — Green stroke button */}
            <Link
              href="/#contact"
              data-cursor="QUOTE"
              className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-forest text-forest font-body text-[11px] uppercase tracking-[0.15em] hover:bg-forest hover:text-cream transition-all duration-500"
            >
              Request a Quote
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            {/* Contact Us — Green fill button */}
            <Link
              href="/#contact"
              data-cursor="LET'S TALK"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-forest text-cream font-body text-[11px] uppercase tracking-[0.15em] hover:bg-forest-400 transition-colors duration-500"
            >
              Contact Us
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
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
export default function ExportPage() {
  return (
    <>
      <CustomCursor />
      <Header currentPage="/export" />
      <main>
        <PageHero />
        <ExportCapabilities />
        <LogisticsAndPackaging />
        <DocumentationSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
