import {
  MutationSendMailArgs,
  MutationBookArgs,
} from "../../generated/graphql";
import { streamTo64 } from "./streamToBase64";
import { takeShapeGQLClient } from "../takeshape/takeShapeClient";
import { GetRegistrationQuery } from "../../generated/graphql-takeshape";

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
  const { apartment, ...input } = user;

  const data = await takeShapeGQLClient.sendRegistration({
    input: {
      ...input,
      apartmentKey: apartment,
      _enabled: false,
    },
  });

  return {
    firstName: data?.createRegistrations?.result?.firstName,
    lastName: data?.createRegistrations?.result?.lastName,
    email: data?.createRegistrations?.result?.email,
  };
};

export const confirmEmail = async (result: GetRegistrationQuery) => {
  const user = result?.getRegistrations;
  const content = {
    to: user.email,
    from: `"L'attico del Lino" <${process.env.NEXT_PUBLIC_FROM_EMAIL}>`, // sender address
    subject: `Registration request from L'attico del Lino`, // Subject line
    html: `
                <h1>Registration Confirmation</h1>
                <p>User: ${user.firstName} ${user.lastName}</p>
                <p>Document: ${user.documentType} - ${user.documentNumber}</p>
                <p>Birth: ${user.birthDate} - ${user.nationality} - ${
      user.placeOfBirth
    }</p>
                <p>Apartment code: ${
                  user.apartmentKey === "GARDA"
                    ? process.env.CODE_GARDA
                    : process.env.CODE_VR
                }</p>
            `,
  };
  await sgMail.send([content]);
  return result;
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
