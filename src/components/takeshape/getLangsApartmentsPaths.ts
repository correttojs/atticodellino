import { takeShapeGQLClient } from "./takeShapeClient";

export const getLangsApartmentsPaths = async () => {
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
                lang: current.code,
                apartment: a.key,
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
