import { withGrommetTheme } from "../../../components/Layout";
import { Register } from "../../../components/FormRegister";
import { getGlobalProps, getGlobalPaths } from "../../../takeshape/getGlobal";

export const getStaticProps = getGlobalProps;

export const getStaticPaths = getGlobalPaths;

export default withGrommetTheme()(Register);
