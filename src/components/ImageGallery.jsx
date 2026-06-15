import React, { useState, useEffect } from 'react';

import img1 from "../assets/WhatsApp Image 2026-05-23 at 1.20.54 PM.jpeg";
import img2 from "../assets/field.jpg";
import img3 from "../assets/foneyam.jpg";
import img4 from "../assets/training2.jpg"; 
import img5 from "../assets/WhatsApp Image 2026-05-23 at 1.20.55 PM.jpeg";
import img6 from "../assets/promo.jpg";

const ImageGallery = () => {
  const [images] = useState([img1, img2, img3, img4, img5, img6]);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Track active state index for full-screen view
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Track whether the user is hovering over the gallery component
  const [isHovered, setIsHovered] = useState(false);

  // Sequential Stoplight Effect: Auto-cycle through images in order when active
  useEffect(() => {
    // Pause animation if lightbox is open OR if mouse is hovering over the gallery
    if (lightboxIndex !== null || isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 1900);

    return () => clearInterval(interval);
  }, [lightboxIndex, isHovered, images]);

  // Navigation Logic
  const handlePrev = (e) => {
    e.stopPropagation(); // Stops parent container click bubbles
    setLightboxIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = (e) => {
    e.stopPropagation(); // Stops parent container click bubbles
    setLightboxIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div 
      className="md:hidden h-[250px] w-full box-border overflow-hidden flex justify-center items-center max-w-[1200px] mx-auto px-4 mt-16 lg:mt-18 relative select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ul className="flex gap-2 h-full w-full max-w-none list-none p-0 m-0 overflow-hidden box-border">
        {images.map((image, index) => {
          const isActive = index === activeIndex;
          return (
            <li 
              key={index} 
              onClick={() => setActiveIndex(index)} // Single click: expand card layout
              onDoubleClick={() => {
                setActiveIndex(index);
                setLightboxIndex(index); // Double click: open full-screen lightbox
              }}
              className={`
                h-full cursor-pointer transition-all duration-700 ease-out overflow-hidden rounded-[7px] shadow-xl relative group box-border
                ${isActive ? 'flex-[8]' : 'flex-[1]'}
              `}
            >
              <img 
                src={image} 
                alt={`Gallery item ${index + 1}`} 
                className="h-full w-full object-cover"
              />
              
              {/* Double-Click Visual Icon Hint overlay (Only displays on the active expanded card) */}
              <div 
                className={`absolute inset-0 bg-black/10 flex items-center justify-center pointer-events-none transition-opacity duration-300 ${
                  isActive ? 'opacity-0 group-hover:opacity-100' : 'opacity-0'
                }`}
              >
                <div className="bg-zinc-900/80 text-white p-3 rounded-full border border-zinc-700/60 shadow-xl backdrop-blur-md scale-90 group-hover:scale-100 transition-transform duration-300">
                  {/* Clean standard SVG Expand/Fullscreen icon arrow glyphs */}
                  <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75v4.5m0-4.5h-4.5m4.5 0L15 9m5.25 11.25v-4.5m0 4.5h-4.5m4.5 0L15 15" />
                  </svg>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {/* LIGHTBOX MODAL OVERLAY WITH NAVIGATION */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-md animate-[var(--animate-fade-in)] text-white"
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
          <div className="relative max-w-full max-h-[85vh] flex items-center justify-center">
            <img 
              key={lightboxIndex} 
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

export default ImageGallery;
