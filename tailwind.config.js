/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",

      themePrimary: "#000000",
      themeSecondary: "#9C9C9C",
      themeAccentOne: "#E75B5B",
      themeAccentTwo: "",

      navBarIconColor: "#9C9C9C",
      navBarActiveIconColor: "#E75B5B",
      navbarActiveIconBackgroundColor: "#1C1C1C",
      navBarTopBorderColor: "#E9E9E9",
      NavBarBackgroundColor: "#000000",
    },
  },
  plugins: [],
};
