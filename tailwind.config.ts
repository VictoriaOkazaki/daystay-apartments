import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      gothicA1: ["var(--font-gothicA1)"],
      prata: ["var(--font-prata)"],
      marckScript: ["var(--font-marck-script)"],
    },
    colors: {
      acsent: "#E30104",
      mainBg: "#F4F3EE",
      text: "#3A1F17",
      bg: "#F6E8B8",
      bg2: "#FFD1B7",
      yellow: "#FEE3A2",
      red: "#F68769",
      acsent2: "#FAC306",
      green: "#15803D",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        radius: "2.08vw",
      },
      margin: {
        section: "11vh",
        inside: "7vh",
      },
    },
  },
  plugins: [],
} satisfies Config;
