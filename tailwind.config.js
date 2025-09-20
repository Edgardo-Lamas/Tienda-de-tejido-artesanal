/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta artesanal cálida
        cream: {
          50: '#FDFCF8',
          100: '#F9F6F0',
          200: '#F5F1E9',
          300: '#F0EBE1',
          400: '#EBE5D8',
          500: '#E6DFD0',
        },
        terracotta: {
          50: '#F9F0ED',
          100: '#F2E0DB',
          200: '#E8C4B7',
          300: '#DEA893',
          400: '#D48C6F',
          500: '#C97B63',
          600: '#B8654A',
          700: '#A04F31',
        },
        petrol: {
          50: '#EDF4F6',
          100: '#DBE9ED',
          200: '#B7D3DB',
          300: '#93BDC9',
          400: '#6FA7B7',
          500: '#486E7C',
          600: '#3D5A66',
          700: '#324650',
        },
        sage: {
          50: '#F5F7F5',
          100: '#EAEEE9',
          200: '#D6DDD4',
          300: '#C1CBBE',
          400: '#ACBAA9',
          500: '#8FA08B',
          600: '#738071',
          700: '#576058',
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading-1': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-2': ['2rem', { lineHeight: '1.3' }],
        'heading-3': ['1.5rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.7s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'soft': '0 2px 15px 0 rgba(0, 0, 0, 0.1)',
        'card': '0 4px 20px 0 rgba(0, 0, 0, 0.08)',
        'hover': '0 8px 30px 0 rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}