"use client";
import React, { useState } from "react";
import Image from "next/image";
import Carousel from "@/app/components/Carousel";

const slides = [
    { image: "/media/projects/VR-GriefsShadow/Storyboard/initial storyboard.png", caption: "Initial Storyboard (pg 1/1)"},
    { image: "/media/projects/VR-GriefsShadow/Storyboard/storyboard1.png", caption: "Second Storyboard (pg 1/3)" },
    { image: "/media/projects/VR-GriefsShadow/Storyboard/storyboard2.png", caption: "Second Storyboard (pg 2/3)" },
    { image: "/media/projects/VR-GriefsShadow/Storyboard/storyboard3.png", caption: "Second Storyboard (pg 3/3)" },
  ];

export default function Storyboard() {
  return (
    <section>
        <h2 className="text-2xl font-semibold opacity-90">Storyboard</h2>  
        <div className="mt-6 mb-3 lg:mb-5 mx-auto w-full">
            <Carousel slides={slides} />
        </div>    
    </section>
  );
};
