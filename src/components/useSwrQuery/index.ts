import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { GraphQLClient } from "graphql-request";
import { useState } from "react";
import useSWR, { ConfigInterface, responseInterface } from "swr";

const client = new GraphQLClient(`/api/graphql`);

export const useSwrQuery = <TData, TVariables>(
  key: string,
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
  const swrResult = useSWR<TData>(key, () => swrResult.data, {
    revalidateOnFocus: false,
  });
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

// fetch("https://dev.atticodellino.com/api/graphql", {
//   "headers": {
//     "accept": "*/*",
//     "accept-language": "en-US,en;q=0.9,de-DE;q=0.8,de;q=0.7,it-IT;q=0.6,it;q=0.5,es-ES;q=0.4,es;q=0.3",
//     "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryQjxEwbhGEopfr88S",
//     "sec-ch-ua": "\"Google Chrome\";v=\"87\", \" Not;A Brand\";v=\"99\", \"Chromium\";v=\"87\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin"
//   },
//   "referrer": "https://dev.atticodellino.com/register?hash=97bd28fdef101dc4aa389196c3de1ffa",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": "------WebKitFormBoundaryQjxEwbhGEopfr88S\r\nContent-Disposition: form-data; name=\"operations\"\r\n\r\n{\"operationName\":\"register\",\"variables\":{\"user\":{\"check_out\":\"2022-01-02\",\"home\":\"17443763\",\"phone\":\"+4915144165279\",\"hash\":\"97bd28fdef101dc4aa389196c3de1ffa\",\"guests\":[{\"firstName\":\"Fabio\",\"lastName\":\"Benedetti\",\"documentNumber\":\"1212e\",\"documentType\":\"Passport\",\"documentPlace\":\"\",\"nationality\":\"italian\",\"placeOfBirth\":\"\",\"birthDate\":\"1922-02-01\"}]},\"file\":[null]},\"query\":\"mutation register($user: UserInput!, $file: [Upload]!) {\\n  registerGuests(user: $user, file: $file)\\n}\\n\"}\r\n------WebKitFormBoundaryQjxEwbhGEopfr88S\r\nContent-Disposition: form-data; name=\"map\"\r\n\r\n{\"1\":[\"variables.file.0\"]}\r\n------WebKitFormBoundaryQjxEwbhGEopfr88S\r\nContent-Disposition: form-data; name=\"1\"; filename=\"201229YKGJGCCY172733.pdf\"\r\nContent-Type: application/pdf\r\n\r\n\r\n------WebKitFormBoundaryQjxEwbhGEopfr88S--\r\n",
//   "method": "POST",
//   "mode": "cors",
//   "credentials": "include"
// });
