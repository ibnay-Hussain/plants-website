module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
        lobster: ['Lobster', 'cursive'],
      },
      keyframes: {
        move: {
          '50%': { transform: 'translateY(-1rem)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        scale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        }
      },
      animation: {
        movingY: 'move 3s linear infinite',
        rotating: 'rotate 20s linear infinite',
        scaling: 'scale 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
