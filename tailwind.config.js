module.exports = {
  content: ["./src/**/*.{html,css,js,jsx,ts,tsx}"],
  // theme: {
  //   extend: {},
  // },
  // daisyui: {
  //   themes: [
  //     {
  //       light: {
  //         primary: "#7c3aed",
  //         secondary: "#58C7F3",
  //         accent: "#F3CC30",
  //         neutral: "#20134E",
  //         // "base-100": "#2D1B69",
  //         info: "#53C0F3",
  //         success: "#71EAD2",
  //         warning: "#F3CC30",
  //         error: "#E24056",
  //       },
  //     },
  //     "dark",
  //   ],
  // },

  plugins: [require("daisyui")],
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
};
