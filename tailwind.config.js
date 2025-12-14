/** @type {import('tailwindcss').Config} */

import typography from "@tailwindcss/typography";
import textShadow from "tailwindcss-textshadow";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(0deg, rgba(70,23,84,1) 0%, rgba(74,157,32,0.9449406895068807) 33%, rgba(84,23,26,0.4555675185079726) 68%, rgba(57,29,51,0.6811792216169725) 87%, rgba(23,37,84,0.9839315151949541) 100%);",
      },
      colors: {
        primary: "#3F32F6",
        secondaty: "#1E3A8A",
      },
      fontFamily: {
        poppins: "poppins, sans-serif",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [typography, textShadow],
};
