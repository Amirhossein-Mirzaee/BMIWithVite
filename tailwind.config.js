/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "330px",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      backgroundColor: {
        primaryShadowColor: "rgba(13, 16, 37, 0.6)",
        customshadow: "rgba(245, 56, 56, 0.35)", // #F53838 with 35% opacity
      },
      colors: {
        textColor: "#0B132A",
        secTextColor: "#4F5665",
        btnColor: "#F53838",
      },
      fontWeight: {
        bold: "700",
        semibold: "500",
        light: "400",
      },
      fontSize: {
        small: "16px",
      },
    },
  },
  plugins: [],
};
