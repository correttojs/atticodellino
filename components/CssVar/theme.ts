export const theme = (apartment: "VR" | "GARDA") => ({
  global: {
    colors: {
      brand: apartment === "VR" ? "#290012" : "#09364c",
      focus: apartment === "VR" ? "#290012" : "#09364c",
      active: "#290012e8",

      light:
        apartment === "VR" ? "rgba(41,0,18,0.2)" : "rgba(58, 179, 216, 0.32)",
      lighter: apartment === "VR" ? "rgba(41,0,18,0.1)" : "rgba(9,54,76,0.1)",
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
});
