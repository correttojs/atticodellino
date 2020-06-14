import { getDetails } from "../components/graphql/airbnb";
import { Home } from "../components/Home";
import { withGrommetTheme } from "../components/withGrommetTheme";

export async function getStaticProps(context) {
  const res = await getDetails("GARDA", "en");
  return {
    props: res
  };
}

export default withGrommetTheme()(Home);
