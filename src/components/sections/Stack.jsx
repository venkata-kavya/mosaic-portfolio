import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SVGs = {
  React: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className="w-12 h-12"
    >
      <circle cx="12" cy="12" r="2" />
      <g className="opacity-50">
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      </g>
    </svg>
  ),
  ThreeJS: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className="w-12 h-12"
    >
      <path d="M12 2L2 7L12 12L22 7L12 2Z" />
      <path d="M2 17L12 22L22 17" />
      <path d="M2 7V17" />
      <path d="M22 7V17" />
    </svg>
  ),
  Tailwind: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className="w-12 h-12"
    >
      <path d="M4 12C4 12 5 10 7 10C9 10 9 13 11 13C13 13 14 10 16 10C18 10 19 12 19 12" />
      <path d="M7 16C7 16 8 14 10 14C12 14 12 17 14 17C16 17 17 14 19 14C21 14 22 16 22 16" />
    </svg>
  ),
  Spline: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className="w-12 h-12"
    >
      <path d="M19 5c-4 0-4 4-9 4-4.5 0-5.5-3.5-5.5-3.5" />
      <path d="M5 19c4 0 4-4 9-4 4.5 0 5.5 3.5 5.5 3.5" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  Blender: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className="w-12 h-12"
    >
      <circle cx="12" cy="12" r="6" />
      <path d="M12 6V2" />
      <path d="M18 12H22" />
      <path d="M12 18V22" />
      <path d="M6 12H2" />
    </svg>
  ),
  Framer: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className="w-12 h-12"
    >
      <path d="M5 2L19 2L19 9L5 9L19 22L5 22L5 15L12 15L5 9" />
    </svg>
  ),
  Node: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className="w-12 h-12"
    >
      <path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  JavaScript: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className="w-12 h-12"
    >
      <rect x="2" y="2" width="20" height="20" rx="4" />
      <path d="M16 16v-3" />
      <path d="M12 16v-5" />
    </svg>
  ),
};

const techItems = [
  { name: "React", icon: SVGs.React },
  { name: "Three.js", icon: SVGs.ThreeJS },
  { name: "JavaScript", icon: SVGs.JavaScript },
  { name: "Tailwind", icon: SVGs.Tailwind },
  { name: "Blender", icon: SVGs.Blender },
  { name: "Motion", icon: SVGs.Framer },
  { name: "Node", icon: SVGs.Node },
  { name: "Spline", icon: SVGs.Spline },
];

const TechSquare = ({ item }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="relative aspect-square flex flex-col items-center justify-center border-r border-b border-zinc-800 group overflow-hidden cursor-crosshair"
    >
      <motion.div
        className="absolute inset-0 bg-[#CCFF00]"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
        className="text-zinc-500 group-hover:text-white transition-colors duration-300"
      >
        {item.icon}
      </motion.div>

      <motion.span className="mt-4 text-xs font-mono text-zinc-600 group-hover:text-[#CCFF00] uppercase tracking-wider">
        {item.name}
      </motion.span>
    </motion.div>
  );
};

const Stack = () => {
  return (
    <section className="py-32 px-6 bg-transparent overflow-hidden">
      <h2 className="text-[#CCFF00] font-mono mb-12 border-b border-zinc-800 pb-4 inline-block">
        THE STACK
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 w-full border-t border-l border-zinc-800">
        {techItems.map((item, i) => (
          <TechSquare key={i} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Stack;
