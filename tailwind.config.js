/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { custom: ["Noto Sans Arabic"] },
    },
  },
  plugins: [require("daisyui")],
};
