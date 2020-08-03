import { takeShapeGQLClient } from "./takeShapeClient";

export type AsyncReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => Promise<infer U>
  ? U
  : T extends (...args: any) => infer U
  ? U
  : any;

type ParamType = AsyncReturnType<typeof getGlobalPaths>["paths"][0];

export async function getGlobalProps({ params }: ParamType) {
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
        ...currentApartment,
        langs: dataLang.getLanguageList.items.map((l) => l.code),
        apartments: dataApartment.getApartmentList.items.map((a) => a.key),
      },
    },
  };
}

export const getGlobalPaths = async () => {
  const dataLang = await takeShapeGQLClient.getLangs();
  const dataApartment = await takeShapeGQLClient.getApartmentsKey();
  return {
    paths: dataLang.getLanguageList.items.reduce(
      (acc, current) => {
        return [
          ...acc,
          ...dataApartment.getApartmentList.items.map((a) => {
            return {
              params: {
                lang: current.code.toLowerCase(),
                apartment: a.key.toLowerCase(),
              },
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
