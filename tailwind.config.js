/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        odda: {
          bg: '#07140e',
          'bg-secondary': '#0d2218',
          elevated: '#12251c',
          'elevated-hover': '#162e23',
          glass: 'rgba(255, 255, 255, 0.04)',
          'glass-strong': 'rgba(255, 255, 255, 0.08)',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(184, 233, 56, 0.3)',
          lime: '#b8e938',
          'lime-bright': '#ccff00',
          'lime-glow': 'rgba(184, 233, 56, 0.25)',
          'script-green': '#4ade80',
          text: '#ffffff',
          'text-secondary': '#9cb3a5',
          'text-muted': '#728579',
          bronze: '#b38b57',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        script: ['Caveat', 'cursive'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'lime-glow': '0 0 35px -5px rgba(184, 233, 56, 0.35)',
        'lime-glow-lg': '0 0 60px -10px rgba(184, 233, 56, 0.45)',
        'emerald-subtle': '0 10px 40px -15px rgba(13, 34, 24, 0.8)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
