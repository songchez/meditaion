/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["pastel", "forest"],
  },
  plugins: [require("daisyui")],
};
