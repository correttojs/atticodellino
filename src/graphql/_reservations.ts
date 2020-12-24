import { graphcmsGQLClient } from "./graphcms/client";
import {
  MutationUpdateReservationStatusArgs,
  ReservationStatus,
} from "../generated/graphql";
import { smsRegisterLink } from "./_sms";
import { faqLink, getLangByPhone, registerLink } from "./_util";
import { ReservationQueryVariables } from "../components/FormRegister/register.generated";
import { takeShapeGQLClient } from "./takeshape/takeShapeClient";

export const reservations = async (parent, args, context) => {
  if (context.session.user.name !== "lino") throw new Error("Invalid session");
  const apartments = await graphcmsGQLClient.getApartments();
  const storedReservations = await graphcmsGQLClient.getReservations({
    input: args.isPast
      ? new Date("2020-01-01").toISOString()
      : new Date().toISOString(),
  });
  return storedReservations.reservations.map((r) => {
    return {
      ...r,
      home: apartments.apartments.find((a) => a.code === r.home).name,
      registrationUrl: registerLink(r),
      faqUrl: faqLink(r),
    };
  });
};

export const reservation = async (
  parent,
  args: ReservationQueryVariables,
  context
) => {
  const storedReservations = await graphcmsGQLClient.getReservation({
    input: args.hash,
  });
  const result = storedReservations.reservations?.[0];
  const apartments = await takeShapeGQLClient.ApartmentCodeById({
    key: result?.home,
  });
  const tomorrow = new Date();
  tomorrow.setDate(new Date().getDate() + 1);
  const isExpired =
    new Date(result?.check_out.toString()).getTime() - tomorrow.getTime() < 0;

  return {
    ...result,
    address: apartments?.getApartmentList?.items?.[0]?.address,
    displayHome: apartments?.getApartmentList?.items?.[0]?.name,
    code:
      isExpired || !result?.guests?.length
        ? null
        : apartments?.getApartmentList?.items?.[0]?.code,
    isExpired,
  };
};

export const updateReservationStatus = async (
  parent,
  args: MutationUpdateReservationStatusArgs,
  context
) => {
  if (context.session.user.name !== "lino") throw new Error("Invalid session");
  const { reservationStatus, ...rest } = args;

  const storedReservations = await graphcmsGQLClient.updateReservation({
    input: rest,
    data: { reservationStatus: reservationStatus as any },
  });

  if (args.reservationStatus === ReservationStatus.LinkSent) {
    const phone = storedReservations?.updateReservation?.phone;
    await smsRegisterLink({
      phone,
      link: registerLink({ ...rest, phone }),
      hash: rest.hash,
    });
  }

  return storedReservations.updateReservation.reservationStatus;
};
