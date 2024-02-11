/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'neutralSilver' : '#F5F7FA',
        'neutralDgray' : '#D4D4D4',
        'brandPrimary' : '#4CAF4F',
        'neutralGray' : '#717171',
        'gray900' : '#18191F'
      }
    },
  },
  plugins: [require("daisyui")],
}

