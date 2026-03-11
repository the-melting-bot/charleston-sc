import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coastal: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          sand: "#d4a574",
          "sand-light": "#fef3c7",
          "sand-50": "#fefce8",
          "sand-100": "#fef9c3",
          "sand-200": "#fef08a",
          seafoam: "#5eead4",
          "seafoam-light": "#ccfbf1",
          "seafoam-50": "#f0fdfa",
          "seafoam-100": "#ccfbf1",
          "seafoam-200": "#99f6e4",
          "seafoam-600": "#0d9488",
          blue: "#0369a1",
          "blue-light": "#bae6fd",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        display: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.4s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(-12px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      backgroundImage: {
        "coastal-gradient":
          "linear-gradient(135deg, #0c4a6e 0%, #0369a1 40%, #0ea5e9 100%)",
        "sand-gradient":
          "linear-gradient(135deg, #fef3c7 0%, #fde68a 50%, #d4a574 100%)",
        "seafoam-gradient":
          "linear-gradient(135deg, #ccfbf1 0%, #5eead4 50%, #0d9488 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
