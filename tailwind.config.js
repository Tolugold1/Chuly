/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      vsm: "320px",
      xsm: "400px",
      zsm: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      tablet: "768px",
      ipad: "1024px",
      desktop: "1280px",
	    cont: "1025px",
      xtraxl: "1440px",
      xllarge: "1600px",
      xxlarge: "3200px",
    },
    extend: {
      // You can add custom colors, fonts, etc. here
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        // Example custom colors (adjust to match your design)
        primary: "#FF527B", 
        secondary: "#FFB6C1",
      },
    },
  },
  plugins: [],
}

