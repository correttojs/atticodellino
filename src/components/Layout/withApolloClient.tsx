import { ApolloProvider } from "@apollo/client";
import { NextPage } from "next";
import { gqlClient } from "./gqlClient";

export const withApolloClient = (PageComponent: (props) => JSX.Element) => (
  props
) => (
  <ApolloProvider client={gqlClient}>
    <PageComponent {...props} />
  </ApolloProvider>
);
