import React from "react";

import CookieConsent, { Cookies } from "react-cookie-consent";
import styled from "styled-components";
import { Header } from "../Header";
import { Box } from "grommet";
import { Footer } from "../Footer";
import { useTranslations } from "../Translations/useTranslations";
import { useGlobal } from ".";
import Link from "next/link";

const Content = styled(Box)`
  margin-top: 80px;
`;

const Container = styled(Box)`
  /* max-width: 1200px; */
`;

export const Layout: React.FC = ({ children }) => {
  const t = useTranslations();
  const { brandColor, lang, apartment } = useGlobal();
  return (
    <Container align="center">
      <Header />
      <Content>{children}</Content>

      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="Ok"
        style={{ background: brandColor.hex }}
        buttonStyle={{
          background: "white",
          color: brandColor.hex,
          fontSize: "13px",
        }}
        expires={150}
      >
        {t("COOKIES")}{" "}
        <Link href={`/${lang}/${apartment}/privacy`}>{t("PRIVACY")}</Link>
      </CookieConsent>
    </Container>
  );
};
