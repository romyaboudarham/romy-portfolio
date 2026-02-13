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
      },
    },
  },
  plugins: [],
};