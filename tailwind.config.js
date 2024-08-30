/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
                'headerPattern': "url('src/assets/images/header/accaro.svg')",
                'headerImage': "url('src/assets/images/header/header_image_view.png')",
                'aboutImage': "url('src/assets/images/about/image-model.png')",
                'abstractImage': "url('src/assets/images/about/abstract-background-model.png')"
              },
      colors: {
        'primary': '#FD5956',
        'secondary': '#FFFEFD'
      },
      fontFamily:{
        poppins: 'Poppins'
      },
      screens: {
        '2xl': '1920px',
      }
    },
  },
  plugins: [],
}
