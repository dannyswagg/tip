/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "hsl(185, 41%, 84%);",
        white: "hsl(0, 0%, 100%)",
        strongCyan: "hsl(172, 67%, 45%)",
        darkCyan: "hsl(183, 100%, 15%)",
        darkGreyCyan: "hsl(186, 14%, 43%)",
        lighterGreyCyan: "hsl(189, 41%, 97%)",
      },
    },
  },
  plugins: [],
};
