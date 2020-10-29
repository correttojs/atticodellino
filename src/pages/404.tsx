import { withGrommetTheme } from "../components/Layout";
import { Box } from "grommet";
import { getGlobalProps } from "../takeshape/getGlobal";

const PageError = () => (
  <Box height="medium" justify="center">
    <h1>Page Not Found</h1>
  </Box>
);

export async function getStaticProps({ locale }) {
  const params = { lang: "en", apartment: "VR" };
  return getGlobalProps({ params, locale });
}

export default withGrommetTheme()(PageError);
