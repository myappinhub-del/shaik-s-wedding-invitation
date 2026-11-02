import React from 'react';

// Bismillah Arabic Calligraphy Vector Art
export const BismillahCalligraphy: React.FC<{ className?: string }> = ({ className = 'w-64 h-20' }) => (
  <div className={`flex flex-col items-center justify-center ${className}`}>
    <svg
      viewBox="0 0 500 130"
      className="w-full h-full drop-shadow-[0_2px_4px_rgba(180,140,50,0.3)]"
      fill="currentColor"
    >
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#bf953f" />
          <stop offset="25%" stopColor="#fcf6ba" />
          <stop offset="50%" stopColor="#b38728" />
          <stop offset="75%" stopColor="#fbf5b7" />
          <stop offset="100%" stopColor="#aa771c" />
        </linearGradient>
      </defs>
      {/* Intricate stylized Arabic text representation */}
      <text
        x="250"
        y="85"
        textAnchor="middle"
        fontFamily="'Amiri', 'Traditional Arabic', serif"
        fontSize="62"
        fontWeight="bold"
        fill="url(#goldGradient)"
        letterSpacing="2"
      >
        بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
      </text>
    </svg>
    <p className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-[#9e7d3b] font-medium mt-0.5">
      In the name of Allah, the Most Gracious, the Most Merciful
    </p>
  </div>
);

// Islamic Geometric Floral Rosette / Star Medallion
export const IslamicMedallion: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg
    viewBox="0 0 100 100"
    className={`${className} text-[#c5a059]`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
    <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="1" opacity="0.6" />
    {/* 8-pointed star */}
    <path
      d="M50 12 L61 39 L90 50 L61 61 L50 88 L39 61 L10 50 L39 39 Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="currentColor"
      fillOpacity="0.08"
    />
    <path
      d="M23 23 L50 35 L77 23 L65 50 L77 77 L50 65 L23 77 L35 50 Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="currentColor"
      fillOpacity="0.08"
    />
    <circle cx="50" cy="50" r="8" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="50" cy="50" r="3" fill="currentColor" />
  </svg>
);

// Intricate Corner Arabesque Filigree
export const CornerFlourish: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}> = ({ position, className = 'w-16 h-16' }) => {
  const rotation = {
    'top-left': 'rotate-0',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  }[position];

  return (
    <div className={`absolute pointer-events-none ${rotation} ${className}`}>
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full text-[#c5a059]" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2 2 H45 C45 2 30 5 25 15 C20 25 22 35 15 42 C8 49 2 45 2 45 V2 Z"
          fill="currentColor"
          fillOpacity="0.06"
        />
        <path d="M2 2 L78 2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M2 2 L2 78" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 8 L65 8" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />
        <path d="M8 8 L8 65" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />
        {/* Curled leaf motif */}
        <path
          d="M12 12 Q35 15 40 40 Q15 35 12 12 Z"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="currentColor"
          fillOpacity="0.12"
        />
        <path
          d="M18 18 Q26 22 28 32 Q22 26 18 18 Z"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="currentColor"
          fillOpacity="0.2"
        />
        <circle cx="12" cy="12" r="3.5" fill="currentColor" />
        <circle cx="50" cy="6" r="2" fill="currentColor" />
      </svg>
    </div>
  );
};

// Golden Arch / Mihrab Frame Header
export const MihrabArch: React.FC<{ className?: string }> = ({ className = 'w-full h-12' }) => (
  <div className={`flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 400 40" fill="none" className="w-full max-w-md h-full text-[#c5a059]">
      <path
        d="M10 20 H140 C160 20 180 5 200 5 C220 5 240 20 260 20 H390"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="200" cy="5" r="4" fill="currentColor" />
      <circle cx="170" cy="16" r="2" fill="currentColor" />
      <circle cx="230" cy="16" r="2" fill="currentColor" />
      <path d="M190 12 L200 2 L210 12 Z" fill="currentColor" />
    </svg>
  </div>
);

// Golden Ornamental Divider with Diamond / Floral Center
export const GoldDivider: React.FC<{ text?: string; className?: string }> = ({ text, className = 'my-3' }) => (
  <div className={`flex items-center justify-center gap-3 w-full ${className}`}>
    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#c5a059] to-[#9b7228]" />
    {text ? (
      <span className="text-xs tracking-[0.2em] uppercase font-cinzel text-[#8f6d2b] font-semibold px-2">
        {text}
      </span>
    ) : (
      <div className="flex items-center gap-1.5 text-[#c5a059]">
        <span className="w-1.5 h-1.5 rotate-45 border border-[#c5a059] bg-[#fcfbf7]" />
        <span className="w-2.5 h-2.5 rotate-45 bg-[#c5a059]" />
        <span className="w-1.5 h-1.5 rotate-45 border border-[#c5a059] bg-[#fcfbf7]" />
      </div>
    )}
    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#c5a059] to-[#9b7228]" />
  </div>
);
