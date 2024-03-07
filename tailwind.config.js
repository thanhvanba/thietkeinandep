/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('/src/assets/img/bg_header.jpg')",
        'brandDesign': "url('/src/assets/img/z4144637136582_7838862d809719bfab2643e4da2e7f4c.jpg')",
        'packageDesign': "url('/src/assets/img/z4147769559536_695aa2228b492f0e83e4e8f01b925d53.jpg')",
        'printing': "url('/src/assets/img/z4147769559251_8d354495b3c12579b3ca2c887fb6f11d.jpg')",
        'logo': "url('/src/assets/img/z4221301769098_91acf22cbd5b48059670cfe570a57f75.jpg')",
        'news': "url('/src/assets/img/banner-new2.jpg')",
        'logoHome': "url('/src/assets/img/LOGO.png')",
        'footer-texture': "url('/src/assets/img/footer-texture.png')",
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'robotoSlab': ['Roboto Slab'],
        'corinthia': ['Corinthia'],
        'roboto': ['Roboto'],
        'playfairDisplay': ['Playfair Display'],
        'alexandria': ['Alexandria'],
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
}