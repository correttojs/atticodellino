import { ApolloServer } from "apollo-server-micro";
import { getSession } from "next-auth/client";
import { typeDefs } from "../../components/graphql/typeDefs";
import { resolvers } from "../../components/graphql/resolvers";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const session = await getSession({ req });
    return { session };
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const graphqlHandler = apolloServer.createHandler({ path: "/api/graphql" });

export default async (req, res) => {
  if (req.query.file) {
  }
  return graphqlHandler(req, res);
};
