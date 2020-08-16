import { takeShapeGQLClient } from "../components/takeshape/takeShapeClient";

export const registrationList = async (parent, args, context) => {
  console.log(context.session.user.name);
  if (context.session.user.name !== "lino") throw new Error("Invalid session");
  return (await takeShapeGQLClient.getRegistrations()).getRegistrationsList;
};
