"use client"; // Ensure this is at the top of the file

import { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar.jsx";

const sections = [
  {
    title: "...",
    copy: `
    I work at the intersection of creative design and engineering. I have an extensive knowledge of software tools and apply that to build interactive, user-focused products. 
    As a designer with a computer science background, my creative approach to problem solving pushes the boundaries of interaction design with the guiding principle that we should never be restricted by our tools— following the problem to build solutions that feel like magic. 
    `,
    image: "/media/About-SFDesignWeek.jpg",
    alt: "Romy SF Design Week Workshop",
    reverse: false,
  },
  {
    title: "...",
    copy: `coming soon`,
    image: "/media/About-EverydayStrange.jpg",
    alt: "Romy in VR Headset",
    reverse: true,
  },
];

export default function AboutMe() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Romy Aboudarham";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index += 1;
      if (index === fullText.length) clearInterval(interval);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[rgb(249,249,249)] text-black font-sans min-h-screen">
      <Navbar />

      <section className="max-w-6xl mx-auto px-4 lg:px-8 pt-28 pb-16 space-y-16">
        <header className="text-center max-w-3xl mx-auto">
          <h1
            className="text-5xl text-[#800000] md:text-6xl text-center"
            style={{ fontFamily: "Londrina Outline, cursive" }}
          >
            {displayedText}
          </h1>
          {/* <p className="mt-4 text-base sm:text-lg lg:text-md text-gray-800">
            creative technologist & immersive experience designer
          </p> */}
        </header>

        {sections.map(({ title, copy, image, alt, reverse }) => (
          <div
            key={title}
            className={`flex flex-col ${
              reverse ? "md:flex-row-reverse" : "md:flex-row"
            } gap-10 items-center`}
          >
            <div className="w-full md:w-1/2">
              <img
                src={image}
                alt={alt}
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">
                {reverse ? "What drives me" : "Who I am"}
              </p>
              <h2 className="text-3xl font-semibold mb-4">{title}</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {copy}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Footer - Let's Connect */}
      <section className="relative flex items-center justify-center pb-3 text-center px-6 md:px-20 rounded-t-2xl">
        <div className="my-3 relative z-10 w-full max-w-4xl mx-auto px-4 lg:px-12 lg:max-w-6xl">
          <h2 className="text-4xl lg:text-5xl text-black"
              style={{ fontFamily: "Londrina Outline, cursive" }}>
                Let’s Connect!
          </h2>
          <p className="mt-6 text-lg text-black opacity-80">Interested in my work? Let’s chat.</p>
          <a href="mailto:romyaboudarham@gmail.com">
            <button className="mt-8 px-6 py-3 rounded-md text-lg hover:bg-[#800000] hover:text-white border border-[#800000] text-[#800000] font-semibold  ">
              Contact Me
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
