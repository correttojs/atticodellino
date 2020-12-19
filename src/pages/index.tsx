import { getDetails } from "../graphql/_airbnb";
import { Home } from "../components/Home";
import { withGrommetTheme } from "../components/Layout";
import { getGlobalProps } from "../graphql/takeshape/getGlobal";

export async function getStaticProps({ locale }) {
  const params = { lang: locale, apartment: "VR" };
  const globalProps = await getGlobalProps({ params, locale });

  const res = await getDetails(
    globalProps.props.global.apartment,
    globalProps.props.global.lang,
    globalProps.props.global.airBnb
  );

  return {
    props: { ...res, ...globalProps.props },
  };
}

export default withGrommetTheme()(Home);
