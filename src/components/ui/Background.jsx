import React from "react";

const Background = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      {/* 1. Base Gradient for Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#1a1a1a_0%,_#050505_50%)]" />

      {/* 2. Architectural Grid Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #808080 1px, transparent 1px),
            linear-gradient(to bottom, #808080 1px, transparent 1px)
          `,
          backgroundSize: "4rem 4rem",
        }}
      />
    </div>
  );
};

export default Background;
