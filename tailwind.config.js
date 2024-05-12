/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['"Press Start 2P"', "system-ui"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
