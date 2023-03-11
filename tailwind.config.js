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
      colors: {
        "light-300": "#ffffff",
        "light-400": "#e8ebee",
        "light-500": "#d1d6dc",

        "dark-300": "#162a40",
        "dark-400": "#101f30",
        "dark-500": "#0e1a28",

        "accent-400": "#0CF574",
      },
    },
  },
  plugins: [require("daisyui")],
};
