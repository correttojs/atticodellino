import { ReservationQueryVariables } from "../generated/graphql";
import { graphcmsGQLClient } from "./graphcms/client";
import { takeShapeGQLClient } from "./takeshape/takeShapeClient";
import { getLangByPhone } from "./_util";

export const faq = async (parent, args: ReservationQueryVariables, context) => {
  const result = await graphcmsGQLClient.getReservation({
    input: args,
  });

  const apartment = await takeShapeGQLClient.ApartmentCodeById({
    key: result.reservation?.home,
  });

  const data = await takeShapeGQLClient.Faqs({
    apartment: apartment?.getApartmentList?.items?.[0]?.key,
    lang: getLangByPhone(result.reservation?.phone),
  });

  return data?.getFaqList?.items;
};
