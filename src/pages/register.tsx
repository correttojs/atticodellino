import { withGrommetTheme } from "../components/Layout";
import { Register } from "../components/FormRegister";
import { getGlobalProps } from "../graphql/takeshape/getGlobal";
import { withApolloClient } from "../components/Layout/withApolloClient";

export async function getStaticProps({ locale }) {
  const params = { lang: locale, apartment: "VR" };
  const globalProps = await getGlobalProps({ params, locale });

  return {
    props: { ...globalProps.props },
  };
}

export default withApolloClient(withGrommetTheme()(Register));
