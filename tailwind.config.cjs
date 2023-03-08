/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scale: {
        101: "1.01",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("daisyui")],
};
