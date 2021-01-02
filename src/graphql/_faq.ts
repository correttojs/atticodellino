import { ReservationQueryVariables } from "../components/FormRegister/register.generated";
import {
  ApartmentCodeByIdDocument,
  FaqsDocument,
} from "../generated/graphql-takeshape-doc";
import { graphcmsGQLClient } from "./graphcms/client";
import { takeShapeRequest } from "./takeshape/takeShapeClient";
import { getLangByPhone } from "./_util";

export const faq = async (parent, args: ReservationQueryVariables, context) => {
  const result = await graphcmsGQLClient.getReservation({
    input: args.hash,
  });
  const reservation = result.reservations?.[0];

  const data = await takeShapeRequest(FaqsDocument, {
    apartment: reservation?.home,
    lang: getLangByPhone(reservation?.phone),
  });

  return data?.getFaqList?.items;
};
