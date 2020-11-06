const withPWA = require("next-pwa");

module.exports = withPWA({
  target: "serverless",
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
  },
  i18n: {
    locales: ["en", "it"],
    defaultLocale: "en",
  },
});
