"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

export default function FunFact() {
  return (
    <section className="relative section-pad-sm overflow-hidden bg-linen">
      {/* FIX: Wider box — no side margins, aligns with full content width (same as Contact button edge) */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <motion.div
          className="rounded-2xl border border-linen-400 bg-white p-6 sm:p-8 lg:p-10 relative overflow-hidden"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Left accent line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-forest rounded-l-2xl" />

          {/* FIX: Left-aligned text inside (not centered) */}
          <motion.div variants={fadeUp} className="flex items-start gap-4 sm:gap-6">
            <div className="flex-shrink-0 hidden sm:block">
              <div className="font-editorial font-bold text-forest/15 text-4xl sm:text-5xl leading-none">!</div>
            </div>
            <div className="text-left">
              <motion.span variants={fadeUp} className="font-editorial italic text-lg sm:text-xl text-forest mb-2 block">
                Fun Fact
              </motion.span>
              <motion.h4 variants={fadeUp} className="font-editorial text-base sm:text-lg lg:text-xl font-bold text-forest mb-3">
                Coconut water is not just water!
              </motion.h4>
              <motion.p variants={fadeUp} className="text-charcoal-200 text-sm sm:text-base leading-editorial font-body font-light">
                Coconut water naturally contains key electrolytes similar to those found in the human body, making it an excellent low-sugar option for everyday hydration or light workouts. A 330ml serving delivers approximately 600mg of potassium, which is even higher than the potassium content in a typical banana (around 422mg).
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
