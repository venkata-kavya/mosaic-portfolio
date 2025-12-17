import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCursor } from "../../context/CursorContext";

// ... (Visual Components VisualOura, VisualKarta, etc. remain unchanged) ...
const VisualOura = () => (
  <div className="w-full h-full flex items-center justify-center relative">
    <div className="w-48 h-48 border border-zinc-700/50 absolute animate-[spin_10s_linear_infinite]" />
    <div className="font-mono text-[10px] text-zinc-500">
      ARCHITECTURAL_GRID
    </div>
  </div>
);
const VisualKarta = () => (
  <div className="w-full h-full flex items-center justify-center relative">
    <div className="w-2 h-2 bg-[#CCFF00] rounded-full shadow-[0_0_20px_#CCFF00]" />
    <div className="absolute bottom-4 left-4 font-mono text-[10px] text-zinc-500">
      NEURAL_NET_V2
    </div>
  </div>
);
const VisualSynapse = () => (
  <div className="w-full h-full flex flex-col items-center justify-center relative">
    <div className="w-32 h-1 bg-[#CCFF00] animate-pulse" />
    <div className="absolute bottom-4 left-4 font-mono text-[10px] text-zinc-500">
      SIGNAL_PROCESSING
    </div>
  </div>
);
const VisualBakery = () => (
  <div className="w-full h-full flex items-center justify-center relative">
    <div className="w-20 h-20 rounded-full border border-orange-500/40" />
    <div className="absolute bottom-4 left-4 font-mono text-[10px] text-zinc-500">
      THERMAL_CORE
    </div>
  </div>
);

const projects = [
  {
    id: "oura",
    name: "OURA",
    desc: "High-end furniture platform focusing on minimalist layouts and structural integrity.",
    stack: "React + Tailwind",
    visual: <VisualOura />,
  },
  {
    id: "karta",
    name: "KARTA",
    desc: "AI-powered mind mapping tool. Auto-generates nodes and relationships for complex data visualization.",
    stack: "React + Tailwind + AI Integration",
    visual: <VisualKarta />,
  },
  {
    id: "synapse",
    name: "SYNAPSE",
    desc: "Modern SaaS application dashboard. Component-based architecture.",
    stack: "React + Tailwind",
    visual: <VisualSynapse />,
  },
  {
    id: "bakery",
    name: "Café",
    desc: "Artisan cafe digital experience. Warm aesthetics meets cyber-performance.",
    stack: "React + Tailwind",
    visual: <VisualBakery />,
  },
];

const Works = () => {
  const { setCursorVariant } = useCursor();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-0">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6">
          <h2 className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em] mb-8">
            Selected Projects
          </h2>

          <div className="flex flex-col">
            {projects.map((project, i) => (
              <div
                key={i}
                onMouseEnter={() => {
                  setActiveIndex(i);
                  // CHANGED: Use 'hover' (Solid Dot) instead of 'text'
                  setCursorVariant("hover");
                }}
                onMouseLeave={() => setCursorVariant("default")}
                className={`group py-8 border-b border-zinc-800 cursor-none transition-all duration-300 ${
                  activeIndex === i ? "pl-4 border-[#CCFF00]" : "pl-0"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3
                    className={`text-3xl md:text-5xl font-[Space_Grotesk] uppercase transition-colors duration-300 ${
                      activeIndex === i ? "text-white" : "text-zinc-600"
                    }`}
                  >
                    {project.name}
                  </h3>
                  <span
                    className={`font-mono text-xs transition-colors duration-300 ${
                      activeIndex === i ? "text-[#CCFF00]" : "text-zinc-800"
                    }`}
                  >
                    0{i + 1}
                  </span>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: activeIndex === i ? "auto" : 0,
                    opacity: activeIndex === i ? 1 : 0,
                  }}
                  className="overflow-hidden"
                >
                  <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed max-w-md pt-2">
                    {project.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase">
                    <span className="w-1 h-1 bg-[#CCFF00]" />
                    {project.stack}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (Visual) */}
        <div className="w-full lg:w-1/2 lg:h-[80vh] sticky top-20 flex items-center justify-center pointer-events-none">
          <div className="relative w-full max-w-md aspect-square bg-zinc-900/10 border border-zinc-800 backdrop-blur-sm overflow-hidden rounded-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {projects[activeIndex].visual}
              </motion.div>
            </AnimatePresence>
            {/* Overlay Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
