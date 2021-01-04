import { ApolloServer } from "apollo-server-micro";
import { getSession } from "next-auth/client";
import { typeDefs } from "../../graphql/typeDefs";
import { resolvers } from "../../graphql/resolvers";
import type { NextApiRequest, NextApiResponse } from "next";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers: resolvers as any,
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

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.query.file) {
  }
  return graphqlHandler(req, res);
};
