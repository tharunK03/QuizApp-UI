/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['"DM Serif Display"', 'Georgia', 'serif'],
      },
      colors: {
        'deep-teal': '#184B5A',
        'dark-navy': '#1A2C34',
        'bg-start': '#BECFEE',
        'bg-mid1': '#71C6E2',
        'bg-mid2': '#D9F4FA',
        'card-bg': '#F4FDFF',
        'title-dark': '#15313D',
        'title-light': '#3CABDA',
        'progress-inactive': '#D9E4EC',
        'nav-blue': '#E6F5FF',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}

