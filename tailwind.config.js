module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'neon-blue': '#35c2ff'
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1', filter: 'drop-shadow(0 0 10px rgba(0, 176, 252, 0.8)) drop-shadow(0 0 20px rgba(0, 176, 252, 0.45))' },
          '50%': { opacity: '0.86', filter: 'drop-shadow(0 0 8px rgba(0, 176, 252, 0.62)) drop-shadow(0 0 16px rgba(0, 176, 252, 0.36))' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideup: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        blink: 'blink 1.6s ease-in-out infinite',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        slideup: 'slideup 0.6s ease-out forwards',
      },
    }
  },
  plugins: [],
}