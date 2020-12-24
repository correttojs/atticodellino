import { withGrommetTheme } from "../components/Layout";
import { Register } from "../components/FormRegister";
import { getGlobalProps } from "../graphql/takeshape/getGlobal";

export async function getStaticProps({ locale }) {
  const params = { lang: locale, apartment: "VR" };
  const globalProps = await getGlobalProps({ params, locale });

  return {
    props: { ...globalProps.props },
  };
}

export default withGrommetTheme()(Register);
