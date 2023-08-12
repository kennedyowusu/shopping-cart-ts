/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF6363',
        'grey': '#F3F4F6',
        'glass': '#F9FAFB',
        'transparent': 'rgba(0, 0, 0, 0.7)',
      },
    },
    fontFamily: {
      'body': ['Nunito']
    },
    screens: {
      'ss': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1200px',
    },
  },
  plugins: [],
}
