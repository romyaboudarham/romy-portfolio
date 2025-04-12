"use client";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const codeString1 = `
# Phone Keypad
ROWS = [4, 17, 27, 22]
COLS = [5, 6, 13]
KEYS = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['*', '0', '#']
]

# Set ROW lines as input
row_lines = []
for row_pin in ROWS:
    line = chip.get_line(row_pin)
    line.request(consumer="row", type=gpiod.LINE_REQ_DIR_IN, flags=gpiod.LINE_REQ_FLAG_BIAS_PULL_UP)
    row_lines.append(line)

# Set COL lines as output
col_lines = []
for col_pin in COLS:
    line = chip.get_line(col_pin)
    line.request(consumer="col", type=gpiod.LINE_REQ_DIR_OUT, default_vals=[1])
    col_lines.append(line)

def read_keypad():
    for col_index, col_line in enumerate(col_lines):
        col_line.set_value(0)  # Pull current column low

        for row_index, row_line in enumerate(row_lines):
            if row_line.get_value() == 0:  # Key press pulls line LOW
                time.sleep(0.1)  # Debounce
                col_line.set_value(1)
                return KEYS[row_index][col_index]

        col_line.set_value(1)  # Reset column

    return None
    
# Define key handlers
def handle_key_1(): 
    speak_text("What inventory questions do you have?")
def handle_key_2(): print("You pressed 2")
def handle_invalid(): print("Invalid key")

# Dictionary for key actions
key_actions = {
    '1': handle_key_1,
    '2': handle_key_2,
}

# Perform action based on key press
def perform_action(key):
    action = key_actions.get(key, handle_invalid)
    action()

def keypad_listener():
    while True:
        key = read_keypad()
        if key:
            print(f"Key Pressed: {key}")
            perform_action(key)
            time.sleep(0.3)  # Debounce
`;

export default function Implementation() {
  return (
    <section>
          {/* Text Content*/}
          <div>
            <div className="text-2xl font-semibold opacity-90">
              Code
            </div>

            <p className="mt-2 lg:text-xl text-gray-800">
                I referenced 
                <a 
                    href="https://github.com/techmakerai/Hands-on-Tutorial-Voice-Assistant-on-Raspberry-Pi"  
                    className="text-blue-600 hover:underline" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    {" "}TechMakerAI's tutorial{" "}
                </a>
                for setting up the Raspberry PI to talk to Gemini AI. This code listens from the microphone, translates speech to text, sends text to Gemini, and then translates text to audio.
                I integrated the phone's hook switch and keypad into the program.
            </p>
            <p className="mt-2 lg:text-xl text-gray-800">
                Programming Diagram:
            </p>
            <img
                src="/media/projects/LabAIAssistant/code-flow.png"
                alt="code-flow"
                className="my-5 mx-auto w-full"
            />
            <p className="mt-2 lg:text-xl text-gray-800">
                Check out the code on Github:
            </p>
            <a
                href="https://github.com/romyaboudarham/with-shadows-unity-scripts/blob/main/HandsCollisionStopAlarm.cs"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center text-blue-600 hover:underline"
              >
                <img src="/media/github-logo.png" alt="GitHub" className="w-5 h-5 mr-2" />
                Python Script for Gemini AI Phone Assistant
              </a>

            <div className="mt-8 lg:mt-10 text-2xl font-semibold opacity-90">
              Physical Input Signals
            </div>

            <p className="mt-2 lg:text-xl text-gray-800">
                Used an anolog phone's microphone, speaker, hookswitch, and keypad to interact with the
                program running on the Raspberry PI. I used a USB audio adapter to convert the mic & speaker's analog signals to digital.
            </p>
  
            <div className="my-5 flex flex-wrap justify-center gap-4">
            <img
                src="/media/projects/LabAIAssistant/final-img1.jpeg"
                alt="Research 1"
                className="w-full max-w-md rounded-md"
            />
            <img
                src="/media/projects/LabAIAssistant/final-img2.jpeg"
                alt="Research 2"
                className="w-full max-w-md rounded-md"
            />
            </div>

            <p className="mt-2 lg:text-xl text-gray-800">
                The keypad uses a matrix row-column configuration to represent its buttons. This setup allows a microcontroller to efficiently detect which key is pressed by scanning the rows and columns for HIGH and LOW signals. 
                When a key is pressed, it connects a specific row line to a specific column line, enabling the microcontroller to identify the key's position in the matrix.
            </p>
            <img
                src="/media/projects/LabAIAssistant/code-flow.png"
                alt="code-flow"
                className="my-5 w-full mx-auto max-w-md lg:max-w-2xl rounded-md"
            />

            <p className="mt-2 lg:text-xl text-gray-800">
                Code segment for defining and listening to keypad:
            </p>
            <div className="mt-2 border rounded-md overflow-y-auto max-h-[400px] p-4 bg-[#282c34] text-white">
                <SyntaxHighlighter language="r" style={atomDark} wrapLongLines>
                    {codeString1}
                </SyntaxHighlighter>
            </div>
            <div className="mt-7 w-full max-w-2xl mx-auto border border-gray-300 overflow-hidden rounded-md">
                <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                    <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-md"
                    src="https://www.youtube.com/embed/U70IRBNUpqw"
                    title="YouTube Video"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>

       
    </section>
  );
};