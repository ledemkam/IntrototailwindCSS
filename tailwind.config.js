module.exports = {
  content: ["./index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F1F5F9",
        },
        secondary: {
          DEFAULT: "#ffc100",
        },
        tertiary: {
          DEFAULT: "#17c7be",
        },
      },
      fontFamily: {
        title: ["Open Sans"],
        body: ["Roboto"],
      },
      borderRadius: {
        "4xl": "3,5rem",
      },
      container: {
        center: true,
      },
      variances: {
        extend: {
          scale: ["active"],
          transition: ["active"],
        },
      },
    },
  },
  plugins: [],
};
