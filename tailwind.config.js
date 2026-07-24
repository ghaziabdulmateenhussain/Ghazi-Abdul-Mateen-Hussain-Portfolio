/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#05060B",
          soft: "#0A0C16",
        },
        surface: {
          DEFAULT: "#0D0F1C",
          light: "#12152A",
        },
        primary: {
          DEFAULT: "#4F7DFF",
          light: "#7B9CFF",
          dark: "#3A5FE0",
        },
        secondary: {
          DEFAULT: "#A15CFF",
          light: "#C094FF",
          dark: "#8038E0",
        },
        accent: {
          DEFAULT: "#43E7FF",
          soft: "#8FF3FF",
        },
        ink: {
          DEFAULT: "#E9ECFB",
          muted: "#9BA0C0",
          faint: "#6A6F91",
        },
        border: {
          glass: "rgba(255,255,255,0.08)",
          glassStrong: "rgba(255,255,255,0.14)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(60% 50% at 50% 0%, rgba(79,125,255,0.18) 0%, rgba(161,92,255,0.10) 45%, rgba(5,6,11,0) 80%)",
        "gradient-primary": "linear-gradient(135deg, #4F7DFF 0%, #A15CFF 100%)",
        "gradient-primary-soft":
          "linear-gradient(135deg, rgba(79,125,255,0.15) 0%, rgba(161,92,255,0.15) 100%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(79,125,255,0.45)",
        glowPurple: "0 0 40px -10px rgba(161,92,255,0.45)",
        card: "0 8px 32px rgba(0,0,0,0.45)",
      },
      animation: {
        blink: "blink 1s step-end infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
        marquee: "marquee 30s linear infinite",
        "fade-up": "fadeUp 0.7s ease forwards",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
