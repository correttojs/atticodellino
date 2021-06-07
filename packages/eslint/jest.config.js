/* eslint-disable */
process.env.WEBPACK_TOGGLE = {};
module.exports = {
  automock: false,
  setupFiles: ["@correttojs/eslint-config/setupJest.js"],

  moduleNameMapper: {
    "^@/(.*)": "<rootDir>/src/$1",
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "graphql"],
  modulePathIgnorePatterns: [
    "<rootDir>/.next",
    "<rootDir>/coverage/",
    "<rootDir>/cypress",
    "<rootDir>/cache",
    "<rootDir>/build",
  ],
  transform: {
    "\\.(gql|graphql)$": "jest-transform-graphql",
    "\\.tsx?$": "babel-jest",
  },
  globals: {},
};
