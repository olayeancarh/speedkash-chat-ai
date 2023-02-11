/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce': 'bounce 1s 1s',
        'slide-up': 'slide-up 1s both'
      },
      keyframes: {
        'bounce': {
          '0%, 100%': {
            'transform': 'translateY(-20%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
          },
        },
        'slide-up': {
          '0%': {
            'opacity': '0.1',
            'transform': 'translate(0, 300px)'
          },
          '100%': {
            'opacity': '1',
            'transform': 'translate(0, 0px)'
          },
        }
      }
    },
  },
  plugins: [],
}
