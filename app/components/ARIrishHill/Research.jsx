"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Research() {
  return (
    <section>
        <h2 className="text-2xl font-semibold opacity-90">Research</h2>  
        <p className="mt-2 lg:text-xl text-gray-800">
            Conducted site research by walking around Irish Hill several times to map out a route for the tour. 
            Identified potential locations for target, surface, and mid-air AR interactions. 
            Timed the walk to plan the audio script accordingly."
        </p>
        <img
            src="/media/projects/ARIrishHill/IrishHill-research-site.png"
            alt="Research"
            className="mt-5 mx-auto w-full"
        />
        <p className="mt-5 lg:text-xl text-gray-800">
            I did extensive historic research on Irish Hill thanks to historian 
            <span className="font-semibold"> Steven Fidel Herraiz</span>'s in-depth  
            <a 
                href="https://www.youtube.com/watch?v=eUZ6qhcI7fg"  
                className="text-blue-600 hover:underline" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                {" "}presentation on Irish Hill{" "}
            </a>
            and
            <a 
                href="https://www.foundsf.org/index.php?title=Irish_Hill"  
                className="text-blue-600 hover:underline" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                {" "}documentation on FoundSF
            </a>.
            Learned about San Francisco's Industrial Movement through
            <a 
                href="https://www.foundsf.org/index.php?title=Industry_Builds_Out_the_City:_The_Suburbanization_of_Manufacturing_in_San_Francisco,_1850-1940"  
                className="text-blue-600 hover:underline" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                {" "}information of FoundSF
            </a>.
        </p>
        <img
            src="/media/projects/ARIrishHill/research-history.png"
            alt="Research-history"
            className="mt-5 mx-auto w-full"
        />
        <p className="mt-5 lg:text-xl text-gray-800">
            I studied
            <span className="font-semibold"> Michael Epstein</span>'s  
            <a 
                href="https://www.seehidden.city/"  
                className="text-blue-600 hover:underline" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                {" "}Museum of the Hidden City,{" "}
            </a>
            An Augmented Reality walking tour of San Francisco's Fillmore District, which was once a thriving, diverse community now displaced by urban renewal, gentrification, and city policies that reshaped the neighborhood.
            I was inspired by the use of overlayed images in AR to bring the past to life as well as the compelling audio of real people.
        </p>
        <img
            src="/media/projects/ARIrishHill/museum-hidden-cities.jpg"
            alt="Interaction 1"
            className="mt-2 w-full mx-auto max-w-md lg:max-w-xl rounded-md"
        />
    </section>
  );
};