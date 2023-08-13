/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'bgColor': '#fafbff',
      'primaryColor': '#1E2875',
      'secondaryColor': '#FFFFFF',
      'smokeColor': '#f0effa',
      'redColor': '#FF0000',
      'goldenColor': '#ffce10',
      'borderColor': '#ebebee',
      'blackColor': '#1f1f1f;'
    }
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
}
