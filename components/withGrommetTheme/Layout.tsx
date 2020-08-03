import React from "react";

import { Header } from "../Header";
import { Box } from "grommet";
import { Footer } from "../Footer";
import { useTranslations } from "../Translations/useTranslations";

export const Layout: React.FC = ({ children }) => {
  const t = useTranslations();
  return (
    <Box align="center">
      <Header />
      <Box margin={{ top: "80px" }}>{children}</Box>
      <Footer />
    </Box>
  );
};
