/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        pri: "#03a9f4",
        sec: "#01579B",
        tpri: "#a4a4a4",
      },
      screens: {
        mobile: "550px",

        tablet: "700px",

        desktop: "1100px",
      },
    },
  },
  plugins: [],
};
