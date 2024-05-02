/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        dmSans: ["DM Sans", "sans-serif"],
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["pastel", "lofi", "nord"],
  },
}

