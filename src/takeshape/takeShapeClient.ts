import { GraphQLClient } from "graphql-request";

import { getSdk, FaqsQuery } from "../generated/graphql-takeshape";

const client = new GraphQLClient(
  `https://api.takeshape.io/project/${process.env.TAKESHAPE_PROJECT}/graphql`,
  {
    headers: {
      Authorization: `Bearer ${process.env.TAKESHAPE_API_KEY}`,
    },
  }
);

export const takeShapeGQLClient = getSdk(client);
