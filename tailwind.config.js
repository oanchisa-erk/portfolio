/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          1000: "#AA76FB",
          1100: "#693B93",
          1200: "#11071F",
          1300: "#2B0B3A"
        },
        yellow: 
        {
          1000: "#FFC953"
        }
      },
      fontFamily:{
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
