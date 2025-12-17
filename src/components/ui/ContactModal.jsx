import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";

const ContactModal = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1500));
    console.log("Sent to Mosaic:", data);
    setIsSuccess(true);
    reset();
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center px-4 cursor-none" // Force cursor-none container
        >
          {/* Style to force inputs to have no cursor */}
          <style>{`
            .cursor-none input, .cursor-none textarea, .cursor-none button {
                cursor: none !important;
            }
            /* Optional: Custom caret color to match theme */
            input, textarea {
                caret-color: #CCFF00;
            }
          `}</style>

          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={handleClose}
          />

          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-[#0a0a0a] border border-zinc-800 p-8 shadow-2xl overflow-hidden"
          >
            {/* ... Backgrounds ... */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:2rem_2rem]" />

            <button
              onClick={handleClose}
              className="absolute top-6 right-6 p-2 hover:bg-zinc-900 rounded-full transition-colors text-zinc-400 hover:text-white z-20 cursor-none"
            >
              <X size={24} />
            </button>

            {isSuccess ? (
              <div className="relative z-10 flex flex-col items-center justify-center py-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-16 h-16 rounded-full border border-[#CCFF00] flex items-center justify-center mb-6 text-[#CCFF00]"
                >
                  <Check size={32} />
                </motion.div>
                <h3 className="text-2xl text-white font-[Space_Grotesk] mb-2">
                  TRANSMISSION RECEIVED
                </h3>
                <p className="text-zinc-500 font-mono text-sm">
                  MOSAIC DIGITAL STUDIO HAS LOGGED YOUR REQUEST.
                  <br />
                  WE WILL INITIATE CONTACT SHORTLY.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-8 px-6 py-2 border border-zinc-800 hover:bg-zinc-900 text-zinc-400 text-xs font-mono uppercase transition-colors cursor-none"
                >
                  CLOSE TERMINAL
                </button>
              </div>
            ) : (
              <>
                <div className="relative z-10 mb-8">
                  <h2 className="text-3xl font-[Space_Grotesk] text-white uppercase leading-none mb-2">
                    Initialize
                    <br />
                    Protocol
                  </h2>
                  <p className="font-mono text-xs text-[#CCFF00]">
                    TARGET: MOSAIC DIGITAL STUDIO
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="relative z-10 space-y-6"
                >
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-zinc-500 uppercase">
                      Identity
                    </label>
                    <input
                      {...register("name", { required: true, minLength: 2 })}
                      className="w-full bg-zinc-900/50 border-b border-zinc-700 p-3 text-white focus:border-[#CCFF00] focus:outline-none transition-colors placeholder:text-zinc-700 font-mono"
                      placeholder="NAME / ORG"
                      autoComplete="off"
                    />
                    {errors.name && (
                      <span className="text-[#CCFF00] text-xs font-mono">
                        :: INVALID ID ::
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-zinc-500 uppercase">
                      Contact Node
                    </label>
                    <input
                      {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}
                      className="w-full bg-zinc-900/50 border-b border-zinc-700 p-3 text-white focus:border-[#CCFF00] focus:outline-none transition-colors placeholder:text-zinc-700 font-mono"
                      placeholder="EMAIL@DOMAIN.COM"
                      autoComplete="off"
                    />
                    {errors.email && (
                      <span className="text-[#CCFF00] text-xs font-mono">
                        :: INVALID NODE ::
                      </span>
                    )}
                  </div>

                  {/* Details */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-zinc-500 uppercase">
                      Parameters
                    </label>
                    <textarea
                      {...register("details", {
                        required: true,
                        minLength: 20,
                      })}
                      rows={4}
                      className="w-full bg-zinc-900/50 border border-zinc-700 p-3 text-white focus:border-[#CCFF00] focus:outline-none transition-colors placeholder:text-zinc-700 font-mono resize-none"
                      placeholder="DESCRIBE SCOPE (> 20 CHARS)..."
                    />
                    {errors.details && (
                      <span className="text-[#CCFF00] text-xs font-mono">
                        :: INSUFFICIENT DATA ::
                      </span>
                    )}
                  </div>

                  <button
                    disabled={isSubmitting}
                    className="w-full py-4 bg-white text-black font-[Space_Grotesk] font-bold uppercase tracking-wide hover:bg-[#CCFF00] transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-none"
                  >
                    {isSubmitting ? "ENCRYPTING & SENDING..." : "EXECUTE"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
