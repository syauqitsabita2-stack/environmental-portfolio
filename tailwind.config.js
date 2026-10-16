/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2c67ed',
          50: '#edf4ff',
          100: '#dbe7fe',
          200: '#bfd5fe',
          300: '#93bafd',
          400: '#6095fa',
          500: '#2c67ed',
          600: '#1d4ed8',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#172554',
          glow: 'rgba(44, 103, 237, 0.6)',
        },
        space: {
          darkest: '#030712',
          darker: '#060a17',
          card: '#0c1328',
          border: 'rgba(44, 103, 237, 0.2)',
          accent: '#1e293b',
        }
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(44, 103, 237, 0.35)',
        'glow': '0 0 20px rgba(44, 103, 237, 0.45)',
        'glow-lg': '0 0 35px rgba(44, 103, 237, 0.65)',
        'glow-cyan': '0 0 25px rgba(56, 189, 248, 0.45)',
        'glow-purple': '0 0 25px rgba(168, 85, 247, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(14px)' },
        }
      }
    },
  },
  plugins: [],
}
