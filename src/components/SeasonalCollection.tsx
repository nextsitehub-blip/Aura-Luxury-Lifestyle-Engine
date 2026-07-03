import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Compass, Clock, MapPin, ArrowRight } from 'lucide-react';

interface SalonDate {
  date: string;
  city: string;
  venue: string;
  status: string;
}

const SALON_SCHEDULE: SalonDate[] = [
  { date: 'Oct 12 — Oct 18', city: 'Milan, Italy', venue: 'Solferino Private Salon', status: 'Limited Slots' },
  { date: 'Nov 02 — Nov 07', city: 'Paris, France', venue: 'Rue du Faubourg Atelier', status: 'Registry Open' },
  { date: 'Nov 24 — Nov 29', city: 'Kyoto, Japan', venue: 'Higashiyama Temple Pavilion', status: 'Invite Only' },
  { date: 'Dec 10 — Dec 15', city: 'New York, USA', venue: 'Greene St. Penthouse Loft', status: 'Booking Open' }
];

interface SeasonalCollectionProps {
  onOpenConcierge: (subject: string) => void;
}

export default function SeasonalCollection({ onOpenConcierge }: SeasonalCollectionProps) {
  return (
    <section className="relative py-32 md:py-48 bg-matte-black text-warm-white overflow-hidden border-t border-neutral-900" id="seasonal-collection">
      {/* Decorative Background Grid Lines */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <div className="absolute top-0 bottom-0 left-[20%] w-[1px] bg-stone" />
        <div className="absolute top-0 bottom-0 left-[50%] w-[1px] bg-stone" />
        <div className="absolute top-0 bottom-0 left-[80%] w-[1px] bg-stone" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 md:mb-28 text-center max-w-3xl mx-auto">
          <span className="font-mono text-[9px] tracking-[0.45em] text-bronze uppercase block mb-4 font-bold">
            LIMITED SEASONAL VERNISSAGE
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-light tracking-tight text-white mb-6">
            L&apos;Horizon d&apos;Automne
          </h2>
          <p className="font-sans text-xs md:text-sm text-stone font-light leading-relaxed tracking-wide opacity-75">
            Our Autumn edit is a visual poem honoring warm wabi-sabi textures, deep smoked timbers, and highly pitted volcanic obsidian. Designed for low-light, ambient sanctuary spaces.
          </p>
        </div>

        {/* Big Magazine Splitted Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center mb-24">
          
          {/* Left Large Full-bleed Image */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="aspect-[3/4] bg-neutral-900 overflow-hidden border border-neutral-800 rounded-xs"
            >
              <img
                src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80"
                alt="Autumn Editorial Interior"
                className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.05]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Overlay Poetry Quote */}
            <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 bg-black/75 backdrop-blur-md border border-neutral-800 p-6 max-w-xs rounded-xs">
              <span className="font-serif text-sm italic text-stone font-light block mb-2 leading-relaxed">
                “Beauty is most profound when shadowed by the quiet, imperfect passing of seasons.”
              </span>
              <span className="font-mono text-[8px] text-bronze tracking-widest uppercase font-bold block">
                &mdash; Wabi-Sabi Aesthetics
              </span>
            </div>
          </div>

          {/* Right Text Column & Interactive Schedule Box */}
          <div className="lg:col-span-6 space-y-12">
            
            <div className="space-y-6">
              <span className="font-mono text-[9px] text-bronze tracking-widest uppercase font-bold block">
                ATELIER PHILOSOPHY
              </span>
              <h3 className="font-serif text-3xl font-light text-white tracking-wide">
                Exclusivity, Low Frequency
              </h3>
              <p className="font-sans text-xs md:text-sm text-stone font-light leading-relaxed tracking-wide opacity-80">
                To guarantee absolute artistic integrity, we release only twenty-five physical iterations of our Autumn catalog items worldwide. Each item is individually watermarked with an encrypted blockchain signature and accompanied by a certification tablet.
              </p>
            </div>

            {/* Interactive Schedule Table */}
            <div className="border border-neutral-800 bg-neutral-950/70 p-6 md:p-8 rounded-sm space-y-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-bronze" />
                  <span className="font-serif text-sm tracking-widest text-white uppercase">
                    Salon Private Viewings
                  </span>
                </div>
                <span className="font-mono text-[8px] text-stone-medium tracking-widest bg-neutral-900 px-3 py-1 border border-neutral-800 rounded-xs">
                  Aura Autumn Tour
                </span>
              </div>

              <div className="space-y-3">
                {SALON_SCHEDULE.map((s, idx) => (
                  <div 
                    key={idx} 
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-3 border-b border-neutral-900 gap-2 sm:gap-0 hover:bg-neutral-900/40 px-2 transition-colors duration-300 rounded-xs"
                  >
                    <div className="flex items-center gap-3">
                      <Clock className="w-3.5 h-3.5 text-stone-medium" />
                      <div>
                        <span className="font-mono text-[10px] text-stone-medium block leading-none mb-1">{s.date}</span>
                        <span className="font-serif text-sm text-white font-light">{s.city}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-start">
                      <span className="font-mono text-[9px] text-stone tracking-wide">{s.venue}</span>
                      <span className="font-mono text-[8px] tracking-wider uppercase text-bronze border border-bronze/30 bg-bronze/5 px-2.5 py-0.5 rounded-xs font-bold">
                        {s.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onOpenConcierge('Booking Request: Salon Tour Private Viewing')}
                className="w-full py-4 border border-neutral-800 hover:border-bronze bg-neutral-900 hover:bg-bronze hover:text-white text-stone font-mono text-[10px] tracking-[0.25em] uppercase font-bold transition-all duration-500 rounded-sm focus:outline-none cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Request Private Salon Allocation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
