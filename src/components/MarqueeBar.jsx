import React from 'react';

const ITEMS = [
  "Glow, girl, glow. ✨",
  "Soft skin, big mood. 🛁",
  "You’re golden. 🌟",
  "Smooth feels good.💅",
  "Love your layers. 🎀",
  "Shine on, babe. ☀️",
];

const MarqueeBar = () => (
  <div className="w-full bg-pink-100 py-2 overflow-hidden border-y border-pink-300">
    <div className="flex whitespace-nowrap w-max animate-marqueeFast md:animate-marquee">
      {/* First set of items */}
      <div className="flex">
        {ITEMS.map((t, i) => (
          <span key={`a${i}`} className="mx-6 text-pink-600 font-semibold text-xs">{t}</span>
        ))}
      </div>

      {/* Duplicate set for continuous loop */}
      <div className="flex">
        {ITEMS.map((t, i) => (
          <span key={`b${i}`} className="mx-6 text-pink-600 font-semibold text-xs">{t}</span>
        ))}
      </div>
    </div>
  </div>
);

export default MarqueeBar;
