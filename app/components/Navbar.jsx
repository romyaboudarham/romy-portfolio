"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navItems = [
  { href: "/", text: "Home" },
  { href: "/#projects", text: "Projects" },
  // { href: "/about-me", text: "About" },
  { href: "/romy_aboudarham_resume.pdf", text: "Resume", download: true },
  { href: "mailto:romyaboudarham@gmail.com", text: "Contact" },
];

export default function Navbar({ textColor = "text-black", show = true }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.scrollY < 50;
      setIsAtTop(atTop);

      if (!atTop && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <div
      className={`transition-opacity uppercase duration-1000 ${show ? "opacity-100" : "opacity-0"}`}
    >
      {/* Expanded Navbar - Centered */}
      {isAtTop && (
        <nav className="flex fixed top-4 md:text-lg left-1/2 -translate-x-1/2 z-[60] gap-x-6 pointer-events-none text-center [&>*]:pointer-events-auto">
          {navItems.map((item) => (
            <NavItem key={item.href} {...item} textColor={textColor} />
          ))}
        </nav>
      )}

      {/* Collapsed Floating Navbar */}
      {!isAtTop && (
        <nav className="fixed bottom-4 md:top-2 left-4 z-[60]">
          <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />

          {isOpen && (
            <div
              className="text-black absolute left-0 bg-white shadow-lg rounded-lg p-2 space-y-3 
            md:top-12 md:bottom-auto bottom-12 flex flex-col items-start text-left min-w-max px-4"
            >
              {navItems.map((item) => (
                <NavItem key={item.href} {...item} />
              ))}
            </div>
          )}
        </nav>
      )}
    </div>
  );
}

function MenuButton({ isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      className="p-3 rounded-full border border-gray-800 bg-white shadow-lg hover:shadow-xl transition-shadow"
    >
      {isOpen ? (
        <X size={28} className="text-black" />
      ) : (
        <Menu size={28} className="text-black" />
      )}
    </button>
  );
}

function NavItem({
  href,
  text,
  textColor = "text-gray-700",
  download = false,
}) {
  const isDownload = download || href.endsWith(".pdf");

  const content = (
    <span className="group relative inline-block">
      <span className="relative z-10">{text}</span>
      <span
        className="absolute bottom-0 left-0 w-0 h-0 overflow-hidden
                    group-hover:w-full group-hover:h-full
                    transition-all duration-500 ease-out"
      >
        <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-primary via-primary to-transparent" />
      </span>
    </span>
  );

  if (isDownload) {
    return (
      <a
        href={href}
        className={`${textColor} transition font-medium text-center`}
        download
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={`${textColor} transition font-medium`}>
      {content}
    </Link>
  );
}
