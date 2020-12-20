import { withGrommetTheme } from "../components/Layout";
import { getGlobalProps } from "../graphql/takeshape/getGlobal";
import { FaqPage } from "../components/Faq";

export async function getStaticProps({ locale }) {
  const params = { lang: locale, apartment: "VR" };
  const globalProps = await getGlobalProps({ params, locale });

  return {
    props: { ...globalProps.props },
  };
}

export default withGrommetTheme()(FaqPage);
