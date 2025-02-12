'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 right-4 z-50">
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md bg-gray-800 text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-12 right-4 bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-3 md:hidden">
          <NavItem href="#projects" text="Projects" />
          <NavItem href="#about" text="About" />
          <NavItem href="#resume" text="Resume" />
          <NavItem href="#contact" text="Contact Me" />
        </div>
      )}

      {/* Desktop Vertical Navbar */}
      <div className="hidden md:flex flex-col fixed top-4 right-4 space-y-4 bg-white shadow-lg p-4 rounded-lg">
        <NavItem href="#projects" text="Projects" />
        <NavItem href="#about" text="About" />
        <NavItem href="#resume" text="Resume" />
        <NavItem href="#contact" text="Contact Me" />
      </div>
    </nav>
  );
}

function NavItem({ href, text }) {
  return (
    <Link href={href} className="text-gray-800 hover:text-blue-500 transition font-medium">
      {text}
    </Link>
  );
}
