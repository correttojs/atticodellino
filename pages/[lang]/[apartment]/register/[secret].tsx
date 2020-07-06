import { withGrommetTheme } from "../../../../components/withGrommetTheme";
import { Register } from "../../../../components/Register/Register";
import { AsyncReturnType, getParams } from "..";
import { GlobalType } from "../../../../components/graphql/airbnDetail";

export async function getStaticProps({
  params,
}: {
  params: AsyncReturnType<typeof getStaticPaths>["paths"][0]["params"];
}): Promise<{ props: { global: GlobalType } }> {
  params.apartment = params.apartment.toUpperCase();
  const { secret, ...rest } = params;
  return {
    props: {
      global: rest as GlobalType,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: getParams({ secret: process.env.REGISTRATION_SUFFIX }),
    fallback: true, // See the "fallback" section below
  };
}

export default withGrommetTheme()(Register);
