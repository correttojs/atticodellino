import { GlobalType } from "../graphql/airbnDetail";

export const theme = (apartment: GlobalType) => {
  const {
    rgb: { r, g, b, a },
  } = apartment.lightColor;
  const {
    rgb: { r: r2, g: g2, b: b2, a: a2 },
  } = apartment.lightColor;
  return {
    global: {
      colors: {
        brand: apartment.brandColor.hex,
        focus: apartment.brandColor.hex,
        active: "#290012e8",
        //`rgba(${r},${g},${b},${a})`,
        light: `rgba(${r},${g},${b},${a})`,
        // apartment.apartment === "VR"
        //   ? "rgba(41,0,18,0.2)"
        //   : "rgba(58, 179, 216, 0.32)",
        // `rgba(${r2},${g2},${b2},${a2})`,
        lighter: `rgba(${r2},${g2},${b2},${a2})`,
        // apartment.apartment === "VR"
        //   ? "rgba(41,0,18,0.1)"
        //   : "rgba(9,54,76,0.1)",
      },
      font: {
        // family: 'Gotu',
        family: "Raleway",
        size: "14px",
        height: "20px",
      },
      text: {
        medium: {
          size: "30px",
          height: "24px",
          maxWidth: "432px",
        },
      },
    },
  };
};
