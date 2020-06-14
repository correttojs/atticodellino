import { getDetails } from "../../../components/graphql/airbnb";
import { Home } from "../../../components/Home";
import { withGrommetTheme } from "../../../components/withGrommetTheme";

export async function getStaticProps({ params }) {
  console.log("getStaticProps");
  const res = await getDetails("GARDA", params.lang);
  return {
    props: res,
  };
}

export async function getStaticPaths() {
  console.log("getStaticPaths");
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
