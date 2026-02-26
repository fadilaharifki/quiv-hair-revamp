import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config = {
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
    },
    extend: {
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // --- Primary Clinical Colors ---
        "clinical-blue": "#009EE2", // Royal Blue khas farmasi
        "clinical-blue-light": "#E6F0F9", // Background hover atau tag/badge
        "clinical-white": "#FFFFFF", // Base color utama

        // --- Neutral / Professional Tones ---
        "clinical-gray-dark": "#333333", // Teks utama (High Contrast)
        "clinical-gray-medium": "#757575", // Sub-teks atau deskripsi
        "clinical-gray-light": "#F2F2F2", // Background section atau border halus

        // --- Status Colors (Sesuai helper functions kamu) ---
        // Sangat berguna untuk feedback successResponse & errorResponse
        "clinical-success": "#28A745", // Hijau medis
        "clinical-error": "#D93025", // Merah peringatan

        // --- Border Color ---
        "clinical-border": "#E0E0E0",
      },
      boxShadow: {
        // Custom shadow agar sesuai dengan vibe clean-medical
        clinical: "0 2px 8px rgba(0, 0, 0, 0.05)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      height: {
        "safe-screen": "calc(var(--vh, 1vh) * 100)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        slide: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        slide: "slide 1s linear infinite",
      },
      fontFamily: {
        "bell-mt": ["Bell MT", "serif"],
        inter: ["Inter", "sans-serif"],
        montserrat: ["Monserrat", "sans-serif"],
      },
    },
    variants: {
      textShadow: ["responsive", "hover", "focus"],
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "text-shadow": (value: any) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
    }),
  ],
} satisfies Config;

export default config;
