import { ApolloServer } from "apollo-server-micro";

import { typeDefs } from "../../components/graphql/typeDefs";
import { resolvers } from "../../components/graphql/resolvers";

const apolloServer = new ApolloServer({ typeDefs, resolvers });

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
