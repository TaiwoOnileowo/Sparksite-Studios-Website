/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "",
        secondary: "#00f6ff",
        navbar: "#A020F0",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimPurple: "rgba(124, 9, 151, 0.1)",
        dark: "#2d2d38",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        brand:
          'url("https://res.cloudinary.com/dixg66tpb/image/upload/f_webp/dpr_auto/d5bkzu5rvf9qxok3olxv.jpg")',
        "CTA-image":
          'url("ctahome.jpg")',
        align:
          'url("https://res.cloudinary.com/dixg66tpb/image/upload/f_webp/dpr_auto/c0ztoyt4rmc1pchiqdwh.jpg")',
        partner:
          'url("https://res.cloudinary.com/dixg66tpb/image/upload/f_webp/dpr_auto/ta90mcrn9fo0w66nhbql.jpg")',
      },
    },
    screens: {
      ip:"200px",
      xs: "250px",
      ss: "400px",
      ts: "600px",
      sm: "700px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
