import { withGrommetTheme } from "../../../components/withGrommetTheme";
import { Register } from "../../../components/Register/Register";

export async function getStaticProps(ctx) {
  return { props: {} };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { secret: process.env.REGISTRATION_SUFFIX } }],
    fallback: false,
  };
}

export default withGrommetTheme({ apartment: "VR", lang: "en" })(Register);
