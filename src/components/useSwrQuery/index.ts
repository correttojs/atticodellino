import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { GraphQLClient } from "graphql-request";
import { useState } from "react";
import useSWR, { responseInterface } from "swr";

const client = new GraphQLClient(`/api/graphql`);

export const gqlRequest = <TData, TVariables>(
  document: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables
) => client.request<TData, TVariables>(document, variables);

export const useSwrQuery = <TData, TVariables>(
  key: string | null,
  document: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables
) =>
  useSWR<TData>(
    key,
    () => {
      return client.request(document, variables);
    },
    {
      revalidateOnFocus: false,
    }
  );

export const useSwrMutation = <TData, TVariables>(
  key: string,
  document: TypedDocumentNode<TData, TVariables>,
  config?: { onCompleted: (variables?: TVariables) => void }
): [
  (variables?: TVariables) => void,
  responseInterface<TData, any> & { isLoading: boolean }
] => {
  const [isLoading, setIsLoading] = useState(false);
  const swrResult: responseInterface<TData, any> = useSWR<TData>(
    key,
    () => swrResult.data as any,
    {
      revalidateOnFocus: false,
    }
  );
  const exec = async (variables?: TVariables) => {
    setIsLoading(true);
    const data = await client.request(document, variables);
    swrResult.mutate(data, true);
    if (config?.onCompleted) {
      config?.onCompleted(variables);
    }
    setIsLoading(false);
  };
  return [exec, { ...swrResult, isLoading }];
};
