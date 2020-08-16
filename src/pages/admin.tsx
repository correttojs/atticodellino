import { AdminComponent } from "../components/Admin/AdminComponent";
import { withGrommetTheme } from "../components/withGrommetTheme";
import { getGlobalProps } from "../takeshape/getGlobal";

export async function getStaticProps() {
  const params = { lang: "en", apartment: "VR" };
  const globalProps = await getGlobalProps({ params });

  return globalProps;
}

export default withGrommetTheme()(AdminComponent);
