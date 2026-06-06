/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        black:  '#080808',
        cream:  '#e8e4d9',
        red:    '#c0392b',
        rust:   '#8b2500',
        grey:   '#1a1a1a',
        mid:    '#2e2e2e',
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        vt323: ['VT323', 'monospace'],
        mono:  ['"Share Tech Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
