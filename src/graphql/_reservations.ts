import { graphcmsGQLClient } from "./graphcms/client";
import {
  MutationUpdateReservationStatusArgs,
  ReservationQueryVariables,
} from "../generated/graphql";

export const reservations = async (parent, args, context) => {
  if (context.session.user.name !== "lino") throw new Error("Invalid session");
  const apartments = await graphcmsGQLClient.getApartments();
  const storedReservations = await graphcmsGQLClient.getReservations({
    input: new Date("2020-01-01").toISOString(),
  });
  return storedReservations.reservations.map((r) => ({
    ...r,
    home: apartments.apartments.find((a) => a.code === r.home).name,
  }));
};

export const reservation = async (
  parent,
  args: ReservationQueryVariables,
  context
) => {
  if (context.session.user.name !== "lino") throw new Error("Invalid session");
  const apartments = await graphcmsGQLClient.getApartments();
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
  return storedReservations.updateReservation.reservationStatus;
};
