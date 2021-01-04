import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from "react-query";
import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(`/api/graphql`);

export const gqlRequest = <TData, TVariables>(
  document: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables
) => client.request<TData, TVariables>(document, variables);

export const useReactQuery = <TData, TVariables>(
  document: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables,
  options?: UseQueryOptions<TData, any, TData>
) =>
  useQuery<TData>(
    `${(document.definitions[0] as any)?.name?.value}${JSON.stringify(
      variables
    )}`,
    () => {
      return gqlRequest(document, variables);
    },
    options
  );

export const useReactMutation = <TData, TVariables>(
  document: TypedDocumentNode<TData, TVariables>,
  options?: UseMutationOptions<TData, any, TVariables, any>
) => {
  return useMutation(
    (variables: TVariables) => gqlRequest(document, variables),
    options
  );
};
