"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, lineReveal } from "@/lib/animations";

export default function FunFact() {
  return (
    <section className="relative section-pad-sm overflow-hidden bg-linen">
      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        <motion.div
          className="lg:mx-[10%] xl:mx-[15%] border border-linen-400 bg-white p-8 sm:p-10 lg:p-14 relative"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Left accent line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-forest" />

          <motion.div variants={fadeUp} className="flex items-start gap-5 lg:gap-8">
            <div className="flex-shrink-0 hidden sm:block">
              <div className="number-outline text-forest/20 text-5xl lg:text-6xl">
                !
              </div>
            </div>
            <div>
              <motion.span variants={fadeUp} className="font-editorial italic text-xl sm:text-2xl text-forest mb-3 block">
                Fun Fact
              </motion.span>
              <motion.h4 variants={fadeUp} className="font-editorial text-lg sm:text-xl lg:text-2xl font-bold text-forest mb-4">
                Coconut water is not just water!
              </motion.h4>
              <motion.p variants={fadeUp} className="text-charcoal-200 text-sm sm:text-base leading-editorial font-body font-light max-w-2xl">
                Coconut water naturally contains key electrolytes similar to
                those found in the human body, making it an excellent low-sugar
                option for everyday hydration or light workouts. A 330ml serving
                delivers approximately 600mg of potassium, which is even higher
                than the potassium content in a typical banana (around 422mg).
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
