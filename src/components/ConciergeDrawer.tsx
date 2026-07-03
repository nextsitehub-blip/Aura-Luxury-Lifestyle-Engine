import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Globe, Mail, Phone, Clock, ShieldCheck, Check } from 'lucide-react';

interface ConciergeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubject?: string;
}

export default function ConciergeDrawer({ isOpen, onClose, initialSubject = '' }: ConciergeDrawerProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    atelier: 'Milan, Italy',
    subject: initialSubject,
    message: ''
  });

  // Sync initialSubject prop if passed down dynamically
  React.useEffect(() => {
    if (initialSubject) {
      setFormData(prev => ({ ...prev, subject: initialSubject }));
    }
  }, [initialSubject]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({ name: '', email: '', phone: '', atelier: 'Milan, Italy', subject: '', message: '' });
    }, 4500);
  };

  const ateliersList = [
    { name: 'Milan Atelier', location: 'Via Solferino 12, Brera', phone: '+39 02 884729' },
    { name: 'Paris Atelier', location: 'Rue du Faubourg Saint-Honoré 24', phone: '+33 1 4596 028' },
    { name: 'Kyoto Atelier', location: 'Higashiyama Ward, Kyoto', phone: '+81 75 525 1928' },
    { name: 'New York Atelier', location: 'Greene St, SoHo', phone: '+1 (212) 399-2938' },
    { name: 'Digital Salon', location: 'Secure Video Presentation (Zoom/Meet)', phone: 'Worldwide Curation' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-matte-black/60 z-50 cursor-pointer"
            id="concierge-backdrop"
          />

          {/* Side Panel Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:max-w-xl bg-warm-white border-l border-stone/30 z-50 overflow-y-auto"
            id="concierge-panel-drawer"
          >
            {/* Drawer Header */}
            <div className="p-6 md:p-8 flex items-center justify-between border-b border-stone/25 bg-ivory/95 sticky top-0 backdrop-blur-md z-10">
              <div className="flex flex-col">
                <span className="font-mono text-[8px] text-bronze tracking-[0.3em] uppercase font-bold">
                  PRIVATE OFFICE
                </span>
                <h3 className="font-serif text-lg font-light text-matte-black mt-0.5">
                  The Aura Atelier Concierge
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-stone-dark hover:text-matte-black border border-stone/20 hover:border-stone/40 rounded-sm focus:outline-none cursor-pointer transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Content */}
            <div className="p-6 md:p-10 space-y-10">
              
              {/* Introduction Card */}
              <div className="bg-soft-beige p-6 border border-stone/20 rounded-xs space-y-3">
                <p className="font-serif text-sm italic text-bronze font-semibold">
                  &ldquo;A home should not be designed; it should be composed like an orchestral movement.&rdquo;
                </p>
                <p className="font-sans text-xs text-charcoal/90 font-light leading-relaxed">
                  Welcome to the Aura Private Concierge. Our designated spatial architects coordinate directly with elite clients, luxury home developers, and high-fashion interior specialists globally to execute unique commissions.
                </p>
              </div>

              {/* Consultation Booking Form / Success Display */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-serif text-xl font-light text-matte-black tracking-wide">
                    Initiate Private Consultation
                  </h4>
                  <p className="font-sans text-stone-dark text-xs mt-1">
                    Register your details below. A private luxury advisor will schedule a tailored preview, material delivery, or project site consultation.
                  </p>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-soft-beige border border-bronze/30 p-8 text-center space-y-4 rounded-xs"
                  >
                    <div className="w-12 h-12 bg-bronze/10 rounded-full border border-bronze/20 flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6 text-bronze" />
                    </div>
                    <h5 className="font-serif text-lg font-light text-matte-black">Consultation Invitation Generated</h5>
                    <p className="font-mono text-[10px] text-stone-dark max-w-sm mx-auto tracking-wide leading-relaxed">
                      Your appointment parameters have been filed under private registry. A concierge will reach out directly on <span className="text-bronze font-bold">{formData.phone || 'your verified contact'}</span> in under 2 hours. Reference ID: <span className="text-bronze font-bold">#AC-{Math.floor(1000 + Math.random() * 9000)}</span>.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label className="font-mono text-[8px] text-stone-dark tracking-wider uppercase block font-semibold">YOUR FULL NAME</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Baroness Evelyn de Rothschild"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-ivory border border-stone/30 focus:border-bronze text-sm p-3 font-sans font-light rounded-xs outline-none text-matte-black transition-all duration-300"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="font-mono text-[8px] text-stone-dark tracking-wider uppercase block font-semibold">EMAIL ADDRESS</label>
                        <input
                          required
                          type="email"
                          placeholder="e.g. evelyn@rothschild.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-ivory border border-stone/30 focus:border-bronze text-sm p-3 font-sans font-light rounded-xs outline-none text-matte-black transition-all duration-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="font-mono text-[8px] text-stone-dark tracking-wider uppercase block font-semibold">CONTACT NUMBER</label>
                        <input
                          required
                          type="tel"
                          placeholder="e.g. +44 20 7946 0192"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-ivory border border-stone/30 focus:border-bronze text-sm p-3 font-sans font-light rounded-xs outline-none text-matte-black transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="font-mono text-[8px] text-stone-dark tracking-wider uppercase block font-semibold">PREFERRED ATELIER / SALON</label>
                        <select
                          value={formData.atelier}
                          onChange={(e) => setFormData({ ...formData, atelier: e.target.value })}
                          className="w-full bg-ivory border border-stone/30 focus:border-bronze text-sm p-3 font-sans font-light rounded-xs outline-none text-matte-black transition-all duration-300"
                        >
                          <option value="Milan, Italy">Milan Atelier (Via Solferino)</option>
                          <option value="Paris, France">Paris Atelier (Faubourg Saint-Honoré)</option>
                          <option value="Kyoto, Japan">Kyoto Atelier (Higashiyama)</option>
                          <option value="New York, USA">New York Atelier (SoHo Greene St)</option>
                          <option value="Digital Salon">Digital Salon (Zoom Video Curation)</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="font-mono text-[8px] text-stone-dark tracking-wider uppercase block font-semibold">INQUIRY SUBJECT</label>
                        <input
                          type="text"
                          placeholder="e.g. Whole Estate Curation"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full bg-ivory border border-stone/30 focus:border-bronze text-sm p-3 font-sans font-light rounded-xs outline-none text-matte-black transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="font-mono text-[8px] text-stone-dark tracking-wider uppercase block font-semibold">OUTLINE YOUR SPATIAL VISION / TIMELINE</label>
                      <textarea
                        rows={3}
                        placeholder="Please include details of your residence scope, scale preferences, or architectural deadlines."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-ivory border border-stone/30 focus:border-bronze text-sm p-3 font-sans font-light rounded-xs outline-none text-matte-black transition-all duration-300 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 border border-stone-dark/20 bg-matte-black text-warm-white font-mono text-xs tracking-[0.3em] uppercase hover:bg-bronze hover:text-white hover:border-bronze transition-all duration-500 rounded-sm focus:outline-none cursor-pointer font-bold"
                    >
                      REQUEST PRIVATE PRESENTATION
                    </button>
                  </form>
                )}
              </div>

              {/* Global Atelier Locations Contact list */}
              <div className="border-t border-stone/25 pt-10 space-y-6">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-bronze/70" />
                  <span className="font-mono text-[9px] text-stone-dark tracking-widest uppercase font-semibold">GLOBAL ATELIERS</span>
                </div>

                <div className="space-y-4">
                  {ateliersList.map((at, idx) => (
                    <div key={idx} className="flex justify-between items-start border-b border-stone/15 pb-3 last:border-0 last:pb-0">
                      <div>
                        <p className="font-serif text-sm font-light text-matte-black">{at.name}</p>
                        <span className="font-mono text-[9px] text-stone-medium block">{at.location}</span>
                      </div>
                      <span className="font-mono text-[9px] text-stone-dark">{at.phone}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
