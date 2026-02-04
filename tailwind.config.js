/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
        },
        gold: {
          50: '#fdfaf3',
          100: '#faf0d7',
          200: '#f5dfab',
          300: '#edc96f',
          400: '#e4b44a',
          500: '#d4982b',
          600: '#b37d1e',
          700: '#926519',
          800: '#784f17',
          900: '#5c3c13',
        },
        burgundy: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#7c2d41',
          600: '#6b2136',
          700: '#5a1a2c',
          800: '#4a1423',
          900: '#3b0f1c',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'scale-in': 'scale-in 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
