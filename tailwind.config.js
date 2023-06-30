module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000" },
        gray: { 200: "#eeeeee", "500_3f": "#9a94943f" },
        indigo: { A200: "#4776e6" },
        purple: { 700: "#7a3199", "100_66": "#e1a5ff66" },
        deep_purple: { A200: "#8e54e9" },
        amber: { A200: "#fcd53f" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { inter: "Inter", poppins: "Poppins" },
      backgroundImage: { gradient: "linear-gradient(90deg ,#4776e6,#8e54e9)" },
      boxShadow: {
        bs1: "0px 10px  30px 0px #9a94943f",
        bs: "0px 10px  40px 0px #9a94943f",
        bs2: "0px 16px  40px 0px #9a94943f",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
