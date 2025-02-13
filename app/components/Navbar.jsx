'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar({ textColor = 'text-black' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 50); // Navbar expands when at the top
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Expanded Navbar - Horizontal on mobile, vertical on desktop */}
      {isAtTop && (
        <div className="fixed top-0 left-0 right-0  p-4 z-[60] flex justify-center space-x-6 
          md:justify-end md:items-end md:w-auto md:h-auto md:top-4 md:right-4 md:flex-col md:space-y-4 
          md:bg-transparent md:left-auto">
          <NavItem href="#projects" text="Projects" textColor={textColor}/>
          <NavItem href="#about" text="About" textColor={textColor}/>
          <NavItem href="#resume" text="Resume" textColor={textColor}/>
          <NavItem href="#contact" text="Contact Me" textColor={textColor}/>
        </div>
      )}

      {/* Collapsed Floating Navbar - Appears in the top-right when scrolling */}
      {!isAtTop && (
        <nav className="fixed bottom-4 md:top-2 right-4 z-[60]">
          {/* Floating Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-3 rounded-full border border-gray-800 bg-white shadow-lg"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Dropdown Menu - Opens below the button when clicked */}
          {isOpen && (
            <div className="absolute right-0 bg-white shadow-lg rounded-lg p-2 space-y-3 
              md:top-12 md:bottom-auto bottom-12 inline-flex flex-col text-right min-w-max px-4">
              <NavItem href="#projects" text="Projects" />
              <NavItem href="#about" text="About" />
              <NavItem href="#resume" text="Resume" />
              <NavItem href="#contact" text="Contact Me"/>
            </div>
          )}

        </nav>
      )}
    </>
  );
}

function NavItem({ href, text, isSelected, textColor }) {
  const buttonStyles = isSelected 
    ? "border-[#ff6562] text-[#ff6562]"
    : "border-gray-300 text-gray-700 hover:bg-[#db5654] hover:text-white"
  return (
    <Link href={href} className={`${textColor} hover:text-blue-500 transition font-medium`}>
      {text}
    </Link>
  );
}
