import { graphcmsGQLClient } from "./graphcms/client";
import { MutationRegisterGuestsArgs } from "../generated/graphql";
import { streamTo64 } from "./_streamToBase64";
import { GuestStatus } from "../generated/graphql-graphcms";
import { smsConfirmLink, smsReminderLink } from "./_sms";
import { takeShapeGQLClient } from "./takeshape/takeShapeClient";
import { faqLink, getLangByPhone } from "./_util";
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SEND_GRID_API);

const sendEmail = async ({
  file,
  user,
  apartmentCode,
}: MutationRegisterGuestsArgs & { apartmentCode: string }) => {
  const files = await Promise.all(file);
  console.log(files, user);
  let attachments = [];
  if (files?.[0]) {
    const streams = await Promise.all(
      files?.map((item) => {
        if (item) {
          const { createReadStream } = item;
          return streamTo64(createReadStream());
        }
        return null;
      })
    );

    attachments = files?.map(({ filename, mimetype }, i) => {
      return {
        filename,
        content: streams[i],
        type: mimetype,
        disposition: "attachment",
        contentId: filename,
      };
    });
  }

  const content = {
    to: process.env.NEXT_PUBLIC_FROM_EMAIL,
    from: `info@atticodellino.com`, // sender address
    subject: `Registration request from L'attico del Lino`, // Subject line
    html: `
        <h1>Registration Request ${user.phone}</h1>
        <p>Phone: ${user.phone}</p>
        <p>Apartment: ${apartmentCode}</p>
        <p>Checkout: ${user.check_out}</p>
        ${user.guests.map((item) => {
          return `
             <p>User: ${item.firstName} ${item.lastName}</p>
            <p>Document: ${item.documentType} - ${item.documentNumber}</p>
            <p>Birth: ${item.birthDate} - ${item.nationality} - ${item.placeOfBirth}</p>`;
        })}
    `,
    attachments,
  };
  try {
    await sgMail.send([content]);
  } catch (e) {
    console.error(e);
  }
};

export const registerGuests = async (
  _,
  { file, user }: MutationRegisterGuestsArgs
) => {
  const { guests, phone, home, check_out, ...input } = user;

  const apartment = await takeShapeGQLClient.ApartmentCodeById({ key: home });
  const apartmentCode = apartment?.getApartmentList?.items?.[0]?.code;
  await sendEmail({ file, user, apartmentCode });

  const data = await graphcmsGQLClient.updateReservation({
    input,
    data: {
      guests: {
        create: guests,
      },
      reservationStatus: GuestStatus.Registered,
    },
  });

  await smsConfirmLink(
    phone,
    faqLink({ ...input, phone }),
    apartment?.getApartmentList?.items?.[0]?.code
  );

  await smsReminderLink(phone, `${check_out}103010`);

  return data?.updateReservation?.reservationStatus;
};
