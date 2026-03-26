"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only show on desktop
    if (typeof window === "undefined" || window.innerWidth < 1024) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [data-cursor]");
      if (interactive) {
        setIsHovering(true);
        setHoverText(
          interactive.getAttribute("data-cursor") || ""
        );
      }
    };

    const handleOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor]")) {
        setIsHovering(false);
        setHoverText("");
      }
    };

    const leave = () => setIsVisible(false);
    const enter = () => setIsVisible(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [cursorX, cursorY, isVisible]);

  // Don't render on SSR or mobile
  if (typeof window !== "undefined" && window.innerWidth < 1024) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[10000] mix-blend-difference hidden lg:flex items-center justify-center"
      style={{ x, y }}
      animate={{
        width: isHovering ? 80 : 24,
        height: isHovering ? 80 : 24,
        marginLeft: isHovering ? -40 : -12,
        marginTop: isHovering ? -40 : -12,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
    >
      <div
        className="w-full h-full rounded-full bg-white flex items-center justify-center"
      >
        {isHovering && hoverText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[9px] font-mono uppercase tracking-[0.15em] text-black font-semibold text-center leading-tight"
          >
            {hoverText}
          </motion.span>
        )}
      </div>
    </motion.div>
  );
}
