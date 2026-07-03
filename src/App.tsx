/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCollections from './components/FeaturedCollections';
import LuxuryInteriorShowcase from './components/LuxuryInteriorShowcase';
import Showcase from './components/Showcase';
import BestSellers from './components/BestSellers';
import CurationEngine from './components/CurationEngine';
import MaterialCustomizer from './components/MaterialCustomizer';
import SeasonalCollection from './components/SeasonalCollection';
import LifestyleGallery from './components/LifestyleGallery';
import BrandStory from './components/BrandStory';
import CraftsmanshipTimeline from './components/CraftsmanshipTimeline';
import FeaturedDesigners from './components/FeaturedDesigners';
import SocialProof from './components/SocialProof';
import InstagramGallery from './components/InstagramGallery';
import LuxuryNewsletter from './components/LuxuryNewsletter';
import ConciergeDrawer from './components/ConciergeDrawer';
import Footer from './components/Footer';
import LuxuryCursor from './components/LuxuryCursor';

export default function App() {
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);
  const [conciergeSubject, setConciergeSubject] = useState('');
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section for custom top nav bar highlights
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      const sections = [
        'featured-collections',
        'interior-showcase',
        'showcase',
        'best-sellers',
        'curation-engine',
        'material-studio',
        'seasonal-collection',
        'lifestyle-gallery',
        'brand-story',
        'featured-designers',
        'customer-experiences'
      ];
      
      let found = 'hero';
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            found = sectionId;
            break;
          }
        }
      }
      setActiveSection(found);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenConcierge = (initialSubject?: string) => {
    setConciergeSubject(initialSubject || 'General Private Collection Inquiry');
    setIsConciergeOpen(true);
  };

  const handleCloseConcierge = () => {
    setIsConciergeOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset for sticky floating glass navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-warm-white text-matte-black min-h-screen selection:bg-bronze/10 selection:text-matte-black overflow-x-hidden antialiased font-sans">
      {/* Luxury Interactive Cursor and Scroll Indicator */}
      <LuxuryCursor />

      {/* Floating Header */}
      <Navbar 
        onOpenConcierge={() => handleOpenConcierge('General Inquiry')} 
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      {/* Cinematic Hero */}
      <Hero 
        onStartCuration={() => scrollToSection('curation-engine')}
        onExploreCollection={() => scrollToSection('featured-collections')}
      />

      {/* Master Curations */}
      <FeaturedCollections onOpenConcierge={handleOpenConcierge} />

      {/* Spatial Experiences Showcase with Hotspots */}
      <LuxuryInteriorShowcase onOpenConcierge={handleOpenConcierge} />

      {/* Master Collection Showcase with Provenance Drawer */}
      <Showcase onOpenConcierge={handleOpenConcierge} />

      {/* The Most Desired - Best Sellers */}
      <BestSellers onOpenConcierge={handleOpenConcierge} />

      {/* Interactive Sanctuary Curation Engine */}
      <CurationEngine />

      {/* Interactive Material Studio Swatch Customizer */}
      <MaterialCustomizer onOpenConcierge={handleOpenConcierge} />

      {/* Limited Seasonal Release & Calendar schedule */}
      <SeasonalCollection onOpenConcierge={handleOpenConcierge} />

      {/* Atmospheric Narratives Gallery */}
      <LifestyleGallery />

      {/* Heritage & Craftsmanship Brand Story */}
      <BrandStory />

      {/* Custom Handcrafted Craftsmanship Timeline */}
      <CraftsmanshipTimeline />

      {/* Visionary Featured Designers */}
      <FeaturedDesigners />

      {/* Private Guest Book Customer Experiences & Accolades */}
      <SocialProof />

      {/* Social Aesthetic Instagram Gallery */}
      <InstagramGallery />

      {/* The Aura Ledger Newsletter Invitation */}
      <LuxuryNewsletter />

      {/* Global Ateliers Footer */}
      <Footer 
        onOpenConcierge={handleOpenConcierge}
        scrollToSection={scrollToSection}
      />

      {/* Global Private Concierge & Scheduling Office Drawer */}
      <ConciergeDrawer 
        isOpen={isConciergeOpen}
        onClose={handleCloseConcierge}
        initialSubject={conciergeSubject}
      />
    </div>
  );
}
