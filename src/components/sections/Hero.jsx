import React from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import Scene from "../3d/Scene";
import MagneticButton from "../ui/MagneticButton";

const Hero = ({ onStart }) => {
  // <--- Receive Prop
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-10">
        <Canvas
          gl={{ antialias: false }}
          camera={{ position: [0, 0, 5], fov: 45 }}
        >
          <Scene />
        </Canvas>
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center pointer-events-none w-full px-4">
        {/* ... Headings ... */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl md:text-8xl lg:text-9xl leading-none font-bold text-white tracking-tighter mix-blend-difference font-[Space_Grotesk] text-center"
        >
          DIGITAL
        </motion.h1>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-5xl md:text-8xl lg:text-9xl leading-none font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600 tracking-tighter mix-blend-overlay font-[Space_Grotesk] text-center"
        >
          ARCHITECTS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-[#A1A1AA] font-mono text-xs md:text-sm tracking-[0.2em] uppercase text-center"
        >
          We don't build websites. We build revenue assets.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 pointer-events-auto"
        >
          {/* PASS onStart HERE */}
          <MagneticButton onClick={onStart}>Start Project</MagneticButton>
        </motion.div>
      </div>

      {/* Scroll Line */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#CCFF00] to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
