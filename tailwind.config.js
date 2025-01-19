/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#012116",
          light: "#1A3A3C",
        },
        danger: {
          DEFAULT: "#D32F2F",
          light: "#F44336",
        },
        transparent: "transparent",
      },
    },
  },
  plugins: [],
};
