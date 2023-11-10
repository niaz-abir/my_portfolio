/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        primary: "Charis SIL",
        secondary:"Oswald', sans-serif"
      },
      colors: {
        "light-300": "#ffffff",
        "light-400": "#e8ebee",
        "light-500": "#d1d6dc",

        "dark-300": "#162a40",
        "dark-400": "#101f30",
        "dark-500": "#0e1a28",
        "dark-600":"#030703",

        "accent-400": "#DB2955",
      },
    },
  },
  plugins: [require("daisyui")],
};
