/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#012116", // Base color
          light: "#1A3A3C", // Lighter shade
        },
        danger: {
          DEFAULT: "#F44336",
          light: "#E57373",
        },
        transparent: "transparent",
      },
    },
  },
  plugins: [],
};
