import { GraphQLClient } from "graphql-request";

import { getSdk } from "../../generated/graphql-graphcms";

const client = new GraphQLClient(
  `https://api-eu-central-1.graphcms.com/v2/${process.env.GQL_CMS_ID}/master`,
  {
    headers: {
      Authorization: `Bearer ${process.env.GQL_CMS_TOKEN}`,
    },
  }
);

export const graphcmsGQLClient = getSdk(client);
