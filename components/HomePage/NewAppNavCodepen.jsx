'use client'

import React, { useState } from 'react';
import Button from '../common/Button';

function NewAppNavCodepen() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll function to handle smooth scrolling
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false); // Close the menu on link click
    }
  };

  // Toggle menu visibility on mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 w-full bg-opacity-70 backdrop-blur-xl border-[#6A9C89] border-2 rounded-[10px] z-50">
      <div className="flex justify-between items-center px-4 py-2 md:px-8 md:py-2">
        
        {/* Logos */}
        <div className="flex justify-start items-center space-x-4 md:space-x-6">
          <img src="/Logo/iemLogo.webp" alt="IEM Logo" className='h-8 md:h-12 lg:h-14' />
          <img src="/Logo/innovacionLogo.webp" alt="Innovacion Logo" className='h-8 md:h-12 lg:h-14' />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center flex-1 space-x-5 lg:space-x-8 text-white font-[Tasa-SemiBold]">
          <span onClick={() => handleScroll('homepage')} className='cursor-pointer'>Home</span>
          <span onClick={() => handleScroll('events')} className='cursor-pointer'>Events</span>
          <span onClick={() => handleScroll('gallery')} className='cursor-pointer'>Gallery</span>
          <span onClick={() => handleScroll('partners')} className='cursor-pointer'>Partners</span>
          <span onClick={() => handleScroll('contact')} className='cursor-pointer'>Contact</span>
        </div>

        {/* Register Button */}
        <div className="hidden md:flex">
          <Button name={"Register"} color={"blue"} />
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <div className={`relative flex flex-col justify-center items-center w-6 h-6 transition-transform duration-300`}>
            <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'mb-1'}`}></span>
            <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? 'transform rotate-45' : 'mb-1'}`}></span>
            <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45' : ''}`}></span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Component */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white bg-opacity-20 backdrop-blur-lg rounded-[10px] p-4 mt-2 space-y-4 text-white font-[Tasa-SemiBold]">
          <span onClick={() => handleScroll('homepage')} className='cursor-pointer'>Home</span>
          <span onClick={() => handleScroll('events')} className='cursor-pointer'>Events</span>
          <span onClick={() => handleScroll('gallery')} className='cursor-pointer'>Gallery</span>
          <span onClick={() => handleScroll('partners')} className='cursor-pointer'>Partners</span>
          <span onClick={() => handleScroll('contact')} className='cursor-pointer'>Contact</span>
          <div>
            <Button name={"Register"} color={"blue"} />
          </div>
        </div>
      )}
    </div>
  );
}

export default NewAppNavCodepen;
