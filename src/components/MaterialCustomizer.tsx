import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MATERIAL_CUSTOMIZER_OPTIONS } from '../data/luxuryData';
import { MaterialOption } from '../types';
import { Check, Compass, Eye, Shield, Award, HelpCircle } from 'lucide-react';

interface MaterialCustomizerProps {
  onOpenConcierge: (initialPieceName?: string) => void;
}

export default function MaterialCustomizer({ onOpenConcierge }: MaterialCustomizerProps) {
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialOption>(MATERIAL_CUSTOMIZER_OPTIONS[0]);

  // Associated visualization details based on selected material
  const getVisualizationDetail = (id: string) => {
    switch (id) {
      case 'belgian-boucle-cream':
        return {
          itemName: 'Elysian Occasional Chair',
          type: 'Textured Seating',
          valuation: '$9,800',
          mockImage: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80',
          vibe: 'Soft, floating architectural clouds. A light-absorbing silhouette suited for luminous living spaces.'
        };
      case 'belgian-boucle-charcoal':
        return {
          itemName: 'Elysian Occasional Chair',
          type: 'Textured Seating',
          valuation: '$10,200',
          mockImage: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80',
          vibe: 'Sophisticated gravity. The deep, multi-tonal charcoal weave absorbs reflections, accentuating the clean sculptural seams.'
        };
      case 'royal-alpaca-sage':
        return {
          itemName: 'Elysian Occasional Chair',
          type: 'Sartorial Seating',
          valuation: '$12,400',
          mockImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
          vibe: 'Organic quiet. A natural green luster resembling mountain moss, woven with delicate silk threads.'
        };
      case 'nero-marquina':
        return {
          itemName: 'Monolith Side Table',
          type: 'Sculptural Plinth',
          valuation: '$11,500',
          mockImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
          vibe: 'Tectonic drama. Honed black limestone with striking quartz lightning bolts. High-contrast majesty.'
        };
      case 'roman-travertine':
        return {
          itemName: 'Monolith Side Table',
          type: 'Sculptural Plinth',
          valuation: '$9,200',
          mockImage: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80',
          vibe: 'Classic permanence. Soft, warm limestone showing rich natural pitting and ancient sedimentation layers.'
        };
      case 'reclaimed-elm':
        return {
          itemName: 'Historical Low Console',
          type: 'Timber Joinery',
          valuation: '$13,800',
          mockImage: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80',
          vibe: 'Wabi-sabi elegance. Weathered timber with deep, wire-brushed grains and high tannin character.'
        };
      default:
        return {
          itemName: 'Signature Custom Piece',
          type: 'Bespoke Order',
          valuation: 'Upon Enquiry',
          mockImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
          vibe: 'Custom architectural curation formulated to fit your private estate specifications.'
        };
    }
  };

  const visualization = getVisualizationDetail(selectedMaterial.id);

  return (
    <section className="relative py-28 md:py-36 bg-warm-white text-matte-black border-t border-stone/30" id="material-studio">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16 md:mb-24">
          <div className="lg:col-span-5">
            <span className="font-mono text-[9px] tracking-[0.4em] text-bronze uppercase block mb-3 font-bold">
              THE TEXTURE LIBRARY
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight text-matte-black leading-tight">
              Bespoke Material Studio
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-end">
            <p className="font-sans text-xs md:text-sm text-charcoal font-light leading-relaxed tracking-wide opacity-80">
              Every Aura piece is customizable in a highly curated suite of rare natural textiles, mineral marbles, and ancient timber. Experience the physical sensations and geographical heritage that elevate a simple piece into an heirloom.
            </p>
          </div>
        </div>

        {/* Bento Grid Studio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
          
          {/* Column 1: Material Selector Swatches */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 bg-bronze rounded-full" />
                <span className="font-mono text-[9px] text-stone-dark tracking-widest uppercase font-bold">Master Finishes</span>
              </div>

              {/* Swatch List */}
              <div className="space-y-3" id="material-swatches">
                {MATERIAL_CUSTOMIZER_OPTIONS.map((mat) => {
                  const isSelected = selectedMaterial.id === mat.id;
                  return (
                    <button
                      key={mat.id}
                      onClick={() => setSelectedMaterial(mat)}
                      className={`w-full text-left p-5 border transition-all duration-300 rounded-xs flex items-center justify-between cursor-pointer focus:outline-none ${
                        isSelected
                          ? 'border-bronze bg-ivory shadow-sm shadow-bronze/5 font-bold'
                          : 'border-stone/25 bg-warm-white hover:border-stone-dark/40'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        {/* Circle visual representation */}
                        <div className={`w-10 h-10 rounded-full ${mat.imageColor} relative flex items-center justify-center shrink-0 shadow-md`}>
                          {isSelected && (
                            <motion.div
                              layoutId="swatchCheck"
                              className="absolute inset-0 border-2 border-bronze rounded-full flex items-center justify-center"
                            >
                              <Check className="w-4 h-4 text-warm-white bg-bronze p-0.5 rounded-full" />
                            </motion.div>
                          )}
                        </div>
                        <div>
                          <p className="font-serif text-sm font-semibold text-matte-black">{mat.name}</p>
                          <span className="font-mono text-[8px] text-stone-dark tracking-widest uppercase">{mat.type}</span>
                        </div>
                      </div>
                      
                      <span className="font-mono text-[8px] text-stone-medium">
                        {mat.origin.split(',')[0]?.split('Sourced')[0]?.trim()}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quality badge banner */}
            <div className="border border-stone/20 bg-ivory p-6 rounded-xs space-y-4">
              <div className="flex items-center gap-2.5">
                <Shield className="w-5 h-5 text-bronze/80" />
                <h4 className="font-serif text-xs uppercase tracking-widest text-matte-black font-bold">Sartorial Assurance</h4>
              </div>
              <p className="font-sans text-charcoal/90 text-xs font-light leading-relaxed opacity-80">
                All customized materials are hand-woven or hand-cut to order. We maintain strict material chain-of-custody, ensuring authentic origins from premier European loom-mills and historic quarries.
              </p>
            </div>
          </div>

          {/* Column 2: Material Details & Spatial Visualization Card */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 border border-stone/25 bg-ivory p-6 md:p-8 rounded-xs relative">
            
            {/* Ambient Background Glow based on swatch */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-bronze/[0.03] blur-[120px] pointer-events-none rounded-full" />

            {/* Part A: Specification Sheet */}
            <div className="flex flex-col justify-between space-y-8" id="material-specifications">
              <div className="space-y-6">
                <div>
                  <span className="font-mono text-[8px] text-bronze tracking-widest uppercase block font-bold">TACTILE MATRIX</span>
                  <motion.h3 
                    key={selectedMaterial.id + '-name'}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="font-serif text-2xl font-light text-matte-black mt-1"
                  >
                    {selectedMaterial.name}
                  </motion.h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="font-mono text-[8px] text-stone-dark uppercase block mb-1 font-semibold">Origin Details</span>
                    <motion.p 
                      key={selectedMaterial.id + '-origin'}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="font-serif text-sm italic font-light text-bronze"
                    >
                      {selectedMaterial.origin}
                    </motion.p>
                  </div>

                  <div>
                    <span className="font-mono text-[8px] text-stone-dark uppercase block mb-1 font-semibold">Texture Anatomy</span>
                    <motion.p 
                      key={selectedMaterial.id + '-texture'}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="font-sans text-xs text-charcoal font-light leading-relaxed opacity-85"
                    >
                      {selectedMaterial.texture}
                    </motion.p>
                  </div>

                  <div>
                    <span className="font-mono text-[8px] text-stone-dark uppercase block mb-1 font-semibold">Curation Recommendation</span>
                    <motion.p 
                      key={selectedMaterial.id + '-desc'}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="font-sans text-xs text-charcoal font-light leading-relaxed opacity-85"
                    >
                      {selectedMaterial.description}
                    </motion.p>
                  </div>
                </div>
              </div>

              {/* Commission Button */}
              <button
                onClick={() => onOpenConcierge(`Bespoke Custom Commission in ${selectedMaterial.name}`)}
                className="w-full py-4 border border-stone-dark/30 hover:border-bronze bg-transparent text-stone-dark font-mono text-xs tracking-[0.25em] uppercase hover:bg-matte-black hover:text-warm-white hover:border-matte-black transition-all duration-500 rounded-sm focus:outline-none cursor-pointer text-center font-bold"
                id="material-commission-btn"
              >
                Enquire for Bespoke Commission
              </button>
            </div>

            {/* Part B: Visual Mockup Showcase (Interactive Preview) */}
            <div className="flex flex-col justify-between bg-warm-white border border-stone/20 p-5 rounded-xs" id="material-visualizer-mockup">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-stone/15 pb-3">
                  <div className="flex items-center gap-1.5 font-mono text-[8px] text-stone-dark tracking-wider uppercase">
                    <Eye className="w-3.5 h-3.5 text-bronze/60" />
                    <span>Spatial Visualization</span>
                  </div>
                  <span className="font-mono text-[8px] text-bronze bg-bronze/5 px-2 py-0.5 rounded-xs border border-bronze/20 font-semibold">Active Spec</span>
                </div>

                <div className="overflow-hidden aspect-square bg-stone-light/10 rounded-xs border border-stone/15 relative group">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={visualization.mockImage}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      src={visualization.mockImage}
                      alt={visualization.itemName}
                      className="w-full h-full object-cover filter brightness-[0.95]"
                      referrerPolicy="no-referrer"
                    />
                  </AnimatePresence>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <h5 className="font-serif text-sm font-light text-matte-black">{visualization.itemName}</h5>
                    <span className="font-mono text-xs text-stone-dark font-bold">{visualization.valuation}</span>
                  </div>
                  <p className="font-sans text-[11px] text-stone-dark font-light leading-relaxed">
                    {visualization.vibe}
                  </p>
                </div>
              </div>

              <div className="border-t border-stone/15 pt-3 flex items-center justify-between mt-4">
                <span className="font-mono text-[8px] text-stone-medium tracking-widest uppercase">MODEL: BESPOKE-V1</span>
                <span className="font-mono text-[8px] text-bronze/80 tracking-widest uppercase font-bold">AURA STUDIO</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
