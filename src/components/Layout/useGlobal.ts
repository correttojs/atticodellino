import React, { useContext } from "react";
import { GlobalType } from "../../graphql/_airbn.types";

export const GlobalContext = React.createContext<GlobalType & { setLang? }>({
  apartment: "VR",
  lang: "en",
  langs: ["en", "de"],
  apartments: ["GARDA"],
  lightColor: {
    rgb: { a: 0.2, b: 18, g: 0, r: 41 },
  },
  brandColor: {
    hex: "#290012",
  },
  name: `L'attico del lino`,
  address: `San Nazaro st., 60, 4th floor, 37129, Verona - Italy`,
});

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  const {
    rgb: { r, g, b, a },
  } = context?.lightColor;
  const {
    rgb: { r: r2, g: g2, b: b2, a: a2 },
  } = context?.lightColor;
  return {
    ...context,
    colors: {
      brand: context.brandColor.hex,
      active: "#290012e8",
      light: `rgba(${r},${g},${b},${a})`,
      lighter: `rgba(${r2},${g2},${b2},${a2})`,
    },
  };
};
