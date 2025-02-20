import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // screens: {
    //   lg: { max: "1279px" }, // Desktops and down
    //   lg: { max: "1023px" }, // Laptops and down
    //   lg: { max: "767px" }, // Tablets and down
    //   sm: { max: "639px" }, // Small devices and down
    //   xs: { max: "479px" }, // Extra small devices
    // },
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
      screens: {
        sm: "540px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        radius: "2.08vw",
        radiusMob: "8.55vw",
      },
      margin: {
        section: "11vh",
        inside: "7vh",
        insideMob: "5vh",
      },
    },
  },
  plugins: [],
} satisfies Config;
