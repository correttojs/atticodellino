import { getDetails } from "../../../graphql/_airbnb";
import { Home } from "../../../components/Home";
import { withGrommetTheme } from "../../../components/withGrommetTheme";
import { getGlobalPaths, getGlobalProps } from "../../../takeshape/getGlobal";

export async function getStaticProps({ params }) {
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

export const getStaticPaths = getGlobalPaths;

export default withGrommetTheme()(Home);
