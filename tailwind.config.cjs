/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        "brand-dark": "#023047", //Dark Blue
        "brand-blue": "#219EBC", //Mid-Blue
        "brand-light": "#8ECAE6", //Light Blue
      },
    },
  },
  plugins: [],
};
