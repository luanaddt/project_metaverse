/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary-black": "#1A232E"
      }
    },
  },
  plugins: [],
}
