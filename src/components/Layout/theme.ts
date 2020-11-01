import { GlobalType } from "../../graphql/_airbn.types";

export const theme = (apartment: GlobalType) => {
  const {
    rgb: { r, g, b, a },
  } = apartment.lightColor;
  const {
    rgb: { r: r2, g: g2, b: b2, a: a2 },
  } = apartment.lightColor;
  return {
    colors: {
      brand: apartment.brandColor.hex,
      focus: apartment.brandColor.hex,
      active: "#290012e8",
      light: `rgba(${r},${g},${b},${a})`,
      lighter: `rgba(${r2},${g2},${b2},${a2})`,
    },
  };
};

export type ThemeType = { theme: ReturnType<typeof theme> };
