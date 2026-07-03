import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check, Compass, Mail, ShieldAlert } from 'lucide-react';

export default function LuxuryNewsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
    }, 5000);
  };

  return (
    <section className="relative py-36 md:py-52 bg-ivory text-matte-black overflow-hidden border-t border-stone/20" id="luxury-newsletter">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[30%] left-0 right-0 h-[1px] bg-stone" />
        <div className="absolute bottom-[30%] left-0 right-0 h-[1px] bg-stone" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-warm-white border border-stone/25 p-10 md:p-16 rounded-sm text-center space-y-10 shadow-lg relative"
        >
          {/* Accent corner notches */}
          <span className="absolute top-0 left-0 w-3 h-[1px] bg-bronze" />
          <span className="absolute top-0 left-0 h-3 w-[1px] bg-bronze" />
          <span className="absolute top-0 right-0 w-3 h-[1px] bg-bronze" />
          <span className="absolute top-0 right-0 h-3 w-[1px] bg-bronze" />
          <span className="absolute bottom-0 left-0 w-3 h-[1px] bg-bronze" />
          <span className="absolute bottom-0 left-0 h-3 w-[1px] bg-bronze" />
          <span className="absolute bottom-0 right-0 w-3 h-[1px] bg-bronze" />
          <span className="absolute bottom-0 right-0 h-3 w-[1px] bg-bronze" />

          {/* Logo emblem */}
          <div className="flex flex-col items-center space-y-2">
            <Compass className="w-8 h-8 text-bronze animate-spin-slow" />
            <span className="font-mono text-[9px] tracking-[0.4em] text-stone-dark uppercase font-bold">
              THE PRIVY REGISTER
            </span>
          </div>

          {/* Text Statement */}
          <div className="space-y-4">
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight text-matte-black leading-tight max-w-xl mx-auto">
              Subscribe to the Aura Ledger
            </h2>
            <p className="font-sans text-xs md:text-sm text-stone-dark font-light leading-relaxed max-w-md mx-auto opacity-80">
              Receive private invitations to seasonal product drops, digital provenance updates, and exclusive viewings at our physical ateliers.
            </p>
          </div>

          {/* Form / Success state */}
          <div className="max-w-md mx-auto">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-soft-beige/50 border border-bronze/20 p-6 rounded-xs space-y-2"
                >
                  <div className="flex items-center justify-center gap-2 text-bronze">
                    <Check className="w-4.5 h-4.5" />
                    <span className="font-mono text-[10px] tracking-widest uppercase font-bold">
                      Registration Accepted
                    </span>
                  </div>
                  <p className="font-serif text-xs italic text-stone-dark">
                    We have transmitted your cryptographic ledger certificate. Welcome to the sovereign private sanctuary registry.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-grow">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-dark" />
                      <input
                        required
                        type="email"
                        placeholder="Enter your private email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-ivory border border-stone/25 focus:border-bronze text-sm p-4.5 pl-12 font-sans font-light rounded-xs outline-none text-matte-black focus:bg-white transition-all duration-300"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-8 py-4.5 bg-matte-black hover:bg-bronze text-white font-mono text-[10px] tracking-[0.25em] uppercase font-bold transition-all duration-500 rounded-sm focus:outline-none cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Subscribe</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <span className="font-mono text-[8px] text-stone-medium tracking-widest uppercase block pt-2">
                    🔒 Zero spam. Absolute privacy protection.
                  </span>
                </form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
