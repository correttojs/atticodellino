import { getDetails } from "../graphql/airbnb";
import { Home } from "../components/Home";
import { withGrommetTheme } from "../components/withGrommetTheme";
import { getGlobalProps } from "../components/takeshape/getGlobal";

export async function getStaticProps() {
  const params = { lang: "en", apartment: "VR" };
  const globalProps = await getGlobalProps({ params });

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
