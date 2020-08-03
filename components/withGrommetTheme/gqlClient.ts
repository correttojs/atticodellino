import {
  InMemoryCache,
  NormalizedCacheObject,
  ApolloLink,
  ApolloClient,
} from "@apollo/client";

import { createUploadLink } from "apollo-upload-client";

const uploadLink = createUploadLink({ uri: "/api/graphql" }) as any;

const cache = new InMemoryCache();
const link = ApolloLink.from([uploadLink]);

export const gqlClient = new ApolloClient({
  link,
  cache,
  connectToDevTools: process.env.NODE_ENV === "development",
});
