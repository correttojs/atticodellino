import { ReservationQueryVariables } from "../components/FormRegister/register.generated";
import { graphcmsGQLClient } from "./graphcms/client";
import { takeShapeGQLClient } from "./takeshape/takeShapeClient";
import { getLangByPhone } from "./_util";

export const faq = async (parent, args: ReservationQueryVariables, context) => {
  const result = await graphcmsGQLClient.getReservation({
    input: args.hash,
  });
  const reservation = result.reservations?.[0];
  const apartment = await takeShapeGQLClient.ApartmentCodeById({
    key: reservation?.home,
  });

  const data = await takeShapeGQLClient.Faqs({
    apartment: apartment?.getApartmentList?.items?.[0]?.key,
    lang: getLangByPhone(reservation?.phone),
  });

  return data?.getFaqList?.items;
};
