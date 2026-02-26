"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { href: "/", text: "Home" },
  { href: "/#projects", text: "Projects" },
  // { href: "/about-me", text: "About" },
  { href: "/romy_aboudarham_resume.pdf", text: "Resume", download: true },
  { href: "mailto:romyaboudarham@gmail.com", text: "Contact" },
];

export default function Navbar({
  textColor = "text-black",
  show = true,
  onlyAtTop = false,
}) {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (onlyAtTop) {
        setVisible(currentY < window.innerHeight);
      } else {
        const goingDown = currentY > lastScrollY.current;
        if (currentY < 10) {
          setVisible(true);
        } else if (goingDown) {
          setVisible(false);
        } else {
          setVisible(true);
        }
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onlyAtTop]);

  return (
    <motion.nav
      animate={{
        y: visible && show ? 0 : -80,
        opacity: visible && show ? 1 : 0,
      }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 inset-x-0 z-[60] flex justify-center pointer-events-none"
    >
      <div className="flex gap-x-6 uppercase md:text-lg px-6 py-2 backdrop-blur-md bg-white/30 border-b border-white/40 pointer-events-auto w-full justify-center">
        {navItems.map((item) => (
          <NavItem key={item.href} {...item} textColor={textColor} />
        ))}
      </div>
    </motion.nav>
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
