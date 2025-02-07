import type { Config } from "tailwindcss";
import { colors } from "./styles/config/tailwind.colors";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Usa a classe 'dark' para ativar o modo escuro
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: "var(--font-inter), sans-serif",
        mono: "var(--font-geist-mono), monospace",
      },
      keyframes: {
        pulseSync: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.1)", opacity: "0.7" },
        },
      },
      animation: {
        pulseSync: "pulseSync 1s ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
