/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { Compass, Hammer, Eye, Package, Home, Globe, ArrowDown, Sparkles } from 'lucide-react';

interface TimelineStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  specs: string[];
}

const TIMELINE_STEPS: TimelineStep[] = [
  {
    number: '01',
    title: 'Material Selection',
    subtitle: 'The Quest for Sovereign Geology',
    description: 'We do not source; we prospect. Our master stone curators travel to deep geological veins in Tivoli, Italy and Basque, Spain to hand-mark individual monolithic blocks of travertine and marble. Only blocks with impeccable density, crystalline striations, and millions of years of mineral memory are signed with the Aura seal.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    icon: <Compass className="w-5 h-5 text-bronze" />,
    specs: ['98% Monolithic Travertine', 'Zero Cracking Tolerance', 'Italian Quarry Allotments']
  },
  {
    number: '02',
    title: 'Handcrafted Production',
    subtitle: 'Bespoke Atelier Assembly',
    description: 'Our pieces are shaped inside private workshops in Geneva and Lyon. Registered master weavers handle high-density Belgian wool thread on traditional hand looms to craft our signature boucle, while stonemasons utilize diamond-embedded steel hones to hand-bevel structural travertine columns with micro-millimeter precision.',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=80',
    icon: <Hammer className="w-5 h-5 text-bronze" />,
    specs: ['Listed Master Craftsmen Only', 'Traditional Hand Joinery', '60+ Hours Per Individual Piece']
  },
  {
    number: '03',
    title: 'Quality Inspection',
    subtitle: 'The Five-Sense Sovereign Audit',
    description: 'Each completed piece undergoes a microscopic audit. Under calibrated light boards, white-gloved inspectors test tensile wool elasticity, verify seams with high-accuracy calipers, examine natural pitted cavities in stone, and guarantee that the visual contour corresponds perfectly to the architect’s digital layout blueprint.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
    icon: <Eye className="w-5 h-5 text-bronze" />,
    specs: ['Micro-Seam Calligraphy Audit', 'Light-Box Stress Assessment', 'Registered Architect Certification']
  },
  {
    number: '04',
    title: 'Luxury Packaging',
    subtitle: 'High-Level Archival Framing',
    description: 'Protection is treated as a discipline of structural design. Finished items are enveloped in high-density anti-static breathable linen wraps, placed inside custom fumigated European pine crates, and suspended by specialized shock-absorbent composite frames. A wax-sealed envelope containing the piece’s provenance ledger is embedded in the lid.',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1000&q=80',
    icon: <Package className="w-5 h-5 text-bronze" />,
    specs: ['Custom Pine Crate Engineering', 'Archival Wax-Sealed Pedigree', 'Shock-Watch Precision Telemetry']
  },
  {
    number: '05',
    title: 'Interior Styling',
    subtitle: 'Spatial Symphony Alignment',
    description: 'Aura curators assist in the final architectural integration of your collection. We coordinate detailed placement analysis to match light angles, shadows, traffic flow, and existing art installations. The piece is styled alongside customized companion accessories to complete the atmospheric tranquility of your salon.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80',
    icon: <Home className="w-5 h-5 text-bronze" />,
    specs: ['Luminous Reflection Analysis', 'Spatial Feng-Shui Calibration', 'Custom Architectural Accessories']
  },
  {
    number: '06',
    title: 'Worldwide White-Glove Delivery',
    subtitle: 'Sovereign Courier Protection',
    description: 'Delivery is executed by our private logistics squad. Our specialized delivery trucks arrive in clean residential areas, where white-glove spatial engineers transport your crated piece into your room of choice, assemble base layers, apply marble protective micro-polishes, and clear all shipping packaging instantly.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
    icon: <Globe className="w-5 h-5 text-bronze" />,
    specs: ['Private Aura Transport Team', 'Complete In-Room Installation', 'Micro-Sealer Stone Application']
  }
];

