const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionDuration: {
        '4000': '4000ms',
      },

      animation: {
        slideIn: 'slideIn 0.3s ease-in-out',
        fadeInUp: 'fadeInUp 1s ease-out forwards',
        fadeOut: 'fadeOut 1s ease-out forwards',
        'space-in': 'spaceIn 0.5s forwards',
        'space-out': 'spaceOut 0.5s forwards',
        'up-down': 'upDown 2s infinite ease-in-out',
      },
      keyframes: {
        upDown: {
          '0%': { transform: 'translateY(-5px)' },
          '50%': { transform: 'translateY(5px)' },
          '100%': { transform: 'translateY(-5px)' },
        },
        slideIn: {
          '0%': { transform: 'translatey(100%)' },
          '100%': { transform: 'translatey(0)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(50px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeOut: {
          '0%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(50px)' },
        },
      },
      spacing: {
        '100': '34rem',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
