import { graphcmsGQLClient } from "./graphcms/client";
import {
  MutationUpdateReservationStatusArgs,
  ReservationQueryVariables,
} from "../generated/graphql";
import { smsRegisterLink } from "./_sms";
import { getLangByPhone } from "./_lang";

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
      registrationUrl: `https://www.atticodellino.com/${getLangByPhone(
        r.phone
      )}/register?hash=${r.hash}&id=${r.id}`,
      faqUrl: `https://www.atticodellino.com/${getLangByPhone(
        r.phone
      )}/faq?hash=${r.hash}&id=${r.id}`,
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
  await smsRegisterLink(
    phone,
    `https://www.atticodellino.com/${getLangByPhone(phone)}/register?hash=${
      rest.hash
    }&id=${rest.id}`
  );
  return storedReservations.updateReservation.reservationStatus;
};
