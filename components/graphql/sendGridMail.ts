import {
  MutationSendMailArgs,
  MutationBookArgs,
} from "../../generated/graphql";
import { streamTo64 } from "./streamToBase64";

const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SEND_GRID_API);

export const sendGridMail = async ({ file, user }: MutationSendMailArgs) => {
  const { createReadStream, filename, mimetype } = await file;
  const b64 = await streamTo64(createReadStream());
  const content = {
    to:
      process.env.NODE_ENV === "development"
        ? process.env.FIRST_EMAIL
        : process.env.SECOND_EMAIL,
    from: `"L'attico del Lino" <${process.env.NEXT_PUBLIC_FROM_EMAIL}>`, // sender address
    subject: `Registration request from L'attico del Lino`, // Subject line
    html: `
                <h1>Registration Request</h1>
                <p>User: ${user.firstName} ${user.lastName}</p>
                <p>Document: ${user.documentType} - ${user.documentNumber}</p>
                <p>Birth: ${user.birthDate} - ${user.nationality} - ${user.placeOfBirth}</p>
                <p>Apartment: ${user.apartment}</p>
            `,
    attachments: [
      {
        filename,
        content: b64,
        type: mimetype,
        disposition: "attachment",
        contentId: filename,
      },
    ],
  };

  const meContent = { ...content, to: process.env.FIRST_EMAIL };
  await sgMail.send([content, meContent]);

  return {
    firstName: user.firstName,
    lastName: user.lastName,
    apartment: user.apartment,
    code:
      user.apartment === "GARDA" ? process.env.CODE_GARDA : process.env.CODE_VR,
  };
};

export const sendBookMail = async ({ user }: MutationBookArgs) => {
  const content = {
    to:
      process.env.NODE_ENV === "development"
        ? process.env.FIRST_EMAIL
        : process.env.SECOND_EMAIL,
    from: `"L'attico del Lino" <${process.env.NEXT_PUBLIC_FROM_EMAIL}>`, // sender address
    subject: `Booking request from L'attico del Lino`, // Subject line
    html: `
                <h1>Registration Request</h1>
                <p>User: ${user.firstName} ${user.lastName}</p>
                <p>Document: ${user.email} </p>
            `,
  };

  const meContent = { ...content, to: process.env.FIRST_EMAIL };
  await sgMail.send([content, meContent]);

  return {
    firstName: user.firstName,
    lastName: user.lastName,
  };
};
