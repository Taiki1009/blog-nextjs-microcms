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
        secondary: "#9191a4",
        badge: '#3F3F51',
        inputBorder: "#56566",
        input: "#2a2a33",
      },
    },
    fontFamily: {
      poppins: ["poppins", "sans-serif"],
    },
  },
  plugins: [],
}
