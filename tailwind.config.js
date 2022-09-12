/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        body: "#222",
        "selected-text": "#a3a3ff",
        theme: "#5c318c",
      },
    },
    fontFamily: {
      poppins: ["poppins", "sans-serif"],
    },
  },
  plugins: [],
}