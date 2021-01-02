import { graphCmsRequest } from "./graphcms";
import {
  MutationUpdateReservationStatusArgs,
  ReservationStatus,
} from "../generated/graphql";
import { smsRegisterLink } from "./_sms";
import { faqLink, getLangByPhone, registerLink } from "./_util";
import { ReservationQueryVariables } from "../components/FormRegister/register.generated";
import { takeShapeRequest } from "./takeshape/takeShapeClient";
import { ApartmentCodeByAirBnbIdDocument } from "../generated/graphql-takeshape-doc";
import {
  GetReservationDocument,
  GetReservationsDocument,
  UpdateReservationDocument,
} from "../generated/graphql-graphcms";

export const reservations = async (parent, args, context) => {
  if (context.session.user.name !== "lino") throw new Error("Invalid session");
  const storedReservations = await graphCmsRequest(GetReservationsDocument, {
    input: args.isPast
      ? new Date("2020-01-01").toISOString()
      : new Date().toISOString(),
  });
  return storedReservations.reservations.map((r) => {
    return {
      ...r,
      home: storedReservations.apartments.find((a) => a.code === r.home).name,
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
  const storedReservations = await graphCmsRequest(GetReservationDocument, {
    input: args.hash,
  });
  const result = storedReservations.reservations?.[0];
  const apartments = await takeShapeRequest(ApartmentCodeByAirBnbIdDocument, {
    key: result?.home,
  });
  const apartment = apartments?.getApartmentList?.items?.[0];

  const tomorrow = new Date();
  tomorrow.setDate(new Date().getDate() + 1);
  const isExpired =
    new Date(result?.check_out.toString()).getTime() - tomorrow.getTime() < 0;

  return {
    ...result,
    address: apartment?.address,
    displayHome: apartment?.name,
    code: isExpired || !result?.guests?.length ? null : apartment?.code,
    isExpired,
    airbnbLink: apartment?.airbnbLink,
    mapLink: apartment?.mapLink,
  };
};

export const updateReservationStatus = async (
  parent,
  args: MutationUpdateReservationStatusArgs,
  context
) => {
  if (context.session.user.name !== "lino") throw new Error("Invalid session");
  const { reservationStatus, ...rest } = args;

  const storedReservations = await graphCmsRequest(UpdateReservationDocument, {
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
