"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Storyboard() {
  return (
    <section>
        <h2 className="text-2xl font-semibold opacity-90">Storyboard</h2>  
        <img
              src="/media/projects/ARMixedEmotions/ar-storyboard.png"
              alt="Research"
              className="mt-5 mx-auto w-full md:w-[90%] max-w-4xl"
            />
    </section>
  );
};
