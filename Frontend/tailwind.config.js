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
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e40af',
        },
        accent: {
          100: '#fef3c7',
          400: '#fbbf24',
          500: '#f59e0b',
        },
      },
      boxShadow: {
        'soft': '0 18px 45px rgba(15, 23, 42, 0.12)',
      },
      borderRadius: {
        'xl': '1rem',
      },
    },
  },
  plugins: [],
}

