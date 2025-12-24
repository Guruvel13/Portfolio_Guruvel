/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--bg-rgb) / <alpha-value>)',
        surface: 'rgb(var(--surface-rgb) / <alpha-value>)',
        text: 'rgb(var(--text-rgb) / <alpha-value>)',
        muted: 'rgb(var(--muted-rgb) / <alpha-value>)',
        border: 'var(--border-color)',
        primary: '#FF5500', // Deep Orange
        secondary: '#9CA3AF', // Gray
        accent: '#FACC15', // Yellow/Amber pop
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'], // For that code/pixel feel
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #1f2937 1px, transparent 1px), linear-gradient(to bottom, #1f2937 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-size': '40px 40px',
      }
    },
  },
  plugins: [],
}
