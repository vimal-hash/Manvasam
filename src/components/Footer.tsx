"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp, fadeLeft, fadeRight, stagger } from "@/lib/animations";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Export", href: "/export" },
];

const socialLinks = [
  { label: "WhatsApp", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-charcoal">
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 pt-14 sm:pt-18 lg:pt-24 pb-8">
        <motion.div className="grid md:grid-cols-12 gap-8 lg:gap-12 mb-14 lg:mb-20" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
          {/* Brand column — FIX: Updated logo to match header SVG */}
          <motion.div variants={fadeLeft} className="md:col-span-5">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-md bg-cream flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="none">
                  <text x="5" y="18" fill="#0A210F" fontFamily="Georgia, serif" fontWeight="bold" fontSize="18">M</text>
                </svg>
              </div>
              <span className="font-editorial text-lg sm:text-xl font-bold text-cream tracking-tight">Manvasam</span>
            </Link>
            <p className="text-charcoal-50 text-sm font-body font-medium mb-1">Premium Coconut Products Manufacturer &amp; Exporter.</p>
            <p className="font-editorial italic text-cream/40 text-sm">From farm to factory, we deliver quality you can trust.</p>
            <div className="mt-6 sm:mt-8">
              <div className="data-tag text-charcoal-50/50 mb-2.5">Newsletter</div>
              <div className="flex">
                <input type="email" placeholder="Enter your mail id"
                  className="flex-1 px-3.5 py-2.5 bg-charcoal-400 border border-charcoal-300 text-cream placeholder:text-charcoal-50/30 font-body text-xs tracking-wider focus:outline-none focus:border-cream/30 transition-colors rounded-l-lg" />
                <button className="px-4 py-2.5 bg-cream text-forest font-body text-[10px] uppercase tracking-[0.1em] font-bold hover:bg-cream-300 transition-colors flex-shrink-0 rounded-r-lg">Join</button>
              </div>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div variants={fadeUp} className="md:col-span-3">
            <div className="data-tag text-charcoal-50/50 mb-4">Page List</div>
            <nav className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <Link key={link.label} href={link.href} data-cursor="GO"
                  className="text-charcoal-50 font-body text-sm hover:text-white transition-colors duration-300 group inline-flex items-center gap-2">
                  {link.label}
                  <span className="w-0 group-hover:w-4 h-px bg-white transition-all duration-300" />
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* FIX: Social — LinkedIn on same line as Instagram */}
          <motion.div variants={fadeRight} className="md:col-span-4">
            <div className="data-tag text-charcoal-50/50 mb-4">Connect</div>
            <div className="grid grid-cols-2 gap-2">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} data-cursor={link.label.toUpperCase()}
                  className="px-3 py-2 border border-charcoal-300 text-charcoal-50 font-body text-[10px] uppercase tracking-[0.1em] font-medium hover:border-cream hover:text-cream transition-all duration-300 rounded-md text-center">
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* FIX: Replace massive cutoff text with proper logo + brand combo that doesn't clip */}
        <div className="border-t border-charcoal-300 pt-8 lg:pt-10 overflow-hidden">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-4 sm:gap-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-lg bg-charcoal-300/20 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" fill="none">
                <text x="3" y="19" fill="#E5DCC5" fontFamily="Georgia, serif" fontWeight="bold" fontSize="20" opacity="0.4">M</text>
              </svg>
            </div>
            <h2 className="font-editorial font-bold text-charcoal-300/25 leading-none select-none" style={{ fontSize: "clamp(3rem, 12vw, 10rem)" }}>
              Manvasam
            </h2>
          </motion.div>
        </div>

        <div className="mt-5 lg:mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-charcoal-300 pt-5">
          <p className="font-body text-[10px] uppercase tracking-[0.12em] text-charcoal-50/30 font-medium">&copy;2025 Manvasam Dharma Agro &amp; Farm Trading &amp; Co</p>
          <p className="font-body text-[10px] uppercase tracking-[0.12em] text-charcoal-50/20 font-medium">Crafted with precision</p>
        </div>
      </div>
    </footer>
  );
}
