import { takeShapeGQLClient } from "../../components/takeshape/takeShapeClient";
import { confirmEmail } from "../../components/graphql/sendGridMail";

export default async (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const data = await takeShapeGQLClient.getRegistration({
    id: req.body.data.contentId,
  });
  await confirmEmail(data);

  res.end(JSON.stringify(data));
};
