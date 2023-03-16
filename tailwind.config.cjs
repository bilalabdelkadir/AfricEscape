/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#1ec28b",
        "primary-gredient":
          "linear-gradient(180deg, rgba(156,205,189,1) 0%, rgba(186,244,225,0) 25%);",
        option: "#d6fff2 ",
      },
      textColor: {
        primary: "#2B2945",
        secondary: "rgba(43,41,69,0.8)",
        option: "#1ec28b",
      },
      colors: {
        primary: "#1ec28b",
        "border-color": "rgb(43, 41, 69,0.6)",
        option: "#d6fff2 ",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        amharic: ["Noto Sans Ethiopic", "sans-serif"],
      },
      screens: {
        xs: "490px",
      },
    },
  },
  plugins: [],
};
