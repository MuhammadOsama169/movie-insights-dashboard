module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "360px",
        "2sm": "576px",
        md: "768px",
        "2md": "800px",
        lg: "1000px",

        xl: "1200px",
        "2xl": "1300px",
        "3xl": "1500px",
        "4xl": "1600px",
      },
      fontFamily: {
        montserrat: ["Inter"],
      },
    },
  },
};
