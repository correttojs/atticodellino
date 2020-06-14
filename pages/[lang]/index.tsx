import { getDetails } from "../../components/graphql/airbnb";
import { Home } from "../../components/Home";
import { withGrommetTheme } from "../../components/withGrommetTheme";

export async function getStaticProps({ params }) {
  console.log(params.lang);
  const res = await getDetails("VR", params.lang);
  return {
    props: res,
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { lang: "en" } },
      { params: { lang: "it" } },
      // { params: { lang: "de" } },
    ],
    fallback: true, // See the "fallback" section below
  };
}

export default withGrommetTheme()(Home);
