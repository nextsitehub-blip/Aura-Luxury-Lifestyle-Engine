/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ArrowLeft, ArrowRight, Filter, Info, Eye } from 'lucide-react';

interface GalleryItem {
  id: string;
  category: 'ALL' | 'GEOLOGY' | 'ATELIER' | 'ARCHITECTURE' | 'LIFESTYLE';
  title: string;
  desc: string;
  image: string;
  aspect: string; // Column layout class
  location: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'quarry-carrara',
    category: 'GEOLOGY',
    title: 'The Statuario Marble Quarry',
    desc: 'Tracing our rare white marble slabs directly back to exclusive, deep-mountain blocks in Carrara, Italy.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    aspect: 'lg:col-span-8 aspect-[16/10]',
    location: 'Carrara, Italy'
  },
  {
    id: 'crafts-stitch',
    category: 'ATELIER',
    title: 'Precision Weft Calibration',
    desc: 'A Listed master weaver in Lyon hand-binding high-density backing with custom Belgian wool thread.',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    aspect: 'lg:col-span-4 aspect-[3/4]',
    location: 'Lyon, France'
  },
  {
    id: 'haussmann-salon',
    category: 'ARCHITECTURE',
    title: 'Parisian Chevron Oak',
    desc: 'Sourcing 18th-century French oak floorboards to align with our classical contemporary furniture releases.',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
    aspect: 'lg:col-span-4 aspect-[3/4]',
    location: 'Paris, France'
  },
  {
    id: 'brutalist-pinnacle',
    category: 'LIFESTYLE',
    title: 'Sovereign Space Volume',
    desc: 'The quiet dialogue between brutalist raw-boarded concrete and soft natural light in our Milan villa project.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    aspect: 'lg:col-span-8 aspect-[16/10]',
    location: 'Como, Italy'
  },
  {
    id: 'japandi-light',
    category: 'ARCHITECTURE',
    title: 'Paper Screens and Cedar Core',
    desc: 'Washi screen dividers filtering soft, natural early morning light into a minimalist Japanese-inspired sanctuary.',
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80',
    aspect: 'lg:col-span-4 aspect-[3/4]',
    location: 'Kyoto, Japan'
  },
  {
    id: 'sculpting-plaster',
    category: 'ATELIER',
    title: 'Chiseling Mineral Mass',
    desc: 'Hand-forming gypsum plaster on a structural steel armature to capture the delicate, wind-swept contours of coastlines.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    aspect: 'lg:col-span-4 aspect-[3/4]',
    location: 'Sète, France'
  },
  {
    id: 'penthouse-horizon',
    category: 'LIFESTYLE',
    title: 'Modernist Penthouse Salon',
    desc: 'Minimalist low-profile seating positioned dynamically to capture sweeping cityscape views and warm horizon shadows.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    aspect: 'lg:col-span-8 aspect-[16/10]',
    location: 'New York, USA'
  }
];

