/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#012116", // Base color
          light: "#81C784", // Lighter shade
          dark: "#388E3C", // Darker shade
        },
        danger: {
          DEFAULT: "#F44336",
          light: "#E57373",
          dark: "#D32F2F",
        },
        transparent: "transparent",
      },
    },
  },
  plugins: [],
};
