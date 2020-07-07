import React from "react";
import { Box, Text, Anchor } from "grommet";

import { Phone, MailOption } from "grommet-icons";
import styled from "styled-components";
import SvgAirbnb1 from "../Icons/Airbnb";
import { FacebookOption, Indicator } from "grommet-icons";
import { useGlobal } from "../withGrommetTheme";
import { Contacts } from "../Header/Contact";

const EMAIL = "info@atticodellino.it";
const TEL = "+393477594144";
const Link = styled(Text)`
  a {
    color: #fff !important;
    text-decoration: none;
  }
`;

export const Footer: React.FC = () => {
  const { address, airbnbLink } = useGlobal();
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
        <Anchor
          href="https://www.facebook.com/atticodellino"
          target="_blank"
          alignSelf="center"
          margin={{ right: "20px" }}
          rel="noopener"
        >
          Facebook
        </Anchor>
        <SvgAirbnb1 style={{ color: "#fff", stroke: "#fff" }} />
        <Anchor
          margin={{ left: "5px" }}
          href={airbnbLink}
          target="_blank"
          alignSelf="center"
          rel="noopener"
        >
          Airbnb
        </Anchor>
      </Box>
      <Box width="100%" align="end">
        <Text textAlign="end">© correttoweb 2020 </Text>
      </Box>
    </Box>
  );
};
