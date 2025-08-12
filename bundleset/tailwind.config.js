/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "systemorange-light": "var(--systemorange-light)",
        text: "var(--text)",
      },
      boxShadow: {
        "shadow-sm": "var(--shadow-sm)",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
