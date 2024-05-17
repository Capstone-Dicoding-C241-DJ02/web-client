/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: "Quicksand",
      },
      colors: {
        black: "#424242",
        gold: "#FAC337",
        silver: "#BCBCBC",
        bronze: "#B77539",
        danger: "#ED5837",
        success: "#37ED68",
        "primary-blue": "#2E3F50",
      },
      fontSize: {
        heading1: "2rem",
        heading2: "1.5rem",
        body: "1rem",
      },
      boxShadow: {
        primary1:
          "3px 3px 20px -5px #2e3f5049, 3px 0px 20px -5px #2e3f5049, 0px 3px 20px -5px #2e3f5049",

        primary: '2px 3px 20px -5px #2e3f5030',

      },
    },
  },
  plugins: [],
};
