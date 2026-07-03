/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export default function LuxuryCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoverType, setHoverType] = useState<'none' | 'link' | 'card' | 'swatch' | 'drag' | 'inquire'>('none');
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Set up top scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 35,
    restDelta: 0.001
  });

  useEffect(() => {
    // Check if the current device has a touch screen or is mobile to safeguard touch ergonomics
    const checkDevice = () => {
      const mobile = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 1024;
      setIsMobile(mobile);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    const handleMouseEnterWindow = () => {
      setIsVisible(true);
    };

    // Attach mouse move tracker to window
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
    };
  }, [isMobile, isVisible]);

  // Set up element specific hover triggers
  useEffect(() => {
    if (isMobile) return;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Check if target is interactive or parent has interactive attributes
      const isClickable = target.closest('button, a, select, input, textarea, [role="button"]') !== null;
      const isPieceCard = target.closest('[id^="piece-card-"], [id^="gallery-item-"]') !== null;
      const isSwatch = target.closest('[id^="swatch-bubble-"]') !== null;
      const isEnquiry = target.closest('[id^="enquire-trigger-"]') !== null;
      const isDraggable = target.closest('[id^="drag-element-"]') !== null;

      if (isEnquiry) {
        setHoverType('inquire');
      } else if (isPieceCard) {
        setHoverType('card');
      } else if (isSwatch) {
        setHoverType('swatch');
      } else if (isDraggable) {
        setHoverType('drag');
      } else if (isClickable) {
        setHoverType('link');
      } else {
        setHoverType('none');
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isMobile]);

  if (isMobile) {
    // Mobile-only: Render only the scroll progress bar at the very top of the window
    return (
      <motion.div 
        style={{ scaleX, originX: 0 }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-bronze/60 via-bronze to-bronze/80 z-[99999] pointer-events-none"
        id="scroll-progress-indicator"
      />
    );
  }

  // Determine cursor styles based on hover state
  const getOuterCursorClasses = () => {
    switch (hoverType) {
      case 'link':
        return 'w-12 h-12 bg-bronze/10 border-bronze scale-110';
      case 'card':
        return 'w-16 h-16 bg-matte-black/5 border-bronze scale-125';
      case 'swatch':
        return 'w-10 h-10 bg-soft-beige/30 border-bronze/60 scale-105';
      case 'drag':
        return 'w-14 h-14 bg-bronze/5 border-bronze scale-115';
      case 'inquire':
        return 'w-20 h-20 bg-bronze text-white border-bronze scale-130';
      default:
        return 'w-8 h-8 bg-transparent border-bronze/40';
    }
  };

  return (
    <>
      {/* Scroll Progress Indicator Bar */}
      <motion.div 
        style={{ scaleX, originX: 0 }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-bronze/60 via-bronze to-bronze/80 z-[99999] pointer-events-none"
        id="scroll-progress-indicator"
      />

      {/* Luxury Dual-Layer Hover Cursor */}
      <div 
        ref={cursorRef}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 1 : 0
        }}
        className="fixed pointer-events-none z-[99999] transition-opacity duration-300 hidden lg:block"
        id="luxury-interactive-cursor"
      >
        {/* Dynamic Outer Ring */}
        <div 
          className={`rounded-full border flex items-center justify-center transition-all duration-300 ease-out font-mono text-[7px] font-bold uppercase tracking-widest text-matte-black ${getOuterCursorClasses()}`}
        >
          {hoverType === 'card' && <span className="text-bronze scale-90">VIEW</span>}
          {hoverType === 'drag' && <span className="text-bronze scale-90">DRAG</span>}
          {hoverType === 'inquire' && <span className="text-white scale-90">ASK</span>}
        </div>

        {/* Core Center Dot */}
        <div className={`w-1.5 h-1.5 rounded-full bg-bronze absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 ${
          hoverType !== 'none' ? 'scale-0' : 'scale-100'
        }`} />
      </div>
    </>
  );
}
