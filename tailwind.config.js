/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#101C35',
          50: '#f0f3fa',
          100: '#e1e7f5',
          200: '#c5d1ec',
          800: '#152445',
          900: '#101C35',
          950: '#091021',
        },
        terracotta: {
          DEFAULT: '#C96B32',
          50: '#fdf6f0',
          100: '#faecdF',
          200: '#f4d5bf',
          500: '#C96B32',
          600: '#b45a23',
          700: '#954619',
        },
        gold: {
          DEFAULT: '#D6A84F',
          50: '#fbf8f0',
          100: '#f7f0df',
          200: '#eedfbE',
          400: '#e2ba6b',
          500: '#D6A84F',
          600: '#bc8f38',
        },
        warmIvory: {
          DEFAULT: '#FAF7F2',
          50: '#FFFFFF',
          100: '#FDFBF9',
          200: '#FAF7F2',
          300: '#F4EFE6',
          400: '#ECE3D4',
        },
        charcoal: {
          DEFAULT: '#202020',
          muted: '#5A606D',
          light: '#88909E',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        devanagari: ['"Noto Serif Devanagari"', 'serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(16, 28, 53, 0.04), 0 1px 3px rgba(16, 28, 53, 0.03)',
        'card': '0 4px 20px -2px rgba(16, 28, 53, 0.08), 0 2px 6px -1px rgba(16, 28, 53, 0.04)',
        'elevated': '0 20px 35px -5px rgba(16, 28, 53, 0.12), 0 8px 12px -3px rgba(16, 28, 53, 0.06)',
        'gold-glow': '0 0 25px rgba(214, 168, 79, 0.25)',
      }
    },
  },
  plugins: [],
}
