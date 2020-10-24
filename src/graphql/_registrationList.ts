import { takeShapeGQLClient } from "../takeshape/takeShapeClient";

export const registrationListResolver = async (parent, args, context) => {
  console.log(context.session.user.name);
  if (context.session.user.name !== "lino") throw new Error("Invalid session");
  return (await takeShapeGQLClient.getRegistrations()).getRegistrationsList;
};