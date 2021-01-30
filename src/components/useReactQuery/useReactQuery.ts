import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { GraphQLClient } from "graphql-request";
import {
  UseMutationOptions,
  UseQueryOptions,
  useMutation,
  useQuery,
} from "react-query";

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
