import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useCursor } from "../../context/CursorContext";

const MagneticButton = ({ children, onClick, className = "" }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { setCursorVariant } = useCursor(); // <--- Hook

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const handleMouseEnter = () => {
    setCursorVariant("hover"); // <--- Trigger Solid Dot
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setCursorVariant("default"); // <--- Reset
  };

  const { x, y } = position;

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative overflow-hidden group border border-zinc-700 rounded-full px-8 py-3 transition-colors duration-300 hover:border-[#CCFF00] bg-transparent ${className}`}
    >
      {/* Liquid Fill Effect */}
      <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-[#CCFF00] transition-transform duration-300 ease-out z-0" />

      {/* Content */}
      <span className="relative z-10 font-mono text-sm uppercase tracking-widest text-zinc-300 group-hover:text-black transition-colors duration-300">
        {children}
      </span>
    </motion.button>
  );
};

export default MagneticButton;
