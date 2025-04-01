"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Implementation() {
  return (
    <section>
        <p className="mt-2 lg:text-xl text-gray-800">
            I followed 
            <a 
                href="https://github.com/techmakerai/Hands-on-Tutorial-Voice-Assistant-on-Raspberry-Pi"  
                className="text-blue-600 hover:underline" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                {" "}TechMakerAI's tutorial{" "}
            </a>
            on setting up the Raspberry PI to talk to Gemini AI. This code calls the API, translates speach to text, and then text to speach.
        </p>
        <img
            src="/media/projects/ARIrishHill/IrishHill-research-site.png"
            alt="Research"
            className="mt-5 mx-auto w-full"
        />
        <p className="mt-2 lg:text-xl text-gray-800">
         I added code to access the Raspberry Pi's GPIO pins that connected to the telephone. 
         </p>
         <img
            src="/media/projects/ARIrishHill/IrishHill-research-site.png"
            alt="Research"
            className="mt-5 mx-auto w-full"
        />
       
    </section>
  );
};