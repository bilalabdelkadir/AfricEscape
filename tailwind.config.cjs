/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "1ec28b",
        "primary-gredient":
          "linear-gradient(180deg, rgba(186,244,225,0.9) 31%, rgba(186,244,225,0.7) 89%);",
      },
      textColor: {
        primary: "2B2945",
        secondary: "rgba(43,41,69,0.8)",
      },
    },
  },
  plugins: [],
};
