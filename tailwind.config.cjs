module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./public/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
};
