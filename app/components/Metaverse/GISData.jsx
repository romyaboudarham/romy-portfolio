"use client";
import React, { useState } from "react";
import Image from "next/image";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

  const codeString1 = `
# create a predominant race column RACE_PREDOM
alamedaMerged$RACE_PREDOM <- apply(alamedaMerged[, c("RACE_BLACKNH", "RACE_HISP", "RACE_WHITENH", "RACE_ASIANNH","RACE_OTHERNH", "RACE_MULTIPLENH")], 1, function(row) {
  above60_columns <- names(row[row > 0.6])
  above60_columns_no_na <- na.omit(above60_columns)
  if (length(above60_columns_no_na) > 0) {
    above60_columns_no_na
  } else {
    "RACE_MIXED"
  }
})
# find median of INC_MEDHH
median_INC_MEDHH <- median(alamedaMerged$INC_MEDHH, na.rm = TRUE)
alamedaMerged$IS_INCOME_ABOVE_MEDIAN <- ifelse(alamedaMerged$INC_MEDHH > median_INC_MEDHH, 1, 0)

# assign val
alamedaMerged$VAL <- apply(alamedaMerged, 1, function(row) {
  switch(   
    row$RACE_PREDOM,   
    "RACE_WHITENH"= ifelse(row$IS_INCOME_ABOVE_MEDIAN, 1, 2),   
    "RACE_BLACKNH"= 3,
    "RACE_HISP"= 4,
    "RACE_ASIANNH"= ifelse(row$IS_INCOME_ABOVE_MEDIAN, 5, 6),
    "RACE_MIXED"= ifelse(row$IS_INCOME_ABOVE_MEDIAN, 7, 8),
  )
})

`;

const codeString2 = `
# define colors
colors <- c(
  "VALUE_1" = "#00AFF0",  # white, income > 97309
  "VALUE_2" = "#FFFFFF",  # asian, income > 97309
  "VALUE_3" = "#984EA3",  # mixed, income > 97309
  "VALUE_4" = "#ED151E",  # asian, income < 97309FFFFFF
  "VALUE_5" = "#FFFF33",  # mixed, income < 97309
  "VALUE_6" = "#FCB23E",  # hispanic, income < 97309
  "VALUE_7" = "#000000",  # white, income < 97309
  "VALUE_8" = "#8DC73D"  # black, income < 97309
)

# map colors to data
color_mapping <- setNames(colors[unique(alamedaMerged$VAL)], unique(alamedaMerged$VAL))

print(color_mapping[4])

# assign colors and plot
alamedaMerged$SectionColors <- color_mapping[alamedaMerged$VAL]

plot(alamedaMerged$geometry, col = alamedaMerged$SectionColors)
`;

export default function GISData() {
  return (
    <section>
        <h2 className="text-2xl font-semibold opacity-90">Census Data Cleaning and Plotting in R</h2>  
        <p className="mt-2 lg:text-xl text-gray-800">
          Using R, I extracted census tracts of Alameda county from 2015-2019 census data and merged them with the latitude and longitude values from a corresponding shape file.
          Next I created a new column for the predominat race of each census tract. This was determined determined if more than 60% of residents were of that particular racial/ethnic group (Hirsch et al., 2023).
          Each combonation of race + household income received a unique id, VAL_ID (ex: asian & income above 97309, VAL_ID = 7)
        </p>
        <div className="mt-2 border rounded-md overflow-y-auto max-h-[400px] p-4 bg-[#282c34] text-white">
            <SyntaxHighlighter language="r" style={atomDark} wrapLongLines>
                {codeString1}
            </SyntaxHighlighter>
        </div>
        <img
            src="/media/projects/Metaverse-Redlining/val-id-table.png"
            alt="Val_ID creation table"
            className="mt-5 mx-auto w-full rounded-md" 
          />

        <p className="mt-2 lg:text-xl text-gray-800">
          Each census tract was assigned a unique color corresponding to it's VAL_ID calculated from the previous code. I plotted the census tract boundaries on a map to visualize the predominat race and household income of each tract in Alameda County.
          I compared my map to the 2010 census data map of Oakland (Susaneck, 2024). The results were consistent.
        </p>
        <div className="mt-2 border rounded-md overflow-y-auto max-h-[400px] p-4 bg-[#282c34] text-white">
            <SyntaxHighlighter language="r" style={atomDark} wrapLongLines>
                {codeString2}
            </SyntaxHighlighter>
        </div>
        <img
            src="/media/projects/Metaverse-Redlining/census-tracts-plotting.png"
            alt="Val_ID creation table"
            className="mt-5 mx-auto w-full rounded-md"
          />
    </section>
  );
};
