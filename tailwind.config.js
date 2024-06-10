/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  variants: {
    extends: {
      visibility: ["group-hover"],
    },
  },
  screen: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
  container: {
    center: true,
    padding: "1rem",
  },
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        sm: [
          "14px",
          {
            lineHeight: "2rem",
            letterSpacing: "-0.01rem",
            fontWeight: "400",
          },
        ],
        base: [
          "16px",
          {
            lineHeight: "2rem",
            letterSpacing: "-0.01rem",
            fontWeight: "500",
          },
        ],
        lg: ["20px", "28px"],
        xl: ["24px", "32px"],
      },
      colors: {
        gray: "#e7ecef",
        blue: {
          dark: "#274c77",
          light: "#a3cef1",
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
