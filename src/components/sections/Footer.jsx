import React from "react";
import { useCursor } from "../../context/CursorContext";
import MagneticButton from "../ui/MagneticButton";

const Footer = ({ onStart }) => {
  const { setCursorVariant } = useCursor();

  return (
    <footer className="h-[80vh] relative flex flex-col justify-between px-6 py-10 overflow-hidden">
      {/* Centered CTA */}
      <div className="flex-grow flex items-center justify-center z-10">
        <div
          className="scale-150 md:scale-[2] pointer-events-auto"
          // MagneticButton handles its own cursor events now,
          // but the wrapper ensures the text area around it triggers default if needed
          onMouseEnter={() => setCursorVariant("default")}
        >
          <MagneticButton onClick={onStart}>START PROJECT</MagneticButton>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end text-[#A1A1AA] font-mono text-sm uppercase border-t border-zinc-800 pt-6 z-10">
        {/* Instagram Link */}
        <a
          href="https://instagram.com/mosaic.codes"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#CCFF00] transition-colors duration-300"
          onMouseEnter={() => setCursorVariant("hover")}
          onMouseLeave={() => setCursorVariant("default")}
        >
          mosaic_ © 2025
        </a>

        <div className="flex items-center gap-2">
          Status: <span className="text-white">ACCEPTING Q1</span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CCFF00] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#CCFF00]"></span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
