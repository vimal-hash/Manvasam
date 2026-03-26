"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp, fadeLeft, fadeRight, stagger } from "@/lib/animations";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Works", href: "/#products" },
  { label: "Insights", href: "/#sustainability" },
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
      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 pt-16 sm:pt-20 lg:pt-28 pb-10">
        <motion.div
          className="grid md:grid-cols-12 gap-10 lg:gap-12 mb-16 lg:mb-24"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div variants={fadeLeft} className="md:col-span-5">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 rounded-sm bg-cream flex items-center justify-center">
                <span className="text-forest font-editorial font-bold text-xl">
                  M
                </span>
              </div>
              <span className="font-editorial text-xl font-bold text-cream tracking-tight">
                Manvasam
              </span>
            </Link>
            <p className="text-charcoal-50 text-sm font-body font-medium mb-1">
              Premium Coconut Products Manufacturer &amp; Exporter.
            </p>
            <p className="font-editorial italic text-cream/40 text-sm">
              From farm to factory, we deliver quality you can trust.
            </p>
            <div className="mt-8">
              <div className="data-tag text-charcoal-50/50 mb-3">
                Newsletter
              </div>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your mail id"
                  className="flex-1 px-4 py-3 bg-charcoal-400 border border-charcoal-300 text-cream placeholder:text-charcoal-50/30 font-mono text-xs tracking-wider focus:outline-none focus:border-cream/30 transition-colors"
                />
                <button className="px-5 py-3 bg-cream text-forest font-mono text-[10px] uppercase tracking-[0.15em] font-semibold hover:bg-cream-300 transition-colors flex-shrink-0">
                  Join
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="md:col-span-3">
            <div className="data-tag text-charcoal-50/50 mb-5">Page List</div>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  data-cursor="GO"
                  className="text-charcoal-50 font-body text-sm hover:text-white transition-colors duration-300 group inline-flex items-center gap-2"
                >
                  {link.label}
                  <span className="w-0 group-hover:w-4 h-px bg-white transition-all duration-300" />
                </Link>
              ))}
            </nav>
          </motion.div>

          <motion.div variants={fadeRight} className="md:col-span-4">
            <div className="data-tag text-charcoal-50/50 mb-5">Connect</div>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  data-cursor={link.label.toUpperCase()}
                  className="px-4 py-2 border border-charcoal-300 text-charcoal-50 font-mono text-[10px] uppercase tracking-[0.15em] hover:border-cream hover:text-cream transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <div className="border-t border-charcoal-300 pt-8 lg:pt-12 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative -mx-4 sm:-mx-8 lg:-mx-12"
          >
            <h2
              className="font-editorial font-bold text-charcoal-300/30 leading-none select-none whitespace-nowrap"
              style={{ fontSize: "clamp(5rem, 18vw, 22rem)" }}
            >
              Manvasam
            </h2>
          </motion.div>
        </div>

        <div className="mt-6 lg:mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-charcoal-300 pt-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-charcoal-50/30">
            &copy;2025 Manvasam Dharma Agro &amp; Farm Trading &amp; Co
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-charcoal-50/20">
            Crafted with precision
          </p>
        </div>
      </div>
    </footer>
  );
}
