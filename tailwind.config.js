/** @type {import('tailwindcss').Config} */
module.exports = 
{
  mode: 'jit',
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ]
  },
  theme: {
    screens: 
    {
      sm: '320px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: 
    {
      'main': '#2D76F9',
      'submain': '#EEF4FF',
      'black': '#000000',
      'white': '#FFFFFF',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6'
    },
    fontFamily: 
    {
      poppins: ['Poppins', 'Poppins-Bold','sans-serif'],
      nunito: ['Nunito'],
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: 
    {
      spacing: 
      {
        '128': '32rem',
        '144': '36rem',
        'desktop':'1366px',
        'mobile': "800px"
      },
      borderRadius: 
      {
        '4xl': '4rem'
      },
    }
  },
  content: [
    './praktikum_4/**/*.{html,js}',
    './praktikum_4/index.html',
    './learning/index.html'
  ],
  plugins: [
    require('daisyui')
  ]
}