import { graphcmsGQLClient } from "./graphcms/client";
import {
  MutationUpdateReservationStatusArgs,
  ReservationQueryVariables,
} from "../generated/graphql";
import { smsRegisterLink } from "./_sms";
import { faqLink, getLangByPhone, registerLink } from "./_util";

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
    input: args,
  });
  return storedReservations.reservation;
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

  const phone = storedReservations?.updateReservation?.phone;
  await smsRegisterLink(phone, registerLink({ ...rest, phone }));
  return storedReservations.updateReservation.reservationStatus;
};