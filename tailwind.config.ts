import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#0A210F",
          50: "#E8F0EA",
          100: "#C4D9C9",
          200: "#8FB89A",
          300: "#5A966B",
          400: "#2E6B3F",
          500: "#0A210F",
          600: "#081B0C",
          700: "#061509",
          800: "#040E06",
          900: "#020703",
        },
        cream: {
          DEFAULT: "#E5DCC5",
          50: "#FDFCF9",
          100: "#F8F5EE",
          200: "#F0EADB",
          300: "#E5DCC5",
          400: "#D4C9A6",
          500: "#C3B687",
          600: "#A89B68",
        },
        linen: {
          DEFAULT: "#F8F5F2",
          50: "#FDFDFC",
          100: "#F8F5F2",
          200: "#F0EBE6",
          300: "#E4DDD5",
          400: "#D1CDC7",
        },
        charcoal: {
          DEFAULT: "#1A1A1A",
          50: "#888888",
          100: "#6B6B6B",
          200: "#5C5C5C",
          300: "#3D3D3D",
          400: "#2A2A2A",
          500: "#1A1A1A",
          600: "#111111",
          700: "#0A0A0A",
        },
      },
      fontFamily: {
        editorial: ["var(--font-editorial)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-hero": ["clamp(3rem, 10vw, 9rem)", { lineHeight: "0.92", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem, 6vw, 5.5rem)", { lineHeight: "0.95", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.0", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
      },
      spacing: {
        "section": "clamp(100px, 12vw, 180px)",
        "section-sm": "clamp(60px, 8vw, 120px)",
        "gutter": "clamp(20px, 4vw, 80px)",
      },
      animation: {
        "marquee": "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
        "grain": "grain 0.5s steps(1) infinite",
        "draw": "draw 2s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "wave": "wave 8s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-5%,-10%)" },
          "20%": { transform: "translate(-15%,5%)" },
          "30%": { transform: "translate(7%,-25%)" },
          "40%": { transform: "translate(-5%,25%)" },
          "50%": { transform: "translate(-15%,10%)" },
          "60%": { transform: "translate(15%,0%)" },
          "70%": { transform: "translate(0%,15%)" },
          "80%": { transform: "translate(3%,35%)" },
          "90%": { transform: "translate(-10%,10%)" },
        },
        draw: {
          "0%": { strokeDashoffset: "1" },
          "100%": { strokeDashoffset: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        wave: {
          "0%, 100%": { transform: "translateX(0) scaleY(1)" },
          "50%": { transform: "translateX(-20px) scaleY(1.05)" },
        },
      },
      gridTemplateColumns: {
        "16": "repeat(16, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};

export default config;
