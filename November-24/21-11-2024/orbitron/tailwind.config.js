/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    extend: {
      colors: {
        primary: "#9333ea",
        light: {
          bg: "#fafafa",
          secondarybg: "#f0f0f0",
          text: "#18181b",
          texts: "#71717a",
        },
        dark: {
          bg: "#09090b",
          text: "#ffffff",
          texts: "#a1a1aa",
          primary: "#c084fc",
          secondary: "#161617",
        },
        border_color: "#1e1e1e",
        border_color2: "#525252",
      },
    },
  },
}
