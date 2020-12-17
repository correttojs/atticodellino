import { graphcmsGQLClient } from "../graphcms/client";
import { AirBnbClient } from "airbnb-private-api";
import * as crypto from "crypto";

const getAirBnbReservations = async () => {
  let airbnb = new AirBnbClient({
    email: process.env.AIRBNB_EMAIL,
    password: process.env.AIRBNB_PASSWORD,
    session_store: null,
  });

  const token = await graphcmsGQLClient.getToken();

  airbnb.session = token.tokens[0].token;
  airbnb.auth_token = airbnb.session.token;
  airbnb.authenticated = true;

  const res = await airbnb._get_reservations({
    _limit: 50,
    include_canceled: false,
  } as any);
  const reservationDetails = await Promise.all(
    res.reservations
      .filter((r) => r.status !== "cancelled")
      .map((r) => airbnb._get_reservation_details(r.thread_id))
  );

  return reservationDetails.map((detail: any) => {
    const {
      check_in,
      check_out,
      guest_name,
      guest: { phone },
    } = detail.homes_booking_detail.reservation;

    const hash = crypto
      .createHash("md5")
      .update(`${check_in}${check_out}${guest_name}`)
      .digest("hex");

    return {
      check_in,
      check_out,
      guest_name,
      phone,
      hash,
    };
  });
};

export const syncReservations = async () => {
  const result = await getAirBnbReservations();
  const storedReservations = await graphcmsGQLClient.getReservations({
    input: new Date().toISOString(),
  });

  const hashes = storedReservations.reservations.map((r) => r.hash);
  const toBeAdded = result.filter((r) => hashes.includes(r.hash));

  await Promise.all(
    toBeAdded.map((r) => graphcmsGQLClient.createReservation({ input: r }))
  );

  return [...storedReservations.reservations, ...toBeAdded];
};

export const getReservations = async () => {
  const storedReservations = await graphcmsGQLClient.getReservations({
    input: new Date().toISOString(),
  });
  return storedReservations.reservations;
};
