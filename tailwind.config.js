/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F5',
        beige: '#F0EBE3',
        sand: '#E5DDD0',
        charcoal: '#1A1A1A',
        sage: '#8B9E8A',
        'sage-dark': '#697B68',
        'warm-gray': '#6B6B6B',
        footer: '#111111',
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        body: ['Sarabun', 'Montserrat', 'sans-serif'],
      },
      keyframes: {
        kenBurns: {
          from: { transform: 'scale(1) translate(0, 0)' },
          to:   { transform: 'scale(1.1) translate(-2%, -1%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        scrollPulse: {
          '0%,100%': { opacity: '0.12', transform: 'scaleY(0.6)' },
          '50%':      { opacity: '0.55', transform: 'scaleY(1)' },
        },
      },
      animation: {
        kenBurns:    'kenBurns 24s ease-in-out infinite alternate',
        scrollPulse: 'scrollPulse 2.4s ease-in-out infinite',
        fadeUp1: 'fadeUp 0.95s cubic-bezier(0.25,0.46,0.45,0.94) 0.3s both',
        fadeUp2: 'fadeUp 0.95s cubic-bezier(0.25,0.46,0.45,0.94) 0.6s both',
        fadeUp3: 'fadeUp 0.95s cubic-bezier(0.25,0.46,0.45,0.94) 0.9s both',
        fadeUp4: 'fadeUp 0.95s cubic-bezier(0.25,0.46,0.45,0.94) 1.2s both',
      },
    },
  },
  plugins: [],
};
