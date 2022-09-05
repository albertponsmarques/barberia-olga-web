/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      margin: {
        50: "13rem",
      },
      height: {
        128: "32rem",
        106: "28rem",
      },
      colors: {
        "brown-red": "#800000",
        "brb-red": "#E24C3B",
        "brb-blue": "#0088E0",
      },
    },
  },
  darkMode: "className",
  plugins: [],
};
