import { GetStaticProps } from "next";
import tw from "twin.macro";

import { withLayout } from "../components/Layout";
import { getGlobalProps } from "../graphql/takeshape/getGlobal";

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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const params = { lang: "en", apartment: "VR" };
  const globalProps = await getGlobalProps({ params, locale });
  return globalProps ?? { props: {} };
};

export default withLayout(PageError);
