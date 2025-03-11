"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Research() {
  return (
    <section>
        <h2 className="text-2xl font-semibold opacity-90">Research</h2>  
        <p className="mt-2 lg:text-xl text-gray-800">
            During the New Deal (1933 - 1938), Home Owners Loan Corporation created maps of “residential security”, determined by rates of “racial infiltration”.
            Maps determined who was eligible for New Deal's generously-subsidized, government-backed mortgages.
            “Desirable” and “Best” areas were outside of Oakland's city center, so the loss of urban population meant the loss of tax-base in cities, leading to fewer services and urban decay.
        </p>
        <img
            src="/media/projects/Metaverse-Redlining/segregation-by-design.png"
            alt="Segregation by design"
            className="mt-5 mx-auto w-full"
        />
        <p className="mt-5 lg:text-xl text-gray-800">
            I researched how people have
            <a 
                href="https://ncrc.org/redlining-score/"  
                className="text-blue-600 hover:underline" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                {" "}used census data to examine the current demography of neighborhoods,{" "}
            </a>
            highlighting how racial segregation shaped modern day residential patterns. 
        </p>
    </section>
  );
};