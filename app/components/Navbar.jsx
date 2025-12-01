'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar({ textColor = 'text-black' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.scrollY < 50;
      setIsAtTop(atTop); // Navbar expands when at the top

      if (!atTop && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <>
      {/* Expanded Navbar - Horizontal on mobile, vertical on desktop */}
      {isAtTop && (
        <div className="fixed top-0 left-0 right-0  p-4 z-[60] flex justify-start gap-x-6
          md:justify-start md:items-start md:w-auto md:h-auto md:top-4 md:left-4 md:flex-col md:space-y-4 
          md:bg-transparent text-center">
          <NavItem href="/" text="Home" textColor={textColor} />
          <NavItem href="/#projects" text="Projects" textColor={textColor} />
          <NavItem href="/about-me" text="About Me"  textColor={textColor}/>
          <NavItem href="/romy_aboudarham_resume.pdf" text="Resume" textColor={textColor} download />
          <NavItem href="mailto:romyaboudarham@gmail.com" text="Contact Me" textColor={textColor} />
        </div>
      )}

      {/* Collapsed Floating Navbar - Appears in the top-right when scrolling */}
      {!isAtTop && (
        <nav className="fixed bottom-4 md:top-2 left-4 z-[60]">
          {/* Floating Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-3 rounded-full border border-gray-800 bg-white shadow-lg"
          >
            {isOpen ? <X size={28} className="text-black"/> : <Menu size={28} className="text-black" />}
          </button>

          {/* Dropdown Menu - Opens below the button when clicked */}
          {isOpen && (
            <div className="text-black absolute left-0 bg-white shadow-lg rounded-lg p-2 space-y-3 
            md:top-12 md:bottom-auto bottom-12 flex flex-col items-start text-left min-w-max px-4">
              <NavItem href="/" text="Home" />
              <NavItem href="/#projects" text="Projects" />
              <NavItem href="/about-me" text="About Me" />
              <NavItem href="/romy_aboudarham_resume.pdf" text="Resume" download />
              <NavItem href="mailto:romyaboudarham@gmail.com" text="Contact Me" />
            </div>
          )}
        </nav>
      )}
    </>
  );
}

function NavItem({ href, text, textColor = "text-gray-700", download = false }) {
  if (download || href.endsWith(".pdf")) {
    return (
      <a 
        href={href} 
        className={`${textColor} hover:text-[#800000] transition font-medium text-center`} 
        download 
      >
        {text}
      </a>
    );
  }

  return (
    <Link href={href} className={`${textColor} hover:text-[#800000] transition font-medium`}>
      {text}
    </Link>
  );
}



