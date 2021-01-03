import {
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
  ApolloClient,
} from "@apollo/client";

import { createUploadLink } from "apollo-upload-client";

const uploadLink = createUploadLink({ uri: "/api/graphql" }) as any;

const cache = new InMemoryCache();
const link = ApolloLink.from([uploadLink]);

const gqlClient = new ApolloClient({
  link,
  cache,
  connectToDevTools: process.env.NODE_ENV === "development",
});

export const withApolloClient = (PageComponent: (props) => JSX.Element) => (
  props
) => (
  <ApolloProvider client={gqlClient}>
    <PageComponent {...props} />
  </ApolloProvider>
);
