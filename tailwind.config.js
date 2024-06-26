/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      // "light",
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "--rounded-btn": "0.3rem",
        },
      },
    ],
  },
};
