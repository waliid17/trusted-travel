// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // adjust the paths according to your project structure
  ],
  theme: {
    extend: {
      colors: {
        'scroll-thumb': '#000', // Custom color for the scrollbar thumb
      },
      spacing: {
        'scrollbar-width': '8px', // Custom width for the scrollbar
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.scrollbar': {
          'scrollbar-width': 'thin', // For Firefox
          'scrollbar-color': '#000 transparent', // For Firefox
        },
        '.scrollbar::-webkit-scrollbar': {
          'width': '8px',
        },
        '.scrollbar::-webkit-scrollbar-thumb': {
          'background-color': '#000', // Custom color for the scrollbar thumb
        },
      });
    },
  ],
}
