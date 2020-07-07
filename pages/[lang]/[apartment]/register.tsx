import { withGrommetTheme } from "../../../components/withGrommetTheme";
import { Register } from "../../../components/Register/Register";
import { AsyncReturnType, getParams } from ".";
import { GlobalType } from "../../../components/graphql/airbnDetail";
import { takeShapeGQLClient } from "../../../components/takeshape/takeShapeClient";

export async function getStaticProps({
  params,
}: {
  params: AsyncReturnType<typeof getStaticPaths>["paths"][0]["params"];
}): Promise<{ props: { global: GlobalType } }> {
  params.apartment = params.apartment.toUpperCase();
  const { secret, ...rest } = params;

  const apartmentObj = await takeShapeGQLClient.Apartment({
    key: params.apartment,
  });
  const currentApartment = apartmentObj.getApartmentList.items[0];
  return {
    props: {
      global: { ...rest, ...currentApartment },
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: getParams(),
    fallback: true, // See the "fallback" section below
  };
}

export default withGrommetTheme()(Register);
