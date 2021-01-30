import { Home } from "@/components/Home";
import { withLayout } from "@/components/Layout";
import { getDetails } from "@/graphql/_airbnb";
import { getGlobalProps } from "@/graphql/takeshape/getGlobal";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const params = { lang: locale, apartment: "VR" };
  const globalProps = await getGlobalProps({ params, locale });

  const res = await getDetails(
    globalProps?.props.global.apartment ?? "",
    globalProps?.props.global.lang ?? "",
    globalProps?.props.global.airBnb ?? ""
  );

  return {
    props: { ...res, ...globalProps?.props },
  };
};

export default withLayout(Home);
