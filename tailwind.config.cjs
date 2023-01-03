/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'input': "0px 0px 0px 2px rgba(96, 123, 150, 0.3)",
      },
    },
  },
  plugins: [],
};
