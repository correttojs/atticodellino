import { withGrommetTheme } from "../../../components/withGrommetTheme";
import { Register } from "../../../components/Register/Register";
import { getGlobalProps, getGlobalPaths } from "../../../takeshape/getGlobal";

export const getStaticProps = getGlobalProps;

export const getStaticPaths = getGlobalPaths;

export default withGrommetTheme()(Register);
