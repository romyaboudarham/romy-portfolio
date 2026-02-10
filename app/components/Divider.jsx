"use client";

import { useEffect, useRef, useState } from "react";

const DividingLine = () => {
  const [width, setWidth] = useState(0);
  const lineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setWidth(100);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-100px 0px", // Only trigger when scrolled past 100px into view
      },
    );

    if (lineRef.current) {
      observer.observe(lineRef.current);
    }

    return () => {
      if (lineRef.current) {
        observer.unobserve(lineRef.current);
      }
    };
  }, []);

  return (
    <div ref={lineRef} className="my-6">
      <div className="relative h-[2px]">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 h-full bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

export default DividingLine;