export default function CraftsmanshipTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the container to animate a golden gauge line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section 
      ref={containerRef}
      className="relative py-32 md:py-48 bg-ivory text-matte-black overflow-hidden border-t border-stone-light" 
      id="craftsmanship-timeline"
    >
      {/* Structural layout dots background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e0dcd3_1px,transparent_1px)] [background-size:40px_40px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-24 md:mb-32">
          <span className="font-mono text-[9px] tracking-[0.45em] text-bronze uppercase block mb-4 font-bold">
            THE CHRONICLES OF EXCELLENCE
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-light tracking-tight text-matte-black leading-none mb-6">
            Our Craftsmanship Timeline
          </h2>
          <div className="h-[1px] bg-bronze/35 w-24 mx-auto mb-6" />
          <p className="font-sans text-xs md:text-sm text-stone-dark font-light leading-relaxed tracking-wide opacity-80">
            A linear progression of high-fidelity precision, tracking how rough raw stone and silk thread transform into registered collector pieces.
          </p>
        </div>

        {/* Timeline Path Container */}
        <div className="relative">
          {/* Central Connecting Vertical Golden Line (Desktop only) */}
          <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-stone/20 -translate-x-[50%] hidden lg:block" />
          
          {/* Active Animated Progress Overlay Line */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-[50%] top-0 bottom-0 w-[2px] bg-gradient-to-b from-bronze via-bronze/70 to-stone/5 -translate-x-[50%] hidden lg:block"
          />

          {/* Timeline Milestones list */}
          <div className="space-y-24 md:space-y-36 relative">
            {TIMELINE_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={step.number}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center"
                >
                  
                  {/* Left Column (Content or Image based on alignment) */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-5 lg:col-start-8'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="space-y-6"
                    >
                      {/* Badge info */}
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full border border-stone/20 bg-warm-white flex items-center justify-center shadow-xs">
                          {step.icon}
                        </div>
                        <span className="font-mono text-[10px] text-bronze tracking-[0.3em] uppercase font-bold">
                          STAGE {step.number}
                        </span>
                      </div>

                      {/* Headings */}
                      <div className="space-y-1">
                        <h3 className="font-serif text-2xl md:text-3.5xl font-light text-matte-black tracking-wide">
                          {step.title}
                        </h3>
                        <span className="font-serif text-xs md:text-sm text-stone-dark italic block font-light">
                          {step.subtitle}
                        </span>
                      </div>

                      {/* Description Paragraph */}
                      <p className="font-sans text-xs md:text-sm text-charcoal font-light leading-relaxed tracking-wide opacity-85">
                        {step.description}
                      </p>

                      {/* Specifications List */}
                      <div className="border-t border-stone/20 pt-4 grid grid-cols-1 gap-2">
                        {step.specs.map((spec, specIdx) => (
                          <div key={specIdx} className="flex items-center gap-2 font-mono text-[10px] text-stone-dark">
                            <span className="w-1.5 h-1.5 bg-bronze/60 rounded-full" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Center Node (Absolute on desktop, hidden on mobile) */}
                  <div className="lg:col-span-2 flex justify-center lg:order-3 z-10 relative pointer-events-none hidden lg:flex">
                    <motion.div 
                      whileInView={{ scale: [0.9, 1.1, 1], backgroundColor: ['#FAF9F6', '#D4AF37', '#FAF9F6'] }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5 }}
                      className="w-10 h-10 rounded-full border-2 border-bronze bg-ivory flex items-center justify-center text-matte-black font-mono text-[10px] font-bold shadow-lg"
                    >
                      {step.number}
                    </motion.div>
                  </div>

                  {/* Right Column (Image with Luxury frame) */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-5 lg:col-start-8' : 'lg:order-1'}`}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.98, y: 30 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                      className="relative overflow-hidden aspect-[16/11] bg-stone-light/10 border border-stone/15 rounded-xs shadow-md group"
                    >
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-103 filter brightness-95"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-matte-black/5 group-hover:bg-transparent transition-colors duration-500" />
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Global certification stamp badge */}
        <div className="mt-32 border border-stone/20 bg-warm-white p-8 rounded-xs text-center max-w-xl mx-auto shadow-sm relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-bronze/5 blur-2xl rounded-full" />
          <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-bronze/5 blur-2xl rounded-full" />
          <div className="w-12 h-12 rounded-full bg-bronze/10 border border-bronze/25 flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-5 h-5 text-bronze" />
          </div>
          <h4 className="font-serif text-lg font-light text-matte-black">Certified Authenticity Guaranteed</h4>
          <p className="font-sans text-xs text-stone-dark mt-2 font-light leading-relaxed max-w-md mx-auto">
            Every creation shipped from our workshops is assigned a secure blockchain-registered inventory certificate, signed by our head architectural director and master builder.
          </p>
        </div>

      </div>
    </section>
  );
}
