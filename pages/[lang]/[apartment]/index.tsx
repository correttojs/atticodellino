import { getDetails } from "../../../components/graphql/airbnb";
import { Home } from "../../../components/Home";
import { withGrommetTheme } from "../../../components/withGrommetTheme";
import { ALL_LOCALES } from "../../../components/Translations/translations";

export type AsyncReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => Promise<infer U>
  ? U
  : T extends (...args: any) => infer U
  ? U
  : any;

type ParamType = AsyncReturnType<typeof getStaticPaths>["paths"][0]["params"];

export async function getStaticProps({ params }: { params: ParamType }) {
  params.apartment = params.apartment.toUpperCase();
  const res = await getDetails(params.apartment as "VR", params.lang as "en");
  return {
    props: res,
  };
}

export const getParams = (params?: { [key: string]: string }) => {
  const apartments = ["GARDA", "VR"];
  const paths = [];
  ALL_LOCALES.forEach((l) => {
    apartments.forEach((a) => {
      const item = params ? { ...params } : {};
      item.lang = l;
      item.apartment = a;
      paths.push({ params: item });
    });
  });
  return paths;
};

export async function getStaticPaths() {
  return {
    paths: getParams(),
    fallback: true, // See the "fallback" section below
  };
}

export default withGrommetTheme()(Home);
