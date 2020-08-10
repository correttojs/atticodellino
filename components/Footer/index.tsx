import React from "react";
import { Box, Text, Anchor } from "grommet";

import SvgAirbnb1 from "../Icons/Airbnb";
import { FacebookOption, Indicator } from "grommet-icons";
import { useGlobal } from "../withGrommetTheme";
import { Contacts } from "../Header/Contact";
import Link from "next/link";
import { useTranslations } from "../Translations/useTranslations";
import styled from "styled-components";

const FooterLink = styled(Anchor)`
  margin: 0 5px;
`;

export const Footer: React.FC = () => {
  const { address, airbnbLink, facebookLink } = useGlobal();
  let { lang, apartment } = useGlobal();
  lang = lang.toLowerCase();
  apartment = apartment.toLowerCase();
  const t = useTranslations();

  return (
    <Box
      align="center"
      justify="between"
      background="brand"
      pad="medium"
      color="brand"
      width="100%"
    >
      <Contacts direction="row" margin="5px" />
      <Text alignSelf="center" margin="5px">
        <Indicator /> {address}
      </Text>
      <Box direction="row" justify="center" align="center" margin="5px">
        <FacebookOption />{" "}
        <FooterLink
          href={facebookLink}
          target="_blank"
          alignSelf="center"
          margin={{ right: "20px" }}
          rel="noopener"
        >
          Facebook
        </FooterLink>
        <SvgAirbnb1 style={{ color: "#fff", stroke: "#fff" }} />
        <FooterLink
          href={airbnbLink}
          target="_blank"
          alignSelf="center"
          rel="noopener"
        >
          Airbnb
        </FooterLink>
      </Box>
      <Box direction="row" justify="center" align="center" margin="5px">
        <Link href="/[lang]/[apartment]/faq" as={`/${lang}/${apartment}/faq`}>
          <FooterLink>FAQ</FooterLink>
        </Link>
        -
        <Link
          href="/[lang]/[apartment]/register"
          as={`/${lang}/${apartment}/register`}
        >
          <FooterLink>{t("REGISTER")}</FooterLink>
        </Link>
        -
        <Link
          href="/[lang]/[apartment]/privacy"
          as={`/${lang}/${apartment}/privacy`}
        >
          <FooterLink>{t("PRIVACY")}</FooterLink>
        </Link>
      </Box>
      <Box width="100%" align="end">
        <Text textAlign="end">© correttoweb 2020 </Text>
      </Box>
    </Box>
  );
};
