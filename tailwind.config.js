/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      screens: {
          '360': '360px',
          '440': '440px',
          '768': '768px',
          '960': '960px',
          '1024': '1024px',
          '1230': '1230px',
          '1280': '1280px',
          '1355': '1355px',
          '1440': '1440px',
          '1720': '1720px',
          '1920': '1920px',
          '2560': '2560px',
      },
      extend: {
        colors: {
          'clickable-hover': 'rgba(57, 88, 85, 1)',
          'clickable-default': 'rgba(37, 68, 65, 1)',
          'clickable-active': 'rgba(17, 48, 45, 1)',

          'link-default-color': 'rgba(33, 33, 33, 1)',
          'link-hover-color': 'rgba(37, 68, 65, 1)',
          'link-active-color': 'rgba(17, 48, 45, 1)',
        },
        spacing: {
          '600px': '37.5rem',
        },
        maxWidth: {
          'catalog-card': '22.125rem',
          'get-in-touch': '45.5rem',
          'little-qualities-card': '20rem',
          'qualities-card': '21.25rem',
        },
        minHeight: {
          'phone-slide': '13.125rem',
          'normal-slide': '15rem'
        },
        backgroundImage: {
          'lead': "url('./assets/bg.png')",
        },
        fontFamily: {
          gilroyBold: ["Gilroy-Bold", "sans-serif"],
          gilroyMedium: ["Gilroy-Medium", "sans-serif"],
          gilroyLight: ["Gilroy-Light", "sans-serif"],
        },
      },
    },
    plugins: [],
  }
  