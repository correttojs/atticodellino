import { graphcmsGQLClient } from "./graphcms/client";
import {
  MutationUpdateReservationStatusArgs,
  ReservationStatus,
} from "../generated/graphql";
import { smsRegisterLink } from "./_sms";
import { faqLink, getLangByPhone, registerLink } from "./_util";
import { ReservationQueryVariables } from "../components/FormRegister/register.generated";

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
  return storedReservations.reservations?.[0];
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
