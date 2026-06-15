import React, { useState } from 'react';
import img1 from "../assets/a1.jpeg";
import img2 from "../assets/a2.jpeg";
import img3 from "../assets/a3.jpeg";
import img4 from "../assets/a4.jpeg";

import wi1 from "../assets/WhatsApp Image 2026-05-23 at 1.20.54 PM (1).jpeg";
import wi2 from "../assets/WhatsApp Image 2026-05-23 at 1.20.54 PM (2).jpeg";
import wi3 from "../assets/WhatsApp Image 2026-05-23 at 1.20.54 PM (3).jpeg";
import wi4 from "../assets/WhatsApp Image 2026-05-23 at 1.20.54 PM.jpeg";

const InfiniteGallery = () => {
  const [images] = useState([img1, img2, img3, img4])
  const [whatsappImages] = useState([wi1, wi2, wi3, wi4]);
  
  const [allImages] = useState([images, whatsappImages].flat());
  
  // Track by array index to make navigation math straightforward
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Navigation Logic
  const handlePrev = (e) => {
    e.stopPropagation(); // Prevents clicking through to close the modal
    setLightboxIndex((prevIndex) => 
      prevIndex === 0 ? allImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = (e) => {
    e.stopPropagation(); // Prevents clicking through to close the modal
    setLightboxIndex((prevIndex) => 
      prevIndex === allImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="mt-20 text-white overflow-x-hidden select-none flex flex-col justify-center items-center w-full mx-auto">
      
      {/* 1. INFINITE SCROLL MARQUEE BANNER */}
      {/* Added inline style masking to cleanly fade out content at the viewport bounds */}
      <div 
        className="w-full overflow-hidden relative group"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
        }}
      >
        <div className="flex w-max gap-6 animate-[var(--animate-infinite-scroll)] hover:[animation-play-state:paused] cursor-pointer">
          {/* Loop duplicates 4 times to ensure seamless infinite looping background animation coverage */}
          {[...images, ...whatsappImages, ...images, ...whatsappImages].map((image, globalIndex) => {
            // Calculate the actual image index within our base 4-image array
            const actualIndex = globalIndex % images.length;
            return (
              <div 
                key={`scroll-${globalIndex}`} 
                className="w-64 h-44 flex-shrink-0 rounded-2xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 relative group/item"
                onClick={() => setLightboxIndex(actualIndex)}
              >
                <img src={image} alt="Scroll item" className="w-full h-full object-cover" />
                
                {/* Replaced text overlay with the SVG Fullscreen Expand Icon wrapper */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <div className="bg-zinc-900/80 text-white p-3 rounded-full border border-zinc-700/60 shadow-xl backdrop-blur-md scale-90 group-hover/item:scale-100 transition-transform duration-300">
                    <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75v4.5m0-4.5h-4.5m4.5 0L15 9m5.25 11.25v-4.5m0 4.5h-4.5m4.5 0L15 15" />
                    </svg>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* 2. LIGHTBOX MODAL OVERLAY WITH NAVIGATION */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-md animate-[var(--animate-fade-in)]"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-zinc-400 hover:text-white text-3xl font-light transition-colors p-2 z-50 cursor-pointer"
            onClick={() => setLightboxIndex(null)}
          >
            ✕
          </button>

          {/* Left / Previous Arrow Button */}
          <button 
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-zinc-900/50 hover:bg-zinc-800 text-white w-14 h-14 rounded-full flex items-center justify-center border border-zinc-700 transition-all text-xl cursor-pointer hover:scale-110 active:scale-95 z-50"
            onClick={handlePrev}
          >
            ‹
          </button>

          {/* Render Active Navigated Target Image */}
          <div className="relative max-w-full flex items-center justify-center select-none">
            <img 
              key={lightboxIndex} // Unique key fires animation whenever index value changes
              src={images[lightboxIndex]} 
              alt="Expanded view" 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-[var(--animate-scale-up)]"
              onClick={(e) => e.stopPropagation()} 
            />
            {/* Image counter helper */}
            <div className="absolute bottom-[-2.5rem] left-1/2 -translate-x-1/2 text-zinc-400 text-sm tracking-widest font-mono">
              {lightboxIndex + 1} / {images.length}
            </div>
          </div>

          {/* Right / Next Arrow Button */}
          <button 
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-zinc-900/50 hover:bg-zinc-800 text-white w-14 h-14 rounded-full flex items-center justify-center border border-zinc-700 transition-all text-xl cursor-pointer hover:scale-110 active:scale-95 z-50"
            onClick={handleNext}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default InfiniteGallery;
