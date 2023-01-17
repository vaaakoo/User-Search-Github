/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", ", './public/index.html'"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      mobile: "375px",
      // => @media (min-width: 375px) { ... }

      tablet: "768px",
      // => @media (min-width: 768px) { ... }}

      desktop: "1440px",
      // => @media (min-width: 1440px) { ... }}
    },
    extend: {
      colors: {
        // Base Colors
        "custom-blue": "#0079FF",
        "custom-blue-hov": "#60ABFF",

        // Lightmode
        "custom-light-gray": "#697C9A",
        "custom-light-blue": "#4B6A9B",
        "custom-light-black": "#2B3442",
        "custom-gray-cover-light": "#F6F8FF",
        "custom-white-cover-light": "#FEFEFE",

        // Darkmode
        "custom-dark-white-darker": "#FFFFF",
        "custom-dark-black-darker": "#141D2F",
        "custom-dark-blue-darker": "#1E2A47",
      },
    },
  },
  plugins: [],
};
