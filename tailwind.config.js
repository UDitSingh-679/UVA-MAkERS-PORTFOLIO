/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-1': 'var(--color-color-1)',
        'color-2': 'var(--color-color-2)',
        'color-3': 'var(--color-color-3)',
        'color-4': 'var(--color-color-4)',
        'color-5': 'var(--color-color-5)',
        'color-6': 'var(--color-color-6)',
        'color-7': 'var(--color-color-7)',
        'color-8': 'var(--color-color-8)',
        'color-9': 'var(--color-color-9)',
        'color-10': 'var(--color-color-10)',
      },
      fontFamily: {
        'type-1': ['ui-sans-serif', 'sans-serif'],
        'type-3': ['DM Sans', 'sans-serif'],
        'type-5': ['Outfit', 'sans-serif'],
      },
      spacing: {
        'space-1': '24px',
        'space-2': '16px',
        'space-3': '12px',
        'space-4': '8px',
        'space-5': '48px',
        'space-6': '4px',
        'space-7': '40px',
        'space-8': '96px',
        'space-9': '64px',
        'space-10': '32px',
      },
      borderRadius: {
        'radius-1': '24px',
        'radius-2': '16px',
        'radius-3': '12px',
      },
    },
  },
  plugins: [],
}
