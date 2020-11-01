module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        dancing: ["Dancing Script", "cursive"],
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")],
};
