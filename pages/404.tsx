import { withGrommetTheme } from "../components/withGrommetTheme";
import { Box } from "grommet";

const PageError = () => (
  <Box height="medium" justify="center">
    <h1>Page Not Found</h1>
  </Box>
);

export async function getStaticProps() {
  return {
    props: { global: { apartment: "VR", lang: "en" } },
  };
}

export default withGrommetTheme()(PageError);
