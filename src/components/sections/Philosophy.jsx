import React from "react";
import { motion } from "framer-motion";
import { useCursor } from "../../context/CursorContext";

const HoverSpan = ({ text, setCursor }) => (
  <span
    className="relative inline-block text-[#CCFF00] font-normal cursor-pointer whitespace-nowrap group align-baseline"
    onMouseEnter={() => setCursor("hover")}
    onMouseLeave={() => setCursor("default")}
  >
    <span className="relative z-10">{text}</span>
    {/* Underline Animation */}
    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#CCFF00] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
  </span>
);

const Philosophy = () => {
  const { setCursorVariant } = useCursor();

  return (
    <section className="relative py-40 px-6 flex flex-col items-center justify-center min-h-[80vh] overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#080808]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,20,20,1)_0%,rgba(5,5,5,1)_100%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10 w-[1px] h-20 bg-gradient-to-b from-transparent via-zinc-700 to-transparent mb-10" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em] mb-12 text-center">
          The Philosophy
        </h2>

        {/* Text Container */}
        <div className="text-3xl md:text-5xl lg:text-6xl leading-tight md:leading-[1.15] text-white font-[Space_Grotesk] font-light text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            We don't just write code. <br className="hidden md:block" />
            We engineer{" "}
            <span className="font-bold text-white">digital assets</span>.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 text-zinc-400 text-xl md:text-2xl font-sans font-light max-w-3xl mx-auto leading-relaxed md:leading-loose"
          >
            Most agencies sell you a template. We sell infrastructure. By
            leveraging{" "}
            <HoverSpan text="React Ecosystems" setCursor={setCursorVariant} />{" "}
            and <HoverSpan text="WebGL Physics" setCursor={setCursorVariant} />,
            we bridge the gap between aesthetic and revenue.
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
