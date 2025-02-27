
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        forest: {
          DEFAULT: "#0A1F2F", // Main background color
          light: "#132B41", // Slightly lighter variant for cards/sections
          deep: "#061825", // Deeper forest variant
        },
        mint: {
          DEFAULT: "#64FFDA", // Primary accent color
          dark: "#4ECDC4", // Darker mint variant
        },
        divine: {
          DEFAULT: "#FFD700", // Secondary accent color
        },
        oceanic: {
          DEFAULT: "#0EA5E9", // New oceanic blue color
          deep: "#0C4A6E", // Deep oceanic blue
          light: "#7DD3FC", // Light oceanic blue
        }
      },
      fontFamily: {
        sans: ["Inter var", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'gradient-oceanic': '0 4px 30px -10px rgba(14, 165, 233, 0.3)',
        'gradient-mint': '0 4px 30px -10px rgba(100, 255, 218, 0.3)',
      },
      backgroundImage: {
        'gradient-oceanic': 'linear-gradient(135deg, rgba(14, 165, 233, 0.2), rgba(12, 74, 110, 0.1))',
        'gradient-forest': 'linear-gradient(135deg, rgba(19, 43, 65, 0.7), rgba(6, 24, 37, 0.8))',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
