import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Compass, Heart, MessageSquare } from 'lucide-react';

interface InstaFrame {
  id: string;
  image: string;
  caption: string;
  likes: string;
  comments: string;
}

const INSTA_FRAMES: InstaFrame[] = [
  {
    id: 'frame-1',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=600&q=80',
    caption: 'Tectonic silence. Deep honing of our unfilled Roman Travertine blocks inside Tivoli. #AuraProvenance',
    likes: '1.2k',
    comments: '42'
  },
  {
    id: 'frame-2',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80',
    caption: 'Soft architectural geometry, Belgic Wool Bouclé loops reflecting the mid-day sun. #AuraCouture',
    likes: '890',
    comments: '29'
  },
  {
    id: 'frame-3',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80',
    caption: 'Orbital shadows from the Apparatus Aether pendant casting ambient warmth. #AuraAtmosphere',
    likes: '1.5k',
    comments: '56'
  },
  {
    id: 'frame-4',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=600&q=80',
    caption: 'Sovereign private library space displaying organic textured ceramics and leather columns. #AuraSanctuary',
    likes: '2.1k',
    comments: '88'
  },
  {
    id: 'frame-5',
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=600&q=80',
    caption: 'Wabi-Sabi sunlight cast over the Japandi low seating module. #AuraWabiSabi',
    likes: '1.4k',
    comments: '34'
  },
  {
    id: 'frame-6',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80',
    caption: 'A private registry of hand-bound wool textures. Every color has a voice. #AuraMaterials',
    likes: '960',
    comments: '18'
  }
];

export default function InstagramGallery() {
  return (
    <section className="relative py-32 bg-warm-white text-matte-black overflow-hidden border-t border-stone/20" id="instagram-gallery">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 md:gap-0">
          <div>
            <span className="font-mono text-[9px] tracking-[0.45em] text-bronze uppercase block mb-3 font-bold">
              ESTHÉTIQUE SOCIALE
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight text-matte-black leading-none">
              Instagram Inspired Gallery
            </h2>
          </div>
          <p className="font-sans text-xs text-stone-dark font-light max-w-sm leading-relaxed tracking-wide opacity-80 flex items-center gap-2">
            <Instagram className="w-4 h-4 text-bronze shrink-0" />
            <span>Follow our continuous visual ledger of material details and interior blue-prints. <span className="font-bold text-bronze">@aura.lifestyle</span></span>
          </p>
        </div>

        {/* 6 Square Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8" id="insta-square-grid">
          {INSTA_FRAMES.map((frame, idx) => (
            <motion.a
              key={frame.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="relative aspect-square overflow-hidden bg-soft-beige rounded-xs border border-stone/15 group shadow-xs block"
            >
              {/* Photo */}
              <img
                src={frame.image}
                alt={frame.caption}
                className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105 filter brightness-[0.98]"
                referrerPolicy="no-referrer"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-matte-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 z-10 text-white">
                <div className="flex justify-end">
                  <Instagram className="w-4 h-4 text-bronze" />
                </div>
                
                <div className="space-y-2">
                  <p className="font-sans text-[9px] font-light leading-relaxed tracking-wide line-clamp-3 text-stone-light">
                    {frame.caption}
                  </p>
                  
                  <div className="flex gap-4 font-mono text-[9px] text-bronze font-bold pt-1">
                    <span className="flex items-center gap-1"><Heart className="w-3 h-3 text-white fill-white shrink-0" /> {frame.likes}</span>
                    <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3 text-white fill-white shrink-0" /> {frame.comments}</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
