import { AdminComponent } from "../components/Admin/AdminComponent";
import { withGrommetTheme } from "../components/Layout";
import { withApolloClient } from "../components/Layout/withApolloClient";
import { getGlobalProps } from "../graphql/takeshape/getGlobal";

export async function getStaticProps({ locale }) {
  const params = { lang: "en", apartment: "VR" };
  const globalProps = await getGlobalProps({ params, locale });

  return globalProps;
}

export default withApolloClient(withGrommetTheme()(AdminComponent));
