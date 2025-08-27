/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: '#f0fdff',
          100: '#ccf7fe',
          200: '#99eefd',
          300: '#5ddefa',
          400: '#16c5f0',
          500: '#06a9d6',
          600: '#0888b5',
          700: '#0e6e93',
          800: '#155a78',
          900: '#164c66',
        },
        coral: {
          50: '#fff4f1',
          100: '#ffe6de',
          200: '#ffd1bd',
          300: '#ffb08c',
          400: '#ff8459',
          500: '#ff5722',
          600: '#ed4315',
          700: '#c8340c',
          800: '#a02b0d',
          900: '#842812',
        },
        sand: {
          50: '#fefdf9',
          100: '#fefbf0',
          200: '#fcf4d9',
          300: '#f9e9b8',
          400: '#f4d888',
          500: '#edc55f',
          600: '#dda73a',
          700: '#b8862d',
          800: '#956a2a',
          900: '#7a5728',
        },
        tropical: {
          mint: '#40e0d0',
          lagoon: '#20b2aa',
          sunset: '#ff6b6b',
          palm: '#228b22',
        }
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.5' }],
        'base': ['1rem', { lineHeight: '1.5' }],
        'lg': ['1.125rem', { lineHeight: '1.4' }],
        'xl': ['1.25rem', { lineHeight: '1.4' }],
        '2xl': ['1.5rem', { lineHeight: '1.3' }],
        '3xl': ['1.875rem', { lineHeight: '1.3' }],
        '4xl': ['2.25rem', { lineHeight: '1.2' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'wave': 'wave 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'ocean': '0 4px 20px rgba(6, 169, 214, 0.15)',
        'coral': '0 4px 20px rgba(255, 87, 34, 0.15)',
        'tropical': '0 8px 32px rgba(32, 178, 170, 0.2)',
      },
    },
  },
  plugins: [],
};
