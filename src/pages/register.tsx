import { GetStaticProps } from "next";

import { Register } from "../components/FormRegister";
import { withLayout } from "../components/Layout";
import { getGlobalProps } from "../graphql/takeshape/getGlobal";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const params = { lang: locale, apartment: "VR" };
  const globalProps = await getGlobalProps({ params, locale });

  return {
    props: { ...globalProps?.props },
  };
};

export default withLayout(Register);
