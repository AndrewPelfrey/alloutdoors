/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust based on your file structure
  ],
  theme: {
    extend: {
      colors: {
        'wood-dark': '#3b2f2f',
        'flag-blue': '#3c3b6e',
        'flag-red': '#b22234',
        'bear-black': '#0a0a0a',
        'bone-white': '#f8f8f2',
      },
      fontFamily: {
        display: ['"Cinzel"', 'serif'], // Make sure you import this in your CSS
        body: ['"Open Sans"', 'sans-serif'],
      },
      animation: {
        float: "floaty 12s ease-in-out infinite",
      },
      keyframes: {
        floaty: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [], // ✅ this line was misplaced before
};
