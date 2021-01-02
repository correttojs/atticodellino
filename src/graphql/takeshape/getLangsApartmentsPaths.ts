import { GetLangsApartmentListDocument } from "../../generated/graphql-takeshape-doc";
import { takeShapeRequest } from "./takeShapeClient";

export const getLangsApartmentsPaths = async () => {
  const data = await takeShapeRequest(GetLangsApartmentListDocument);

  return {
    paths: data.getLanguageList.items.reduce(
      (acc, current) => {
        return [
          ...acc,
          ...data.getApartmentList.items.map((a) => {
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
