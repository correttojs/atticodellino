import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(`/api/graphql`);

export const gqlRequest = <TData, TVariables>(
  document: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables
) => client.request<TData, TVariables>(document, variables);
