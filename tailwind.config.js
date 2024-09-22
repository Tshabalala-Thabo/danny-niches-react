/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path if necessary
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0D0221', // Add your custom color here
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #FF4365, #F6019D)', // Add your custom gradient here
      },
      borderColor: {
        'custom-b-gradient': 'linear-gradient(to right, #FF4365, #F6019D)', // Add custom gradient for borders
      },
    },
  },
  plugins: [],
}