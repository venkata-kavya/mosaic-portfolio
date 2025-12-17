import React from "react";
import { useCursor } from "../../context/CursorContext";

const Offer = () => {
  const { setCursorVariant } = useCursor();

  const tiers = [
    {
      title: "FOUNDATION",
      role: "Frontend Precision",
      desc: "Pixel-perfect landing pages and corporate sites. Focus on typography, layout, and speed.",
      specs: ["React / Next.js", "Tailwind CSS", "Responsive"],
    },
    {
      title: "EVOLUTION",
      role: "Interactive Web Apps",
      desc: "Dynamic interfaces with complex state management. Dashboards, CMS, and functional tools.",
      specs: ["API Integration", "State Management", "Animations"],
    },
    {
      title: "ECOSYSTEM",
      role: "Immersive 3D",
      desc: "The premium tier. WebGL experiences that break the mold. 3D products, environments, and physics.",
      specs: ["Three.js / R3F", "WebGL Shaders", "Blender Assets"],
    },
  ];

  return (
    <section className="py-32 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-20">
          <h2 className="text-white text-5xl md:text-7xl font-[Space_Grotesk] leading-none">
            INTAKE
            <br />
            PROTOCOL
          </h2>
          <span className="hidden md:block text-[#CCFF00] font-mono text-xs">
            SELECT ARCHITECTURE
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className="group relative p-8 border border-zinc-800 hover:border-[#CCFF00] transition-colors duration-300 min-h-[400px] flex flex-col justify-between"
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              {/* Removed Background Fills - Strict Outline Only */}

              <div className="relative z-10">
                <div className="font-mono text-zinc-600 group-hover:text-[#CCFF00] transition-colors mb-4">
                  0{i + 1}
                </div>
                <h3 className="text-3xl text-white font-[Space_Grotesk] mb-2">
                  {tier.title}
                </h3>
                <p className="text-zinc-500 font-mono text-xs uppercase mb-6">
                  {tier.role}
                </p>
                <p className="text-zinc-400 text-sm leading-relaxed border-t border-zinc-800 pt-6 group-hover:border-[#CCFF00] transition-colors">
                  {tier.desc}
                </p>
              </div>

              <div className="relative z-10 mt-8">
                <ul className="space-y-2">
                  {tier.specs.map((spec, k) => (
                    <li
                      key={k}
                      className="text-xs font-mono text-zinc-600 group-hover:text-zinc-300 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-zinc-600 group-hover:bg-[#CCFF00] rounded-full transition-colors" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
