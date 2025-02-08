"use client";
import React, { useState } from "react";
import Image from "next/image";
import Carousel from "@/app/components/Carousel";

const slides = [
    { image: "/media/projects/VR-GriefsShadow/storyboard1.png", caption: "This is the first slide" },
    { image: "/media/projects/VR-GriefsShadow/storyboard2.png", caption: "This is the second slide" },
    { image: "/media/projects/VR-GriefsShadow/storyboard3.png", caption: "This is the third slide" },
  ];

export default function Storyboard() {
  return (
    <section className="pt-5 mt-10">
        <h2 className="text-2xl font-semibold opacity-90">Storyboard</h2>  
        <div className="mt-6 mb-3 lg:mb-5 mx-auto w-full">
            <Carousel slides={slides} />
        </div>    
    </section>
  );
};
