import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";
import fetch from "isomorphic-unfetch";

import { createUploadLink } from "apollo-upload-client";
import { ApolloClient } from "apollo-client";

const uploadLink = createUploadLink({ uri: "/api/graphql" });

const httpLink = createHttpLink({
  uri: "/api/graphql",
  fetch
});

const cache = new InMemoryCache();
const link = ApolloLink.from([uploadLink]);

export const gqlClient = new ApolloClient({
  link,
  cache,
  connectToDevTools: process.env.NODE_ENV === "development"
});
