// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}', // Update path as needed
  ],
  
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
        bangers: ['Bangers', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        // Adding the spin animation
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        marqueeFast: 'marquee 10s linear infinite', // 👈 mobile fast animation
        // Adding the spin animation
        spin: 'spin 1s linear infinite', // Define the spin animation
      },
    },
  },
  
  plugins: [],
};
