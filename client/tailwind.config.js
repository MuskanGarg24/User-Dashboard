/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'bgColor': '#FAFBFF',
      'primaryColor': '#1E2875',
      'secondaryColor': '#FFFFFF',
      'redColor': '#FF0000'
    }
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
}
