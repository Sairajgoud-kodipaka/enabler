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
      animation: {
        fadeInUp: 'fadeInUp 0.2s ease-out forwards', // Adjust duration/easing as needed
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' }, // Start slightly down and faded out
          '100%': { opacity: '1', transform: 'translateY(0)' }, // End at normal position, fully opaque
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
