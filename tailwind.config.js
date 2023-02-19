/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#38761d",
        price: "#e74c3c",
        secondary: "#274e13",
      },
      boxShadow: {
        header: "5px 5px 15px -5px #38761d",
      },
      screens: {
        mobie: "315px",

        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        medium: "800px",

        laptop: "1280px",
        // => @media (min-width: 1024px) { ... }
      },
      keyframes: {
        dropDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        moveOn: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        dropDown: "dropDown .4s ease-in-out ",
        moveOn: "moveOn .4s ease-in-out",
      },
    },
  },
  plugins: [],
};
