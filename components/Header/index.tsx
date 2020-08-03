import React from "react";
import { Box, Menu } from "grommet";

import styled from "styled-components";
import { useGlobal } from "../withGrommetTheme";
import { MQ_MOBILE } from "../CssVar/MediaQueries";
import { Language } from "grommet-icons";
import { useChangeLocale } from "../Translations/useChangeLocale";
import { Contacts } from "./Contact";

export const HeaderStyle = styled(Box)`
  top: 0;
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  z-index: 1;
  height: 80px;
`;

export const MenuStyle = styled.div`
  display: none;
  @media ${MQ_MOBILE} {
    display: flex;
  }
`;

export const NavStyle = styled.nav<{ isOpen: boolean }>`
  display: flex;
  flex-direction: row;
  @media ${MQ_MOBILE} {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
  }
`;

export const DropDownMenuStyle = styled(Menu)`
  div {
    padding: 0;
    margin-left: 10px;
    svg {
      stroke: white;
    }
  }
`;

const StyledContacts = styled(Box)`
  @media ${MQ_MOBILE} {
    display: none !important;
  }
`;

const TitleStyle = styled.a`
  font-family: "Dancing Script", cursive;
  text-decoration: none;
  font-size: 34px;
  line-height: 40px;
  max-width: 816px;
  font-weight: 600;
  @media only screen and (max-width: 768px) {
    font-size: 26px;
    line-height: 32px;
    max-width: 624px;
  }
`;
export const Header: React.FC = () => {
  const { apartment, name } = useGlobal();
  const { changeLocale, homeLink } = useChangeLocale();

  return (
    <HeaderStyle
      align="center"
      direction="row"
      justify="between"
      background="brand"
      gridArea="header"
      pad="medium"
    >
      <TitleStyle href={homeLink}>{name}</TitleStyle>
      <Box direction="row">
        <StyledContacts>
          <Contacts />
        </StyledContacts>

        <Box pad="small" direction="row">
          <DropDownMenuStyle
            color="white"
            icon={<Language />}
            items={[
              {
                label: "Italiano",
                onClick: () => changeLocale("it"),
              },
              {
                label: "English",
                onClick: () => changeLocale("en"),
              },
              // {
              //   label: "Deutsch",
              //   onClick: () => changeLocale("de")
              // }
            ]}
          ></DropDownMenuStyle>
        </Box>
      </Box>
    </HeaderStyle>
  );
};