export default function LifestyleGallery() {
  const [selectedFilter, setSelectedFilter] = useState<'ALL' | 'GEOLOGY' | 'ATELIER' | 'ARCHITECTURE' | 'LIFESTYLE'>('ALL');
  const [activeImgIndex, setActiveImgIndex] = useState<number | null>(null);

  const categories: ('ALL' | 'GEOLOGY' | 'ATELIER' | 'ARCHITECTURE' | 'LIFESTYLE')[] = [
    'ALL',
    'GEOLOGY',
    'ATELIER',
    'ARCHITECTURE',
    'LIFESTYLE'
  ];

  const filteredItems = selectedFilter === 'ALL'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedFilter);

  // Close lightbox
  const closeLightbox = useCallback(() => {
    setActiveImgIndex(null);
  }, []);

  // Navigate lightbox right
  const navigateRight = useCallback(() => {
    if (activeImgIndex !== null) {
      const filtered = GALLERY_ITEMS.filter(item => selectedFilter === 'ALL' || item.category === selectedFilter);
      setActiveImgIndex((prevIndex) => {
        if (prevIndex === null) return null;
        return (prevIndex + 1) % filtered.length;
      });
    }
  }, [activeImgIndex, selectedFilter]);

  // Navigate lightbox left
  const navigateLeft = useCallback(() => {
    if (activeImgIndex !== null) {
      const filtered = GALLERY_ITEMS.filter(item => selectedFilter === 'ALL' || item.category === selectedFilter);
      setActiveImgIndex((prevIndex) => {
        if (prevIndex === null) return null;
        return (prevIndex - 1 + filtered.length) % filtered.length;
      });
    }
  }, [activeImgIndex, selectedFilter]);

  // Handle keyboard events inside the lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImgIndex === null) return;
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        navigateRight();
      } else if (e.key === 'ArrowLeft') {
        navigateLeft();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImgIndex, closeLightbox, navigateRight, navigateLeft]);

  // Get current active image details
  const getActiveItem = (): GalleryItem | null => {
    if (activeImgIndex === null) return null;
    const filtered = GALLERY_ITEMS.filter(item => selectedFilter === 'ALL' || item.category === selectedFilter);
    return filtered[activeImgIndex] || null;
  };

  const activeItem = getActiveItem();

  return (
    <section className="relative py-32 md:py-48 bg-ivory text-matte-black overflow-hidden border-t border-stone-light" id="lifestyle-gallery">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8 md:gap-0">
          <div>
            <span className="font-mono text-[9px] tracking-[0.45em] text-bronze uppercase block mb-3 font-bold">
              ATMOSPHERIC NARRATIVES
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-light tracking-tight text-matte-black leading-none">
              Immersive Image Gallery
            </h2>
          </div>
          <p className="font-sans text-xs md:text-sm text-stone-dark font-light max-w-sm leading-relaxed tracking-wide opacity-80">
            A visual documentation of the sensory landscapes, physical processes, and architectural monuments that define the Aura creative philosophy.
          </p>
        </div>

        {/* Elegant Filtering Bar */}
        <div className="flex flex-wrap items-center gap-3 border-b border-stone/20 pb-6 mb-16" id="gallery-filters">
          <div className="flex items-center gap-2 text-stone-dark font-mono text-[9px] tracking-widest uppercase mr-4 font-bold">
            <Filter className="w-3.5 h-3.5 text-bronze" />
            <span>Filter Archive:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedFilter(cat);
                setActiveImgIndex(null); // Reset active index on filter change
              }}
              className={`px-4 py-2 font-mono text-[9px] tracking-widest uppercase transition-all duration-300 rounded-full focus:outline-none cursor-pointer border ${
                selectedFilter === cat
                  ? 'border-bronze bg-soft-beige text-bronze font-bold'
                  : 'border-transparent text-stone-medium hover:text-matte-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bento Grid Gallery with Category Filter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start" id="gallery-grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                className={`${item.aspect} relative group overflow-hidden bg-stone-light/10 border border-stone/15 rounded-xs cursor-pointer shadow-sm`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActiveImgIndex(idx)}
                id={`gallery-item-${item.id}`}
              >
                {/* Image Frame */}
                <div className="w-full h-full relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-[2s] ease-[0.16,1,0.3,1] group-hover:scale-104 filter brightness-95"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Glass Reflection and Lighting Layer */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

                {/* Bottom Narrative Banner Overlay - Visible on Hover */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-matte-black/90 via-matte-black/60 to-transparent p-5 md:p-8 lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500 opacity-100 translate-y-0">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-[8px] tracking-widest text-bronze uppercase font-bold">
                        {item.category} // {item.location}
                      </span>
                      <span className="font-mono text-[8px] text-stone">0{idx + 1}</span>
                    </div>
                    <h4 className="font-serif text-lg tracking-wide text-white font-light">
                      {item.title}
                    </h4>
                    <p className="font-sans text-[11px] text-stone-medium font-light leading-relaxed tracking-wide max-w-xl line-clamp-2">
                      {item.desc}
                    </p>
                    
                    <div className="pt-3 flex items-center gap-2 text-stone font-mono text-[8px] tracking-[0.25em] uppercase font-bold border-t border-stone/15 mt-3">
                      <Maximize2 className="w-3.5 h-3.5 text-bronze" />
                      <span>Enlarge Frame</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Fullscreen Photo Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <>
            {/* Dark Immersive Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.98 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 bg-matte-black z-[9999] cursor-pointer"
              id="lightbox-backdrop"
            />

            {/* Immersive Image Display Stage */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-6 sm:inset-10 z-[10000] flex flex-col justify-between pointer-events-none"
              id="lightbox-container"
            >
              {/* Top Navigation Bar */}
              <div className="flex justify-between items-center w-full pointer-events-auto">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[8px] text-bronze tracking-[0.4em] uppercase font-bold bg-bronze/10 px-3 py-1.5 border border-bronze/20 rounded-xs">
                    {activeItem.category}
                  </span>
                  <span className="font-mono text-[9px] text-stone tracking-widest uppercase hidden sm:block">
                    {activeItem.location}
                  </span>
                </div>
                <button
                  onClick={closeLightbox}
                  className="p-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full hover:text-bronze transition-all cursor-pointer text-white focus:outline-none shadow-lg"
                  aria-label="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Center Slider Display Frame */}
              <div className="flex-grow flex items-center justify-between w-full p-4 relative">
                
                {/* Left Navigation trigger */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateLeft();
                  }}
                  className="p-3 bg-white/5 hover:bg-white/15 border border-white/10 rounded-full text-white hover:text-bronze transition-all cursor-pointer focus:outline-none pointer-events-auto absolute left-2 sm:left-4 z-10"
                  aria-label="Previous Frame"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>

                {/* Large Responsive Center Visual */}
                <div className="w-full h-full flex items-center justify-center p-6 sm:p-12">
                  <img
                    src={activeItem.image}
                    alt={activeItem.title}
                    className="max-h-[72vh] max-w-full object-contain shadow-2xl border border-white/5 pointer-events-auto rounded-xs"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Right Navigation trigger */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateRight();
                  }}
                  className="p-3 bg-white/5 hover:bg-white/15 border border-white/10 rounded-full text-white hover:text-bronze transition-all cursor-pointer focus:outline-none pointer-events-auto absolute right-2 sm:right-4 z-10"
                  aria-label="Next Frame"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Bottom Metadata Narrative Desk */}
              <div className="text-center max-w-2xl mx-auto space-y-3 pointer-events-auto p-4 bg-matte-black/40 backdrop-blur-md rounded-sm border border-white/5">
                <h3 className="font-serif text-xl sm:text-2.5xl font-light text-white tracking-wide">
                  {activeItem.title}
                </h3>
                <p className="font-sans text-xs text-stone font-light leading-relaxed max-w-lg mx-auto opacity-90">
                  {activeItem.desc}
                </p>
                <div className="flex justify-center gap-1.5 pt-2">
                  {GALLERY_ITEMS.filter(item => selectedFilter === 'ALL' || item.category === selectedFilter).map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeImgIndex ? 'w-6 bg-bronze' : 'w-1.5 bg-white/20'
                      }`}
                    />
                  ))}
                </div>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
