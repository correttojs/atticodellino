import { graphcmsGQLClient } from "./graphcms/client";
import { MutationRegisterGuestsArgs } from "../generated/graphql";
import { streamTo64 } from "./_streamToBase64";
import { GuestStatus } from "../generated/graphql-graphcms";
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SEND_GRID_API);

const FROM = `"L'attico del Lino" <${process.env.NEXT_PUBLIC_FROM_EMAIL}>`;

export const registerGuests = async (
  _,
  { file, user }: MutationRegisterGuestsArgs
) => {
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
    from: FROM, // sender address
    subject: `Registration request from L'attico del Lino`, // Subject line
    html: `
        <h1>Registration Request</h1>
        ${user.guests.map((item) => {
          return `
             <p>User: ${item.firstName} ${item.lastName}</p>
            <p>Document: ${item.documentType} - ${item.documentNumber}</p>
            <p>Birth: ${item.birthDate} - ${item.nationality} - ${item.placeOfBirth}</p>`;
        })}
       
  
    `,
    attachments,
  };

  await sgMail.send([content]);
  const { guests, phone, ...input } = user;

  const data = await graphcmsGQLClient.updateReservation({
    input,
    data: {
      guests: {
        create: guests,
      },
      reservationStatus: GuestStatus.Registered,
    },
  });

  return data?.updateReservation?.reservationStatus;
};
