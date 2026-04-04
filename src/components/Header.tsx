"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Export & Logistics", href: "/export" },
];

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage = "/" }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isActive = (href: string) => {
    const clean = href.replace(/#.*/, "") || "/";
    if (clean === "/") return currentPage === "/";
    return currentPage.startsWith(clean);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white border-b border-linen-400/60 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo — SVG M box + Manvasam text */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group" data-cursor="HOME">
            <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-md bg-forest flex items-center justify-center group-hover:bg-forest-400 transition-colors duration-500">
              <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-5.5 sm:h-5.5 lg:w-6 lg:h-6" fill="none">
                <text x="5" y="18" fill="#E5DCC5" fontFamily="Georgia, serif" fontWeight="bold" fontSize="18">M</text>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-forest text-sm sm:text-base lg:text-lg font-bold tracking-tight leading-none">
                Manvasam
              </span>
              <span className="font-body text-[7px] sm:text-[8px] lg:text-[9px] uppercase tracking-[0.18em] text-charcoal-200 leading-none mt-0.5 font-medium">
                Est. 1992
              </span>
            </div>
          </Link>

          {/* Desktop Nav — FIX: All links bold, same center-out underline hover on all */}
          <div className="hidden lg:flex items-center gap-0">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                data-cursor="GO"
                className={`relative px-4 xl:px-5 py-2 font-body text-[11px] uppercase tracking-[0.12em] font-bold transition-colors duration-300 group ${
                  isActive(link.href)
                    ? "text-forest"
                    : "text-charcoal-200 hover:text-forest"
                }`}
              >
                {link.label}
                {/* Center-out expanding underline on ALL links */}
                <span
                  className={`absolute bottom-0 left-1/2 h-[1.5px] bg-forest transition-all duration-500 ease-out ${
                    isActive(link.href)
                      ? "w-[calc(100%-40px)] -translate-x-1/2"
                      : "w-0 -translate-x-1/2 group-hover:w-[calc(100%-40px)]"
                  }`}
                />
              </Link>
            ))}
            <div className="ml-5 h-8 w-px bg-linen-400" />
            {/* FIX: Contact button with rounded corners */}
            <Link
              href="/#contact"
              data-cursor="LET'S TALK"
              className="ml-5 px-5 xl:px-6 py-2.5 border border-forest text-forest font-body text-[11px] uppercase tracking-[0.12em] font-bold rounded-full hover:bg-forest hover:text-cream transition-all duration-500"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Menu"
          >
            <motion.span animate={open ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }} className="block h-[1.5px] w-6 bg-forest origin-center" />
            <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="block h-[1.5px] w-6 bg-forest" />
            <motion.span animate={open ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }} className="block h-[1.5px] w-6 bg-forest origin-center" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-linen lg:hidden flex flex-col items-start justify-center px-6 sm:px-8"
          >
            <nav className="flex flex-col gap-2">
              {links.map((link, i) => (
                <Link key={link.label} href={link.href} onClick={() => setOpen(false)}
                  className={`font-editorial text-3xl sm:text-4xl font-bold py-1.5 block transition-colors ${isActive(link.href) ? "text-forest" : "text-forest/40 hover:text-forest"}`}>
                  <motion.span initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 + i * 0.06, duration: 0.4 }} className="block">
                    {link.label}
                  </motion.span>
                </Link>
              ))}
            </nav>
            <Link href="/#contact" onClick={() => setOpen(false)}
              className="mt-8 inline-block px-7 py-3 border border-forest text-forest font-body text-xs uppercase tracking-[0.12em] font-bold rounded-full">
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="block">
                Contact Us
              </motion.span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
