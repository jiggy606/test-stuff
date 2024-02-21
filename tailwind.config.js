/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#010851",
        "secondary": "#9A7AF1",
        "tetiary": "#707070",
        "poly": "#EE9AE5",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

