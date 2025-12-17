import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { CursorProvider } from "./context/CursorContext";

import Preloader from "./components/sections/Preloader";
import Hero from "./components/sections/Hero";
import Philosophy from "./components/sections/Philosophy";
import Works from "./components/sections/Works";
import Stack from "./components/sections/Stack";
import Offer from "./components/sections/Offer";
import Footer from "./components/sections/Footer";
import Cursor from "./components/ui/Cursor";
import Noise from "./components/ui/Noise";
import Background from "./components/ui/Background";
import ContactModal from "./components/ui/ContactModal";
import PremiumScrollbar from "./components/ui/PremiumScrollbar";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  return (
    <CursorProvider>
      <div className="bg-[#050505] min-h-screen selection:bg-[#CCFF00] selection:text-black font-sans">
        <AnimatePresence mode="wait">
          {loading && <Preloader onComplete={() => setLoading(false)} />}
        </AnimatePresence>

        {!loading && (
          <>
            <Cursor />
            <PremiumScrollbar />
            <Background />
            <Noise />
            <ContactModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />

            <main className="relative z-10">
              <Hero onStart={openModal} />
              <Philosophy />
              <Works />
              <Stack />
              <Offer />
              <Footer onStart={openModal} />
            </main>
          </>
        )}

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Space+Grotesk:wght@300;400;700&display=swap');
          
          body { font-family: 'Inter', sans-serif; }
          
          /* FORCE HIDE NATIVE CURSOR GLOBALLY */
          * {
            cursor: none !important;
          }

          /* HIDE NATIVE SCROLLBAR */
          html {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          body::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </CursorProvider>
  );
};

export default App;
