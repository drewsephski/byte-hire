
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
        },
        purple: {
          light: "#D6BCFA", // Light purple tone
          DEFAULT: "#9B87F5", // Medium purple tone
          deep: "#7E69AB", // Deep purple tone
          dark: "#4C1D95", // Dark purple tone
        }
      },
      fontFamily: {
        sans: ["Inter var", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'gradient-oceanic': '0 4px 30px -10px rgba(14, 165, 233, 0.3)',
        'gradient-mint': '0 4px 30px -10px rgba(100, 255, 218, 0.3)',
        'gradient-purple': '0 4px 30px -10px rgba(155, 135, 245, 0.3)',
      },
      backgroundImage: {
        'gradient-oceanic': 'linear-gradient(135deg, rgba(14, 165, 233, 0.2), rgba(12, 74, 110, 0.1))',
        'gradient-forest': 'linear-gradient(135deg, rgba(19, 43, 65, 0.7), rgba(6, 24, 37, 0.8))',
        'gradient-purple': 'linear-gradient(135deg, rgba(155, 135, 245, 0.2), rgba(76, 29, 149, 0.1))',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
