/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#000000",
        brand: "#000000",
      },
      fontFamily: {
        sans: ["Inria Sans", "Inter", "sans-serif", "serif"], // Changed: Inria Sans first
        inter: ["Inter", "sans-serif"], // Optional: keep Inter available as font-inter
        serif: ["Inria Serif", "serif"], // Add Inria Serif
        header: ["var(--font-header)"],
      },
      fontSize: {
        // Fluid scale using clamp(min, preferred, max)
        // Scales smoothly from 320px viewport to 1280px viewport
        "fluid-sm":   "clamp(0.875rem, 0.8rem + 0.375vw, 1rem)",      // 14px → 16px
        "fluid-base": "clamp(0.875rem, 0.8rem + 0.375vw, 1.125rem)",    // 14px → 18px
        "fluid-lg":   "clamp(1.125rem, 1rem + 0.625vw, 1.375rem)",     // 18px → 22px
        "fluid-xl":   "clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)",       // 20px → 24px
        "fluid-2xl":  "clamp(1.5rem, 1.3rem + 1vw, 2rem)",             // 24px → 32px
        "fluid-3xl":  "clamp(1.875rem, 1.6rem + 1.375vw, 2.5rem)",     // 30px → 40px
        "fluid-4xl":  "clamp(2rem, 1.6rem + 2vw, 3rem)",                  // 32px → 48px
        "fluid-5xl":  "clamp(2.5rem, 2rem + 2.5vw, 3.75rem)",          // 40px → 60px
        "fluid-6xl":  "clamp(3rem, 2.4rem + 3vw, 4.5rem)",             // 48px → 72px
      },
    },
  },
  plugins: [],
};