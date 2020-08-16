import { takeShapeGQLClient } from "../../components/takeshape/takeShapeClient";
import { confirmEmail } from "../../graphql/sendGridMail";

export default async (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const data = await takeShapeGQLClient.getRegistration({
    id: req.body.data.contentId,
  });
  const code = await takeShapeGQLClient.ApartmentCode({
    key: data.getRegistrations.apartmentKey,
  });
  await confirmEmail(data, code.getApartmentList.items[0].code);

  res.end(JSON.stringify(data));
};
