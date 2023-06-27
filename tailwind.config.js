/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sharetech: ["Share Tech"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "bullShadow": "-2px 1px rgb(13,13,13)"
      }, 
      colors: {
        primary: "#61C7A2",
        secondary: "#4881C5",
        gray: "#A0A0A0",
        blk: "#131313",
      },
    },
  },
  plugins: [],
};
