import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useCursor } from "../../context/CursorContext";

const Cursor = () => {
  const { cursorVariant } = useCursor();
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Tighter physics for a "pro" feel
  const springConfig = { damping: 20, stiffness: 400 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      // High Z-Index to sit above Modal
      className="fixed top-0 left-0 w-3 h-3 border border-[#CCFF00] rounded-full pointer-events-none z-[999999] mix-blend-difference"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={cursorVariant}
      variants={{
        default: {
          scale: 1,
          backgroundColor: "transparent",
          borderColor: "#CCFF00",
        },
        hover: {
          scale: 1.5, // Subtle growth
          backgroundColor: "#CCFF00",
          borderColor: "transparent",
        },
        text: {
          scale: 2.5, // Much smaller (was 6)
          backgroundColor: "transparent",
          borderColor: "#CCFF00",
          borderWidth: "1px",
          opacity: 1,
        },
      }}
    />
  );
};

export default Cursor;
