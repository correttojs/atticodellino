import {
  MutationRegisterArgs,
  MutationRegisterConfirmationArgs,
} from "../generated/graphql";
import { streamTo64 } from "./_streamToBase64";
import { takeShapeGQLClient } from "../takeshape/takeShapeClient";
import { GetRegistrationQuery } from "../generated/graphql-takeshape";

const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SEND_GRID_API);

const FROM = `"L'attico del Lino" <${process.env.NEXT_PUBLIC_FROM_EMAIL}>`;

export const registerMutation = async (
  _,
  { file, user }: MutationRegisterArgs
) => {
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
      registrationStatus: "To Be Confirmed",
    },
  });

  return data?.createRegistrations?.result;
};

export const registerConfirmationMutation = async (
  _,
  { userId }: MutationRegisterConfirmationArgs,
  context
) => {
  if (context.session.user.name !== "lino") throw new Error("Invalid session");
  const { getRegistrations: user } = await takeShapeGQLClient.getRegistration({
    id: userId,
  });

  const code = await takeShapeGQLClient.ApartmentCode({
    key: user.apartmentKey,
  });

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
       
        
        <p>Apartment code: ${code.getApartmentList.items[0].code}</p>
    `,
  };
  await sgMail.send([content]);
  // return result;

  const data = await takeShapeGQLClient.updateRegistrations({
    input: {
      _id: userId,
      apartmentKey: user.apartmentKey,
      registrationStatus: "Confirmed",
    },
  });

  return data?.updateRegistrations?.result;
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
