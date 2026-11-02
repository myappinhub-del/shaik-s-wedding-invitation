import React from 'react';
import { motion } from 'motion/react';
import {
  IslamicMedallion,
  CornerFlourish,
  GoldDivider,
  MihrabArch,
} from './IslamicOrnaments';

interface SlideIntroductionProps {
  onNext?: () => void;
}

export const SlideIntroduction: React.FC<SlideIntroductionProps> = ({ onNext }) => {
  return (
    <div className="relative w-full h-full p-4 sm:p-7 md:p-8 flex flex-col justify-between text-center select-none bg-[#fdfbf7] rounded-2xl overflow-hidden cursor-pointer shadow-inner">
      {/* Background Subtle Dot Grid matching Reference Image */}
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

      {/* TOP SECTION: Bismillah & Royal Headers */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-1 sm:pt-2 relative z-10"
      >
        <MihrabArch className="w-full h-5 sm:h-6 mb-1 text-[#c5a059]" />

        {/* Arabic Bismillah Calligraphy */}
        <p className="text-xl sm:text-2xl font-amiri font-bold text-[#b8913b] leading-tight drop-shadow-xs">
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </p>

        <p className="text-[9px] sm:text-[10px] md:text-[11px] font-cinzel font-semibold tracking-[0.22em] uppercase text-[#a07c33] mt-1">
          IN THE NAME OF ALLAH, THE MOST GRACIOUS, THE MOST MERCIFUL
        </p>

        <p className="text-[9px] sm:text-[10px] font-cinzel font-semibold tracking-[0.28em] uppercase text-[#73521e] mt-1 sm:mt-1.5">
          TOGETHER WITH THEIR FAMILIES
        </p>

        <h1 className="text-xl sm:text-2xl md:text-[26px] font-cinzel font-extrabold text-[#072e21] tracking-wider uppercase mt-1 leading-snug">
          SHAIK'S WEDDING
          <span className="block text-lg sm:text-xl md:text-[22px] tracking-widest mt-0.5">
            INVITATION
          </span>
        </h1>

        {/* Diamond Ornament Line from Reference Image */}
        <div className="w-28 sm:w-36 mx-auto my-1 sm:my-1.5">
          <GoldDivider />
        </div>

        <p className="text-xs sm:text-[13px] italic font-playfair text-[#554533] leading-relaxed max-w-xs mx-auto">
          Cordially invite you to celebrate the joyous Nikah union of
        </p>
      </motion.div>

      {/* CENTER INSET CARD: The Groom & The Bride */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="my-auto py-3 px-3 sm:px-5 relative z-10 w-full max-w-[340px] sm:max-w-[370px] mx-auto bg-gradient-to-b from-[#faf5ea] via-[#f7f0e1] to-[#f4ebe8]/80 rounded-lg border border-[#c5a059]/60 shadow-[0_4px_16px_rgba(197,160,89,0.12)]"
      >
        {/* 4 Corner Rivets / Dots matching Reference Image */}
        <span className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-[#c5a059] border border-[#a07c33]" />
        <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#c5a059] border border-[#a07c33]" />
        <span className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-[#c5a059] border border-[#a07c33]" />
        <span className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-[#c5a059] border border-[#a07c33]" />

        {/* THE GROOM */}
        <div className="text-center">
          <span className="text-[9px] sm:text-[10px] font-cinzel font-semibold tracking-[0.28em] uppercase text-[#a07c33]">
            THE GROOM
          </span>
          <h2 className="text-2xl sm:text-[27px] font-playfair font-bold text-[#072e21] tracking-tight mt-0.5 leading-tight">
            Shaik Mahaboob Jani
          </h2>
        </div>

        {/* Center ampersand flourish */}
        <div className="my-1 sm:my-1.5 flex items-center justify-center">
          <span className="text-2xl sm:text-3xl font-script text-[#c5a059] italic drop-shadow-xs">
            &amp;
          </span>
        </div>

        {/* THE BRIDE */}
        <div className="text-center">
          <span className="text-[9px] sm:text-[10px] font-cinzel font-semibold tracking-[0.28em] uppercase text-[#a07c33]">
            THE BRIDE
          </span>
          <h2 className="text-2xl sm:text-[27px] font-playfair font-bold text-[#072e21] tracking-tight mt-0.5 leading-tight">
            Suhana Kareema
            <span className="block text-2xl sm:text-[27px]">Aafreen</span>
          </h2>

          {/* Lineage & Residence */}
          <div className="mt-2.5 pt-2 border-t border-[#c5a059]/35 text-[11px] sm:text-xs text-[#52412e] font-sans leading-relaxed">
            <p className="font-medium text-[#73521e]">
              D/o Janab Shaik Karimulla Saheb
            </p>
            <p className="text-[#6d5b46]">
              &amp; Mohtarma Noorjahan Begum (Karempudi)
            </p>
          </div>
        </div>
      </motion.div>

      {/* BOTTOM SECTION: Quranic verse, Family, and Interactive button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="pb-1 sm:pb-2 relative z-10 flex flex-col items-center gap-1 sm:gap-1.5"
      >
        <p className="text-[11px] sm:text-xs italic font-serif text-[#63513a] max-w-xs">
          &ldquo;And He placed between you affection and mercy.&rdquo;
        </p>
        <span className="text-[10px] font-sans text-[#a07c33] -mt-0.5">
          — Surah Ar-Rum (30:21)
        </span>

        {/* Shaik & Family with Floral Rosettes */}
        <div className="flex items-center justify-center gap-2 mt-1">
          <IslamicMedallion className="w-4 h-4 sm:w-5 sm:h-5 text-[#c5a059]" />
          <span className="text-[11px] sm:text-xs font-cinzel tracking-[0.25em] text-[#73521e] uppercase font-bold">
            SHAIK &amp; FAMILY
          </span>
          <IslamicMedallion className="w-4 h-4 sm:w-5 sm:h-5 text-[#c5a059]" />
        </div>

        {/* Tap / Click Indicator matching Reference Image */}
        <div className="mt-1 sm:mt-1.5 px-4 py-1.5 rounded-full text-xs font-cinzel font-bold text-[#072e21] hover:text-[#b8913b] hover:bg-[#faf4e6] border border-[#c5a059]/40 transition-all flex items-center gap-1.5 shadow-xs">
          <span>VIEW WEDDING EVENTS</span>
          <span aria-hidden="true" className="text-sm font-bold">&rarr;</span>
        </div>

        <p className="text-[9px] text-[#9b7228]/80 font-sans tracking-wider uppercase mt-0.5">
          (Tap anywhere or swipe to turn)
        </p>
      </motion.div>
    </div>
  );
};
