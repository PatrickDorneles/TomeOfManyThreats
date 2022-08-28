/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    themes: ["light", "dark"],
  },
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        discord: {
          darker: '#3f5ca8',
          base: '#7289da',
          lighter: '#a5b9ff'
        }
      }
    },
  },
}