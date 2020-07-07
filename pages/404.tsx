import { withGrommetTheme } from "../components/withGrommetTheme";
import { Box } from "grommet";
import { getGlobalProps } from "../components/takeshape/getGlobal";

const PageError = () => (
  <Box height="medium" justify="center">
    <h1>Page Not Found</h1>
  </Box>
);

export async function getStaticProps() {
  const params = { lang: "en", apartment: "VR" };
  return getGlobalProps({ params });
}

export default withGrommetTheme()(PageError);
