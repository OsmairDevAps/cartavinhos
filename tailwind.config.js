/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['"Cormorant Garamond"', 'serif'],
        'body': ['"Jost"', 'sans-serif'],
      },
      colors: {
        wine: {
          50: '#fdf2f4',
          100: '#fce7eb',
          200: '#f9d0d9',
          300: '#f4a8b8',
          400: '#ec7590',
          500: '#e0486c',
          600: '#cc2a51',
          700: '#ac1f41',
          800: '#911c3c',
          900: '#7c1b38',
          950: '#450919',
        },
        gold: {
          300: '#e8d5a3',
          400: '#d4b978',
          500: '#c4a45a',
          600: '#a8873d',
        },
        dark: {
          900: '#0a0608',
          800: '#110d0f',
          700: '#1a1215',
          600: '#251820',
          500: '#2f1e28',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease forwards',
        'slide-up': 'slideUp 0.7s ease forwards',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
