import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      
      colors: {
        lgreen: " #5ebb46 ", 
        dgreen: " #172e08 ",
        lred: " #5ebb46 ",
        lblack: " #1A1A1A ",
        ldark: " #121212 ",
        dred: " #4C0414 ",
        lyellow: " #FFDE59 ",
        dyellow: " #60562E ",
        lblue: " #003174 ",
        dblue: " #020617 ",
        ddblue:" #003174",
      },

      fontFamily: {
        // to change, update font in _document.js
        russo: ["var(--font-russo)"],
        osw: ["var(--font-osw)"],
        pacifico: ["var(--font-pacifico)"],
        paci: ["var(--font-paci)"],
        geistSans: ["var(--font-geist-sans)"],
        geistMono: ["var(--font-geist-mono)"],
      },
    },
  },  plugins: [
    addVariablesForColors,

  ],
};
 
// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

export default config;
