/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A1E40",
        secondary: "#E94B8A",
        background: "#F8F9FB",
        "form-bg": "#FFF3F3",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
