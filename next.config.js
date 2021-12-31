/* eslint-disable @typescript-eslint/no-var-requires */
const compose = require("lodash/flowRight");
const withPWA = require("next-pwa");
const withGraphql = require("next-plugin-graphql");

const plugins = [withGraphql, withPWA];

module.exports = compose(plugins)({
  target: "serverless",
  images: {
    domains: ["a0.muscache.com", "media.graphcms.com"],
  },
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
  },
  i18n: {
    locales: ["en", "it"],
    defaultLocale: "en",
  },
  // future: {
  //   webpack5: true,
  // },
});
