"use client"; // Ensure this is at the top of the file

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCondensed, setIsCondensed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsCondensed(true);
      } else {
        setIsCondensed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-extrabold text-black">Romy Aboudarham</div>

          {/* Desktop Menu - Visible at the top, hidden when scrolled */}
          <div className={`hidden md:flex space-x-8 text-gray-900 font-medium transition-opacity duration-300 ${isCondensed ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}> 
            <Link href="#about" className="hover:text-[#ff6562]">About</Link>
            <Link href="#work" className="hover:text-[#ff6562]">Work</Link>
            <Link href="#contact" className="hover:text-[#ff6562]">Contact</Link>
          </div>

          {/* Hamburger Menu Button - Always visible on mobile and when scrolled on desktop */}
          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile & Desktop Collapsed Menu */}
      {isOpen && (
        <div className="bg-white py-4 px-6 shadow-lg border-t">
          <Link href="#about" className="block py-2 text-gray-900 hover:text-[#ff6562]">About</Link>
          <Link href="#work" className="block py-2 text-gray-900 hover:text-[#ff6562]">Work</Link>
          <Link href="#contact" className="block py-2 text-gray-900 hover:text-[#ff6562]">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

