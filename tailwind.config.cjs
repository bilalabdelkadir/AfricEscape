/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "1ec28b",
        "primary-gredient":
          "linear-gradient(180deg, rgba(30,194,139,1) 26%, rgba(30,194,139,0.7371323529411764) 61%, rgba(30,194,139,0) 95%);",
      },
      textColor: {
        primary: "2B2945",
        secondary: "rgba(43,41,69,0.8)",
      },
    },
  },
  plugins: [],
};
