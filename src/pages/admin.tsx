import { GetStaticProps } from "next";

import { AdminComponent } from "../components/Admin/AdminComponent";
import { withLayout } from "../components/Layout";
import { getGlobalProps } from "../graphql/takeshape/getGlobal";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const params = { lang: "en", apartment: "VR" };
  const globalProps = await getGlobalProps({ params, locale });

  return globalProps ?? { props: {} };
};

export default withLayout(AdminComponent);
