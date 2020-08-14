import {
  MutationSendMailArgs,
  MutationBookArgs,
} from "../../generated/graphql";
import { streamTo64 } from "./streamToBase64";
import { takeShapeGQLClient } from "../takeshape/takeShapeClient";
import { GetRegistrationQuery } from "../../generated/graphql-takeshape";

const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SEND_GRID_API);

const FROM = `"L'attico del Lino" <${process.env.NEXT_PUBLIC_FROM_EMAIL}>`;

export const sendGridMail = async ({ file, user }: MutationSendMailArgs) => {
  const files = await Promise.all(file);
  const streams = await Promise.all(
    files.map(({ createReadStream }) => {
      return streamTo64(createReadStream());
    })
  );
  const attachments = files.map(({ filename, mimetype }, i) => {
    return {
      filename,
      content: streams[i],
      type: mimetype,
      disposition: "attachment",
      contentId: filename,
    };
  });

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
       
        <p>Apartment: ${user.apartment}</p>
    `,
    attachments,
  };

  await sgMail.send([content]);
  const { apartment, ...input } = user;

  const data = await takeShapeGQLClient.sendRegistration({
    input: {
      ...input,
      apartmentKey: apartment,
      _enabled: false,
    },
  });

  return {
    email: data?.createRegistrations?.result?.email,
    guests: data?.createRegistrations?.result?.guests.map((item) => ({
      firstName: item?.firstName,
      lastName: item?.lastName,
    })),
  };
};

export const confirmEmail = async (
  result: GetRegistrationQuery,
  code: string
) => {
  const user = result?.getRegistrations;
  const content = {
    to: user.email,
    from: FROM, // sender address
    subject: `Registration request from L'attico del Lino`, // Subject line
    html: `
        <h1>Registration Confirmation</h1>
        ${user.guests.map((item) => {
          return `
             <p>User: ${item.firstName} ${item.lastName}</p>
            <p>Document: ${item.documentType} - ${item.documentNumber}</p>
            <p>Birth: ${item.birthDate} - ${item.nationality} - ${item.placeOfBirth}</p>`;
        })}
       
        
        <p>Apartment code: ${code}</p>
    `,
  };
  await sgMail.send([content]);
  return result;
};

export const sendBookMail = async ({ user }: MutationBookArgs) => {
  const content = {
    to: process.env.NEXT_PUBLIC_FROM_EMAIL,
    from: FROM, // sender address
    subject: `Booking request from L'attico del Lino`, // Subject line
    html: `
        <h1>Registration Request</h1>
        <p>User: ${user.firstName} ${user.lastName}</p>
        <p>Document: ${user.email} </p>
    `,
  };

  await sgMail.send([content]);

  return {
    firstName: user.firstName,
    lastName: user.lastName,
  };
};
