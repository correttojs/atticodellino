import { GetReservationDocument } from "@/generated/graphql-graphcms";
import { FaqsDocument } from "@/generated/graphql-takeshape-doc";
import { Faq, QueryResolvers } from "@/generated/resolvers-types";

import { graphCmsRequest } from "./graphcms";
import { ResolverContext } from "./resolvers";
import { takeShapeRequest } from "./takeshape";

export const faq: QueryResolvers<ResolverContext>["faq"] = async (
  parent,
  args
) => {
  const result = await graphCmsRequest(GetReservationDocument, {
    input: args.hash,
  });
  const reservation = result.reservations?.[0];

  const data = await takeShapeRequest(FaqsDocument, {
    apartment: reservation?.home,
    lang: "en",
  });

  return data?.getFaqList?.items as Faq[];
};
