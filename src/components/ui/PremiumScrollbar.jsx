import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const PremiumScrollbar = () => {
  const { scrollYProgress } = useScroll();
  const [isHovered, setIsHovered] = useState(false);

  // Match the physics of the Cursor for consistency (Heavy/Smooth)
  const springConfig = { damping: 20, stiffness: 200, restDelta: 0.001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  // Map progress (0 to 1) to viewport percentage (0% to ~90% to leave room for the thumb)
  const yRange = useTransform(smoothProgress, [0, 1], ["0%", "90%"]);

  // Detect window resize to adjust thumb size if needed (optional refinement)
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  useEffect(() => {
    const handleResize = () => setViewportHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="fixed top-0 right-0 h-full w-4 z-[99999] mix-blend-difference flex justify-center py-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* The Track (Faint line) */}
      <div
        className={`w-[1px] h-full bg-zinc-800 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-20"
        }`}
      />

      {/* The Thumb (Acid Green Indicator) */}
      <motion.div
        style={{ top: yRange }}
        className="absolute w-1 rounded-full bg-[#CCFF00] shadow-[0_0_15px_rgba(204,255,0,0.6)]"
        initial={{ height: "64px" }}
        animate={{
          width: isHovered ? "4px" : "2px", // Expands on hover
          opacity: 1,
        }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default PremiumScrollbar;
