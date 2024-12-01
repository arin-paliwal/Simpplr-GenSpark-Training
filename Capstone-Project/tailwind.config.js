/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        palette: {
          light: {
            blue: "#3C41E9",
            green: "#12A779",
            orange: "#FFA40A",
            purple: "#913AF6",
            lightBlue: "#427DDC",
          },
          dark: {
            blue: "#1F22A7",
            green: "#0C7B5A",
            orange: "#CC8308",
            purple: "#732BBF",
            lightBlue: "#315BB0",
          },
        },
      },
    },
  },
  plugins: [],
};
