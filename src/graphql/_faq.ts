import { ReservationQueryVariables } from "../components/FormRegister/register.generated";
import { GetReservationDocument } from "../generated/graphql-graphcms";
import { FaqsDocument } from "../generated/graphql-takeshape-doc";
import { graphCmsRequest } from "./graphcms";
import { takeShapeRequest } from "./takeshape";
import { getLangByPhone } from "./_util";

export const faq = async (parent, args: ReservationQueryVariables, context) => {
  const result = await graphCmsRequest(GetReservationDocument, {
    input: args.hash,
  });
  const reservation = result.reservations?.[0];

  const data = await takeShapeRequest(FaqsDocument, {
    apartment: reservation?.home,
    lang: getLangByPhone(reservation?.phone),
  });

  return data?.getFaqList?.items;
};
