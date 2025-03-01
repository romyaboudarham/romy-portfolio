"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Storyboard() {
  return (
    <section>
        <h2 className="mt-8 text-2xl font-semibold opacity-90">Storyboard</h2> 
        <p className="mt-2 lg:text-xl text-gray-800">
            When writing the script for the narrator, I wanted to maintain authenticity since I'm not Irish and would say "saloon" instead of "pub", so I recruited my Canadian-Irish coworker, Brian Hardt to review the language in my script and by my voice actor.
        </p> 
        <img
              src="/media/projects/ARIrishHill/ARProtest_Storyboard.png"
              alt="Research"
              className="mt-5 mx-auto w-full"
            />
    </section>
  );
};
