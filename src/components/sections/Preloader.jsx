import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("INITIALIZING...");

  useEffect(() => {
    // 1. Progress Timer
    const timer = setInterval(() => {
      setProgress((prev) => {
        const diff = Math.random() * 10;
        const newProgress = Math.min(prev + diff, 100);

        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800); // Slight delay at 100% before lifting
        }
        return newProgress;
      });
    }, 150);

    // 2. Status Message Cycler
    const statuses = [
      "LOADING_ASSETS",
      "COMPILING_SHADERS",
      "CONNECTING_NODES",
      "MOUNTING_DOM",
      "READY",
    ];
    let statusIndex = 0;
    const statusTimer = setInterval(() => {
      statusIndex = (statusIndex + 1) % statuses.length;
      if (progress < 100) setStatus(statuses[statusIndex]);
      else setStatus("SYSTEM_READY");
    }, 400);

    return () => {
      clearInterval(timer);
      clearInterval(statusTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-[#050505] z-[99999] flex flex-col items-center justify-center font-mono text-[#CCFF00] overflow-hidden"
      exit={{
        y: "-100%",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
      }}
    >
      {/* Background Grid (Dimmed) */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 w-full max-w-md px-6">
        {/* Top Header */}
        <div className="flex justify-between items-center mb-12 text-xs uppercase tracking-widest text-zinc-500">
          <span>Mosaic Digital</span>
          <span>V 1.0.0</span>
        </div>

        {/* Main Percentage - Massive */}
        <div className="flex items-baseline justify-start mb-2">
          <span className="text-8xl md:text-9xl font-[Space_Grotesk] font-bold text-white leading-none">
            {Math.floor(progress)}
          </span>
          <span className="text-2xl text-[#CCFF00] ml-2">%</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-[2px] bg-zinc-800 relative overflow-hidden mb-4">
          <motion.div
            className="absolute top-0 left-0 h-full bg-[#CCFF00] shadow-[0_0_15px_#CCFF00]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>

        {/* Dynamic Status Text */}
        <div className="flex justify-between items-center text-xs uppercase font-mono">
          <span className="text-[#CCFF00] animate-pulse" />
          <span className="text-zinc-600">ID: 8X-92</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
