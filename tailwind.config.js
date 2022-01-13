module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f9a109",
        secondary: "#56CCF2",
        "lightbg-gray": "#FAFAFE",
        "icons-gray": "#454545",
        "light-gray": "#828282",
        "dark-gray": "#34333A",
      },
      fontFamily: {
        Quicksand: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
