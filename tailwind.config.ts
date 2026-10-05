import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        editorial: {
          bg: "#FAFAF9",
          card: "#FFFFFF",
          ink: "#0D1117",
          "ink-muted": "#57606A",
          "ink-subtle": "#8C959F",
          border: "#E2E5E9",
          "border-subtle": "#ECEEF1",
          accent: "#1D4ED8",
          "accent-hover": "#1E40AF",
          "accent-soft": "#EFF6FF",
          "accent-glow": "rgba(29, 78, 216, 0.08)",
          navy: "#0A1128",
          lavender: "#F5F3FF",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "-apple-system", "sans-serif"],
        display: ["var(--font-display)", "Outfit", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)",
        editorial: "0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.03)",
        "editorial-hover": "0 12px 32px -4px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.04)",
        "accent-glow": "0 0 0 1px rgba(29, 78, 216, 0.15), 0 8px 24px -4px rgba(29, 78, 216, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
