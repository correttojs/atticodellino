import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { GraphQLClient } from "graphql-request";
import useSWR, { responseInterface } from "swr";

const client = new GraphQLClient(`/api/graphql`);

export const useSwrQuery = <TData, TVariables>(
  key: string,
  document: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables
) => {
  return useSWR<TData>(key, () => {
    return client.request(document, variables);
  });
};

export const useSwrMutation = <TData, TVariables>(
  key: string,
  document: TypedDocumentNode<TData, TVariables>
): [(variables?: TVariables) => void, responseInterface<TData, any>] => {
  const swrResult = useSWR<TData>(key, async (arg) => {
    return swrResult.data;
  });
  const doMutation = async (variables?: TVariables) => {
    const data = await client.request(document, variables);
    swrResult.mutate(data, true);
  };
  return [doMutation, swrResult];
};
