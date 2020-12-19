import { takeShapeGQLClient } from "./takeShapeClient";

export type AsyncReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => Promise<infer U>
  ? U
  : T extends (...args: any) => infer U
  ? U
  : any;

type ParamType = AsyncReturnType<typeof getGlobalPaths>["paths"][0];

export async function getGlobalProps({
  params,
  locale,
}: ParamType & { locale: string }) {
  if (!params.apartment) {
    return null;
  }
  params.apartment = params.apartment.toUpperCase();

  const apartmentObj = await takeShapeGQLClient.Apartment({
    key: params.apartment,
  });

  const dataLang = await takeShapeGQLClient.getLangs();
  const dataApartment = await takeShapeGQLClient.getApartmentsKey();

  const currentApartment = apartmentObj.getApartmentList.items[0];
  return {
    props: {
      global: {
        ...params,
        lang: locale,
        ...currentApartment,
        langs: dataLang.getLanguageList.items.map((l) => l.code),
        apartments: dataApartment.getApartmentList.items.map((a) => a.key),
      },
    },
  };
}

export const getGlobalPaths = async ({ locales }) => {
  const dataLang = await takeShapeGQLClient.getLangs();
  const dataApartment = await takeShapeGQLClient.getApartmentsKey();
  return {
    paths: locales.reduce(
      (acc, current) => {
        return [
          ...acc,
          ...dataApartment.getApartmentList.items.map((a) => {
            return {
              params: {
                lang: current.toLowerCase(),
                apartment: a.key.toLowerCase(),
              },
              locale: current,
            };
          }),
        ];
      },
      [] as {
        params: {
          lang: string;
          apartment: string;
        };
      }[]
    ),
    fallback: false, // See the "fallback" section below
  };
};
