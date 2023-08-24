/** @type {import('tailwindcss').Config} */

const sizes = {
  none: '0',
  sm: '0.125rem',
  DEFAULT: '0.25rem',
  DEFAULT: '4px',
  md: '0.375rem',
  lg: '0.5rem',
  full: '9999px',
  large: '12px',
};
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    spacing: sizes,
    borderRadius: sizes,
    colors: {
      primary: '#9751ff',
      text: '#000000',
      textInverse: '#ffffff',
    },
  },
  plugins: [],
};
