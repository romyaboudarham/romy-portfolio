"use client";

import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image"

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Romy Aboudarham";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1)); // Ensure correct substring
      index += 1;
      if (index === fullText.length) clearInterval(interval); // Stop at full length
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen md:h-auto flex flex-col items-center justify-center text-gray-900 px-4">
      <div className="mb-5 block md:hidden w-[200px] h-[200px] overflow-hidden rounded-full relative">
            <Image
              src="/media/romy.png"
              alt="Romy Headshot"
              width={350}
              height={350}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
      <h1
        className="text-5xl md:text-6xl text-center"
        style={{ fontFamily: "Londrina Outline, cursive" }}
      >
        {displayedText}
      </h1>
      <p className="text-base sm:text-lg lg:text-md text-center max-w-3xl mt-4">
        creative technologist & empathy-driven storyteller
      </p>

      {/* Down Arrow Icon */}
      <div className="md:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="w-14 h-8 text-[#ff6562]" />
      </div>
    </section>
  );
};

export default HeroSection;
