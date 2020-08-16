require("dotenv").config({ path: ".env.local" });
const { generate } = require("@graphql-codegen/cli");

async function run() {
  await generate(
    {
      schema: "http://localhost:3000/api/graphql",
      documents: "src/components/**/*.graphql",
      generates: {
        [process.cwd() + "/src/generated/graphql.tsx"]: {
          plugins: [
            "typescript",
            "typescript-operations",
            "typescript-react-apollo",
          ],
          config: {
            withHooks: true,
            withHOC: false,
            withComponent: false,
            gqlImport: "graphql-tag",
          },
        },
        [process.cwd() + "/src/graphql.schema.json"]: {
          plugins: ["introspection"],
        },
      },
    },
    true
  );
  await generate(
    {
      schema: {
        [`https://api.takeshape.io/project/${process.env.TAKESHAPE_PROJECT}/graphql`]: {
          headers: {
            Authorization: `Bearer ${process.env.TAKESHAPE_API_KEY}`,
          },
        },
      },
      documents: "src/takeshape/*.graphql",
      generates: {
        [process.cwd() + "/src/generated/graphql-takeshape.ts"]: {
          plugins: [
            "typescript",
            "typescript-operations",
            "typescript-graphql-request",
          ],
          config: {
            withHooks: true,
            withHOC: false,
            withComponent: false,
            reactApolloVersion: 3,
            // gqlImport: "@apollo/client",
          },
        },
      },
    },
    true
  );
}

run();
