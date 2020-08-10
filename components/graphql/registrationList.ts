import { takeShapeGQLClient } from "../takeshape/takeShapeClient";

export const registrationList = async (parent, args, context) => {
  console.log(context.session.user.name);
  if (context.session.user.name !== "Lino") return null;
  return (await takeShapeGQLClient.getRegistrations()).getRegistrationsList;
};
