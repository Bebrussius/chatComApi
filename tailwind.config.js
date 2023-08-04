/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [

  ],
  variants: {
    extend: {
      visibility: ["group-hover"],
    },
   },
}

