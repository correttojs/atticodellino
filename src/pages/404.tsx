import { withGrommetTheme } from "../components/Layout";
import { getGlobalProps } from "../graphql/takeshape/getGlobal";
import tw from "twin.macro";

const PageError = () => (
  <div
    css={`
      ${tw`flex items-center`}
      min-height: 300px;
    `}
  >
    <h1>Page Not Found</h1>
  </div>
);

export async function getStaticProps({ locale }) {
  const params = { lang: "en", apartment: "VR" };
  return getGlobalProps({ params, locale });
}

export default withGrommetTheme()(PageError);
