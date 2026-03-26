"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/#process" },
  { label: "Export & Logistics", href: "/#sustainability" },
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
    return () => {
      document.body.style.overflow = "";
    };
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-linen/85 backdrop-blur-xl border-b border-linen-400/50"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 flex items-center justify-between h-16 lg:h-20">
          <Link
            href="/"
            className="flex items-center gap-3 group"
            data-cursor="HOME"
          >
            <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-sm bg-forest flex items-center justify-center group-hover:bg-forest-400 transition-colors duration-500">
              <span className="text-cream font-editorial font-bold text-lg lg:text-xl">
                M
              </span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-editorial text-forest text-base lg:text-lg font-bold tracking-tight leading-none">
                Manvasam
              </span>
              <span className="font-mono text-[8px] lg:text-[9px] uppercase tracking-[0.2em] text-charcoal-200 leading-none mt-0.5">
                Est. 1992
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-0">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                data-cursor="GO"
                className={`relative px-5 py-2 font-mono text-[11px] uppercase tracking-[0.15em] transition-colors duration-300 group ${
                  isActive(link.href)
                    ? "text-forest"
                    : "text-charcoal-200 hover:text-forest"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-5 right-5 h-px bg-forest transition-transform duration-500 origin-left ${
                    isActive(link.href)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
            <div className="ml-6 h-8 w-px bg-linen-400" />
            <Link
              href="/#contact"
              data-cursor="LET'S TALK"
              className="ml-6 px-6 py-2.5 border border-forest text-forest font-mono text-[11px] uppercase tracking-[0.15em] hover:bg-forest hover:text-cream transition-all duration-500"
            >
              Contact
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Menu"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
              className="block h-px w-6 bg-forest origin-center"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block h-px w-6 bg-forest"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
              className="block h-px w-6 bg-forest origin-center"
            />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-linen lg:hidden flex flex-col items-start justify-center px-8"
          >
            <nav className="flex flex-col gap-1">
              {links.map((link, i) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`font-editorial text-4xl sm:text-5xl font-bold py-2 block transition-colors ${
                    isActive(link.href)
                      ? "text-forest"
                      : "text-forest/40 hover:text-forest"
                  }`}
                >
                  <motion.span
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                    className="block"
                  >
                    {link.label}
                  </motion.span>
                </Link>
              ))}
            </nav>
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-10 inline-block px-8 py-3 border border-forest text-forest font-mono text-xs uppercase tracking-[0.15em]"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="block"
              >
                Contact Us
              </motion.span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
