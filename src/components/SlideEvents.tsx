import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, ExternalLink } from 'lucide-react';
import {
  IslamicMedallion,
  CornerFlourish,
  GoldDivider,
  MihrabArch,
} from './IslamicOrnaments';

interface SlideEventsProps {
  onPrev?: () => void;
}

export const SlideEvents: React.FC<SlideEventsProps> = ({ onPrev }) => {
  const events = [
    {
      id: 'haldi',
      name: 'HALDI :',
      dateText: 'On Wednesday 4-11-2026',
      timeText: 'Auspicious Morning',
      venuePrefix: 'at',
      venue: 'Our Residence, Karempudi.',
      address: 'Karempudi, Palnadu / Guntur District',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Karempudi+Andhra+Pradesh',
    },
    {
      id: 'nikha',
      name: 'NIKHA :',
      dateText: 'On Thursday 5-11-2026 at 11 a.m.',
      timeText: '11:00 AM',
      venuePrefix: 'VENUE :',
      venue: 'at Moulana Abul Kalam Azad Urdu Ghar Cum Shadi Khana, Guntur.',
      address: 'Near Old Bus Stand, Guntur, Andhra Pradesh',
      mapsUrl:
        'https://www.google.com/maps/search/?api=1&query=Moulana+Abul+Kalam+Azad+Urdu+Ghar+Cum+Shadi+Khana+Guntur',
      isNikah: true,
    },
    {
      id: 'valima',
      name: 'VALIMA (LUNCH) :',
      dateText: 'On Saturday 7-11-2026 at 12-00 noon',
      timeText: '12:00 Noon',
      venuePrefix: 'at',
      venue: 'G.V.R. Kalyanamandapam, Karempudi.',
      address: 'Main Road, Karempudi, Palnadu District',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=GVR+Kalyanamandapam+Karempudi',
    },
  ];

  const handleLocationClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation(); // prevent flipping the slide when clicking map link
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative w-full h-full p-4 sm:p-7 md:p-8 flex flex-col justify-between text-center select-none bg-[#fdfbf7] rounded-2xl overflow-hidden cursor-pointer shadow-inner">
      {/* Background Subtle Dot Grid matching Slide 1 */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06] bg-[radial-gradient(#072e21_1.2px,transparent_1.2px)] [background-size:12px_12px]"
        aria-hidden="true"
      />

      {/* Golden Inset Borders */}
      <div className="absolute inset-2 sm:inset-3 border border-[#d4af37]/70 pointer-events-none rounded-xl" />
      <div className="absolute inset-3 sm:inset-4.5 border border-[#d4af37]/35 border-dashed pointer-events-none rounded-lg" />

      {/* 4 Corner Flourishes */}
      <CornerFlourish position="top-left" className="top-2 left-2 sm:top-3 sm:left-3 w-10 h-10 sm:w-14 sm:h-14" />
      <CornerFlourish position="top-right" className="top-2 right-2 sm:top-3 sm:right-3 w-10 h-10 sm:w-14 sm:h-14" />
      <CornerFlourish position="bottom-left" className="bottom-2 left-2 sm:bottom-3 sm:left-3 w-10 h-10 sm:w-14 sm:h-14" />
      <CornerFlourish position="bottom-right" className="bottom-2 right-2 sm:bottom-3 sm:right-3 w-10 h-10 sm:w-14 sm:h-14" />

      {/* TOP HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-1 sm:pt-2 relative z-10"
      >
        <MihrabArch className="w-full h-5 sm:h-6 mb-1 text-[#c5a059]" />

        <p className="text-[9px] sm:text-[10px] md:text-[11px] font-cinzel font-semibold tracking-[0.25em] uppercase text-[#a07c33]">
          WEDDING SCHEDULE &amp; CELEBRATIONS
        </p>

        <h2 className="text-2xl sm:text-3xl font-cinzel font-extrabold text-[#7a1c1c] sm:text-[#6e1818] tracking-wider uppercase mt-1 leading-snug">
          Wedding Events
        </h2>

        {/* Diamond Line */}
        <div className="w-28 sm:w-36 mx-auto my-1 sm:my-1.5">
          <GoldDivider />
        </div>
      </motion.div>

      {/* EVENTS TIMELINE LIST MATCHING EXACT CARD LABELS & DATES */}
      <div className="my-auto py-1 sm:py-2 space-y-2 sm:space-y-2.5 relative z-10 w-full max-w-[340px] sm:max-w-[370px] mx-auto text-left">
        {events.map((evt, idx) => (
          <motion.div
            key={evt.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + idx * 0.1 }}
            className={`p-2.5 sm:p-3 rounded-lg border transition-all ${
              evt.isNikah
                ? 'bg-gradient-to-r from-[#fefbf6] to-[#f9f2e7] border-[#8a2222]/40 shadow-xs ring-1 ring-[#c5a059]/40'
                : 'bg-[#faf6ee] border-[#c5a059]/40'
            }`}
          >
            {/* Event Name Heading */}
            <div className="flex items-center justify-between">
              <span
                className={`text-xs sm:text-sm font-cinzel font-bold tracking-wider ${
                  evt.isNikah ? 'text-[#6e1818]' : 'text-[#8c6722]'
                }`}
              >
                {evt.name}
              </span>
              {evt.isNikah && (
                <span className="text-[9px] font-cinzel font-bold px-1.5 py-0.5 rounded bg-[#6e1818] text-[#f7e6b5] uppercase tracking-wider">
                  Main Ceremony
                </span>
              )}
            </div>

            {/* Exact Date & Time phrasing from card: e.g. "On Thursday 5-11-2026 at 11 a.m." */}
            <p className="text-xs sm:text-[13px] text-[#443525] font-playfair italic font-semibold mt-0.5 leading-snug">
              {evt.dateText}
            </p>

            {/* Venue line from card */}
            <div className="mt-1 pt-1 border-t border-[#c5a059]/25 flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <p className="text-[11px] sm:text-xs font-playfair italic text-[#2c2217] leading-snug">
                  <span className="font-bold text-[#8a2222] uppercase font-cinzel text-[10px] mr-1 not-italic">
                    {evt.venuePrefix}
                  </span>
                  {evt.venue}
                </p>
                <p className="text-[10px] text-[#6d5b46] font-sans mt-0.5 truncate">
                  {evt.address}
                </p>
              </div>

              {/* Direct Tap/Clickable Location Directions Button */}
              <button
                type="button"
                onClick={(e) => handleLocationClick(e, evt.mapsUrl)}
                className="shrink-0 px-2 py-1 bg-white hover:bg-[#faf4e6] border border-[#c5a059]/60 hover:border-[#a07c33] text-[#6e1818] text-[10px] font-cinzel font-bold rounded shadow-2xs flex items-center gap-1 cursor-pointer transition-colors active:scale-95"
                title={`Open ${evt.name} location on Google Maps`}
              >
                <span>Location</span>
                <ExternalLink className="w-2.5 h-2.5 text-[#a07c33]" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* INVITED BY INSET CARD MATCHING GIVEN IMAGE */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="relative z-10 w-full max-w-[340px] sm:max-w-[370px] mx-auto py-2.5 px-3 bg-gradient-to-b from-[#faf5ea] to-[#f4ece0] rounded-lg border border-[#c5a059]/50 shadow-xs text-center"
      >
        <span className="text-[10px] sm:text-[11px] font-playfair italic font-medium text-[#8f6d2b] block">
          Invited by
        </span>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 mt-0.5">
          <p className="text-base sm:text-lg font-playfair font-bold text-[#6e1818] italic">
            Shaik Nureshahid
          </p>
          <span className="hidden sm:inline text-xs text-[#c5a059]">&amp;</span>
          <p className="text-base sm:text-lg font-playfair font-bold text-[#6e1818] italic">
            Shaik Karimun
          </p>
        </div>
        <p className="text-xs sm:text-[13px] font-playfair italic text-[#443525] font-medium mt-1 pt-1 border-t border-[#c5a059]/30">
          With Best Compliments from Near &amp; Dear
        </p>
      </motion.div>

      {/* BOTTOM SECTION: Back Button & Family Rosette */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="pb-1 sm:pb-2 relative z-10 flex flex-col items-center gap-1"
      >
        <div className="flex items-center justify-center gap-2 mt-0.5">
          <IslamicMedallion className="w-4 h-4 text-[#c5a059]" />
          <span className="text-[10px] font-cinzel tracking-[0.2em] text-[#73521e] uppercase font-bold">
            Shaik Mahaboob Jani &amp; Suhana Kareema
          </span>
          <IslamicMedallion className="w-4 h-4 text-[#c5a059]" />
        </div>

        {/* Interactive CTA to turn back to Slide 1 */}
        <div className="mt-1 px-4 py-1.5 rounded-full text-xs font-cinzel font-bold text-[#072e21] hover:text-[#b8913b] hover:bg-[#faf4e6] border border-[#c5a059]/40 transition-all flex items-center gap-1.5 shadow-xs">
          <span aria-hidden="true" className="text-sm font-bold">&larr;</span>
          <span>VIEW WEDDING INVITATION</span>
        </div>

        <p className="text-[9px] text-[#9b7228]/80 font-sans tracking-wider uppercase mt-0.5">
          (Tap anywhere or swipe to turn)
        </p>
      </motion.div>
    </div>
  );
};
