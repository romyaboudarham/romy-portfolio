"use client"; // Ensure this is at the top of the file

import React from "react";
import HeroSectionNEW from "@/app/components/NowhereToBelong/HeroSectionNEW";
import Navbar from "@/app/components/Navbar.jsx";
import VideoDemo from "@/app/components/VideoDemo";
import DesignProcess from "@/app/components/DesignProcess";
import PageContent from "@/app/components/PageContent";

export default function NowhereToBelong() {
  return (
    <div className="bg-white text-black font-sans">
      <Navbar textColor="" />
      <HeroSectionNEW />

      <PageContent as="div">
        {/* Project Overview */}
        <section className="my-6 lg:my-8">
          <h2 className="text-center font-serif font-bold uppercase mb-7 lg:mb-14 text-3xl lg:text-4xl font-semibold opacity-90">
            Project Overview
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="space-y-2 lg:text-lg text-gray-800">
                <p>
                  <strong className="text-black opacity-90">Role:</strong> Game
                  Designer & Developer
                </p>
                <p>
                  <strong className="text-black opacity-90">Collaborators: </strong>{" "}
                  Lorenzo Carley (Director & Project Lead), Kinjal Kanzariya (Game
                  Designer & Developer), Magnus Reichel (Sound Designer), Bernard
                  Masika (3D Artist)
                </p>
                <p>
                  <strong className="text-black opacity-90">Context: </strong>{" "}
                  Winner at{" "}
                  <a
                    href="https://www.xrcc.events/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-line: underline hover:underline"
                  >
                    XR Creator Con 2025 Hackathon for Immersive Film &
                    Storytelling Category
                  </a>
                </p>
                <p>
                  <strong className="text-black opacity-90">Tools:</strong> Unity,
                  C#, Git, Blender, Figma, After Effects, Audacity, Scaniverse,
                  ITHACA, Premiere Pro, Meta Quest 3
                </p>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <img
                src="/media/projects/NowhereToBelong/XRCC-techstack.png"
                alt="tools-logos"
                width={500}
              />
            </div>
          </div>
        </section>

        <VideoDemo videoUrl="https://www.youtube.com/embed/Aukul5M2N_c" />

        <div className="border-t-2 border-gray-300 my-6" />

        <DesignProcess />
      </PageContent>
    </div>
  );
}
