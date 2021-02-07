module.exports = (api) => {
  api.cache(true);
  const plugins = [
    "babel-plugin-macros",
    [
      "styled-components",
      {
        ssr: true,
        displayName: true,
        preprocess: false,
      },
    ],
  ];
  if (
    process.env.NODE_ENV !== "test" &&
    process.env.VERCEL_ENV !== "production"
  ) {
    plugins.push("istanbul");
  }
  return {
    presets: ["next/babel"],
    plugins,
  };
};
