/** @type {import('tailwindcss').Config} */
module.exports = 
{
  theme: {
    screens: 
    {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: 
    {
      'main': '#2D76F9',
      'secondary': '#EEF4FF',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: 
    {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: 
    {
      spacing: 
      {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: 
      {
        '4xl': '2rem',
      }
    }
  },
  content: [
    './praktikum_4/**/*.{html,js}',
    './praktikum_4/index.html'
  ],
  plugins: [
    require('daisyui')
  ]
}