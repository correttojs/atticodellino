import { graphCmsRequest } from "./graphcms";
import { AirBnbClient } from "airbnb-private-api";
import * as crypto from "crypto";
import { reservations } from "./_reservations";
import {
  CreateReservationDocument,
  GetTokenDocument,
  GuestStatus,
} from "../generated/graphql-graphcms";

const getAirBnbReservations = async () => {
  let airbnb = new AirBnbClient({
    email: process.env.AIRBNB_EMAIL,
    password: process.env.AIRBNB_PASSWORD,
    session_store: null,
  });

  const token = await graphCmsRequest(GetTokenDocument);

  airbnb.session = token.tokens[0].token;
  airbnb.auth_token = airbnb.session.token;
  airbnb.authenticated = true;

  const res = await airbnb._get_reservations({
    _limit: 50,
    include_canceled: false,
    // start_date: "2020-01-01",
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
    const { listing_id_str: home } = detail.homes_booking_detail.listing;

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
      home,
      reservationStatus: GuestStatus.New,
    };
  });
};

export const syncReservations = async (parent, args, context) => {
  if (context.session.user.name !== "lino") throw new Error("Invalid session");
  const result = await getAirBnbReservations();

  const storedReservations = await reservations(parent, args, context);

  const hashes = storedReservations.map((r) => r.hash);
  const toBeAdded = result.filter((r) => !hashes.includes(r.hash));
  console.log(toBeAdded);
  const added = await Promise.all(
    toBeAdded.map((r) =>
      graphCmsRequest(CreateReservationDocument, { input: r })
    )
  );

  return [...added.map((r) => r.createReservation), ...storedReservations];
};
