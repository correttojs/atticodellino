import { AdminComponent } from "../components/Admin/AdminComponent";
import { withGrommetTheme } from "../components/Layout";
import { getGlobalProps } from "../takeshape/getGlobal";

export async function getStaticProps({ locale }) {
  const params = { lang: "en", apartment: "VR" };
  const globalProps = await getGlobalProps({ params, locale });

  return globalProps;
}

export default withGrommetTheme()(AdminComponent);
