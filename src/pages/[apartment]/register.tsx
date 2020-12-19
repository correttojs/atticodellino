import { withGrommetTheme } from "../../components/Layout";
import { Register } from "../../components/FormRegister/FormRegister";
import {
  getGlobalProps,
  getGlobalPaths,
} from "../../graphql/takeshape/getGlobal";

export const getStaticProps = getGlobalProps;

export const getStaticPaths = getGlobalPaths;

export default withGrommetTheme()(Register);
