import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';
import { SlideIntroduction } from './SlideIntroduction';
import { SlideEvents } from './SlideEvents';
import { playPaperFlipSound, toggleSound, isSoundEnabled } from '../utils/sound';

export const InvitationFrame: React.FC = () => {
  // 0 = Slide 1 (Invitation), 1 = Slide 2 (Events)
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1); // 1 = forward, -1 = backward
  const [soundOn, setSoundOn] = useState<boolean>(true);

  // Swipe gesture tracking
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const isDraggingRef = useRef<boolean>(false);

  // Trigger page flip with sound effect
  const flipToSlide = (newSlide: number, dir: number) => {
    if (newSlide === activeSlide) return;
    playPaperFlipSound();
    setDirection(dir);
    setActiveSlide(newSlide);
  };

  const handleNext = () => {
    flipToSlide(activeSlide === 0 ? 1 : 0, 1);
  };

  const handlePrev = () => {
    flipToSlide(activeSlide === 1 ? 0 : 1, -1);
  };

  const handleTap = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    // If user dragged a significant distance, don't treat as tap
    if (isDraggingRef.current) return;

    // Direct toggle on tap
    playPaperFlipSound();
    setDirection(activeSlide === 0 ? 1 : -1);
    setActiveSlide((prev) => (prev === 0 ? 1 : 0));
  };

  // Touch gesture listeners for mobile/tablet swipe
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
    isDraggingRef.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;
    const diffX = e.touches[0].clientX - touchStartXRef.current;
    const diffY = e.touches[0].clientY - touchStartYRef.current;
    if (Math.abs(diffX) > 15 || Math.abs(diffY) > 15) {
      isDraggingRef.current = true;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;

    const deltaX = touchEndX - touchStartXRef.current;
    const deltaY = touchEndY - touchStartYRef.current;

    // Detect horizontal swipe
    if (Math.abs(deltaX) > 35 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        // Swiped left -> Next slide
        flipToSlide(1, 1);
      } else {
        // Swiped right -> Previous slide
        flipToSlide(0, -1);
      }
    }

    touchStartXRef.current = null;
    touchStartYRef.current = null;
    setTimeout(() => {
      isDraggingRef.current = false;
    }, 50);
  };

  // Optional: Auto-advance after 7 seconds if desired, but tap/swipe is primary
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection((currDir) => (activeSlide === 0 ? 1 : -1));
      setActiveSlide((curr) => {
        playPaperFlipSound();
        return curr === 0 ? 1 : 0;
      });
    }, 7000);

    return () => clearInterval(timer);
  }, [activeSlide]);

  const handleSoundToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    const state = toggleSound();
    setSoundOn(state);
  };

  // Realistic 3D Physical Paper Page Turn
  const pageVariants: Record<string, any> = {
    enter: (dir: number) => ({
      rotateY: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.92,
      transformOrigin: dir > 0 ? 'left center' : 'right center',
      boxShadow: '0 30px 70px rgba(0,0,0,0.7)',
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      transformOrigin: 'center center',
      boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
      transition: {
        duration: 0.65,
        ease: 'easeInOut',
      },
    },
    exit: (dir: number) => ({
      rotateY: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.92,
      transformOrigin: dir > 0 ? 'left center' : 'right center',
      boxShadow: '0 30px 70px rgba(0,0,0,0.7)',
      transition: {
        duration: 0.55,
        ease: 'easeInOut',
      },
    }),
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-2 sm:p-4 select-none">
      {/* Discreet Sound Effect Toggle in the Top Right Corner */}
      <button
        type="button"
        onClick={handleSoundToggle}
        className="absolute top-3 right-3 sm:top-5 sm:right-5 z-40 p-2 rounded-full bg-[#031c14]/80 text-[#c5a059] hover:text-[#f3e5ab] border border-[#c5a059]/40 backdrop-blur-xs transition-all shadow-md cursor-pointer"
        title={soundOn ? 'Paper flip sound: ON (Click to mute)' : 'Paper flip sound: MUTED (Click to enable)'}
      >
        {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 opacity-50" />}
      </button>

      {/* FULL-SCREEN CARD FRAME */}
      <div
        onClick={handleTap}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative w-full max-w-[420px] sm:max-w-[460px] h-[92vh] max-h-[860px] min-h-[580px] perspective-2000 preserve-3d cursor-pointer group"
      >
        {/* Outer Metallic Gold & Emerald Card Border Shadow */}
        <div className="absolute -inset-1.5 sm:-inset-2.5 rounded-2xl bg-gradient-to-b from-[#0a3828] via-[#052319] to-[#02130d] border-2 border-[#c5a059]/70 shadow-[0_25px_70px_rgba(0,0,0,0.85),0_0_35px_rgba(197,160,89,0.3)] pointer-events-none" />

        {/* Dynamic Paper Turn Container */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden preserve-3d">
          <AnimatePresence custom={direction} mode="wait">
            {activeSlide === 0 ? (
              <motion.div
                key="slide-intro"
                custom={direction}
                variants={pageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full h-full absolute inset-0 backface-hidden"
              >
                <SlideIntroduction onNext={handleNext} />
              </motion.div>
            ) : (
              <motion.div
                key="slide-events"
                custom={direction}
                variants={pageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full h-full absolute inset-0 backface-hidden"
              >
                <SlideEvents onPrev={handlePrev} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Subtle Slide Indicators: 1/2 and 2/2 */}
      <div className="mt-3 flex items-center justify-center gap-3 z-30">
        <button
          type="button"
          onClick={() => flipToSlide(0, -1)}
          className={`px-3 py-0.5 rounded-full text-[11px] font-cinzel font-bold tracking-wider transition-all cursor-pointer ${
            activeSlide === 0
              ? 'bg-[#c5a059] text-[#072e21] shadow-xs scale-105'
              : 'text-[#f3e5ab]/70 hover:text-[#f3e5ab] bg-[#031c14]/70 border border-[#c5a059]/30'
          }`}
        >
          1 / 2
        </button>

        <button
          type="button"
          onClick={() => flipToSlide(1, 1)}
          className={`px-3 py-0.5 rounded-full text-[11px] font-cinzel font-bold tracking-wider transition-all cursor-pointer ${
            activeSlide === 1
              ? 'bg-[#c5a059] text-[#072e21] shadow-xs scale-105'
              : 'text-[#f3e5ab]/70 hover:text-[#f3e5ab] bg-[#031c14]/70 border border-[#c5a059]/30'
          }`}
        >
          2 / 2
        </button>
      </div>
    </div>
  );
};
