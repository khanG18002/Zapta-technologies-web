/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "rgb(1, 91, 170)",
        customLightBlue: "#68A2D4", // Custom color name and code
        customBlue2: "#003D6B", // Custom color name and code
        customDarkBlue: "#012842", // Custom color name and code
        customDarkBlue2: "#16304A", // Custom color name and code
        customLightGray: "#F2F7FB", // Custom color name and code
      },
    },
  },
  plugins: [],
};
