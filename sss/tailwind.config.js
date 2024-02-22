
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "",
        secondary: "#00f6ff",
        navbar:"#A020F0",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimPurple: "rgba(124, 9, 151, 0.1)",
        dark:"#2d2d38",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage:{
        "brand": 'url("./SERVICES/assets/brand.png")',
        "CTA-image":'url("./HOMEPAGE/assets/ctaimage.png")',
        "align":'url(./ABOUT/assets/align.png)',
        "partner": 'url("./CONTACT/assets/partner.png")'
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    
  },
  plugins: [],
};

