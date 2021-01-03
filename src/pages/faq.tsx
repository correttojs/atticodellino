import { withGrommetTheme } from "../components/Layout";
import { getGlobalProps } from "../graphql/takeshape/getGlobal";
import { FaqPage } from "../components/Faq";
import { withApolloClient } from "../components/Layout/withApolloClient";

export async function getStaticProps({ locale }) {
  const params = { lang: locale, apartment: "VR" };
  const globalProps = await getGlobalProps({ params, locale });

  return {
    props: { ...globalProps.props },
  };
}

export default withApolloClient(withGrommetTheme()(FaqPage));
