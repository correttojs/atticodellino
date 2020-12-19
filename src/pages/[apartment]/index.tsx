import { getDetails } from "../../graphql/_airbnb";
import { Home } from "../../components/Home";
import { withGrommetTheme } from "../../components/Layout";
import {
  getGlobalPaths,
  getGlobalProps,
} from "../../graphql/takeshape/getGlobal";

export async function getStaticProps({ params, locale }) {
  const globalProps = await getGlobalProps({ params, locale });
  const res = await getDetails(
    globalProps.props.global.apartment,
    locale,
    globalProps.props.global.airBnb
  );
  return {
    props: { ...res, ...globalProps.props },
  };
}

export const getStaticPaths = getGlobalPaths;

export default withGrommetTheme()(Home);
