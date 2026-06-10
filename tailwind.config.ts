import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0f1419",
          light: "#1a222d",
          muted: "#252f3d",
        },
        cream: {
          DEFAULT: "#f5f2ec",
          dark: "#e8e2d8",
          warm: "#ebe6dc",
        },
        gold: {
          DEFAULT: "#c9a45c",
          light: "#e2cc94",
          dark: "#a6843f",
          muted: "#d4b87a",
        },
        navy: {
          DEFAULT: "#152238",
          deep: "#0c1628",
          soft: "#1e3354",
        },
        brand: {
          blue: {
            DEFAULT: "#2563eb",
            muted: "#1e40af",
            soft: "#3b82f6",
          },
          orange: {
            DEFAULT: "#f97316",
            dark: "#ea580c",
            light: "#fb923c",
          },
        },
        whatsapp: {
          DEFAULT: "#25D366",
          dark: "#20BD5A",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        elegant: "0 4px 24px -4px rgba(15, 20, 25, 0.14)",
        "elegant-lg": "0 16px 48px -12px rgba(15, 20, 25, 0.22)",
        premium: "0 8px 32px -8px rgba(0, 0, 0, 0.35)",
        glow: "0 0 0 1px rgba(201, 164, 92, 0.25)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)",
        "hero-gradient":
          "linear-gradient(165deg, #0c1628 0%, #152238 45%, #1a222d 100%)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      keyframes: {
        "whatsapp-pulse": {
          "0%": { transform: "scale(1)", opacity: "0.55" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
      },
      animation: {
        "whatsapp-pulse": "whatsapp-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
