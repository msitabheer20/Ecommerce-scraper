/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-geist-sans)'],
        spaceGrotesk: ['var(--font-space-grotesk)'],
        mono: ['var(--font-geist-mono)'],
      },
      colors: {
        primary: '#FF4785',
        secondary: '#1A8F7B',
        'gray-200': '#EAECF0',
        'gray-300': '#D0D5DD',
        'gray-500': '#667085',
        'gray-600': '#475467',
        'gray-900': '#101828',
        'white-100': '#F4F4F4',
        'white-200': '#EDF0F8',
        'black-100': '#3D4258',
        'neutral-black': '#23263B',
      },
    },
  },
  plugins: [],
}; 