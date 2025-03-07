"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function UnityARDev() {
  return (
    <section className="mt-8 lg:mt-10">
        <h2 className="text-2xl font-semibold opacity-90">AR Developement in Unity</h2>
        <p className="mt-2 lg:text-xl text-gray-800">
        I used the Vuforia Unity Plugin to integrate augmented reality capabilities into my Unity application. 
        It allowed me to track and augment real-world 2D images such as a card.
        </p>
        <img
              src="/media/projects/ARMixedEmotions/unity-ar-dev.png"
              alt="Research"
              className="mt-5 mx-auto w-full h-auto"
            />
    </section>
  );
};
