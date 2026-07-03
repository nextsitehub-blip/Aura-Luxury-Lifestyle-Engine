import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LUXURY_COLLECTION } from '../data/luxuryData';
import { LuxuryPiece } from '../types';
import { X, Calendar, Compass, Ruler, Package, Heart, Check, ArrowRight } from 'lucide-react';

interface ShowcaseProps {
  onOpenConcierge: (initialPieceName?: string) => void;
}

export default function Showcase({ onOpenConcierge }: ShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'furniture' | 'lighting' | 'art' | 'textiles'>('all');
  const [selectedPiece, setSelectedPiece] = useState<LuxuryPiece | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({ name: '', email: '', phone: '', note: '' });

  const categories = [
    { label: 'All Curations', id: 'all' },
    { label: 'Furniture', id: 'furniture' },
    { label: 'Designer Lighting', id: 'lighting' },
    { label: 'Art & Sculptures', id: 'art' },
    { label: 'Fine Textiles', id: 'textiles' }
  ] as const;

  const filteredCollection = selectedCategory === 'all' 
    ? LUXURY_COLLECTION 
    : LUXURY_COLLECTION.filter(p => p.category === selectedCategory);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setSelectedPiece(null);
      setInquiryForm({ name: '', email: '', phone: '', note: '' });
    }, 4500);
  };

  return (
    <section className="relative py-28 md:py-36 bg-ivory text-matte-black border-t border-stone-light" id="showcase">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 md:gap-0">
          <div>
            <span className="font-mono text-[9px] tracking-[0.4em] text-bronze uppercase block mb-3 font-semibold">
              THE REGISTRY
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight text-matte-black">
              Curated Masterpieces
            </h2>
          </div>
          <p className="font-sans text-xs md:text-sm text-stone-dark font-light max-w-md leading-relaxed tracking-wide opacity-80">
            A selective registry of unique design statements and limited edition releases. Every piece carries an individual registry number and verifiable atelier pedigree.
          </p>
        </div>

        {/* Category Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 md:gap-4 border-b border-stone/20 pb-6 mb-12" id="showcase-filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 font-mono text-[10px] tracking-widest uppercase transition-all duration-300 rounded-xs focus:outline-none cursor-pointer border ${
                selectedCategory === cat.id
                  ? 'border-bronze text-bronze bg-soft-beige font-bold'
                  : 'border-transparent text-stone-medium hover:text-matte-black'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Collection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10" id="showcase-grid">
          <AnimatePresence mode="popLayout">
            {filteredCollection.map((piece) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                key={piece.id}
                onClick={() => setSelectedPiece(piece)}
                className="group flex flex-col justify-between cursor-pointer border border-stone/20 bg-warm-white hover:border-stone/50 hover:shadow-lg hover:shadow-stone-light/50 transition-all duration-500 p-5 rounded-xs"
                id={`piece-card-${piece.id}`}
              >
                {/* Image Wrap */}
                <div className="relative overflow-hidden aspect-[4/5] bg-soft-beige rounded-xs mb-6">
                  <img
                    src={piece.image}
                    alt={piece.name}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[0.16,1,0.3,1] group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category Pill overlay */}
                  <span className="absolute top-4 left-4 bg-warm-white/95 text-bronze border border-stone-light font-mono text-[8px] tracking-[0.2em] px-3 py-1.5 uppercase rounded-xs font-semibold">
                    {piece.category}
                  </span>
                </div>

                {/* Info block */}
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-xl font-light text-matte-black group-hover:text-bronze transition-colors duration-300">
                      {piece.name}
                    </h3>
                    <span className="font-mono text-sm text-charcoal font-medium pl-4">
                      {piece.price}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-stone-medium font-mono text-[9px] tracking-wider uppercase mb-4 font-semibold">
                    <span>{piece.designer}</span>
                    <span className="h-1 w-1 bg-bronze/50 rounded-full" />
                    <span>{piece.provenance.split('in')[1]?.trim() || 'Global Atelier'}</span>
                  </div>
                  <p className="font-sans text-xs text-charcoal/80 font-light leading-relaxed line-clamp-2">
                    {piece.description}
                  </p>
                </div>

                {/* Card Footer Action */}
                <div className="border-t border-stone/20 mt-6 pt-4 flex items-center justify-between">
                  <span className="font-mono text-[9px] text-bronze/70 tracking-widest uppercase font-semibold">
                    Lead time: {piece.leadTime.split('(')[0]?.trim()}
                  </span>
                  <span className="font-mono text-[9px] tracking-[0.2em] text-matte-black group-hover:text-bronze transition-colors duration-300 flex items-center gap-1.5 font-bold">
                    Enquire &rarr;
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Piece Details Drawer */}
      <AnimatePresence>
        {selectedPiece && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPiece(null)}
              className="fixed inset-0 bg-matte-black/60 z-50 cursor-pointer"
              id="drawer-backdrop"
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="fixed right-0 top-0 bottom-0 w-full sm:max-w-2xl bg-warm-white border-l border-stone/30 z-50 overflow-y-auto"
              id="piece-details-drawer"
            >
              {/* Drawer Top Header */}
              <div className="p-6 md:p-8 flex items-center justify-between border-b border-stone/25 bg-ivory/95 sticky top-0 backdrop-blur-md z-10">
                <div className="flex flex-col">
                  <span className="font-mono text-[8px] text-bronze tracking-[0.3em] uppercase font-bold">
                    REGISTRY PEDIGREE
                  </span>
                  <span className="font-serif text-lg font-light text-matte-black mt-0.5">
                    {selectedPiece.name}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedPiece(null)}
                  className="p-2 text-stone-dark hover:text-matte-black border border-stone/20 hover:border-stone/40 rounded-sm focus:outline-none cursor-pointer transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="p-6 md:p-10 space-y-10">
                {/* Hero Image in Drawer */}
                <div className="overflow-hidden aspect-[16/10] bg-soft-beige rounded-xs border border-stone/20 shadow-sm">
                  <img
                    src={selectedPiece.image}
                    alt={selectedPiece.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Primary Specs Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-y border-stone/20 py-6 text-center">
                  <div>
                    <span className="font-mono text-[8px] text-stone-medium uppercase block mb-1 font-semibold">DESIGNER</span>
                    <span className="font-serif text-sm text-bronze font-bold">{selectedPiece.designer}</span>
                  </div>
                  <div>
                    <span className="font-mono text-[8px] text-stone-medium uppercase block mb-1 font-semibold">PROVENANCE</span>
                    <span className="font-serif text-sm text-matte-black font-semibold">{selectedPiece.provenance.split('in')[1]?.trim() || 'Global'}</span>
                  </div>
                  <div>
                    <span className="font-mono text-[8px] text-stone-medium uppercase block mb-1 font-semibold">VALUATION</span>
                    <span className="font-mono text-sm text-matte-black font-semibold">{selectedPiece.price}</span>
                  </div>
                  <div>
                    <span className="font-mono text-[8px] text-stone-medium uppercase block mb-1 font-semibold">LEAD TIME</span>
                    <span className="font-mono text-xs text-matte-black font-semibold">{selectedPiece.leadTime.split('(')[0]?.trim()}</span>
                  </div>
                </div>

                {/* Narrative / Description */}
                <div className="space-y-4">
                  <h4 className="font-serif text-lg font-light tracking-wide text-matte-black">Artisanal Narrative</h4>
                  <p className="font-sans text-charcoal/90 font-light text-sm leading-relaxed tracking-wide opacity-85">
                    {selectedPiece.description}
                  </p>
                </div>

                {/* Technical Specifications */}
                <div className="bg-soft-beige p-6 md:p-8 border border-stone/30 rounded-xs space-y-6">
                  <h4 className="font-serif text-sm tracking-widest text-matte-black uppercase flex items-center gap-2">
                    <Ruler className="w-4 h-4 text-bronze" />
                    <span>Technical Spec Sheet</span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-xs font-mono">
                    <div className="flex justify-between border-b border-stone/20 pb-2">
                      <span className="text-stone-dark">DIMENSIONS</span>
                      <span className="text-matte-black font-medium">{selectedPiece.dimensions}</span>
                    </div>
                    <div className="flex justify-between border-b border-stone/20 pb-2">
                      <span className="text-stone-dark">ORIGIN</span>
                      <span className="text-matte-black font-medium">{selectedPiece.provenance}</span>
                    </div>
                    <div className="flex justify-between border-b border-stone/20 pb-2 md:col-span-2">
                      <span className="text-stone-dark">KEY MATERIALS</span>
                      <span className="text-matte-black font-medium">{selectedPiece.materials.join(', ')}</span>
                    </div>
                  </div>
                </div>

                {/* Private Allocation Form */}
                <div className="border-t border-stone/20 pt-10 space-y-6">
                  <div>
                    <span className="font-mono text-[8px] text-bronze tracking-[0.3em] uppercase block mb-2 font-bold">
                      ACQUISITION INQUIRY
                    </span>
                    <h4 className="font-serif text-xl font-light text-matte-black tracking-wide">
                      Secure Allocation Registry
                    </h4>
                    <p className="font-sans text-stone-dark text-xs mt-1">
                      Enquire to verify current availability or schedule a private showing in one of our global ateliers.
                    </p>
                  </div>

                  {formSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-soft-beige border border-bronze/30 p-8 text-center space-y-4 rounded-xs"
                    >
                      <div className="w-12 h-12 bg-bronze/10 rounded-full flex items-center justify-center mx-auto border border-bronze/20">
                        <Check className="w-6 h-6 text-bronze" />
                      </div>
                      <h5 className="font-serif text-lg font-light text-matte-black">Registry Proposal Initiated</h5>
                      <p className="font-mono text-[10px] text-stone-dark max-w-sm mx-auto tracking-wide leading-relaxed">
                        An Aura Living private architect will verify inventory allocation and reach out via email within 2 hours. Your reference number is <span className="text-bronze font-bold">#AURA-{Math.floor(100000 + Math.random() * 900000)}</span>.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleInquirySubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="font-mono text-[9px] text-stone-dark tracking-wider uppercase block font-semibold">YOUR NAME</label>
                          <input
                            required
                            type="text"
                            placeholder="e.g. Sterling H. Wood"
                            value={inquiryForm.name}
                            onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                            className="w-full bg-ivory border border-stone/30 focus:border-bronze text-sm p-3 font-sans font-light rounded-xs outline-none text-matte-black focus:bg-white transition-all duration-300"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="font-mono text-[9px] text-stone-dark tracking-wider uppercase block font-semibold">EMAIL ADDRESS</label>
                          <input
                            required
                            type="email"
                            placeholder="e.g. sterling@portfolio.com"
                            value={inquiryForm.email}
                            onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                            className="w-full bg-ivory border border-stone/30 focus:border-bronze text-sm p-3 font-sans font-light rounded-xs outline-none text-matte-black focus:bg-white transition-all duration-300"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="font-mono text-[9px] text-stone-dark tracking-wider uppercase block font-semibold">PHONE (OPTIONAL)</label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 019-2834"
                          value={inquiryForm.phone}
                          onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                          className="w-full bg-ivory border border-stone/30 focus:border-bronze text-sm p-3 font-sans font-light rounded-xs outline-none text-matte-black focus:bg-white transition-all duration-300"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="font-mono text-[9px] text-stone-dark tracking-wider uppercase block font-semibold">SPECIAL PROJECTS &amp; TIMELINE REQUESTS</label>
                        <textarea
                          rows={3}
                          placeholder="Please let us know if you require bespoke scaling, material alternatives, or a fast-track project installation timeline."
                          value={inquiryForm.note}
                          onChange={(e) => setInquiryForm({ ...inquiryForm, note: e.target.value })}
                          className="w-full bg-ivory border border-stone/30 focus:border-bronze text-sm p-3 font-sans font-light rounded-xs outline-none text-matte-black focus:bg-white transition-all duration-300 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 border border-stone-dark/20 bg-matte-black text-warm-white font-mono text-xs tracking-[0.3em] uppercase hover:bg-bronze hover:text-white hover:border-bronze transition-all duration-500 rounded-sm focus:outline-none cursor-pointer flex items-center justify-center gap-2 font-bold"
                      >
                        <span>Submit Allocation Request</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
